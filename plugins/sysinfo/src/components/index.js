import { findByProps } from "@vendetta/metro";
import { React, ReactNative } from "@vendetta/metro/common";
import { version } from "@vendetta";


function genDebug() {
  try {
    const { cpuCoreCount, cpuPercentage, memory } = findByProps("memory");
    const cpuPerc = cpuPercentage.toFixed(2) + "%";
    const memUsage = parseFloat((memory / 1000).toPrecision(3)) + " MB";

    const { Version, Build, ReleaseChannel } =
      ReactNative.NativeModules.InfoDictionaryManager;

    const { osVersion, systemName } = ReactNative.Platform.constants;

    const {
      device,
      deviceManufacturer,
      deviceBrand,
      deviceModel,
      systemVersion,
    } = ReactNative.NativeModules.DCDDeviceManager;
    const { height, width } =
      ReactNative.DeviceInfo.getConstants().Dimensions.screen;
    const Hermes = HermesInternal.getRuntimeProperties()
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
        OS: systemName,
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
    return output;
  } catch (e) {
    alert(e);
    console.log(e);
    console.log(e.trace);
    throw e;
  }
}

export default genDebug;
