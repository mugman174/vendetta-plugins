import { findByProps } from "@vendetta/metro";

function hwinfo() {
  const { cpuCoreCount, cpuPercentage, memory } = findByProps("memory");
  const cpuPerc = cpuPercentage.toFixed(2) + "%";
  const memUsage = parseFloat((memory / 1000).toPrecision(3)) + " MB";
  const { type, details } = Object.values(
    findByProps("useNetInfo").fetch(),
  ).filter((i) => i?.type)[0];
  let netInfo = "";
  const networkMap = {
    wifi: "WiFi",
    ethernet: "Ethernet",
    other: "Unknown",
    bluetooth: "Bluetooth",
    wimax: "WiMAX",
    vpn: "VPN",
    cellular: details.cellularGeneration?.toUpperCase() || "Cellular",
  };
  netInfo = networkMap[type] ?? type;
  return { cpuCoreCount, cpuPerc, memUsage, netInfo };
}

export default hwinfo;
