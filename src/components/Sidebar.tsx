
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className={`fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-background shadow-lg transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Elegance</span>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] px-6 pb-6">
          <nav className="flex flex-col space-y-6 pt-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Navigation
              </h3>
              <div className="flex flex-col space-y-1">
                <a
                  href="/"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#categories"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Categories
                </a>
                <a
                  href="#about"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  About
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Categories
              </h3>
              <div className="flex flex-col space-y-1">
                <a
                  href="#electronics"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Electronics
                </a>
                <a
                  href="#accessories"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Accessories
                </a>
                <a
                  href="#home"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#furniture"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  Furniture
                </a>
              </div>
            </div>
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}
