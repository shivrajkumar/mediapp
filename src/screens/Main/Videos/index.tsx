import React from "react";
import {
  View,
  Text,
  SectionList,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Video} from "../../../types";
import VideoCard from "../../../components/VideoCard";
import constants from "../../../utils/constants.json";
import styles from "./styles";
import {VIDEOS_STRINGS} from "../../../utils/strings";
import {colors} from "../../../utils/color";
import CommonHeader from "../../../components/CommonHeader";

// Get screen dimensions for responsive sizing
const {width} = Dimensions.get("window");

// Import videos from constants file
const dummyVideos: Video[] = constants.videos;

// Define section data structure
interface Section {
  title: string;
  data: Video[][];
  isTestimonial?: boolean;
}

const VideosScreen = ({navigation}: {navigation: any}) => {
  // Prepare sections data
  const sections: Section[] = [
    {
      title: VIDEOS_STRINGS.CUSTOMER_TESTIMONIALS,
      data: [dummyVideos.filter((video) => video.category === "testimonial")],
      isTestimonial: true,
    },
    {
      title: VIDEOS_STRINGS.ABOUT_TREATMENT,
      data: [dummyVideos.filter((video) => video.category === "treatment")],
    },
    {
      title: VIDEOS_STRINGS.HAIR_CARE_TIPS,
      data: [dummyVideos.filter((video) => video.category === "haircare")],
    },
    {
      title: VIDEOS_STRINGS.NUTRITION_TIPS,
      data: [dummyVideos.filter((video) => video.category === "nutrition")],
    },
    {
      title: VIDEOS_STRINGS.HEALTH_HACKS,
      data: [dummyVideos.filter((video) => video.category === "healthhacks")],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Replace custom header with CommonHeader */}
      <CommonHeader
        title={VIDEOS_STRINGS.INSIGHTS}
        leftIcon={
          <Ionicons name="arrow-back" size={24} color={colors.textColor} />
        }
        onLeftPress={() => {
          /* Handle back navigation */
          navigation.goBack();
        }}
      />

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item[0].id + index}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        renderItem={({item, section}) => (
          <FlatList
            data={item}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(video) => video.id}
            renderItem={({item: video}) => (
              <VideoCard item={video} style={styles.largerCard} />
            )}
            contentContainerStyle={styles.horizontalList}
          />
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionListContent}
      />
    </View>
  );
};

export default VideosScreen;
