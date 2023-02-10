import sysinfo from "./cmd";
import { registerCommand } from "@vendetta/commands";

let syscmd;

export default {
  onLoad: () => {
    syscmd = registerCommand({
      name: "sysinfo",
      displayName: "sysinfo",

      description: "system info",
      displayDescription: "system info",

      execute: sysinfo,
      applicationId: -1,
      inputType: 1,
      type: 1,
    });
  },
  onUnload: () => {
    syscmd();
  },
};
