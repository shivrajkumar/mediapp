import {StyleSheet, Platform, Dimensions} from "react-native";
import {colors} from "../../../utils/color";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 15,
    color: colors.textColor,
    backgroundColor: colors.tertiary,
    paddingTop: 20,
  },
  sectionListContent: {
    paddingBottom: 20,
  },
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 5,
  },
  largerCard: {
    width: width * 0.35,
    height: 220,
    marginRight: 15,
    marginBottom: 5,
  },
});

export default styles;
