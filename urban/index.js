(function(o,h,y){"use strict";const{sendBotMessage:r}=h.findByProps("sendBotMessage");async function m(n,t){try{const e=new Map(n.map(f=>[f.name,f])),c=e.get("word").value.trim(),g=`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(c)}`,a=await fetch(g),b=await a.json(),_=e.get("inline_links")?.value||!1,s=b.list?.[0],d=s?.definition;if(!d)return r(t.channel.id,`No definition found for \`${c.replaceAll("`","`\u{E0134}")}\`${a.status!==200?` (${a.status})`:""}`);const p=s.permalink;let i=`__Definition for **\`${s.word}\`**__`;if(_?i+=` ([source](${p} "Link to the place where the definition was found"))
${l(w(d))}`:i+=`
${l(d)}

Source: <${p}>`,e.get("ephemeral")?.value===!1)return{content:i};r(t.channel.id,i)}catch(e){console.error(e),r(t.channel.id,`\`\`\`js
${e.stack}\`\`\`An error occurred while processing the command
Send the error in \${FORUM_POST_URL}, to get this issue solved (hopefully)`)}}function l(n){return`> ${n.replaceAll(`
`,`
> `)}`}function w(n){return n.replace(/\[(.*?)\]/g,(t,e)=>(e=e.trim(),`[${e}](<https://www.urbandictionary.com/define.php?term=${encodeURIComponent(e)}> "Definition for \u201C${e}\u201D")`))}let u;var $={onLoad:()=>{u=y.registerCommand({name:"urban",displayName:"urban",description:"Search urban dictionary",displayDescription:"Search urban dictionary",options:[{name:"word",displayName:"word",description:"The word you want the definition for",displayDescription:"The word you want the definition for",required:!0,type:3},{name:"ephemeral",displayName:"ephemeral",description:"Make outputs only be seen by you (default: true)",displayDescription:"Make outputs only be seen by you (default: true)",type:5,required:!1},{name:"inline_links",displayName:"inline_links",description:"Makes the [highlighted] words pressable (default: false)",displayDescription:"Makes the [highlighted] words pressable (default: false)",type:5,required:!1}],execute:m,applicationId:-1,inputType:1,type:1})},onUnload:()=>{u()}};return o.default=$,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro,vendetta.commands);