import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, SlidersHorizontal, Search, ChevronDown, LayoutGrid, List } from "lucide-react";
import { PRODUCTS } from "@/src/data";
import { Category } from "@/src/types";
import { ProductCard } from "@/src/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuRadioGroup, 
  DropdownMenuRadioItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const activeCategory = searchParams.get("category") || "All";

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchCategory && matchSearch && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return (a.salePrice || a.price) - (b.salePrice || b.price);
      if (sortBy === "price-high") return (b.salePrice || b.price) - (a.salePrice || b.price);
      if (sortBy === "rating") return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, priceRange, sortBy]);

  const setCategory = (cat: string) => {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ["All", ...Object.values(Category)];

  return (
    <div className="bg-cream/10 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary">Shop Our Produce</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
              Picked Fresh <br />
              <span className="text-secondary italic">For Your Table.</span>
            </h1>
            <p className="text-charcoal/60 text-lg leading-relaxed font-light">
              Showing {filteredProducts.length} local items currently available for delivery in your zone. Everything listed was harvested within the last 48 hours.
            </p>
          </div>
          
          {/* Mobile Filter Trigger */}
          <div className="flex md:hidden gap-2">
             <Sheet>
               <SheetTrigger render={
                  <Button variant="outline" className="flex-1 rounded-full border-cream bg-white h-12 gap-2">
                    <Filter className="h-4 w-4" /> Filters
                  </Button>
               } />
               <SheetContent side="bottom" className="rounded-t-[2.5rem] h-[80vh] p-8">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="text-3xl font-serif">Refine Your Harvest</SheetTitle>
                  </SheetHeader>
                  {/* Categorires inside mobile sheet */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(c => (
                          <Badge 
                            key={c}
                            onClick={() => setCategory(c)}
                            className={cn(
                              "px-4 py-2 rounded-full cursor-pointer transition-all",
                              activeCategory === c ? "bg-primary text-white" : "bg-cream text-charcoal hover:bg-cream/80"
                            )}
                          >
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
               </SheetContent>
             </Sheet>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-12">
            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-charcoal/40 mb-6 flex items-center gap-2">
                <LayoutGrid className="h-3 w-3" /> Categories
              </h4>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "text-left font-serif text-lg py-1 px-3 rounded-lg transition-all border-l-2",
                      activeCategory === cat 
                        ? "text-primary border-primary bg-primary/5 font-bold" 
                        : "text-charcoal/60 border-transparent hover:border-cream hover:text-charcoal"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-charcoal/40 mb-6">Price Range</h4>
              <div className="px-2">
                <Slider 
                  value={priceRange} 
                  onValueChange={setPriceRange} 
                  max={50} 
                  step={1} 
                  className="mb-4"
                />
                <div className="flex justify-between text-sm font-medium text-charcoal/60">
                   <span>${priceRange[0]}</span>
                   <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
              <h4 className="font-serif text-xl mb-4 leading-tight">Harvest Club</h4>
              <p className="text-xs text-charcoal/60 leading-relaxed mb-6">Want the best prices? Subscribe to our weekly harvest box and save 15% on everything.</p>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">Learn More</Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-cream shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-auto flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/30" />
                <Input 
                  placeholder="Search tomatoes, artisan bread..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 rounded-full border-cream focus-visible:ring-primary/20 bg-cream/20 h-12" 
                />
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex bg-cream/30 p-1 rounded-full border border-cream h-12">
                   <button 
                     onClick={() => setViewMode("grid")}
                     className={cn("p-2 rounded-full transition-all", viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-charcoal/40 hover:text-charcoal")}
                   >
                     <LayoutGrid className="h-5 w-5" />
                   </button>
                   <button 
                     onClick={() => setViewMode("list")}
                     className={cn("p-2 rounded-full transition-all", viewMode === "list" ? "bg-white shadow-sm text-primary" : "text-charcoal/40 hover:text-charcoal")}
                   >
                     <List className="h-5 w-5" />
                   </button>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger render={
                    <Button variant="outline" className="rounded-full border-cream h-12 px-6 gap-2 min-w-[160px]">
                      <SlidersHorizontal className="h-4 w-4" />
                      {sortBy === "featured" ? "Sort By" : sortBy === "price-low" ? "Price: Low to High" : sortBy === "price-high" ? "Price: High to Low" : "Top Rated"}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  } />
                  <DropdownMenuContent className="rounded-2xl w-56">
                    <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                       <DropdownMenuRadioItem value="featured">Featured / Featured</DropdownMenuRadioItem>
                       <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                       <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                       <DropdownMenuRadioItem value="rating">Top Rated</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key={`${activeCategory}-${viewMode}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "grid gap-8",
                    viewMode === "grid" 
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                      : "grid-cols-1"
                  )}
                >
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} className={viewMode === "list" ? "flex-row h-48 sm:h-64" : ""} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <div className="h-24 w-24 rounded-full bg-cream flex items-center justify-center text-4xl mb-6">🔍</div>
                  <h3 className="text-3xl font-serif mb-4">No results found</h3>
                  <p className="text-charcoal/50 max-w-md">We couldn't find any produce matching your criteria. Try adjusting your filters or search keywords.</p>
                  <Button 
                    onClick={() => {
                      setSearchQuery("");
                      setPriceRange([0, 50]);
                      setCategory("All");
                    }} 
                    variant="link" 
                    className="text-primary mt-6 underline font-bold"
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
