import { findByProps } from "@vendetta/metro";

function hwinfo() {
  const { cpuCoreCount, cpuPercentage, memory } = findByProps("memory");
  const cpuPerc = cpuPercentage.toFixed(2) + "%";
  const memUsage = parseFloat((memory / 1000).toPrecision(3)) + " MB";
  const { netType: type, netDetails: details } =
    findByProps("useNetInfo").fetch()._55;
  let netInfo = type;
  if (netType == "cellular") {
    netInfo += ` ${netDetails.cellularGeneration}`;
  }
  alert(netType);
  return { cpuCoreCount, cpuPerc, memUsage, netInfo };
}

export default hwinfo;
