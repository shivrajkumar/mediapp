import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  ImageBackground,
  FlatList,
} from "react-native";

import {Image} from "expo-image";
import {Ionicons} from "@expo/vector-icons";
import StarRating from "../../../components/StarRating";
import {
  reviews,
  doctors,
  helpOptions,
  trayaHeroes,
} from "../../../utils/constants";
import ReviewItem from "../../../components/ReviewItem";
import DoctorItem from "../../../components/DoctorItem";
import HelpItem from "../../../components/HelpItem";
import HeroItem from "../../../components/HeroItem";
import styles from "./styles";
import {HOME_STRINGS} from "../../../utils/strings";
import {colors} from "../../../utils/color";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section with Background */}
      <View style={styles.heroSection}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          }}
          style={styles.heroBg}
          imageStyle={styles.heroBgImage}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>{HOME_STRINGS.HERO_TITLE}</Text>
            <Text style={styles.heroSubtitle}>
              {HOME_STRINGS.HERO_SUBTITLE}
            </Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>
                {HOME_STRINGS.HERO_BUTTON}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Traya Heroes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.TRAYA_HEROES}</Text>
        <FlatList
          data={trayaHeroes}
          renderItem={({item}) => <HeroItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.heroesScrollContainer}
        />
      </View>

      {/* What Causes Hair Loss Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.CAUSES_TITLE}</Text>
        <Text style={styles.sectionDescription}>
          {HOME_STRINGS.CAUSES_DESCRIPTION}
        </Text>

        <View style={styles.causesContainer}>
          <TouchableOpacity style={styles.causeCard}>
            <View style={styles.causeIconContainer}>
              <Ionicons
                name="nutrition-outline"
                size={24}
                color={colors.textColor}
              />
            </View>
            <Text style={styles.causeText}>
              {HOME_STRINGS.NUTRIENT_DEFICIENCY}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.causeCard}>
            <View style={styles.causeIconContainer}>
              <Ionicons
                name="pulse-outline"
                size={24}
                color={colors.textColor}
              />
            </View>
            <Text style={styles.causeText}>{HOME_STRINGS.STRESS_SLEEP}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.causeCard}>
            <View style={styles.causeIconContainer}>
              <Ionicons
                name="cellular-outline"
                size={24}
                color={colors.textColor}
              />
            </View>
            <Text style={styles.causeText}>{HOME_STRINGS.GENETICS}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* How Traya Works Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.HOW_TRAYA_WORKS}</Text>

        <View style={styles.stepCard}>
          <View style={styles.stepNumberContainer}>
            <Text style={styles.stepNumber}>1</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>{HOME_STRINGS.STEP_1_TITLE}</Text>
            <Text style={styles.stepDescription}>
              {HOME_STRINGS.STEP_1_DESCRIPTION}
            </Text>
          </View>
        </View>

        {/* Step indicator */}
        <View style={styles.stepIndicator}>
          <View style={styles.stepDot} />
          <View style={[styles.stepDot, styles.stepDotInactive]} />
          <View style={[styles.stepDot, styles.stepDotInactive]} />
        </View>
      </View>

      {/* Need Help Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.NEED_HELP}</Text>

        <FlatList
          data={helpOptions}
          renderItem={({item}) => <HelpItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.helpOptionsContainer}
        />
      </View>

      {/* Meet Our Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.MEET_DOCTORS}</Text>

        <FlatList
          data={doctors}
          renderItem={({item, index}) => (
            <DoctorItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => `doctor-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.doctorsScrollContainer}
        />
      </View>

      {/* Reviews Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{HOME_STRINGS.REVIEWS_TITLE}</Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingNumber}>{HOME_STRINGS.RATING_NUMBER}</Text>
          <View style={styles.ratingSubContainer}>
            <StarRating rating={4.6} size={16} />
            <Text style={styles.reviewCount}>{HOME_STRINGS.RATING_COUNT}</Text>
          </View>
        </View>

        {/* Replace ScrollView with FlatList */}
        <FlatList
          data={reviews}
          renderItem={({item, index}) => (
            <ReviewItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.reviewsScrollContainer}
        />
      </View>

      {/* Final CTA */}
      <TouchableOpacity style={styles.finalCTA}>
        <Text style={styles.finalCTAText}>{HOME_STRINGS.FINAL_CTA}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeScreen;
