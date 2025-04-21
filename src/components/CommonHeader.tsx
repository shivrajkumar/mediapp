import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Platform} from "react-native";
import {colors} from "../utils/color";

interface CommonHeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {leftIcon ? (
          <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
            {leftIcon}
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}

        <Text style={styles.headerTitle}>{title}</Text>

        {rightIcon ? (
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            {rightIcon}
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.tertiary,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? 5 : 50,
    backgroundColor: colors.tertiary,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
    flex: 1,
    textAlign: "center",
  },
  iconButton: {
    padding: 5,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPlaceholder: {
    width: 40,
  },
});

export default CommonHeader;
