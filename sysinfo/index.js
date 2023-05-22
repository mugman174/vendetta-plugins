(function(p,M,c,f,y,N,d,S,b){"use strict";function B(){let{height:e,width:t,scale:n}=c.ReactNative.Dimensions.get("screen");return e*=n,t*=n,{width:t,height:e}}function P(){const{cpuCoreCount:e,cpuPercentage:t,memory:n}=f.findByProps("memory"),i=t.toFixed(2)+"%",s=parseFloat((n/1e3).toPrecision(3))+" MB",{type:a,details:o}=f.findByProps("useNetInfo").fetch()._55;let r="";return a=="cellular"?r=`Cellular ${o.cellularGeneration?.toUpperCase()||""}`:r={wifi:"WiFi",ethernet:"Ethernet",other:"Unknown",bluetooth:"Bluetooth",wimax:"WiMAX",vpn:"VPN"}[a]??a,{cpuCoreCount:e,cpuPerc:i,memUsage:s,netInfo:r}}function V(){return y.NativeModules.InfoDictionaryManager??y.NativeModules.RTNClientInfoManager}function $(){try{const{cpuCoreCount:e,cpuPerc:t,memUsage:n,netInfo:i}=P(),{ReleaseChannel:s}=V(),{vendetta:a,discord:o,react:r,hermes:u,os:l,device:x}=M.getDebugInfo(),{version:O,bytecodeVersion:j}=u,{version:k,nativeVersion:H}=r,{name:w,version:K,sdk:g}=l,{manufacturer:L,brand:C,model:D,codename:T}=x,{version:q}=a,{version:A,build:W}=o,G=w=="iOS"?T:`${C} ${D}`,{width:X,height:z}=B();let m={Device:{Device:G,Model:D,Manufacturer:L,Brand:C,Display:X+"x"+z},Hardware:{"CPU Cores":e,Network:i},Software:{OS:w,Version:K},Discord:{Branch:s,Version:A,Build:W,Vendetta:q,"CPU Usage":t,"Memory Usage":n},React:{Version:k,"Hermes Bytecode":j,Hermes:O,Native:H}};return window.enmity&&(m.Discord.Enmity=window.enmity.version),window.aliucord&&(m.Discord.Aliucord=window.aliucord.version),g&&(m.Software["SDK Version"]=g),m}catch(e){throw alert(e),console.trace(e),e}}function R(e,t){try{let n=[`__System Information__
`];const i=$();Object.keys(i).forEach(o=>{const r=d.storage[o.toLowerCase()],u=e.find(l=>l.name==o.toLowerCase())?.value??r;(u||r)&&!(r&&!u)&&(n.push(`[**${o}**]`),Object.keys(i[o]).forEach(l=>{n.push(`> ${l}: ${i[o][l]}`)}))});const s=d.storage.ephemeral,a=e.find(o=>o.name=="ephemeral")?.value??s;if((a||s)&&!(s&&!a))f.findByProps("sendBotMessage").sendBotMessage(t.channel.id,n.join(`
`));else return{content:n.join(`
`)}}catch(n){throw alert(n),console.error(n),n}}const{FormRow:U,FormSection:E,FormSwitch:I}=b.Forms,h=["device","hardware","software","discord","react","ephemeral"];for(const e of h)d.storage[e]??=!0;var _=()=>(N.useProxy(d.storage),c.React.createElement(c.ReactNative.ScrollView,{style:{flex:1}},c.React.createElement(E,{title:"Options",titleStyleType:"no_border"},h.map(e=>c.React.createElement(U,{label:e,trailing:c.React.createElement(I,{value:d.storage[e],onValueChange:t=>d.storage[e]=t})})))));let v;var F={onLoad:()=>{let e=[{name:"ephemeral",displayName:"ephemeral",description:"Keep sysinfo ephemeral (default: true)",displayDescription:"Keep sysinfo ephemeral (default: true)",type:5,required:!1},...["device","hardware","software","discord","react"].map(t=>({name:t,displayName:t,description:`Display the ${t} section. Set default in settings.`,displayDescription:`Display the ${t} section. Set default in settings.`,type:5,required:!1}))];v=S.registerCommand({name:"sysinfo",displayName:"sysinfo",description:"system info",displayDescription:"system info",options:e,execute:R,applicationId:-1,inputType:1,type:1})},onUnload:()=>{v()},settings:_};return p.default=F,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.debug,vendetta.metro.common,vendetta.metro,vendetta.metro.common.ReactNative,vendetta.storage,vendetta.plugin,vendetta.commands,vendetta.ui.components);