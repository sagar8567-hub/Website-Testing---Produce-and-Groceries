import { Category, Product, Farmer, Testimonial, Recipe } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Heirloom Cherokee Purple Tomatoes",
    price: 4.99,
    unit: "lb",
    category: Category.Vegetables,
    description: "Deep, dusky-purple tomatoes with a rich, complex flavor. These heirlooms are a seasonal favorite, famous for their thin skin and juicy, meaty texture.",
    sourcing: "Grown using regenerative practices, ensuring soil health and peak nutrient density.",
    farm: "Hendrickson Family Farm, Sonoma County",
    images: ["https://images.unsplash.com/photo-1546473427-e1ad0606e12e?auto=format&fit=crop&q=80&w=800"],
    stock: 12,
    rating: 4.9,
    reviews: 124,
    featured: true,
    onSale: true,
    salePrice: 3.99,
    tags: ["Best Seller", "In Season"],
    nutritionalInfo: { calories: 22, protein: "1g", fat: "0.2g", carbs: "4.8g" }
  },
  {
    id: "p2",
    name: "Golden Honeycrisp Apples",
    price: 3.49,
    unit: "lb",
    category: Category.Fruits,
    description: "Exceptially crisp and sweet with just the right touch of tartness. Perfect for fresh snacking or autumn baking.",
    sourcing: "Hand-picked at peak ripeness from high-altitude orchards.",
    farm: "Summit Ridge Orchards, Napa Valley",
    images: ["https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800"],
    stock: 45,
    rating: 4.8,
    reviews: 89,
    tags: ["Kid Friendly", "Crunchy"]
  },
  {
    id: "p3",
    name: "Organic Meyer Lemons",
    price: 1.50,
    unit: "each",
    category: Category.Fruits,
    description: "A cross between a lemon and a mandarin orange, Meyer lemons are sweeter and less acidic than standard varieties.",
    sourcing: "Certified organic, sun-ripened in the foothills.",
    farm: "Citrus Grove Collective",
    images: ["https://images.unsplash.com/photo-1590502593747-42a9961345e2?auto=format&fit=crop&q=80&w=800"],
    stock: 60,
    rating: 4.7,
    reviews: 56,
    tags: ["Zesty", "Organic"]
  },
  {
    id: "p4",
    name: "Wild Ramp & Garlic Chives",
    price: 5.95,
    unit: "bunch",
    category: Category.Herbs,
    description: "Briefly available in spring, these wild-foraged ramps offer a delicate garlic-onion flavor profile.",
    sourcing: "Sustainably foraged from protected local woodlands.",
    farm: "Forager's Path, Marin County",
    images: ["https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"],
    stock: 8,
    rating: 5.0,
    reviews: 32,
    featured: true,
    tags: ["Seasonal Rare"],
    nutritionalInfo: { calories: 45, protein: "2g", fat: "0.5g", carbs: "9g" }
  },
  {
    id: "p5",
    name: "Pasture-Raised Brown Eggs",
    price: 8.50,
    unit: "dozen",
    category: Category.DairyEggs,
    description: "Rich, golden yolks from hens that spend their days foraging on open pastures.",
    sourcing: "Hens are rotated daily to fresh grassy plots.",
    farm: "Happy Hen Hollow, Petaluma",
    images: ["https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&q=80&w=800"],
    stock: 24,
    rating: 4.9,
    reviews: 210,
    featured: true,
    tags: ["High Protein", "Farm Fresh"]
  },
  {
    id: "p6",
    name: "Artisanal Sourdough Batard",
    price: 9.00,
    unit: "loaf",
    category: Category.Bakery,
    description: "36-hour fermented sourdough with a thick, crackly crust and a light, airy crumb.",
    sourcing: "Made using ancient stone-ground flour and 100-year-old starter.",
    farm: "Hearthstone Bakery",
    images: ["https://images.unsplash.com/photo-1585478286063-f57008da6254?auto=format&fit=crop&q=80&w=800"],
    stock: 15,
    rating: 4.9,
    reviews: 145,
    tags: ["Freshly Baked", "No Preservatives"]
  },
  {
    id: "p7",
    name: "Grass-Fed New York Strip",
    price: 24.99,
    unit: "lb",
    category: Category.Meats,
    description: "Finely marbled steaks from cattle 100% grass-fed and finished on native pastures.",
    sourcing: "Humanely raised without hormones or antibiotics.",
    farm: "Rolling Green Ranches",
    images: ["https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800"],
    stock: 10,
    rating: 4.8,
    reviews: 67,
    featured: true,
    tags: ["Premium Cut", "Grass-Fed"]
  },
  {
    id: "p8",
    name: "Creamy Jersey Milk",
    price: 6.50,
    unit: "half gallon",
    category: Category.DairyEggs,
    description: "Non-homogenized, cream-line milk from heritage Jersey cows known for high butterfat content.",
    sourcing: "Glass-bottled for purity and taste.",
    farm: "Blue Ribbon Dairy",
    images: ["https://images.unsplash.com/photo-1550583724-125581bd278c?auto=format&fit=crop&q=80&w=800"],
    stock: 18,
    rating: 4.7,
    reviews: 43,
    tags: ["Cream Line", "Glass Bottle"]
  },
  {
    id: "p9",
    name: "Wildflower Honey",
    price: 14.00,
    unit: "16oz",
    category: Category.Pantry,
    description: "Raw, unfiltered honey reflecting the seasonal blooms of local meadows.",
    sourcing: "Never heated, preserving natural enzymes and pollen.",
    farm: "Busy Bees Apiary",
    images: ["https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800"],
    stock: 40,
    rating: 4.9,
    reviews: 78,
    tags: ["Raw", "Local"]
  },
  {
    id: "p10",
    name: "Rainbow Carrots",
    price: 3.25,
    unit: "bunch",
    category: Category.Vegetables,
    description: "Stunning mix of purple, orange, and white carrots. Sweet and earthy, perfect for roasting.",
    sourcing: "Field-grown, hand-weeded for sustainability.",
    farm: "Patchwork Plains",
    images: ["https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800"],
    stock: 25,
    rating: 4.6,
    reviews: 34,
    tags: ["Colorful", "Roasting"]
  },
  {
    id: "p11",
    name: "Smoked Paprika & Sea Salt",
    price: 8.50,
    unit: "jar",
    category: Category.Pantry,
    description: "Small-batch salt blend using hand-harvested Pacific sea salt.",
    sourcing: "Seasoned over hickory wood for 12 hours.",
    farm: "Salt & Savory Co.",
    images: ["https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=800"],
    stock: 50,
    rating: 4.8,
    reviews: 21,
    tags: ["Artisan", "Must-Have"]
  },
  {
    id: "p12",
    name: "Shiitake Mushrooms",
    price: 7.99,
    unit: "8oz",
    category: Category.Vegetables,
    description: "Plump, savory shiitakes grown on hardwood logs for superior flavor and texture.",
    sourcing: "Indoor-farmed in climate-controlled conditions to mimic mountain origins.",
    farm: "The Fungi Forge",
    images: ["https://images.unsplash.com/photo-1520244643472-88734914a1e9?auto=format&fit=crop&q=80&w=800"],
    stock: 15,
    rating: 4.9,
    reviews: 55,
    tags: ["Umami", "Log-Grown"]
  },
  // Adding more to reach 24+ products...
];

