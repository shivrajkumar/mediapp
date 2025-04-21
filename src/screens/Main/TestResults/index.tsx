import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styles from "./styles";
import {RESULTS_STRINGS, MOCK_TEST_RESULTS} from "../../../utils/strings";

interface RootCause {
  id: string;
  name: string;
  icon: string;
}

interface TestResultsScreenProps {
  route: any;
  navigation: any;
}

const TestResultsScreen = ({route, navigation}: TestResultsScreenProps) => {
  // In a real app, you would get this data from the route params
  // const { answers } = route.params;

  // Use mock data from constants
  const userData = MOCK_TEST_RESULTS;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          {RESULTS_STRINGS.GREETING}, {userData.name}
        </Text>
        <Text style={styles.subGreeting}>{RESULTS_STRINGS.ANALYSIS_READY}</Text>
      </View>

      {/* Assessment Report Card */}
      <View style={styles.reportCard}>
        <Text style={styles.reportTitle}>
          {RESULTS_STRINGS.ASSESSMENT_REPORT}
        </Text>
        <View style={styles.divider} />

        {/* Diagnosis Section */}
        <View style={styles.diagnosisContainer}>
          <View style={styles.diagnosisTextContainer}>
            <Text style={styles.diagnosisLabel}>
              {RESULTS_STRINGS.DIAGNOSED_WITH}
            </Text>
            <Text style={styles.diagnosisText}>{userData.diagnosis}</Text>

            {userData.regrowthPossible && (
              <View style={styles.regrowthBadge}>
                <Text style={styles.regrowthText}>
                  {RESULTS_STRINGS.REGROWTH_POSSIBLE}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.stageImageContainer}>
            <Image
              source={{uri: "https://picsum.photos/200/300?random=1"}}
              style={styles.stageImage}
              resizeMode="contain"
            />
            <Text style={styles.stageText}>
              {RESULTS_STRINGS.STAGE} {userData.stage}
            </Text>
          </View>
        </View>

        {/* Treatment Duration */}
        <Text style={styles.treatmentDuration}>
          {RESULTS_STRINGS.TREATMENT_DURATION}{" "}
          <Text style={styles.durationHighlight}>
            {userData.treatmentDuration} {RESULTS_STRINGS.MONTHS}
          </Text>
        </Text>

        {/* Root Causes */}
        <View style={styles.rootCausesContainer}>
          <View style={styles.rootCausesHeader}>
            <Text style={styles.rootCausesTitle}>
              {RESULTS_STRINGS.ROOT_CAUSES}
            </Text>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>i</Text>
            </View>
          </View>

          <View style={styles.causesIconsContainer}>
            {userData.rootCauses.map((cause) => (
              <View key={cause.id} style={styles.causeItem}>
                <View style={styles.causeIconCircle}>
                  <Ionicons name={cause.icon} size={24} color="#B7D446" />
                </View>
                <Text style={styles.causeName}>{cause.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Video Section */}
      <View style={styles.videoCard}>
        <View style={styles.videoContainer}>
          <Image
            source={{
              uri: "https://picsum.photos/800/450?random=2",
            }}
            style={styles.videoThumbnail}
          />
          <View style={styles.playButton}>
            <Ionicons name="play" size={40} color="#fff" />
          </View>
          <View style={styles.videoDuration}>
            <Text style={styles.durationText}>
              {RESULTS_STRINGS.VIDEO_DURATION}
            </Text>
          </View>
        </View>
        <Text style={styles.videoTitle}>{RESULTS_STRINGS.VIDEO_TITLE}</Text>
      </View>

      {/* Pricing and CTA */}
      <View style={styles.pricingCard}>
        <View style={styles.pricingContainer}>
          <View>
            <Text style={styles.pricingLabel}>
              {RESULTS_STRINGS.PLAN_LABEL}
            </Text>
            <Text style={styles.price}>₹{userData.planPrice}</Text>
            <Text style={styles.taxInfo}>
              {RESULTS_STRINGS.INCLUSIVE_TAXES}
            </Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>{RESULTS_STRINGS.BUY_NOW}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TestResultsScreen;
