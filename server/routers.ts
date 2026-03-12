import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { z } from "zod";
import {
  getProducts,
  getProductBySlug,
  getProductById,
  getProductCategories,
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  createOrder,
  addOrderItem,
  getUserOrders,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Product routes
  products: router({
    list: publicProcedure
      .input(z.object({ categoryId: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return getProducts(input?.categoryId);
      }),
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return getProductBySlug(input.slug);
      }),
    byId: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return getProductById(input.id);
      }),
    categories: publicProcedure.query(async () => {
      return getProductCategories();
    }),
  }),

  // Cart routes
  cart: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return getCartItems(ctx.user.id);
    }),
    add: protectedProcedure
      .input(z.object({ productId: z.number(), quantity: z.number().default(1) }))
      .mutation(async ({ ctx, input }) => {
        return addToCart(ctx.user.id, input.productId, input.quantity);
      }),
    update: protectedProcedure
      .input(z.object({ cartItemId: z.number(), quantity: z.number() }))
      .mutation(async ({ input }) => {
        return updateCartItem(input.cartItemId, input.quantity);
      }),
    remove: protectedProcedure
      .input(z.object({ cartItemId: z.number() }))
      .mutation(async ({ input }) => {
        return removeFromCart(input.cartItemId);
      }),
    clear: protectedProcedure.mutation(async ({ ctx }) => {
      return clearCart(ctx.user.id);
    }),
  }),

  // Order routes
  orders: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return getUserOrders(ctx.user.id);
    }),
    create: protectedProcedure
      .input(
        z.object({
          totalAmount: z.number(),
          customerEmail: z.string().optional(),
          customerName: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const orderId = await createOrder(
          ctx.user.id,
          input.totalAmount,
          input.customerEmail,
          input.customerName
        );
        return { orderId };
      }),
  }),

  // AI Chat route
  chat: router({
    message: publicProcedure
      .input(
        z.object({
          message: z.string(),
          context: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const systemPrompt = `你是 VEDA CARE 的 AI 客服助手。${input.context || ""}
        
你的職責是：
1. 回答關於 VEDA CARE 產品的問題
2. 幫助客戶了解我們的產品分類和功能
3. 提供友善、專業的客戶服務
4. 用繁體中文回答

請保持簡潔、友善和有幫助的態度。`;

        try {
          const response = await invokeLLM({
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: input.message,
              },
            ],
          });

          const reply =
            response.choices[0]?.message?.content || "抱歉，我無法處理您的請求。";

          return {
            reply: typeof reply === "string" ? reply : JSON.stringify(reply),
          };
        } catch (error) {
          console.error("[Chat] LLM Error:", error);
          return {
            reply: "抱歉，我遇到了技術問題。請稍後再試。",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
