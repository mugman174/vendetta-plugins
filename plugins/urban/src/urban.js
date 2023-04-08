export default async function urbanDef(args, ctx) {
  try {
    const word = args.find((arg) => arg.name === "word")?.value?.trim();
    if (!word) {
      sendBotMessage(ctx.channel.id, `Please provide a word to search the definition for.`);
      return;
    }
    const { sendBotMessage } = findByProps("sendBotMessage");
    const query = encodeURIComponent(word);
    const url = `https://api.urbandictionary.com/v0/define?term=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    const definition = data.list?.[0]?.definition;
    if (!definition) {
      sendBotMessage(ctx.channel.id, `No definition found for "${word}".`);
      return;
    }
    const permalink = data.list[0].permalink;
    const output = `__Definition for \`${word}\`__\n> ${definition.replaceAll("\n", "\n> ")}\n\nSource: <${permalink}>`;
    if (args.find((arg) => arg.name === "ephemeral")?.value === false) {
      return { content: output };
    } else {
      sendBotMessage(ctx.channel.id, output)
    }
  } catch (error) {
    console.error(error);
    sendBotMessage(ctx.channel.id,
      "An error occurred while fetching the definition.\n"+
      `(${error.message})`
    );
  }
}
