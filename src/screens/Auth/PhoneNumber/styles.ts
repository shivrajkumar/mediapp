import {StyleSheet, Platform} from "react-native";
import {colors} from "../../../utils/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.darkGray,
    marginTop: Platform.OS === "ios" ? 10 : 30,
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: colors.quinary,
  },
  heroImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: colors.textColor,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderColor,
  },
  dividerText: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: colors.darkGray,
  },
  phoneInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: colors.tertiary,
    alignItems: "center",
    paddingHorizontal: 15,
    width: "100%",
    height: 55,
  },
  countryCode: {
    fontSize: 16,
    color: colors.textColor,
    marginRight: 10,
    fontWeight: "500",
  },
  phoneInput: {
    flex: 1,
    height: 55,
    fontSize: 16,
    color: colors.textColor,
  },
  otpButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
    height: 55,
    marginBottom: 20,
    marginTop: 10,
  },
  otpButtonDisabled: {
    backgroundColor: colors.quinary,
  },
  otpButtonText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 11,
    color: colors.darkGray,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 30,
  },
  termsLink: {
    color: colors.darkGray,
    fontWeight: "bold",
  },
  bottomIndicator: {
    width: 40,
    height: 5,
    backgroundColor: colors.shadowColor,
    borderRadius: 3,
    marginTop: "auto",
  },
});
export default styles;
