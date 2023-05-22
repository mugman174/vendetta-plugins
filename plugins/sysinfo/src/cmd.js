import genDebug from "./sysinfo";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { findByProps } from "@vendetta/metro";

function sysinfocmd(args, ctx) {
  try {
    let output = ["__System Information__\n"];
    const data = genDebug();
    Object.keys(data).forEach((option) => {
      const permit = storage[option.toLowerCase()];

      const slasharg = args.find((i) => i.name == option.toLowerCase());
      const slashval = slasharg?.value ?? permit;
      if ((slashval || permit) && !(permit && !slashval)) {
        output.push(`[**${option}**]`);
        Object.keys(data[option]).forEach((subOption) => {
          output.push(`> ${subOption}: ${data[option][subOption]}`);
        });
      }
    });

    const epermit = storage["ephemeral"];
    const ephemeral = args.find((i) => i.name == "ephemeral")?.value ?? epermit;
    if ((ephemeral || epermit) && !(epermit && !ephemeral)) {
      //if (ephemeral === true || ephemeral === undefined) {
      // Make ephemerality configurable?
      findByProps("sendBotMessage").sendBotMessage(
        ctx.channel.id,
        output.join("\n")
      );
    } else {
      return { content: output.join("\n") };
    }
  } catch (e) {
    alert(e);
    console.error(e);
    throw e;
  }
}

export default sysinfocmd;
