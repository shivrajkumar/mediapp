import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../utils/color";

interface HelpItemProps {
  item: {
    icon: string;
    title: string;
  };
}

const HelpItem: React.FC<HelpItemProps> = ({item}) => (
  <TouchableOpacity style={styles.helpOption}>
    <View style={styles.helpIconContainer}>
      <Ionicons name={item.icon} size={24} color={colors.textColor} />
    </View>
    <Text style={styles.helpText}>{item.title}</Text>
    <Ionicons name="chevron-forward" size={16} color={colors.textColor} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  helpOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginRight: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  helpIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.tertiary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  helpText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: colors.textColor,
  },
});

export default HelpItem;
