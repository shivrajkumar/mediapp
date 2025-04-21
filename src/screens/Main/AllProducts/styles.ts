import {StyleSheet} from "react-native";
import {colors} from "../../../utils/color";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    backgroundColor: colors.tertiary,
    justifyContent: "space-between",
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textColor,
    flex: 1,
    textAlign: "center",
  },
  categoriesContainer: {
    backgroundColor: colors.tertiary,
  },
  categoriesContent: {
    marginVertical: 10,
    marginLeft: 10,
    height: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: colors.darkGray,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    marginTop: 10,
    color: colors.darkGray,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: colors.tertiary,
    fontWeight: "bold",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: colors.darkGray,
    fontSize: 16,
    textAlign: "center",
  },
  productsContainer: {
    padding: 10,
  },
  productRow: {
    justifyContent: "space-between",
  },
  cartButton: {
    padding: 5,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: colors.tertiary,
    fontSize: 10,
    fontWeight: "bold",
  },
  viewCartContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  viewCartButton: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewCartButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
});

export default styles;
