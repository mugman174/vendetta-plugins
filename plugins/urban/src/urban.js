import { findByProps } from "@vendetta/metro";
const { sendBotMessage } = findByProps("sendBotMessage");
const FORUM_POST_URL = "https://discord.com/channels/1015931589865246730/1092643779523121262";
export default async function urbanDef(args, ctx) {
	try {
		const options = new Map(args.map((option) => [option.name, option]));

		const word = options.get("word").value.trim();
		const query = encodeURIComponent(word);
		const url = `https://api.urbandictionary.com/v0/define?term=${query}`;
		const response = await fetch(url),
			data = await response.json();

		const inline_links = options.get("inline_links")?.value || false;
		const defObj = data.list?.[0];
		const definition = defObj?.definition;
		if (!definition) {
			return sendBotMessage(ctx.channel.id, `No definition found for \`${word.replaceAll("`", "`󠄴")}\`${response.status !== 200 ? ` (${response.status})` : ""}`);
		}
		const permalink = defObj.permalink;
		let output = `__Definition for **\`${defObj.word}\`**__`;
		
		if (!inline_links) {
			output += `\n${quote(definition)}\n\n`+
			`Source: <${permalink}>`;
		} else {
			output += ` ([source](${permalink} "Link to the place where the definition was found"))\n`+
			`${quote(replaceHighlighted(definition))}`;
		}


		if (options.get("ephemeral")?.value === false) {
			return { content: output };
		} else {
			sendBotMessage(ctx.channel.id, output);
		}
	} catch (error) {
		console.error(error);
		sendBotMessage(
			ctx.channel.id,
			`\`\`\`js\n${error.stack}\`\`\``+
			"An error occurred while processing the command\n" +
			"Send the error in ${FORUM_POST_URL}, to get this issue solved (hopefully)"
		);
	}
}
function quote(text) {
	return `> ${text.replaceAll("\n", "\n> ")}`;
}
function replaceHighlighted(text) {
	return text.replace(
		/\[(.*?)\]/g,
		(match, word) => {
			word = word.trim();
			return `[${word}](<https://www.urbandictionary.com/define.php?term=${encodeURIComponent(word)}> "Definition for “${word}”")`
		}
	);
}
