import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container text-center py-16">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-foreground mb-4">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Page Not Found
          </p>
          <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. Let's get you back on track
            with your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="btn-primary">Go Home</a>
            </Link>
            <Link href="/shop">
              <a className="btn-secondary">Browse Products</a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
