import { ReactNative } from "@vendetta/metro/common";

function deviceInfo() {
  let { height, width, scale } = ReactNative.Dimensions.get("screen");
  height *= scale;
  width *= scale;
  return {
    width,
    height,
  };
}
export default deviceInfo;
