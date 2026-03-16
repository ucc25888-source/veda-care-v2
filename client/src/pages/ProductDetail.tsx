import { useState } from "react";
import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { PRODUCTS, LINE_OFFICIAL_URL } from "@/../../shared/const";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Check } from "lucide-react";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedSpec, setSelectedSpec] = useState("box");
  const { addItem } = useCart();

  if (!match) return null;

  const product = PRODUCTS.find((p) => p.id === params?.id);
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">
            Product not found
          </h1>
          <Link href="/shop" className="btn-primary mt-6 inline-block">
            Back to Shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Product Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <Link href="/shop" className="text-sm text-foreground/60 hover:text-foreground mb-8 inline-block">
              ← Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="flex items-center justify-center bg-[#f8f7f5] rounded-xl overflow-hidden h-64 sm:h-96 md:h-[500px] p-4 md:p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-medium text-primary/70 uppercase tracking-wide mb-3">
                  {product.category.replace("-", " ")}
                </p>

                <h1 className="text-2xl md:text-5xl font-display font-bold text-foreground mb-3">
                  {product.name}
                </h1>

                {product.subtitle && (
                  <p className="text-base md:text-lg font-medium italic mb-4"
                    style={{ color: '#2D4F1E' }}>
                    「{product.subtitle}」
                  </p>
                )}

                <p className="text-lg text-foreground/70 mb-6">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.category === "veda-advisor" && (
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      體驗價
                    </span>
                  )}
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="font-display font-bold text-foreground mb-3">
                    主要效益
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.footerHook && (
                  <div className="mb-8 px-5 py-4 rounded-2xl"
                    style={{ background: 'rgba(45,79,30,0.07)', borderLeft: '3px solid #2D4F1E' }}>
                    <p className="text-sm font-medium" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                      「{product.footerHook}」
                    </p>
                  </div>
                )}

                {/* Add to Cart / LINE@ Ordering */}
                <div className="space-y-3 mb-8">
                  <div className="flex gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 btn-primary flex items-center justify-center gap-2 ${
                        added ? "bg-primary/20 text-primary" : ""
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {added ? "已加入購物車" : "加入購物車"}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-foreground/60">或</span>
                    </div>
                  </div>
                  
                  <a
                    href={LINE_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary flex items-center justify-center gap-2 font-bold text-center hover:shadow-lg transition-all"
                  >
                    <span className="text-xl">💚</span>
                    加入 LINE@ 直接訂購
                  </a>
                </div>

                {/* Spec Display for EAA Box Product Only */}
                {product.id === "product-1" && (
                  <div className="mb-8">
                    <div className="p-4 bg-muted/30 rounded-lg border border-border">
                      <p className="text-sm font-medium text-foreground mb-2">【規格提示】</p>
                      <p className="text-foreground/70 text-sm">
                        📦 15包裝隨身精準防禦 / 便捷簡易補給
                      </p>
                    </div>
                  </div>
                )}

                {/* Spec Display for EAA Bag Product Only */}
                {product.id === "product-2" && (
                  <div className="mb-8">
                    <div className="p-4 bg-muted/30 rounded-lg border border-border">
                      <p className="text-sm font-medium text-foreground mb-2">【規格提示】</p>
                      <p className="text-foreground/70 text-sm">
                        📦 500g 居家穩健打底 / 全方位機能補給
                      </p>
                    </div>
                  </div>
                )}

                {/* Suitable For */}
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">
                    適合：
                  </p>
                  <p className="text-foreground/70">{product.suitableFor}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 md:py-16 bg-muted/20 border-y border-border">
          <div className="container max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              {product.ingredients && (
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    主要成分
                  </h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Use */}
              {product.howToUse && (
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    使用方法
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Wellness Philosophy */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                專業者的身體維護邏輯
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                真正的健康管理不是「加法」，而是「優化」。妳需要的不是更多的補給品，而是一個清楚的標竿。這套設計是為了幫妳在極致忙碌中，快速找回身體的主導權——不論是瞬間放鬆還是長效動力，我們要的是效率，不是感覺。
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 md:py-16 bg-muted/20">
            <div className="container">
              <ProductCarousel
                products={relatedProducts}
                title="相關產品"
              />
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <section className="py-8 md:py-12 border-t border-border bg-muted/30">
          <div className="container max-w-3xl">
            <p className="text-sm text-foreground/60 leading-relaxed">
              <span className="font-medium">備註：</span>本產品為日常營養補充品，非藥品，不具醫療效能。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
