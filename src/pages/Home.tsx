import { motion } from "motion/react";
import { ArrowRight, ShoppingCart, Star, CheckCircle2, Leaf, Truck, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PRODUCTS, FARMERS, TESTIMONIALS, RECIPE_OF_THE_WEEK } from "@/src/data";
import { Category } from "@/src/types";
import { ProductCard } from "@/src/components/ProductCard";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3 text-secondary font-bold text-sm uppercase tracking-widest">
              <span className="w-10 h-[1px] bg-secondary"></span>
              Locally Sourced Within 50 Miles
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black leading-[1] mb-8 text-charcoal">
              Picked <span className="italic text-secondary font-normal">This</span> Morning.<br/>On Your Table Tonight.
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-10 max-w-md font-light">
              Experience the warmth of the farmer's market from the comfort of home. Premium, honest produce from Sonoma’s finest family farms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button nativeButton={false} render={<Link to="/shop" />} size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-sm font-bold uppercase tracking-widest shadow-xl shadow-accent/20">
                Shop Fresh Harvest
              </Button>
              <Button nativeButton={false} render={<Link to="/subscription" />} variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 h-16 text-sm font-bold uppercase tracking-widest transition-all">
                Weekly Boxes
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2 decoration-secondary/30 underline underline-offset-4 decoration-2">Family-Owned Since 1988</span>
              <span className="flex items-center gap-2 decoration-secondary/30 underline underline-offset-4 decoration-2">100% Organic Soils</span>
              <span className="flex items-center gap-2 decoration-secondary/30 underline underline-offset-4 decoration-2">Same-Day Delivery</span>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
             <div className="grid grid-cols-2 gap-4 h-[600px]">
                <motion.div 
                  initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: -3, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="editorial-border rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center overflow-hidden h-[300px] mt-12"
                />
                <motion.div 
                   initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                   animate={{ opacity: 1, rotate: 2, scale: 1 }}
                   transition={{ delay: 0.3 }}
                   className="editorial-border rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1566385101042-1a000c1268c4?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center overflow-hidden h-[350px]"
                />
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                   className="col-span-2 editorial-border rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1546473427-e1ad0606e12e?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center overflow-hidden h-[250px] -mt-12 flex items-center justify-center"
                >
                   <div className="bg-white/95 backdrop-blur-sm px-8 py-6 rounded-2xl text-center max-w-xs shadow-xl border border-primary/5">
                      <div className="text-[10px] uppercase tracking-widest font-black text-secondary mb-2">Featured Farm</div>
                      <div className="font-serif text-2xl mb-1 text-primary">Hendrickson Family</div>
                      <div className="text-[10px] text-charcoal/40 font-bold uppercase tracking-tighter">Sebastopol, CA • Harvested 4h ago</div>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">Seasonal Picks</p>
              <h2 className="text-4xl md:text-5xl">Browse by Category</h2>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/70 font-bold flex gap-2 group">
              View All Shop <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.values(Category).slice(0, 6).map((cat, idx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link to={`/shop?category=${cat}`} className="relative block aspect-square rounded-3xl overflow-hidden mb-4 border border-cream shadow-sm">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1619566636858-adf3ef46400b',
                      '1566385101042-1a000c1268c4',
                      '1506368249639-73a05d6f6488',
                      '1518569656558-1f25e69d93d7',
                      '1585478286063-f57008da6254',
                      '1603048588665-791ca8aea617'
                    ][idx]}?auto=format&fit=crop&q=80&w=400`} 
                    alt={cat} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                </Link>
                <h3 className="text-center font-serif text-lg group-hover:text-primary transition-colors">{cat}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY SPECIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Badge variant="outline" className="text-accent border-accent/20 mb-4 bg-accent/5 py-1 px-3">Limited Harvest Specials</Badge>
            <h2 className="text-4xl md:text-5xl">This Week's Local Favorites</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.featured).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 bg-cream rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Join the <span className="text-primary italic">Harvest Club</span> Subscription</h3>
              <p className="text-charcoal/60 text-lg mb-10 max-w-xl">
                Get a curated box of the week's best produce, dairy, and artisanal pantry items delivered to your doorstep. Save up to 15% on retail prices.
              </p>
              <div className="space-y-4 mb-10">
                {["Chef-curated seasonal variety", "Exclusive 'first-pick' products", "Flexible skipping & cancellations"].map(feature => (
                  <div key={feature} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-secondary" /> {feature}
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14">Choose Your Box</Button>
            </div>
            <div className="flex-1 w-full max-w-md relative">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Harvest Box" className="rounded-2xl shadow-2xl scale-110 -rotate-3" />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl animate-bounce">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Starting at</p>
                <p className="text-3xl font-serif font-bold">$34/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCING STORY */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Leaf className="h-96 w-96 -rotate-45 translate-x-20 -translate-y-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/5 relative z-10">
              <img src={FARMERS[0].image} alt={FARMERS[0].name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-3xl max-w-xs z-20 shadow-2xl">
              <p className="text-xs uppercase tracking-widest font-bold mb-2 text-white/70">Our Partners</p>
              <p className="font-serif text-xl italic leading-tight">"We don't just grow food, we nurture the soil that feeds our community."</p>
              <p className="mt-4 font-bold">— {FARMERS[0].name}</p>
            </div>
          </div>

          <div>
             <Badge className="bg-secondary text-white border-none py-1 px-4 rounded-full mb-6">Truly Local Sourcing</Badge>
             <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Meet the Hands <br />That Feed You.</h2>
             <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-xl">
               Every product at Harvest & Hearth has a face and a story. We visit our partner farms weekly, ensuring that our standards for sustainable, ethical, and delicious food are always met.
             </p>
             <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                   <p className="text-4xl font-serif font-bold text-secondary mb-1">42</p>
                   <p className="text-sm text-cream/50 uppercase tracking-widest font-bold">Partner Farms</p>
                </div>
                <div>
                   <p className="text-4xl font-serif font-bold text-secondary mb-1">50mi</p>
                   <p className="text-sm text-cream/50 uppercase tracking-widest font-bold">Max Distance</p>
                </div>
             </div>
             <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 flex gap-2">
                Meet Our Farmers <ArrowRight className="h-4 w-4" />
             </Button>
          </div>
        </div>
      </section>

      {/* RECIPE & TESTIMONIALS */}
      <section className="py-24 bg-cream/20">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-8">
                  <div className="flex justify-between items-end mb-8">
                     <div>
                        <Badge className="bg-primary/10 text-primary border-none mb-4">Chef's Table</Badge>
                        <h2 className="text-4xl font-serif">Recipe of the Week</h2>
                     </div>
                     <Button variant="link" className="text-primary font-bold">View Recipe Blog</Button>
                  </div>
                  
                  <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-cream flex flex-col md:flex-row group transition-all duration-500 hover:shadow-xl">
                     <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                        <img src={RECIPE_OF_THE_WEEK.image} alt={RECIPE_OF_THE_WEEK.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                     <div className="md:w-1/2 p-10 flex flex-col justify-between">
                        <div>
                           <div className="flex gap-4 mb-6">
                              <span className="text-xs font-bold uppercase text-secondary flex items-center gap-1 tracking-widest"><Clock size={12} /> {RECIPE_OF_THE_WEEK.prepTime}</span>
                              <span className="text-xs font-bold uppercase text-secondary flex items-center gap-1 tracking-widest"><Leaf size={12} /> {RECIPE_OF_THE_WEEK.difficulty}</span>
                           </div>
                           <h3 className="text-2xl font-serif mb-4 leading-tight">{RECIPE_OF_THE_WEEK.title}</h3>
                           <p className="text-charcoal/60 line-clamp-3 mb-8">{RECIPE_OF_THE_WEEK.description}</p>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12">Shop the Ingredients</Button>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 self-center">
                  <div className="bg-primary/5 rounded-[2rem] p-10 relative border border-primary/10">
                     <div className="absolute -top-6 -right-6 h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg text-2xl">“</div>
                     <h2 className="text-2xl font-serif mb-8">What Neighbors Are Saying</h2>
                     
                     <div className="space-y-8">
                        {TESTIMONIALS.map((t, idx) => (
                           <div key={t.id} className={cn("space-y-4", idx !== 0 && "hidden md:block")}>
                              <div className="flex gap-1 mb-2">
                                 {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-secondary text-secondary" />)}
                              </div>
                              <p className="italic text-charcoal/70 leading-relaxed font-light">"{t.text}"</p>
                              <div className="flex items-center gap-3">
                                 <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                                 <div>
                                    <p className="font-bold text-sm leading-none">{t.name}</p>
                                    <p className="text-xs text-charcoal/40 font-medium">{t.neighborhood}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 border-y border-cream">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Get the Harvest List</h2>
            <p className="text-charcoal/60 text-lg mb-10 max-w-xl mx-auto">
               Join 5,000+ neighbors. Receive weekly seasonal picks, recipes, and <span className="text-primary font-bold">10% off your first order</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
               <Input placeholder="Enter your email address" className="rounded-full h-14 px-8 border-cream bg-cream/30 focus-visible:ring-primary/20 text-lg" />
               <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shrink-0">Join the List</Button>
            </div>
         </div>
      </section>
    </div>
  );
}
