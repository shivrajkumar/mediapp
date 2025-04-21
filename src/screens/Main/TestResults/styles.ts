import {StyleSheet, Platform} from "react-native";
import {colors} from "../../../utils/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quinary,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 20 : 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textColor,
  },
  subGreeting: {
    fontSize: 16,
    color: colors.darkGray,
    marginTop: 5,
  },
  reportCard: {
    backgroundColor: colors.tertiary,
    borderRadius: 12,
    margin: 15,
    padding: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reportTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    marginVertical: 15,
  },
  diagnosisContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  diagnosisTextContainer: {
    flex: 2,
  },
  diagnosisLabel: {
    fontSize: 16,
    color: colors.darkGray,
  },
  diagnosisText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
    marginTop: 5,
    marginBottom: 10,
  },
  regrowthBadge: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  regrowthText: {
    color: colors.tertiary,
    fontWeight: "bold",
    fontSize: 14,
  },
  stageImageContainer: {
    flex: 1,
    alignItems: "center",
  },
  stageImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stageText: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 5,
    textAlign: "center",
  },
  treatmentDuration: {
    fontSize: 16,
    color: colors.textColor,
    marginBottom: 20,
  },
  durationHighlight: {
    fontWeight: "bold",
  },
  rootCausesContainer: {
    marginTop: 10,
  },
  rootCausesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  rootCausesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textColor,
  },
  infoIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  infoIconText: {
    color: colors.tertiary,
    fontSize: 12,
    fontWeight: "bold",
  },
  causesIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  causeItem: {
    alignItems: "center",
    width: "22%",
  },
  causeIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  causeName: {
    fontSize: 12,
    color: colors.darkGray,
    textAlign: "center",
  },
  videoCard: {
    backgroundColor: colors.tertiary,
    borderRadius: 12,
    margin: 15,
    marginTop: 0,
    padding: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  videoContainer: {
    position: "relative",
    height: 180,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  videoThumbnail: {
    width: "100%",
    height: "100%",
  },
  playButton: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlayColor,
  },
  videoDuration: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: colors.overlayColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  durationText: {
    color: colors.tertiary,
    fontSize: 12,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
  },
  pricingCard: {
    backgroundColor: colors.tertiary,
    borderRadius: 12,
    margin: 15,
    marginTop: 0,
    padding: 15,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  pricingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pricingLabel: {
    fontSize: 14,
    color: colors.darkGray,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textColor,
    marginVertical: 5,
  },
  taxInfo: {
    fontSize: 12,
    color: colors.darkGray,
  },
  buyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buyButtonText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
