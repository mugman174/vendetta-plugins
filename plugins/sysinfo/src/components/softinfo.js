import { Platform } from "@vendetta/metro/common/ReactNative";

function softinfo() {
  const { OS } = Platform;
  const osVersion = Platform.constants.osVersion || Platform.constants.Release;
  return { osName: OS, osVersion };
}

export default softinfo;
