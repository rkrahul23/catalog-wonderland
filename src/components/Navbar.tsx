
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, ShoppingBag, X } from "lucide-react";

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export function Navbar({ setSidebarOpen }: NavbarProps) {
  const { totalItems, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Elegance</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#categories" className="nav-link">
            Categories
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="cart-badge animate-scale-in">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
