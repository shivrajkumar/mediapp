import {StyleSheet, Platform} from "react-native";
import {colors} from "../../../utils/color";
const styles = StyleSheet.create({
  otpScreenContainer: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  otpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 25 : 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  otpHeaderTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.textColor,
  },
  otpHelpText: {
    fontSize: 14,
    color: colors.darkGray,
  },
  otpContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  otpPrompt: {
    fontSize: 16,
    color: colors.textColor,
    marginBottom: 10,
    textAlign: "center",
  },
  phoneDisplayContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  phoneNumberText: {
    fontSize: 16,
    color: colors.darkGray,
    textDecorationLine: "underline",
  },
  editIcon: {
    marginLeft: 8,
  },
  otpInputContainerStyle: {
    marginBottom: 30,
    width: "100%",
  },
  otpInputBoxStyle: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.borderColor,
    backgroundColor: colors.tertiary,
    color: colors.textColor,
    fontSize: 18,
  },
  verifyOtpButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  verifyOtpButtonDisabled: {
    backgroundColor: colors.quinary,
  },
  verifyOtpButtonText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: colors.darkGray,
  },
  timerText: {
    fontSize: 14,
    color: colors.darkGray,
  },
  resendLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "500",
  },
});
export default styles;
