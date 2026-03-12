import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/../../shared/const";

export default function Shop() {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high">(
    "featured"
  );

  // Parse URL params
  const params = new URLSearchParams(location.split("?")[1] || "");
  const categoryParam = params.get("category");

  if (categoryParam && !selectedCategory) {
    setSelectedCategory(categoryParam);
  }

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    const sorted = [...filtered];
    if (sortBy === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">


        {/* Filters and Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-4">
                      類別
                    </h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          !selectedCategory
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        所有產品
                      </button>
                      {CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div className="border-t border-border pt-6">
                    <h3 className="font-display font-bold text-foreground mb-4">
                      排序
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(
                          e.target.value as "featured" | "price-low" | "price-high"
                        )
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="featured">精選</option>
                      <option value="price-low">價格：低到高</option>
                      <option value="price-high">價格：高到低</option>
                    </select>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-foreground/60">
                    顯示 {filteredProducts.length} 件產品
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-lg text-foreground/60">
                      此類別中找不到產品。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
