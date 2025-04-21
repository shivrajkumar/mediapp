import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import {AUTH_STRINGS} from "../../../utils/strings";

const PhoneNumberScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isPhoneNumberValid = phoneNumber.length === 10;

  const handleSendOTP = async () => {
    if (isPhoneNumberValid) {
      setIsLoading(true);

      try {
        // In a real app, you would call an API to send OTP
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Navigate to OTP verification screen
        navigation.navigate("OTPVerification", {phoneNumber});
      } catch (error) {
        console.error("Error sending OTP:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f8f8f8" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Image */}
          <View style={styles.imageContainer}>
            {/* Logo */}
            <Text style={styles.logoText}>{AUTH_STRINGS.APP_NAME}</Text>
            <Image
              source={require("../../../assets/images/hero.png")}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.bodyContainer}>
            {/* Tagline */}
            <Text style={styles.tagline}>{AUTH_STRINGS.TAGLINE}</Text>

            {/* Login Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>
                {AUTH_STRINGS.LOGIN_SIGNUP}
              </Text>
              <View style={styles.divider} />
            </View>

            {/* Phone Input */}
            <View style={styles.phoneInputContainer}>
              <Text style={styles.countryCode}>
                {AUTH_STRINGS.COUNTRY_CODE}
              </Text>
              <TextInput
                style={styles.phoneInput}
                placeholder={AUTH_STRINGS.MOBILE_PLACEHOLDER}
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
              />
            </View>

            {/* OTP Button */}
            <TouchableOpacity
              style={[
                styles.otpButton,
                !isPhoneNumberValid && styles.otpButtonDisabled,
              ]}
              onPress={handleSendOTP}
              disabled={!isPhoneNumberValid || isLoading}
            >
              <Text style={styles.otpButtonText}>
                {isLoading ? AUTH_STRINGS.SENDING : AUTH_STRINGS.GET_OTP}
              </Text>
            </TouchableOpacity>

            {/* Terms and Privacy */}
            <Text style={styles.termsText}>
              {AUTH_STRINGS.TERMS_TEXT}{" "}
              <Text style={styles.termsLink}>
                {AUTH_STRINGS.PRIVACY_POLICY}
              </Text>{" "}
              {AUTH_STRINGS.AND}{" "}
              <Text style={styles.termsLink}>
                {AUTH_STRINGS.TERMS_OF_SERVICE}
              </Text>
              .
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;
