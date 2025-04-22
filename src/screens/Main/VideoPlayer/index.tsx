import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useVideoPlayer, VideoView, VideoPlayer} from "expo-video";
import {Video} from "../../../types";
import styles from "./styles";
import {colors} from "../../../utils/color";

interface VideoPlayerScreenProps {
  route: {
    params: {
      video: Video;
    };
  };
  navigation: any;
}

const VideoPlayerScreen = ({route, navigation}: VideoPlayerScreenProps) => {
  const {video} = route.params;
  const [isPlaying, setIsPlaying] = useState(false);

  const player = useVideoPlayer(video.videoUrl, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener('playingChange', (event: { isPlaying: boolean }) => {
      setIsPlaying(event.isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleVideoPress = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}

      {/* Full Screen Video Player */}
      <TouchableOpacity activeOpacity={1} onPress={handleVideoPress}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          contentFit="cover"
          allowsPictureInPicture
          nativeControls={false}
        />
      </TouchableOpacity>

      {/* Video Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{video.title}</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="close" size={24} color={colors.textColor} />
      </TouchableOpacity>

      {/* Play/Pause Indicator (shows briefly when tapped) */}
      {isPlaying ? null : (
        <View style={styles.playIndicator}>
          <Ionicons name="play" size={20} color={colors.textColor} />
        </View>
      )}
    </View>
  );
};

export default VideoPlayerScreen;
