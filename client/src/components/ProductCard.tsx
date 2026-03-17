import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Product, LINE_OFFICIAL_URL } from "@/../../shared/const";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Show consultation message and redirect to LINE@
    toast.success("專業規劃師諮詢中", {
      description: "請加入 LINE@ 完成訂購",
      action: {
        label: "加入 LINE@",
        onClick: () => window.open(LINE_OFFICIAL_URL, "_blank"),
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
        <div className="card-wellness overflow-hidden">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-[#f8f7f5] h-40 md:h-56 flex items-center justify-center px-3 py-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            {product.featured && (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-3 md:p-5">
            <p className="font-medium text-primary/70 uppercase mb-1 md:mb-2 min-h-[2.2em] flex items-end"
              style={{ fontSize: '9px', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {product.category.replace(/-/g, " ")}
            </p>
            <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight min-h-[2.6em]"
              style={{ fontSize: 'clamp(12px, 3.5vw, 1.125rem)' }}>
              {product.name}
            </h3>
            <div style={{ minHeight: '1.5em' }}>
              {product.variant && (
                <p style={{ fontSize: '9px', color: '#8A9E6E', letterSpacing: '0.06em', fontWeight: 300, marginBottom: '4px' }}>
                  — {product.variant}
                </p>
              )}
            </div>
            <p className="text-xs md:text-sm text-foreground/70 mb-3 md:mb-4 line-clamp-2 hidden md:block">
              {product.description}
            </p>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-foreground" style={{ fontSize: 'clamp(13px, 3.5vw, 1.125rem)' }}>
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                  added
                    ? "bg-primary/20 text-primary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
    </Link>
  );
}
