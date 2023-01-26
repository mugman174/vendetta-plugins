(function(n,d){"use strict";async function c(s,f){const i=s.find(e=>e.name=="word").value,p=`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(i)}`,t=await(await fetch(p)).json();let a=`No definition found for ${i}`,r="";if(t.list&&t.list[0]){let e=t.list[0];a=e.definition,r=`Source: <${e.permalink}>`}return{content:`__Definition for \`${i}\`__

${a}

${r}`}}let o;var u={onLoad:()=>{o=d.registerCommand({name:"urban",displayName:"urban",description:"Search urban dictionary",displayDescription:"Search urban dictionary",options:[{name:"word",description:"The word you want the definition for",required:!0,type:3,displayName:"word",displayDescription:"The word you want the description for"}],execute:c,applicationId:-1,inputType:1,type:1})},onUnload:()=>{o()}};return n.default=u,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.commands);
