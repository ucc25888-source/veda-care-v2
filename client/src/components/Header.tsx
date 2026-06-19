import { Link } from "wouter";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo-new.png" alt="VEDA CARE" className="h-16 w-auto" />
            <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
              <span style={{
                fontFamily: "'PingFang TC', 'Noto Sans TC', sans-serif",
                fontSize: 'clamp(1rem, 3.5vw, 1.5rem)',
                fontWeight: 300,
                letterSpacing: '0.15em',
                color: '#4A5D23',
                lineHeight: 1.2,
              }}>
                VEDA CARE
              </span>
              <span className="hidden md:inline" style={{ color: 'rgba(74,93,35,0.35)', fontWeight: 200, fontSize: '0.9em' }}>|</span>
              <span className="hidden md:inline" style={{
                fontFamily: "'PingFang TC', 'Noto Sans TC', sans-serif",
                fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: '#4A5D23',
                opacity: 0.65,
              }}>
                科研級精粹
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              首頁
            </Link>
            <Link href="/shop" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              商店
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              關於
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border space-y-3">
            <Link href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              首頁
            </Link>
            <Link href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              商店
            </Link>
            <Link href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              關於
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
