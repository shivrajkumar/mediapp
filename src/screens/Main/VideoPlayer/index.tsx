import React, {useState, useRef, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Video as ExpoVideo} from "expo-av";
import {Video} from "../../../types";
import styles from "./styles";
import {colors} from "../../../utils/color";
const {width, height} = Dimensions.get("window");

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
  const videoRef = useRef<ExpoVideo>(null);
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play when component mounts
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playAsync();
      }
    }, 500);

    return () => {
      // Pause video when component unmounts
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    };
  }, []);

  const handleVideoStatusUpdate = (newStatus: any) => {
    setStatus(newStatus);
    setIsPlaying(newStatus.isPlaying);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleVideoPress = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Full Screen Video Player */}
      <TouchableOpacity activeOpacity={1} onPress={handleVideoPress}>
        <ExpoVideo
          ref={videoRef}
          source={{
            uri: video.videoUrl,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          isLooping={false}
          style={styles.video}
          onPlaybackStatusUpdate={handleVideoStatusUpdate}
          useNativeControls={false}
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
