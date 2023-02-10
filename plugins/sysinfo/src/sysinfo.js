import { React, ReactNative } from "@vendetta/metro/common";
import { version } from "@vendetta";
import { deviceinfo, hwinfo, softinfo, discordinfo } from "./components";

function genDebug() {
  try {
    const { cpuCoreCount, cpuPerc, memUsage } = hwinfo();

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

    const Hermes = HermesInternal.getRuntimeProperties();
    const { reactNativeVersion } = ReactNative.Platform.constants;

    let output = {
      Device: {
        Device: device,
        Model: deviceModel,
        Manufacturer: deviceManufacturer,
        Brand: deviceBrand,
        Display: width + "x" + height,
      },
      Hardware: {
        "CPU Usage": cpuPerc,
        "CPU Cores": cpuCoreCount,
        "Memory Usage": memUsage,
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
      },
      React: {
        Version: React.version,
        "Hermes Bytecode": Hermes["Bytecode Version"],
        Hermes: Hermes["OSS Release Version"],
        Native: `${reactNativeVersion.major ?? 0}.${
          reactNativeVersion.minor ?? 0
        }.${reactNativeVersion.patch ?? 0}`,
      },
    };
    if (window.enmity) {
      output.Discord.Enmity = window.enmity.version;
    }
    // Aliucord detection does not work
    return output;
  } catch (e) {
    alert(e);
    console.log(e);
    console.log(e.trace);
    throw e;
  }
}

export default genDebug;
