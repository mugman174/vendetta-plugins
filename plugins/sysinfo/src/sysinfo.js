import genDebug from "./components";

function sysinfo(args, ctx) {
  try {
    let output = ["__System Information__\n"];
    const data = genDebug();
    Object.keys(data).forEach((option) => {
      output.push(`[**${option}**]`);
      Object.keys(data[option]).forEach((subOption) => {
        output.push(`> ${subOption}: ${data[option][subOption]}`);
      });
    });
    return { content: output.join("\n") };
  } catch (e) {
    alert(e);
    console.log(e.trace);
    throw e;
  }
}

export default sysinfo;
