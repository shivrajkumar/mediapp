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
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    backgroundColor: colors.tertiary,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textColor,
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    color: colors.danger,
    fontWeight: "600",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: colors.darkGray,
    marginTop: 10,
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  shopButtonText: {
    color: colors.tertiary,
    fontWeight: "bold",
    fontSize: 16,
  },
  cartList: {
    padding: 15,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textColor,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  quantityButton: {
    backgroundColor: colors.quinary,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  removeButton: {
    padding: 5,
  },
  cartSummary: {
    backgroundColor: colors.tertiary,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: colors.darkGray,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textColor,
  },
  summaryTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 15,
  },
  checkoutButtonText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
