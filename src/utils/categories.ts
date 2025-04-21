// Available categories for filtering
export const CATEGORIES = [
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

// Map API categories to our display categories
export const categoryMapping: Record<string, string> = {
  electronics: "Electronics",
  jewelery: "Jewelery",
  "men's clothing": "Men's Clothing",
  "women's clothing": "Women's Clothing",
};

// Map categories to icons
export const categoryIcons: Record<string, string> = {
  Electronics: "laptop-outline",
  Jewelery: "diamond-outline",
  "Men's Clothing": "shirt-outline",
  "Women's Clothing": "woman-outline",
  default: "cube-outline",
};
