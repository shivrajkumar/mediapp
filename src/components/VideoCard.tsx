import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewStyle,
} from "react-native";
import {Image} from "expo-image";
import {Video} from "../types";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../utils/color";

interface VideoCardProps {
  item: Video;
  style?: ViewStyle;
}

const VideoCard = ({item, style}: VideoCardProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("VideoPlayer", {video: item});
  };

  return (
    <TouchableOpacity style={[styles.videoCard, style]} onPress={handlePress}>
      <Image
        source={{uri: item.thumbnailUrl}}
        style={styles.thumbnail}
        contentFit="cover"
        placeholder={{blurhash: "L3C00000"}}
        transition={1000}
      />
      <View style={styles.overlay}>
        <Text style={styles.videoTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    width: Dimensions.get("window").width / 2 - 30,
    height: 200,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    backgroundColor: colors.overlayColor,
    // height: "100%",
    justifyContent: "flex-end",
  },
  tagContainer: {
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 10,
  },
  tagText: {
    color: colors.tertiary,
    fontSize: 12,
    fontWeight: "bold",
  },
  videoTitle: {
    color: colors.tertiary,
    fontSize: 11,
    fontWeight: "bold",
    marginVertical: 5,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default VideoCard;
