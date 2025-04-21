import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.causeCard,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileLogo: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: colors.tertiary,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 15,
    color: colors.textColor,
  },
  editButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  rootCauseCard: {
    backgroundColor: colors.profileCard,
    borderRadius: 10,
    margin: 15,
    padding: 20,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  cardIconContainer: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.tertiary,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: colors.tertiary,
    opacity: 0.9,
  },
  testButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  testButtonText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
  actionCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  actionCard: {
    backgroundColor: colors.causeCard,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    width: "31%",
    justifyContent: "center",
  },
  actionCardText: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 11,
    fontWeight: "600",
    color: colors.textColor,
  },
  menuContainer: {
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  menuItemText: {
    fontSize: 14,
    color: colors.textColor,
    fontWeight: "600",
  },
  versionContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.darkGray,
    marginBottom: 5,
  },
  versionText: {
    fontSize: 10,
    color: colors.darkGray,
  },
});

export default styles;
