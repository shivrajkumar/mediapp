import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Video} from "../types";
import {colors} from "../utils/color";

interface TestimonialCardProps {
  video: Video;
  style?: ViewStyle;
}

const TestimonialCard = ({video, style}: TestimonialCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <ImageBackground
        source={{uri: video.thumbnailUrl}}
        style={styles.thumbnail}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {video.title}
            </Text>
          </View>
          <View style={styles.playButton}>
            <Ionicons name="play" size={24} color={colors.tertiary} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 200,
    backgroundColor: colors.tertiary,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    padding: 10,
    backgroundColor: colors.overlayColor,
    height: "100%",
    justifyContent: "space-between",
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
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: colors.shadowColor,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{translateX: -12}, {translateY: -12}],
    backgroundColor: colors.overlayColor,
    borderRadius: 24,
    padding: 4,
  },
});

export default TestimonialCard;
