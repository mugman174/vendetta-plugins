import { ReactNative } from "@vendetta/metro/common";

function deviceInfo() {
  const {
    device,
    deviceManufacturer,
    deviceBrand,
    deviceModel,
    systemVersion,
  } = ReactNative.NativeModules.DCDDeviceManager;
  const { height, width } =
    ReactNative.DeviceInfo.getConstants().Dimensions.screen ||
    ReactNative.DeviceInfo.getConstants().Dimensions.screenPhysicalPixels;
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
