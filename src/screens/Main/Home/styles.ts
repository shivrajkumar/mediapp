import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  heroSection: {
    height: 350,
    width: "100%",
  },
  heroBg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  heroBgImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroContent: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: colors.secondaryOverlay,
    borderRadius: 15,
    margin: 15,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 15,
  },
  heroButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  heroButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.tertiary,
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: 15,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 15,
    lineHeight: 20,
  },
  storyCard: {
    width: 220,
    marginRight: 15,
  },
  storyThumbnail: {
    height: 130,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    marginBottom: 8,
  },
  storyImage: {
    height: "100%",
    width: "100%",
  },
  playButton: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: colors.overlayColor,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  videoDurationBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.overlayColor,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  videoDurationText: {
    color: colors.tertiary,
    fontSize: 12,
  },
  storyTitle: {
    fontSize: 14,
    color: colors.textColor,
    lineHeight: 18,
    fontWeight: "500",
    marginBottom: 4,
  },
  videoMetaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  videoMetaText: {
    fontSize: 12,
    color: colors.darkGray,
  },
  causesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  causeCard: {
    width: "31%",
    backgroundColor: colors.causeCard,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  causeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.tertiary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  causeText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.textColor,
  },
  stepCard: {
    flexDirection: "row",
    backgroundColor: colors.quinary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  stepNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.causeCard,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textColor,
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 14,
    color: colors.darkGray,
  },
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 3,
  },
  stepDotInactive: {
    backgroundColor: colors.borderColor,
  },
  planGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  planItem: {
    width: "48%",
    marginBottom: 15,
  },
  planImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  planTitle: {
    fontSize: 14,
    color: colors.textColor,
  },
  planBadges: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  badge: {
    backgroundColor: colors.quinary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  badgeText: {
    fontSize: 12,
    color: colors.darkGray,
  },
  helpOptionsContainer: {
    marginTop: 10,
  },
  doctorsScrollContainer: {
    paddingRight: 15,
  },
  ratingContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ratingSubContainer: {
    alignItems: "center",
    gap: 5,
  },
  ratingNumber: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.textColor,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.darkGray,
  },
  reviewsScrollContainer: {
    paddingRight: 15,
  },
  finalCTA: {
    backgroundColor: colors.primary,
    margin: 15,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  finalCTAText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.tertiary,
  },
  bottomSpacing: {
    height: 80,
  },
  heroesScrollContainer: {
    paddingRight: 15,
  },
});

export default styles;
