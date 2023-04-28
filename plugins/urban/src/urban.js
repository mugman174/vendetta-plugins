import { findByProps } from "@vendetta/metro";

export default async function urbanDef(args, ctx) {
	try {
		const { sendBotMessage } = findByProps("sendBotMessage");
		const options = new Map(args.map((option) => [option.name, option]));

		const word = options.get("word").value.trim();
		const query = encodeURIComponent(word);
		const url = `https://api.urbandictionary.com/v0/define?term=${query}`;
		const data = await fetch(url).then(res=>res.json);

		const inline_links = options.get("inline_links")?.value || false;
		const defObj = data.list?.[0];
		const definition = defObj?.definition;
		if (!definition) {
			return sendBotMessage(ctx.channel.id, `No definition found for \`${word.replaceAll("`", "`󠄴")}\`.`);
		}
		const permalink = defObj.permalink;
		let output = `__Definition for \`${defObj.word}\`__`;
		
		if (!inline_links) {
			output += `\n> ${quote(definition)}\n\n`+
								`Source: <${permalink}>`;
		} else {
			output += ` ([source](${permalink} "Link to the place where the definition was found"))\n`+
				`> ${quote(replaceHighlighted(definition))}`
			
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
			"An error occurred while fetching the definition.\n" +
				`(${error.message})`
		);
	}
}
function quote(text) {
	return `> ${text.replaceAll("\n", "\n>")}`
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
