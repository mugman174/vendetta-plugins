async function UrbanDef(args, ctx) {
  //try{
  const word = args.find((arg) => arg.name == "word").value;
  const query = encodeURIComponent(word);
  const url = `https://api.urbandictionary.com/v0/define?term=${query}`;
  const res = await (await fetch(url)).json();
  let out = `No definition found for ${word}`;
  let perma = "";
  if (res.list && res.list[0]) {
    let rlo = res.list[0];
    out = rlo.definition;
    perma = `Source: <${rlo.permalink}>`;
  }
  return {
    content: `__Definition for \`${word}\`__\n\n${out}\n\n${perma}`,
  };
  //}catch(e){alert(e);console.log(e);throw(e)}
}

export default UrbanDef;
