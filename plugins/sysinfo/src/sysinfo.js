import { getDebugInfo } from "@vendetta/debug";

import { deviceinfo, hwinfo, discordinfo } from "./components";

function genDebug() {
  try {
    const { cpuCoreCount, cpuPerc, memUsage, netInfo } = hwinfo();

    const { ReleaseChannel: discordBranch } = discordinfo();
    const { vendetta, discord, react, hermes, os, device } = getDebugInfo();
    const { version: HermesRelease, bytecodeVersion: HermesBytecode } = hermes;
    const { version: ReactVersion, nativeVersion: RNVersion } = react;
    const { name: osName, version: osVersion, sdk: osSdk } = os;
    const {
      manufacturer: deviceManufacturer,
      brand: deviceBrand,
      model: deviceModel,
      codename: deviceCodename,
    } = device;
    const { version: vendettaVersion } = vendetta;
    const { version: discordVersion, build: discordBuild } = discord;

    const deviceName =
      osName == "iOS" ? deviceCodename : `${deviceBrand} ${deviceModel}`;

    const { width, height } = deviceinfo();

    let output = {
      Device: {
        Device: deviceName,
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
        Branch: discordBranch,
        Version: discordVersion,
        Build: discordBuild,
        Vendetta: vendettaVersion,
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
    if (osSdk) {
      output.Software["SDK Version"] = osSdk;
    }
    return output;
  } catch (e) {
    alert(e);
    console.trace(e);
    throw e;
  }
}

export default genDebug;
