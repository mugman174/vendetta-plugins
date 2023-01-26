import UrbanDef from "./urban";
import { registerCommand } from "@vendetta/commands";

let urbcmd;

export default {
  onLoad: () => {
    urbcmd = registerCommand({
      name: "urban",
      displayName: "urban",

      description: "Search urban dictionary",
      displayDescription: "Search urban dictionary",

      options: [
        {
          name: "word",
          description: "The word you want the definition for",
          required: true,
          type: 3,
          displayName: "word",
          displayDescription: "The word you want the description for",
        },
      ],

      execute: UrbanDef,
      applicationId: -1,
      inputType: 1,
      type: 1,
    });
  },
  onUnload: () => {
    urbcmd();
  },
};
