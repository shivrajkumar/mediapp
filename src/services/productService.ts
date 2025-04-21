import {Product} from "../components/ProductCard";
import {categoryMapping} from "../utils/categories";

// Get a random image URL from Lorem Picsum
const getRandomImage = (): string => {
  // Add a random parameter to prevent caching
  const randomParam = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/300?random=${randomParam}`;
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    // Transform the data to match our app's structure
    const transformedData: Product[] = data.map((item: any) => ({
      id: item.id.toString(),
      name: item.title,
      price: Math.round(item.price * 70), // Convert USD to INR (approximate)
      category: categoryMapping[item.category] || item.category,
      icon: getCategoryIcon(categoryMapping[item.category] || item.category),
      imageUrl: getRandomImage(), // Use Lorem Picsum for random images
      description: item.description,
      rating: item.rating,
    }));

    console.log(transformedData);

    return transformedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products. Please try again later.");
  }
};

// This function should be imported from a utility file, but for now we'll define it here
const getCategoryIcon = (category: string): string => {
  const categoryIcons: Record<string, string> = {
    Electronics: "laptop-outline",
    Jewelery: "diamond-outline",
    "Men's Clothing": "shirt-outline",
    "Women's Clothing": "woman-outline",
    default: "cube-outline",
  };

  return categoryIcons[category] || categoryIcons.default;
};
