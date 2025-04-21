import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {colors} from "../utils/color";
interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onPress: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        isSelected && styles.selectedCategoryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.categoryButtonText,
          isSelected && styles.selectedCategoryButtonText,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: colors.tertiary,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginVertical: 5,
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    color: colors.textColor,
  },
  selectedCategoryButtonText: {
    color: colors.tertiary,
    fontWeight: "600",
  },
});

export default CategoryButton;
