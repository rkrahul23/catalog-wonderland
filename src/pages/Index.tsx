
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { CartDrawer } from "@/components/CartDrawer";
import { products, categories } from "@/data/products";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <CartDrawer />
      
      <main className="flex-1 py-8">
        <section className="container px-4 md:px-6 pt-8 pb-12 md:pb-24 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Premium Products for Modern Living
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Discover our curated collection of high-quality products designed for elegance and simplicity.
            </p>
          </div>
        </section>
        
        <section id="categories" className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="rounded-full transition-all"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        
        <section id="products" className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section id="about" className="container px-4 md:px-6 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">About Our Products</h2>
              <p className="text-muted-foreground">
                We believe in the power of good design. Each product in our collection is carefully selected for its quality, functionality, and aesthetic appeal.
              </p>
              <p className="text-muted-foreground">
                Our team works diligently to bring you products that combine innovation with timeless design principles, creating a harmony between form and function.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
                alt="Design process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Elegance</h3>
              <p className="text-sm text-muted-foreground">
                Premium products designed with care and attention to detail.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#electronics" className="text-muted-foreground hover:text-foreground transition-colors">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#furniture" className="text-muted-foreground hover:text-foreground transition-colors">
                    Furniture
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex w-full max-w-sm space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 Elegance. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
