import React, {createContext, useState, useContext, ReactNode} from "react";

// Define the Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  quantity?: number;
}

// Define the CartContext type
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
  getItemQuantity: (productId: string) => number;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If it exists, increase the quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? {...item, quantity: (item.quantity || 1) + 1}
            : item
        );
      } else {
        // If it doesn't exist, add it with quantity 1
        return [...prevItems, {...product, quantity: 1}];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? {...item, quantity} : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price of items in the cart
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // Get the total number of items in the cart
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  // Add a function to get the quantity of a specific product
  const getItemQuantity = (productId: string): number => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
