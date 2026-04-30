import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/src/store/cartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "motion/react";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, totalItems } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl flex items-center gap-2">
              Your Harvest <ShoppingBag className="h-5 w-5 text-primary" />
            </SheetTitle>
            <Badge variant="outline" className="font-sans">{totalItems()} items</Badge>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center gap-4">
              <div className="h-20 w-20 rounded-full bg-cream flex items-center justify-center text-4xl">🧺</div>
              <div>
                <p className="font-serif text-xl">Your basket is empty</p>
                <p className="text-charcoal/50 text-sm mt-2">Start adding some fresh local goodness!</p>
              </div>
              <Button onClick={() => setIsOpen(false)} variant="outline" className="mt-4 rounded-full">
                Browse Shop
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4"
                  >
                    <div className="h-24 w-24 rounded-xl overflow-hidden shrink-0 border border-cream">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif font-medium leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-charcoal/30 hover:text-accent transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-secondary font-medium mt-1">{item.farm}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-cream bg-cream/30 rounded-full p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-6 w-6 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-6 w-6 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-serif font-bold text-primary">
                          ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <SheetFooter className="p-6 bg-cream/30 border-t flex-col gap-4 sm:flex-col">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/50">Subtotal</span>
                <span className="font-medium">${subtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-charcoal/50">Local Delivery</span>
                <span className="font-medium">{subtotal() >= 50 ? "FREE" : "$5.00"}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-serif font-bold">
                <span>Total</span>
                <span className="text-primary">${(subtotal() + (subtotal() >= 50 ? 0 : 5)).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-3 mt-2">
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90 h-12 text-lg shadow-lg group">
                Checkout Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-[10px] text-center text-charcoal/40 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                🔒 Secure SSL Checkout · Satisfaction Guaranteed
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
