import React from "react";
import {View, Text, StyleSheet} from "react-native";
import StarRating from "./StarRating";
import {colors} from "../utils/color";

interface ReviewItemProps {
  item: {
    name: string;
    rating: number;
    text: string;
  };
  index: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({item, index}) => (
  <View style={styles.reviewCard}>
    <Text style={styles.reviewerName}>{item.name}</Text>
    <StarRating rating={item.rating} size={14} />
    <Text numberOfLines={3} style={styles.reviewText}>
      {item.text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  reviewCard: {
    padding: 15,
    borderRadius: 10,
    width: 280,
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textColor,
    paddingBottom: 6,
  },
  reviewText: {
    fontSize: 14,
    color: colors.darkGray,
    lineHeight: 20,
    paddingTop: 6,
  },
});

export default ReviewItem;