export const FARMERS: Farmer[] = [
  {
    id: "f1",
    name: "The Hendrickson Family",
    location: "Sonoma County, CA",
    story: "Farming these lands for three generations, the Hendricksons are pioneers in regenerative viticulture and produce farming. Their soil-first approach ensures that every tomato and squash is packed with the flavor of the region.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
    products: ["p1", "p10"]
  },
  {
    id: "f2",
    name: "Marcus & Elena of Happy Hen",
    location: "Petaluma, CA",
    story: "What started as a hobby with six hens has grown into a leading pasture-rotation egg farm. Marcus and Elena believe that happy, outdoor hens produce the most nutritious eggs in the world.",
    image: "https://images.unsplash.com/photo-1492462543947-040389c4a66c?auto=format&fit=crop&q=80&w=800",
    products: ["p5"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Miller",
    neighborhood: "The Marina",
    text: "The quality of the produce is unlike anything I've found in a standard grocery store. The heirloom tomatoes taste like my grandma's garden.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t2",
    name: "David Chen",
    neighborhood: "Noe Valley",
    text: "The delivery service is incredibly reliable. Having fresh sourdough and pasture eggs delivered on Sunday mornings is my favorite ritual.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t3",
    name: "Jessica Park",
    neighborhood: "Mission Bay",
    text: "I love knowing exactly which farm my food comes from. The transparency and quality are worth every penny.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export const RECIPE_OF_THE_WEEK: Recipe = {
  id: "r1",
  title: "Roasted Rainbow Carrots with Whipped Goat Cheese",
  description: "A vibrant side dish that celebrates the natural sweetness of farm-fresh carrots and the tang of artisanal cheese.",
  ingredients: ["p10", "p11", "Goat Cheese", "Honey", "Fresh Thyme"],
  instructions: [
    "Preheat oven to 425°F.",
    "Toss carrots with olive oil, salt, and smoked paprika.",
    "Roast for 20-25 minutes until tender and slightly charred.",
    "Spread whipped goat cheese on a platter and top with carrots.",
    "Drizzle with local honey and sprinkle with fresh thyme."
  ],
  image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800",
  prepTime: "30 mins",
  difficulty: "Easy"
};
