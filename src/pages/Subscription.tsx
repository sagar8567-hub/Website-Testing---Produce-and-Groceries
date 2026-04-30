import { motion } from "motion/react";
import { Check, ArrowRight, Leaf, ShieldCheck, Zap, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function Subscription() {
  const plans = [
    {
      id: "small",
      name: "The Sprout Box",
      subtitle: "Perfect for Individuals",
      price: 34,
      items: "8-10 seasonal items",
      features: [
        "Fresh local fruits & veggies",
        "Weekly recipe card",
        "Free doorstep delivery",
        "Skip or cancel anytime"
      ],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      color: "secondary"
    },
    {
      id: "medium",
      name: "The Harvest Box",
      subtitle: "Ideal for Couples & Small Families",
      price: 58,
      popular: true,
      items: "15-18 seasonal items",
      features: [
        "Everything in Sprout Box",
        "Artisanal bakery loaf",
        "1 dozen pasture eggs",
        "Seasonal pantry surprise",
        "15% off additional shop items"
      ],
      image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?auto=format&fit=crop&q=80&w=400",
      color: "primary"
    },
    {
      id: "large",
      name: "The Bounty Box",
      subtitle: "Ultimate Farm-to-Table Experience",
      price: 92,
      items: "25+ seasonal items",
      features: [
        "Everything in Harvest Box",
        "Selection of local meats",
        "Gourmet cheese pairing",
        "Fresh herb bunch",
        "Priority same-day delivery"
      ],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400",
      color: "charcoal"
    }
  ];

  return (
    <div className="bg-cream/20 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Leaf className="h-[500px] w-[500px] rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Badge className="bg-secondary text-white border-none py-1.5 px-4 mb-6 uppercase tracking-widest text-[10px]">Harvest Club Subscription</Badge>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-balance">Freshest Harvests, <br /><span className="italic text-secondary">Simplified.</span></h1>
          <p className="text-cream/70 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Skip the store and support local agriculture with our curated weekly boxes. Direct from the farm to your door.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="-mt-12 relative z-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className={cn(
                "h-full rounded-[2.5rem] overflow-hidden border-cream shadow-xl flex flex-col group transition-all duration-500 hover:-translate-y-2",
                plan.popular ? "ring-4 ring-secondary border-transparent scale-105" : ""
              )}>
                <div className="relative h-48">
                  <img src={plan.image} alt={plan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-white border-none px-4 py-1.5 rounded-full shadow-lg uppercase text-[10px] tracking-widest font-bold">
                      Most Popular
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-3xl font-serif mb-2">{plan.name}</CardTitle>
                  <p className="text-charcoal/50 text-sm">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-2 mt-6">
                    <span className="text-4xl font-serif font-bold text-primary">${plan.price}</span>
                    <span className="text-charcoal/40 text-sm font-medium italic">/ delivery</span>
                  </div>
                </CardHeader>

                <CardContent className="p-8 flex-1">
                  <p className="font-bold text-xs uppercase tracking-widest mb-6 pt-6 border-t border-cream flex items-center gap-2">
                    <Zap className="h-4 w-4 text-secondary fill-secondary" /> Includes {plan.items}
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                        <Check className="h-5 w-5 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button className={cn(
                    "w-full rounded-full h-14 text-lg font-bold shadow-lg transition-all",
                    plan.popular ? "bg-primary hover:bg-primary/90 text-white" : "bg-cream text-charcoal hover:bg-charcoal hover:text-white"
                  )}>
                    Select This Box
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-24 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-balance">
        {[
          { icon: <RefreshCcw className="h-8 w-8 text-secondary mb-4 mx-auto" />, title: "Full Flexibility", text: "Going on vacation? Pause or skip your box with one click in your harvest dashboard." },
          { icon: <ShieldCheck className="h-8 w-8 text-secondary mb-4 mx-auto" />, title: "Satisfaction Guarantees", text: "If something isn't perfect, we'll replace it or refund you instantly. No questions asked." },
          { icon: <Leaf className="h-8 w-8 text-secondary mb-4 mx-auto" />, title: "Support Local", text: "Your subscription provides stable, year-round income for over 40 local family farms." }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.icon}
            <h3 className="font-serif text-xl mb-3">{item.title}</h3>
            <p className="text-charcoal/50 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FAQ or How it works */}
      <section className="py-24 bg-white rounded-[4rem] mx-4">
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-serif mb-16">How Your Harvest Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               <div className="hidden md:block absolute top-[40%] left-[20%] right-[20%] h-px bg-cream border-t border-dashed border-primary/20 z-0" />
               {[
                 { step: "01", title: "Choose Your Plan", text: "Select the box size that fits your household's eating habits." },
                 { step: "02", title: "Customize (Optional)", text: "Swap items or add extra essentials like eggs or artisan cheese." },
                 { step: "03", title: "Enjoy Freshness", text: "Receive your harvest box at your doorstep every week." }
               ].map((step, idx) => (
                 <div key={idx} className="relative z-10 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-cream border-4 border-white shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6">
                      {step.step}
                    </div>
                    <h4 className="font-serif text-xl mb-3">{step.title}</h4>
                    <p className="text-charcoal/50 text-sm">{step.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
