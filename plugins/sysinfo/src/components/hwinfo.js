import { findByProps } from "@vendetta/metro";

function hwinfo() {
  const { cpuCoreCount, cpuPercentage, memory } = findByProps("memory");
  const cpuPerc = cpuPercentage.toFixed(2) + "%";
  const memUsage = parseFloat((memory / 1000).toPrecision(3)) + " MB";
  return { cpuCoreCount, cpuPerc, memUsage };
}

export default hwinfo;
