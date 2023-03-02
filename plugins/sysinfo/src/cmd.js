import genDebug from "./sysinfo";

function sysinfocmd(args, ctx) {
    let output = ["__System Information__\n"];
    const data = genDebug();
    Object.keys(data).forEach((option) => {
      output.push(`[**${option}**]`);
      Object.keys(data[option]).forEach((subOption) => {
        output.push(`> ${subOption}: ${data[option][subOption]}`);
      });
    });
    return { content: output.join("\n") };
}

export default sysinfocmd;
