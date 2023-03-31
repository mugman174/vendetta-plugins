import { NativeModules } from "@vendetta/metro/common/ReactNative";

function discordinfo() {
  return (
    NativeModules.InfoDictionaryManager ?? NativeModules.RTNClientInfoManager
  );
}
export default discordinfo;
