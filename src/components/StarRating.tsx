import React from "react";
import {View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../utils/color";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  color?: string;
  style?: object;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 16,
  color = colors.starColor,
  style,
}) => {
  // Create an array of stars based on the rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`star-${i}`} name="star" size={size} color={color} />
      );
    }

    // Add half star if needed
    if (halfStar) {
      stars.push(
        <Ionicons key="half-star" name="star-half" size={size} color={color} />
      );
    }

    // Add empty stars
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty-star-${i}`}
          name="star-outline"
          size={size}
          color={color}
        />
      );
    }

    return stars;
  };

  return <View style={[styles.container, style]}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default StarRating;
