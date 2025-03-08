
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/components/CartItem";
import { ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { cartOpen, setCartOpen, items, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full max-w-sm sm:max-w-md flex flex-col">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Shopping Cart</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {totalItems}
            </span>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex-1 overflow-auto pr-2">
          {items.length > 0 ? (
            <div className="space-y-1">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-3 py-12 text-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Your cart is empty</h3>
                <p className="text-sm text-muted-foreground">
                  Add items to your cart to see them here
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="mt-auto space-y-4 pt-6">
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => clearCart()}>
                Clear Cart
              </Button>
              <Button>Checkout</Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
