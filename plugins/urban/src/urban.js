import { findByProps } from "@vendetta/metro";
const { sendBotMessage } = findByProps("sendBotMessage");
const FORUM_POST_URL =
  "https://discord.com/channels/1015931589865246730/1092643779523121262";

function replaceHighlighted(text) {
  const term_url = "https://www.urbandictionary.com/define.php?term=";

  return text.replace(/\[(.*?)\]/g, (match, word) => {
    word = word.trim();
    return `[${word}](<${encodeURIComponent(term_url + word)}>)`;
  });
}

function quote(text) {
  return `> ${text.replaceAll("\n", "\n> ")}`;
}

export default async function urbanDef(args, ctx) {
  try {
    const options = new Map(args.map((option) => [option.name, option]));

    const word = options.get("word").value.trim(),
      query = encodeURIComponent(word),
      url = `https://api.urbandictionary.com/v0/define?term=${query}`,
      response = await fetch(url),
      data = await response.json(),
      inline_links = options.get("inline_links")?.value || false,
      defObj = data.list?.[0],
      definition = defObj?.definition;

    if (!definition) {
      return sendBotMessage(
        ctx.channel.id,
        `No definition found for \`${word.replaceAll("`", "`󠄴")}\`${
          response.status !== 200 ? ` (${response.status})` : ""
        }`
      );
    }

    const permalink = defObj.permalink;
    let output = `__Definition for **\`${defObj.word}\`**__`;

    if (!inline_links) {
      output += `\n${quote(definition)}\n\n` + `Source: <${permalink}>`;
    } else {
      output +=
        ` ([source](${permalink}))\n` +
        `${quote(replaceHighlighted(definition))}`;
    }

    if (options.get("ephemeral")?.value === false) {
      return { content: output };
    } else {
      sendBotMessage(ctx.channel.id, output);
    }
  } catch (error) {
    alert(error.stack);
    console.error(error);
    sendBotMessage(
      ctx.channel.id,
      `\`\`\`js\n${error.stack}\`\`\`` +
        "An error has occurred while processing the </urban:0> command\n" +
        `Send the error in ${FORUM_POST_URL}.`
    );
  }
  3;
}
