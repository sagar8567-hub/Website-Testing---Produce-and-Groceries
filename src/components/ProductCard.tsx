import * as React from "react";
import { Star, ShoppingCart, Eye, Heart, Leaf, MapPin, X, Plus, Minus, Info, Truck } from "lucide-react";
import { Product } from "@/src/types";
import { useCartStore } from "@/src/store/cartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  className?: string;
  key?: string | number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    addItem(product, quantity);
    toast.success(`Added ${product.name} to your basket!`, {
      description: `Grown by ${product.farm}`,
      icon: <Leaf className="h-4 w-4 text-primary" />,
    });
    if (isQuickViewOpen) setIsQuickViewOpen(false);
  };

  const isSale = product.onSale && product.salePrice;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("group flex flex-col bg-white rounded-2xl overflow-hidden border border-cream hover:shadow-xl hover:shadow-primary/5 transition-all duration-500", className)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream/30 editorial-border rounded-2xl m-2">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
            {isSale && (
              <Badge className="bg-accent text-white border-none shadow-sm rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Sale
              </Badge>
            )}
            {product.featured && (
               <Badge className="bg-secondary text-white border-none shadow-sm rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                 New Harvest
               </Badge>
            )}
          </div>

          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
              onClick={() => setIsQuickViewOpen(true)}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("h-3 w-3", i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-gray-200")} />
              ))}
            </div>
            <span className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest">{product.reviews} reviews</span>
          </div>

          <h3 className="font-serif text-lg font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
          
          <p className="text-secondary text-xs font-semibold mt-1 uppercase tracking-wider flex items-center gap-1">
            <MapPin size={10} /> {product.farm}
          </p>

          <div className="mt-4 pt-4 border-t border-cream flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-serif font-extrabold text-charcoal">
                  ${isSale ? product.salePrice : product.price}
                </span>
                {isSale && (
                  <span className="text-sm text-charcoal/30 line-through decoration-accent/50">
                    ${product.price}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-charcoal/40 font-medium italic">per {product.unit}</span>
            </div>

            <Button 
              onClick={() => handleAddToCart()}
              size="icon" 
              className="rounded-full bg-cream text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* QUICK VIEW DIALOG */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="sm:max-w-4xl rounded-[2.5rem] p-0 border-none overflow-hidden max-h-[90vh]">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 relative bg-cream/30 p-8">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover rounded-2xl editorial-border" />
              <div className="absolute top-12 left-12 flex flex-col gap-2">
                 {product.tags?.map(tag => (
                    <Badge key={tag} className="bg-white/80 backdrop-blur text-charcoal font-bold uppercase tracking-widest text-[9px] border-none py-1 px-3 rounded-full">
                       {tag}
                    </Badge>
                 ))}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-1 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} className={cn(i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-gray-200")} />)}
                 <span className="text-xs font-bold text-charcoal/30 ml-2 uppercase tracking-tighter">{product.reviews} Neighbor Reviews</span>
              </div>
              
              <DialogHeader className="mb-6">
                <DialogTitle className="text-4xl font-serif leading-tight">{product.name}</DialogTitle>
                <div className="flex items-center gap-2 mt-4">
                   <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin size={16} />
                   </div>
                   <div className="flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 leading-none">Grown Locally By</p>
                      <p className="text-sm font-bold text-secondary">{product.farm}</p>
                   </div>
                </div>
              </DialogHeader>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-serif font-bold text-primary">${isSale ? product.salePrice : product.price}</span>
                {isSale && <span className="text-lg text-charcoal/30 line-through">${product.price}</span>}
                <span className="text-sm text-charcoal/40 font-medium italic">per {product.unit}</span>
              </div>

              <div className="space-y-6 text-charcoal/70 leading-relaxed font-light mb-10">
                <p>{product.description}</p>
                <div className="bg-cream/40 p-5 rounded-2xl border border-cream">
                   <h5 className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] text-charcoal/40 mb-3">
                      <Leaf size={14} className="text-secondary" /> Sourcing Story
                   </h5>
                   <p className="text-sm italic">"{product.sourcing}"</p>
                </div>
              </div>

              {product.nutritionalInfo && (
                 <div className="grid grid-cols-4 gap-4 mb-10 border-y border-cream py-6">
                    {Object.entries(product.nutritionalInfo).map(([key, val]) => (
                       <div key={key} className="text-center">
                          <p className="text-[10px] uppercase font-bold text-charcoal/30 mb-1">{key}</p>
                          <p className="font-serif text-lg text-primary">{val}</p>
                       </div>
                    ))}
                 </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between bg-cream/30 border border-cream rounded-full p-2 h-14">
                  <div className="flex items-center h-full">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="rounded-full hover:bg-white h-10 w-10 shrink-0"
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="w-12 text-center text-lg font-bold">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-full hover:bg-white h-10 w-10 shrink-0"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  <Button 
                    onClick={() => handleAddToCart()}
                    className="flex-1 ml-4 bg-primary hover:bg-primary/90 text-white rounded-full h-full font-bold shadow-lg"
                  >
                    Add to Basket — ${( (isSale ? (product.salePrice ?? product.price) : product.price) * quantity).toFixed(2)}
                  </Button>
                </div>
                <p className="text-center text-[10px] text-charcoal/40 flex items-center justify-center gap-1.5 uppercase font-bold tracking-widest mt-2">
                   <Truck size={10} /> Estimated Delivery: Today, 4:00 PM – 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
