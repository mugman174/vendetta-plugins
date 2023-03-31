(function(u,d,v,y,m,c,p){"use strict";function h(){const{device:e,deviceManufacturer:t,deviceBrand:n,deviceModel:r,systemVersion:i}=d.ReactNative.NativeModules.DCDDeviceManager;let{height:o,width:a,scale:s}=d.ReactNative.Dimensions.get("screen");return o*=s,a*=s,{device:e,deviceManufacturer:t,deviceBrand:n,deviceModel:r,systemVersion:i,width:a,height:o}}function w(){const{cpuCoreCount:e,cpuPercentage:t,memory:n}=m.findByProps("memory"),r=t.toFixed(2)+"%",i=parseFloat((n/1e3).toPrecision(3))+" MB",{type:o,details:a}=m.findByProps("useNetInfo").fetch()._55;let s="";return o=="cellular"?s=`Cellular ${a.cellularGeneration?.toUpperCase()||""}`:s={wifi:"WiFi",ethernet:"Ethernet",other:"Unknown",bluetooth:"Bluetooth",wimax:"WiMAX",vpn:"VPN"}[o]??o,{cpuCoreCount:e,cpuPerc:r,memUsage:i,netInfo:s}}function V(){const{OS:e}=c.Platform,t=c.Platform.constants.osVersion||c.Platform.constants.Release;return{osName:e,osVersion:t}}function M(){return c.NativeModules.InfoDictionaryManager??c.NativeModules.RTNClientInfoManager}function C(){const e=HermesInternal.getRuntimeProperties(),{reactNativeVersion:t}=d.ReactNative.Platform.constants,n=`${t.major??0}.${t.minor??0}.${t.patch??0}`;return{ReactVersion:d.React.version,RNVersion:n,HermesBytecode:e["Bytecode Version"],HermesRelease:e["OSS Release Version"]}}function g(){try{const{cpuCoreCount:e,cpuPerc:t,memUsage:n,netInfo:r}=w(),{Version:i,Build:o,ReleaseChannel:a}=M(),{device:s,deviceManufacturer:P,deviceBrand:R,deviceModel:$,systemVersion:E,width:D,height:U}=h(),{osName:H,osVersion:I}=V(),{ReactVersion:S,RNVersion:_,HermesBytecode:O,HermesRelease:j}=C();let l={Device:{Device:s,Model:$,Manufacturer:P,Brand:R,Display:D+"x"+U},Hardware:{"CPU Cores":e,Network:r},Software:{OS:H,Version:I},Discord:{Branch:a,Version:i,Build:o,Vendetta:v.version,"CPU Usage":t,"Memory Usage":n},React:{Version:S,"Hermes Bytecode":O,Hermes:j,Native:_}};return window.enmity&&(l.Discord.Enmity=window.enmity.version),window.aliucord&&(l.Discord.Aliucord=window.aliucord.version),l}catch(e){throw y.showConfirmationAlert({title:"Error | Send to mugman#0043",content:e}),console.trace(e),e}}function B(e,t){let n=[`__System Information__
`];const r=g();return Object.keys(r).forEach(i=>{n.push(`[**${i}**]`),Object.keys(r[i]).forEach(o=>{n.push(`> ${o}: ${r[i][o]}`)})}),{content:n.join(`
`)}}let f;var N={onLoad:()=>{f=p.registerCommand({name:"sysinfo",displayName:"sysinfo",description:"system info",displayDescription:"system info",execute:B,applicationId:-1,inputType:1,type:1})},onUnload:()=>{f()}};return u.default=N,Object.defineProperty(u,"__esModule",{value:!0}),u})({},vendetta.metro.common,vendetta,vendetta.ui.alerts,vendetta.metro,vendetta.metro.common.ReactNative,vendetta.commands);