import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS, LINE_OFFICIAL_URL } from "@/../../shared/const";
import { Trash2, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const cartItems = items.map((item) => ({
    ...item,
    product: PRODUCTS.find((p) => p.id === item.productId),
  }));

  const subtotal = total;
  const shipping = subtotal >= 3000 ? 0 : 100;
  const finalTotal = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-foreground/30 mb-4" />
          <h1 className="text-xl md:text-3xl font-display font-bold text-foreground mb-2">
            您的購物車是空的
          </h1>
          <p className="text-base md:text-lg text-foreground/60 mb-8">
            探索我們的精選保健食品紀念，開始您的健康旅程。
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            繼續購物
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="container">
            <h1 className="text-2xl md:text-5xl font-display font-bold text-foreground">
              購物車
            </h1>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.productId}
                      className="card-wellness p-4 flex gap-4"
                    >
                      {/* Product Image */}
                      <Link href={`/product/${item.productId}`} className="flex-shrink-0">
                        <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
                          <img
                            src={item.product?.image}
                            alt={item.product?.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 flex flex-col gap-2">
                        {/* Name + delete */}
                        <div className="flex items-start justify-between gap-2">
                          <Link href={`/product/${item.productId}`}
                            className="font-display font-bold text-foreground hover:text-primary transition-colors leading-snug"
                            style={{ fontSize: '14px' }}>
                            {item.product?.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="flex-shrink-0 p-1 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price + quantity */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 hover:bg-muted transition-colors"
                              style={{ fontSize: '14px' }}
                            >−</button>
                            <span className="px-3 py-1 font-medium" style={{ fontSize: '14px' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-muted transition-colors"
                              style={{ fontSize: '14px' }}
                            >+</button>
                          </div>
                          <div className="text-right">
                            <p style={{ fontSize: '11px', color: 'var(--foreground)', opacity: 0.5 }}>
                              單價 ${item.product?.price.toFixed(0)}
                            </p>
                            <p className="font-bold" style={{ fontSize: '15px' }}>
                              ${((item.product?.price || 0) * item.quantity).toFixed(0)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={clearCart}
                  className="mt-6 text-sm text-destructive hover:text-destructive/80 transition-colors"
                >
                  清空購物車
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card-wellness p-6 sticky top-24">
                  <h3 className="font-display font-bold text-lg text-foreground mb-6">
                    訂單合計
                  </h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-foreground/70">
                      <span>小計</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground/70">
                      <span>運費</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-primary font-medium">免費</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-foreground/50">
                        滿 NT$3,000 免運費（支持貨到付款，限台灣）
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="font-display font-bold text-lg text-foreground">
                      總計
                    </span>
                    <span className="font-display font-bold text-lg text-foreground">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>

                  <a
                    href={LINE_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary mb-3 flex items-center justify-center gap-2 font-bold"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M12 2C6.48 2 2 6.03 2 11c0 3.12 1.67 5.88 4.24 7.63-.1.37-.65 2.37-.75 2.74-.12.43.16.43.34.31.14-.09 2.27-1.54 3.19-2.17.63.09 1.29.14 1.98.14 5.52 0 10-4.03 10-9 0-4.97-4.48-9-10-9z"/>
                    </svg>
                    加入 LINE@ 完成訂單
                  </a>

                  <Link href="/shop" className="block w-full text-center px-4 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
                      繼續購物
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 bg-muted/20 border-t border-border">
          <div className="container max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-lg md:text-2xl font-bold text-primary mb-2">滿額免運</p>
                <p className="text-sm text-foreground/60">NT$3,000 以上免運費｜未滿運費 NT$100</p>
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold text-primary mb-2">7 天猶豫期</p>
                <p className="text-sm text-foreground/60">
                  未拆封且不影響商品完整性適用
                </p>
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold text-primary mb-2">安全結帳</p>
                <p className="text-sm text-foreground/60">
                  您的隱私受保護
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
