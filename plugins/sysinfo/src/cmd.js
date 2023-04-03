import genDebug from "./sysinfo";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

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
    return { content: output.join("\n") };
  } catch (e) {
    alert(e);
    console.error(e);
    throw e;
  }
}

export default sysinfocmd;
