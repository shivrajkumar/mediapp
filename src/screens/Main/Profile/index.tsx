import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useAuth} from "../../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import {AUTH_STRINGS, PROFILE_STRINGS} from "../../../utils/strings";
import {colors} from "../../../utils/color";
const ProfileScreen = ({navigation}) => {
  const {user, logout} = useAuth();
  const [testStarted, setTestStarted] = useState(false);

  // Check if test has been started when component mounts
  useEffect(() => {
    const checkTestStatus = async () => {
      try {
        const testData = await AsyncStorage.getItem("hairTestAnswers");
        // If there's any saved test data and it's not complete, the test is in progress
        if (testData) {
          const answers = JSON.parse(testData);
          // If there are any answers but not all questions are answered, test is in progress
          setTestStarted(Object.keys(answers).length > 0);
        }
      } catch (error) {
        console.error("Error checking test status:", error);
      }
    };

    checkTestStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      // Navigation is handled by RootNavigator
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleTestButtonPress = () => {
    navigation.navigate("Test");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* User Profile Section */}
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <View style={styles.profileLogo}>
            <Ionicons name="person" size={24} color={colors.tertiary} />
          </View>
          <Text style={styles.profileName}>{user?.name || "Shivraj"}</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="chevron-forward" size={20} color={colors.textColor} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Root Cause Card */}
        <View style={styles.rootCauseCard}>
          <View style={styles.cardContent}>
            <View style={styles.cardIconContainer}>
              <Ionicons name="leaf-outline" size={24} color={colors.tertiary} />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>
                {PROFILE_STRINGS.ROOT_CAUSE_TITLE}
              </Text>
              <Text style={styles.cardDescription}>
                {PROFILE_STRINGS.ROOT_CAUSE_DESCRIPTION}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.testButton}
            onPress={handleTestButtonPress}
          >
            <Text style={styles.testButtonText}>
              {testStarted
                ? PROFILE_STRINGS.COMPLETE_HAIR_TEST
                : PROFILE_STRINGS.TAKE_HAIR_TEST}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Cards */}
        <View style={styles.actionCardsContainer}>
          {/* Hair Progress Card */}
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons
              name="trending-up-outline"
              size={24}
              color={colors.textColor}
            />
            <Text style={styles.actionCardText}>
              {PROFILE_STRINGS.HAIR_PROGRESS}
            </Text>
          </TouchableOpacity>

          {/* Help & Support Card */}
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={colors.textColor}
            />
            <Text style={styles.actionCardText}>
              {PROFILE_STRINGS.HELP_SUPPORT}
            </Text>
          </TouchableOpacity>

          {/* Chat With Us Card */}
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={colors.textColor}
            />
            <Text style={styles.actionCardText}>
              {PROFILE_STRINGS.CHAT_WITH_US}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {/* All Products */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("AllProducts")}
          >
            <Text style={styles.menuItemText}>
              {PROFILE_STRINGS.ALL_PRODUCTS}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textColor}
            />
          </TouchableOpacity>

          {/* Terms & Policies */}
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>
              {PROFILE_STRINGS.TERMS_POLICIES}
            </Text>
            <Ionicons name="chevron-down" size={18} color={colors.textColor} />
          </TouchableOpacity>

          {/* Read More */}
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>{PROFILE_STRINGS.READ_MORE}</Text>
            <Ionicons name="chevron-down" size={18} color={colors.textColor} />
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuItemText}>{PROFILE_STRINGS.LOGOUT}</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.logoText}>{AUTH_STRINGS.APP_NAME}</Text>
          <Text style={styles.versionText}>{PROFILE_STRINGS.VERSION}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
