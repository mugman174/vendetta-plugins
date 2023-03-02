import { React, ReactNative } from "@vendetta/metro/common";
import { version } from "@vendetta";
import {
  deviceinfo,
  hwinfo,
  softinfo,
  discordinfo,
  reactinfo,
} from "./components";

function genDebug() {
  const { cpuCoreCount, cpuPerc, memUsage, netInfo } = hwinfo();

  const { Version, Build, ReleaseChannel } = discordinfo();

  const {
    device,
    deviceManufacturer,
    deviceBrand,
    deviceModel,
    systemVersion,
    width,
    height,
  } = deviceinfo();
  const { osName, osVersion } = softinfo();

  const { ReactVersion, RNVersion, HermesBytecode, HermesRelease } =
    reactinfo();

  let output = {
    Device: {
      Device: device,
      Model: deviceModel,
      Manufacturer: deviceManufacturer,
      Brand: deviceBrand,
      Display: width + "x" + height,
    },
    Hardware: {
      "CPU Cores": cpuCoreCount,
      Network: netInfo,
    },
    Software: {
      OS: osName,
      Version: osVersion,
    },
    Discord: {
      Branch: ReleaseChannel,
      Version: Version,
      Build: Build,
      Vendetta: version,
      "CPU Usage": cpuPerc,
      "Memory Usage": memUsage,
    },
    React: {
      Version: ReactVersion,
      "Hermes Bytecode": HermesBytecode,
      Hermes: HermesRelease,
      Native: RNVersion,
    },
  };
  if (window.enmity) {
    output.Discord.Enmity = window.enmity.version;
  }
  if (window.aliucord) {
    output.Discord.Aliucord = window.aliucord.version;
  }
  return output;
}

export default genDebug;
