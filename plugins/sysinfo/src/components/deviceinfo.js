import { ReactNative } from "@vendetta/metro/common";

function deviceInfo() {
  const {
    device,
    deviceManufacturer,
    deviceBrand,
    deviceModel,
    systemVersion,
  } = ReactNative.NativeModules.DCDDeviceManager;
  let { height, width, scale } = ReactNative.Dimensions.get("screen");
  height *= scale;
  width *= scale;
  return {
    device,
    deviceManufacturer,
    deviceBrand,
    deviceModel,
    systemVersion,
    width,
    height,
  };
}
export default deviceInfo;
