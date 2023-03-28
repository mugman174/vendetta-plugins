async function urbanDef(args, ctx) {
  try {
    const word = args.find((arg) => arg.name === "word")?.value?.trim();
    if (!word) {
      return { content: "Please provide a word to define." };
    }
    const query = encodeURIComponent(word);
    const url = `https://api.urbandictionary.com/v0/define?term=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    const definition = data.list?.[0]?.definition;
    if (!definition) {
      return { content: `No definition found for "${word}".` };
    }
    const permalink = data.list[0].permalink;
    const output = `__Definition for \`${word}\`__\n\n${definition}\n\nSource: <${permalink}>`;
    return { content: output };
  } catch (error) {
    console.error(error);
    return { content: "An error occurred while fetching the definition." };
  }
}

export default urbanDef;
