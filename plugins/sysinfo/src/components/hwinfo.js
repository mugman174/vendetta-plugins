import { findByProps } from "@vendetta/metro";

function hwinfo() {
  const { cpuCoreCount, cpuPercentage, memory } = findByProps("memory");
  const cpuPerc = cpuPercentage.toFixed(2) + "%";
  const memUsage = parseFloat((memory / 1000).toPrecision(3)) + " MB";
  const { type, details } =  findByProps("useNetInfo").fetch()._55;
  let netInfo = type;
  if (type == "cellular") {
    netInfo += ` ${details.cellularGeneration}`;
  }
  return { cpuCoreCount, cpuPerc, memUsage, netInfo };
}

export default hwinfo;
