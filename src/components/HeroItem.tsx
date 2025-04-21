import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../utils/color";

interface HeroItemProps {
  item: {
    id: string;
    title: string;
    name: string;
    imageUrl: string;
    videoUrl: string;
    duration: string;
    views: string;
    date: string;
  };
}

const HeroItem: React.FC<HeroItemProps> = ({item}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("VideoPlayer", {
      video: {
        id: item.id,
        title: item.title,
        videoUrl: item.videoUrl,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.storyCard} onPress={handlePress}>
      <View style={styles.storyThumbnail}>
        <Image
          source={{uri: item.imageUrl}}
          contentFit="cover"
          placeholder={{blurhash: "L3C00000"}}
          transition={1000}
          style={styles.storyImage}
        />
        <View style={styles.playButton}>
          <Ionicons name="play" size={16} color={colors.tertiary} />
        </View>
        <View style={styles.videoMetaOverlay}>
          <Text style={styles.videoMetaText}>{item.title}</Text>
          <Text style={styles.videoMetaText}>- {item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storyCard: {
    width: 140,
    marginRight: 15,
  },
  storyThumbnail: {
    height: 230,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    marginBottom: 8,
  },
  storyImage: {
    height: "100%",
    width: "100%",
  },
  playButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: colors.overlayColor,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  videoMetaOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlayColor,
    paddingVertical: 6,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  videoMetaText: {
    fontSize: 12,
    color: colors.tertiary,
  },
  storyTitle: {
    fontSize: 14,
    color: colors.textColor,
    lineHeight: 18,
    fontWeight: "500",
    marginBottom: 4,
  },
});

export default HeroItem;
