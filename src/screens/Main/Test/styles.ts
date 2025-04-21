import {StyleSheet, Platform} from "react-native";
import {colors} from "../../../utils/color";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.profileCard,
  },
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    paddingBottom: 20,
    backgroundColor: colors.profileCard,
  },
  backButton: {
    padding: 8,
  },
  closeButton: {
    padding: 8,
  },
  logoContainer: {
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.tertiary,
  },
  divider: {
    height: 3,
    backgroundColor: colors.borderColor,
    width: "18%",
    marginTop: 10,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.darkGray,
    marginTop: 10,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: colors.borderColor,
    width: "100%",
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.primary,
  },
  questionContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionTitle: {
    fontSize: 20,
    // fontWeight: "bold",
    color: colors.textColor,
    marginBottom: 30,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  selectedOption: {
    borderColor: colors.primary,
    backgroundColor: colors.causeCard,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: colors.textColor,
  },
  imageOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  selectedImageOption: {
    borderColor: colors.primary,
    backgroundColor: colors.causeCard,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  optionImage: {
    width: 100,
    height: 80,
    borderRadius: 4,
  },
});

export default styles;
