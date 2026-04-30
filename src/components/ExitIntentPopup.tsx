import { useState, useEffect } from "react";
import { X, Mail, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[3rem] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur shadow-sm rounded-full p-2 hover:bg-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image / Banner */}
        <div className="md:w-1/2 relative bg-cream h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800" 
            alt="Fresh Basket" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute bottom-10 left-10 text-white">
             <Badge className="bg-secondary text-white border-none py-1.5 px-4 rounded-full mb-4">Limited Offer</Badge>
             <h3 className="text-4xl font-serif font-bold leading-tight">Wait! Don't Miss <br />The Harvest.</h3>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center text-center md:text-left">
          {!isSubscribed ? (
            <div className="space-y-8">
              <div>
                <Gift className="h-12 w-12 text-secondary mb-6 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-5xl font-serif mb-4">Fresh Savings Await</h2>
                <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                  Join 5,000+ local families and get <span className="text-primary font-bold">10% OFF</span> your first order plus free artisan bread.
                </p>
              </div>

              <div className="space-y-4">
                <Input 
                  placeholder="name@email.com" 
                  className="rounded-full h-14 px-8 border-cream bg-cream/30 focus-visible:ring-primary/20 text-lg" 
                />
                <Button 
                  onClick={() => setIsSubscribed(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg font-bold shadow-lg"
                >
                  Unlock My Discount
                </Button>
                <p className="text-[10px] text-charcoal/30 uppercase tracking-[0.2em] font-bold">
                  No Spam. Just seasonal goodness. Unsubscribe anytime.
                </p>
              </div>
            </div>
          ) : (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="space-y-6 text-center"
            >
               <div className="h-20 w-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🎉</div>
               <h2 className="text-4xl font-serif">You're on the list!</h2>
               <p className="text-charcoal/60">Check your inbox for your 10% discount code and our "Welcome to the Valley" harvest guide.</p>
               <Button onClick={() => setIsOpen(false)} className="bg-primary hover:bg-primary/90 rounded-full px-10 h-14">Continue Shopping</Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
