export enum Category {
  Fruits = "Fruits",
  Vegetables = "Vegetables",
  Herbs = "Herbs",
  DairyEggs = "Dairy & Eggs",
  Pantry = "Pantry",
  Bakery = "Bakery",
  Meats = "Local Meats"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: Category;
  description: string;
  sourcing: string;
  farm: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  onSale?: boolean;
  salePrice?: number;
  tags?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
}

export interface Farmer {
  id: string;
  name: string;
  location: string;
  story: string;
  image: string;
  products: string[]; // Product IDs
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  text: string;
  rating: number;
  image: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[]; // Product IDs or simple strings
  instructions: string[];
  image: string;
  prepTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
}
