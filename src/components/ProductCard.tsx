import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Image} from "expo-image";
import {colors} from "../utils/color";

// Define product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  icon: string;
  imageUrl: string;
  description: string;
  rating: any;
}

interface ProductCardProps {
  item: Product;
  onAddToCart: (item: Product) => void;
  quantity?: number; // New prop to track quantity in cart
  onIncreaseQuantity?: (item: Product) => void; // New prop to increase quantity
  onDecreaseQuantity?: (item: Product) => void; // New prop to decrease quantity
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  onAddToCart,
  quantity = 0,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const isInCart = quantity > 0;

  return (
    <View style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.imageUrl}}
          style={styles.productImage}
          contentFit="cover"
          placeholder={{blurhash: "L3C00000"}}
          transition={1000}
        />
      </View>
      <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.productPrice}>₹ {item.price}</Text>

      {!isInCart ? (
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => onAddToCart(item)}
        >
          <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onDecreaseQuantity && onDecreaseQuantity(item)}
          >
            <Ionicons name="remove" size={18} color={colors.tertiary} />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onIncreaseQuantity && onIncreaseQuantity(item)}
          >
            <Ionicons name="add" size={18} color={colors.tertiary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: "48%",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
    height: 140,
    width: "100%",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    fontSize: 13,
    fontWeight: "300",
    color: colors.textColor,
    textAlign: "center",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textColor,
    textAlign: "center",
    marginBottom: 15,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    height: 32,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: colors.tertiary,
    fontSize: 14,
    fontWeight: "bold",
  },
  quantityContainer: {
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  quantityButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: colors.overlayColor,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductCard;
