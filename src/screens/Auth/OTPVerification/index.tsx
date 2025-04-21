import React, {useState, useRef, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import OTPTextInput from "react-native-otp-textinput";
import {useAuth} from "../../../context/AuthContext";
import styles from "./styles";
import {AUTH_STRINGS} from "../../../utils/strings";

const OTPVerificationScreen = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(59);
  const [isVerifying, setIsVerifying] = useState(false);
  const otpInput = useRef(null);
  const {login} = useAuth();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVerifyOTP = async () => {
    if (otp.length === 6) {
      setIsVerifying(true);

      try {
        // In a real app, you would validate the OTP with an API
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For now, we'll just simulate a successful login
        const userData = {
          id: "123",
          phoneNumber,
          name: "Test User",
        };

        await login(userData);
        // Navigation is handled by RootNavigator
      } catch (error) {
        console.error("Error verifying OTP:", error);
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const handleResendOTP = () => {
    // Reset timer
    setTimer(59);

    // In a real app, you would call an API to resend OTP
    console.log("Resending OTP to", phoneNumber);
  };

  return (
    <View style={styles.otpScreenContainer}>
      {/* Header */}
      <View style={styles.otpHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.otpHeaderTitle}>{AUTH_STRINGS.VERIFY_OTP}</Text>
        <TouchableOpacity>
          <Text style={styles.otpHelpText}>{AUTH_STRINGS.NEED_HELP}</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.otpContent}>
        <Text style={styles.otpPrompt}>{AUTH_STRINGS.ENTER_OTP_PROMPT}</Text>
        <View style={styles.phoneDisplayContainer}>
          <Text style={styles.phoneNumberText}>
            {AUTH_STRINGS.COUNTRY_CODE}
            {phoneNumber}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("PhoneNumber")}>
            <Ionicons
              name="pencil-outline"
              size={20}
              color="#555"
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <OTPTextInput
          ref={otpInput}
          containerStyle={styles.otpInputContainerStyle}
          textInputStyle={styles.otpInputBoxStyle}
          handleTextChange={setOtp}
          inputCount={6}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={[
            styles.verifyOtpButton,
            (otp.length < 6 || isVerifying) && styles.verifyOtpButtonDisabled,
          ]}
          onPress={handleVerifyOTP}
          disabled={otp.length < 6 || isVerifying}
        >
          {isVerifying ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.verifyOtpButtonText}>
              {AUTH_STRINGS.VERIFY_OTP_BUTTON}
            </Text>
          )}
        </TouchableOpacity>

        {/* Didn't receive OTP section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            {AUTH_STRINGS.DIDNT_RECEIVE_OTP}{" "}
          </Text>
          {timer > 0 ? (
            <Text style={styles.timerText}>
              {AUTH_STRINGS.GET_ON_WHATSAPP_TIMER} {formatTime(timer)}
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendLink}>
                {AUTH_STRINGS.GET_ON_WHATSAPP}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default OTPVerificationScreen;
