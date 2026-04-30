import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ChevronDown, MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '@/src/store/cartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Category } from '@/src/types';
import { cn } from '@/lib/utils';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium relative z-50">
      <p>Free local delivery on orders over $50 🚚</p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCartStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop', items: Object.values(Category) },
    { name: 'Our Farmers', href: '/farmers' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={cn(
      "sticky top-0 w-full z-40 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>} />
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="text-xl font-serif py-2 border-b">{link.name}</Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className="text-2xl font-serif font-black text-primary tracking-tight leading-none uppercase">The Harvest Market</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-secondary group-hover:text-primary transition-colors">Premium Local Market</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.href} 
                className={cn(
                  "flex items-center gap-1 font-bold uppercase tracking-widest text-[13px] hover:text-primary transition-colors",
                  location.pathname === link.href ? "text-primary border-b border-primary" : "text-charcoal"
                )}
              >
                {link.name}
              </Link>
              
              {link.items && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-4 border border-cream transform translate-y-2 group-hover:translate-y-0">
                  <div className="grid gap-2">
                    {link.items.map((item) => (
                      <Link 
                        key={item} 
                        to={`/shop?category=${item}`} 
                        className="p-2 hover:bg-cream rounded-md transition-colors text-sm font-medium"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="hidden md:flex items-center bg-cream/50 rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-primary/20">
            <Search className="h-4 w-4 text-charcoal/50" />
            <Input 
              placeholder="Search produce..." 
              className="border-none bg-transparent shadow-none focus-visible:ring-0 w-32 lg:w-48 placeholder:text-charcoal/30 h-8" 
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems() > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent hover:bg-accent">
                {totalItems()}
              </Badge>
            )}
          </Button>

          <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-serif font-bold tracking-tight">Harvest & Hearth</span>
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Premium Local Market</span>
          </Link>
          <p className="text-cream/70 leading-relaxed font-light">
            Bringing the freshest local harvest from Sonoma and Marin county farmers directly to your kitchen. Family-owned and community-focused since 1988.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full border-cream/20 text-white hover:bg-white/10"><Instagram className="h-5 w-5" /></Button>
            <Button variant="outline" size="icon" className="rounded-full border-cream/20 text-white hover:bg-white/10"><Facebook className="h-5 w-5" /></Button>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 flex items-center gap-2"><Clock className="h-5 w-5 text-secondary" /> Store Hours</h4>
          <ul className="space-y-3 text-cream/70 font-light">
            <li className="flex justify-between"><span>Mon - Sat</span> <span>8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>9:00 AM - 6:00 PM</span></li>
            <li className="flex flex-col mt-4 pt-4 border-t border-white/10">
              <span className="text-white font-medium">Delivery Hours</span>
              <span>Daily from 10:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 flex items-center gap-2"><MapPin className="h-5 w-5 text-secondary" /> Location</h4>
          <address className="not-italic text-cream/70 font-light leading-relaxed space-y-4">
            <p>124 Artisan Way,<br />Sonoma Valley, CA 95476</p>
            <div className="group cursor-pointer">
              <p className="flex items-center gap-2 text-white font-medium hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" /> (555) harvest-mkt
              </p>
            </div>
            <div className="h-32 mt-4 rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <img src="https://images.unsplash.com/photo-1526778545894-df2213700431?auto=format&fit=crop&q=80&w=600" alt="Map Location" className="w-full h-full object-cover" />
            </div>
          </address>
        </div>

        <div>
           <h4 className="font-serif text-xl mb-6">Our Promise</h4>
           <div className="space-y-4">
              <div className="flex gap-4">
                 <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">🌱</div>
                 <p className="text-sm text-cream/70">100% Local Farmer Direct</p>
              </div>
              <div className="flex gap-4">
                 <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">♻️</div>
                 <p className="text-sm text-cream/70">Zero Plastic Packaging Options</p>
              </div>
              <div className="flex gap-4">
                 <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">⭐</div>
                 <p className="text-sm text-cream/70">Picked-to-Order Freshness Guaranteed</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                 <p className="text-xs text-cream/40">&copy; 2026 Harvest & Hearth. All rights reserved. <Link to="/privacy" className="hover:text-white underline">Privacy</Link></p>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
