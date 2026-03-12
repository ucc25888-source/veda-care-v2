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
    toast.success("專業顧問諮詢中", {
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
          <div className="relative overflow-hidden bg-muted h-64 md:h-72">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.featured && (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5">
            <p className="text-xs font-medium text-primary/70 uppercase tracking-wide mb-2">
              {product.category.replace("-", " ")}
            </p>
            <h3 className="font-display font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price and Button */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  added
                    ? "bg-primary/20 text-primary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
    </Link>
  );
}
