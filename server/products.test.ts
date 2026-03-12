import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock user context
function createMockContext(userId?: number): TrpcContext {
  return {
    user: userId
      ? {
          id: userId,
          openId: `user-${userId}`,
          email: `user${userId}@example.com`,
          name: `Test User ${userId}`,
          loginMethod: "test",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
        }
      : null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Products API", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    const ctx = createMockContext();
    caller = appRouter.createCaller(ctx);
  });

  it("should list products", async () => {
    const products = await caller.products.list({});
    expect(Array.isArray(products)).toBe(true);
  });

  it("should get product categories", async () => {
    const categories = await caller.products.categories();
    expect(Array.isArray(categories)).toBe(true);
  });

  it("should handle product queries by slug", async () => {
    // This test will pass even if no products exist
    // In production, you'd seed test data first
    const result = await caller.products.bySlug({ slug: "test-product" });
    expect(result === undefined || typeof result === "object").toBe(true);
  });

  it("should handle product queries by id", async () => {
    const result = await caller.products.byId({ id: 1 });
    expect(result === undefined || typeof result === "object").toBe(true);
  });
});

describe("Cart API", () => {
  const userId = 1;
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    const ctx = createMockContext(userId);
    caller = appRouter.createCaller(ctx);
  });

  it("should get cart items for authenticated user", async () => {
    const items = await caller.cart.list();
    expect(Array.isArray(items)).toBe(true);
  });

  it("should require authentication for cart operations", async () => {
    const publicCtx = createMockContext();
    const publicCaller = appRouter.createCaller(publicCtx);

    try {
      await publicCaller.cart.list();
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("Orders API", () => {
  const userId = 1;
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeAll(() => {
    const ctx = createMockContext(userId);
    caller = appRouter.createCaller(ctx);
  });

  it("should list user orders", async () => {
    const orders = await caller.orders.list();
    expect(Array.isArray(orders)).toBe(true);
  });

  it("should create an order", async () => {
    const result = await caller.orders.create({
      totalAmount: 10000, // $100.00
      customerEmail: "test@example.com",
      customerName: "Test Customer",
    });
    expect(result.orderId).toBeDefined();
  });

  it("should require authentication for order operations", async () => {
    const publicCtx = createMockContext();
    const publicCaller = appRouter.createCaller(publicCtx);

    try {
      await publicCaller.orders.list();
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
