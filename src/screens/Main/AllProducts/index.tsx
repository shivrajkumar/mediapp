import React, {useState, useEffect, useRef, useCallback} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
  Animated,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useCart} from "../../../context/CartContext";
import {StackNavigationProp} from "@react-navigation/stack";
import CategoryButton from "../../../components/CategoryButton";
import ProductCard, {Product} from "../../../components/ProductCard";
import styles from "./styles";
import {colors} from "../../../utils/color";
import {fetchProducts} from "../../../services/productService";
import {CATEGORIES} from "../../../utils/categories";
import Toast from "react-native-toast-message";

// Define navigation props
type AllProductsScreenNavigationProp = StackNavigationProp<any, "AllProducts">;

interface AllProductsScreenProps {
  navigation: AllProductsScreenNavigationProp;
}

const AllProductsScreen: React.FC<AllProductsScreenProps> = ({navigation}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {addToCart, getItemCount, getItemQuantity, removeFromCart} = useCart();

  // Add animation value for cart icon
  const cartAnimation = useRef(new Animated.Value(1)).current;

  // Keep the product list ref but remove the category list ref since we're removing auto-scrolling
  const productListRef = useRef<FlatList>(null);

  const loadProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await fetchProducts();

      // Sort products by category to keep them grouped
      const sortedData = data.sort((a, b) => {
        // First sort by category
        const categoryComparison =
          CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category);
        if (categoryComparison !== 0) return categoryComparison;

        // If same category, sort by name
        return a.name.localeCompare(b.name);
      });

      setProducts(sortedData);
      setError(null);
    } catch (err) {
      console.error("Error loading products:", err);
      setError(err instanceof Error ? err.message : "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Filter products based on selected category
  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (item: Product): void => {
    addToCart(item);

    // Show toast notification
    Toast.show({
      type: "success",
      text1: "Product added to cart!",
      position: "bottom",
      visibilityTime: 2000,
    });

    // Trigger cart animation
    Animated.sequence([
      Animated.timing(cartAnimation, {
        toValue: 1.3,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(cartAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Add a function to get the quantity of a specific product in the cart
  const getProductQuantity = (productId: string): number => {
    return getItemQuantity(productId);
  };

  // Add functions to increase and decrease quantity
  const handleIncreaseQuantity = (item: Product): void => {
    addToCart(item);
  };

  const handleDecreaseQuantity = (item: Product): void => {
    removeFromCart(item.id);
  };

  const renderProductItem = ({
    item,
  }: ListRenderItemInfo<Product>): React.ReactElement => (
    <ProductCard
      item={item}
      onAddToCart={handleAddToCart}
      quantity={getProductQuantity(item.id)}
      onIncreaseQuantity={handleIncreaseQuantity}
      onDecreaseQuantity={handleDecreaseQuantity}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textColor} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Products</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Animated.View
            style={{
              transform: [{scale: cartAnimation}],
            }}
          >
            <Ionicons name="cart-outline" size={24} color={colors.textColor} />
            {getItemCount() > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{getItemCount()}</Text>
              </View>
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Category Filter - Updated with "All" option */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={["All", ...CATEGORIES]}
          renderItem={({item}) => (
            <CategoryButton
              key={item}
              category={item}
              isSelected={selectedCategory === item}
              onPress={() => {
                setSelectedCategory(item);
                // Remove auto-scrolling functionality
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
          keyExtractor={(item) => item}
        />
      </View>

      {/* Products Grid */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={50}
            color={colors.danger}
          />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadProducts}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          ref={productListRef}
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsContainer}
          columnWrapperStyle={styles.productRow}
          // Remove onViewableItemsChanged and viewabilityConfig
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products found</Text>
            </View>
          }
        />
      )}

      {/* Add Toast component at the end */}
      <Toast />
    </SafeAreaView>
  );
};

export default AllProductsScreen;
