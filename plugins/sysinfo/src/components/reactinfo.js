import { React, ReactNative } from "@vendetta/metro/common";

function reactinfo() {
  const Hermes = HermesInternal.getRuntimeProperties();
  const { reactNativeVersion } = ReactNative.Platform.constants;
  const RNVersion = `${reactNativeVersion.major ?? 0}.${
    reactNativeVersion.minor ?? 0
  }.${reactNativeVersion.patch ?? 0}`;
  return {
    ReactVersion: React.version,
    RNVersion,
    HermesBytecode: Hermes["Bytecode Version"],
    HermesRelease: Hermes["OSS Release Version"],
  };
}

export default reactinfo;
