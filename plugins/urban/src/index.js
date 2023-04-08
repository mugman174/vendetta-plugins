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
          displayName: "word",
          description: "The word you want the definition for",
          displayDescription: "The word you want the definition for",
          required: true,
          type: 3,
        },
        {
          name: "ephemeral",
          displayName: "ephemeral",
          description: "Make outputs only be seen by you (default: true)",
          displayDescription: "Make outputs only be seen by you (default: true)",
          type: 5,
          required: false,
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
