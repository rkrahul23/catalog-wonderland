
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card group animate-fade-in">
      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <Button
          size="icon"
          className="absolute bottom-4 right-4 h-10 w-10 rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
