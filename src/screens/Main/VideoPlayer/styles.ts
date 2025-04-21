import {StyleSheet, Platform, Dimensions} from "react-native";
import {colors} from "../../../utils/color";

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shadowColor,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width,
    height: height,
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    left: 15,
    zIndex: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.overlayColor,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.overlayColor,
  },
  titleText: {
    color: colors.tertiary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  playIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -25,
    marginTop: -25,
    backgroundColor: colors.overlayColor,
    borderRadius: 40,
    padding: 10,
  },
});

export default styles;
