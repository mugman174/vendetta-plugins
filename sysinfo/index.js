(function(a,s,f,y,c,p,h){"use strict";function g(){const{device:e,deviceManufacturer:r,deviceBrand:t,deviceModel:n,systemVersion:o}=s.ReactNative.NativeModules.DCDDeviceManager,{height:i,width:d}=s.ReactNative.DeviceInfo.getConstants().Dimensions.screen||s.ReactNative.DeviceInfo.getConstants().Dimensions.screenPhysicalPixels;return{device:e,deviceManufacturer:r,deviceBrand:t,deviceModel:n,systemVersion:o,width:d,height:i}}function M(){const{cpuCoreCount:e,cpuPercentage:r,memory:t}=y.findByProps("memory"),n=r.toFixed(2)+"%",o=parseFloat((t/1e3).toPrecision(3))+" MB";return{cpuCoreCount:e,cpuPerc:n,memUsage:o}}function P(){const{OS:e}=c.Platform,r=c.Platform.constants.osVersion||c.Platform.constants.Release;return{osName:e,osVersion:r}}function V(){return p.InfoDictionaryManager}function C(){try{const{cpuCoreCount:e,cpuPerc:r,memUsage:t}=M(),{Version:n,Build:o,ReleaseChannel:i}=V(),{device:d,deviceManufacturer:B,deviceBrand:N,deviceModel:R,systemVersion:S,width:$,height:U}=g(),{osName:I,osVersion:O}=P(),l=HermesInternal.getRuntimeProperties(),{reactNativeVersion:u}=s.ReactNative.Platform.constants;let v={Device:{Device:d,Model:R,Manufacturer:B,Brand:N,Display:$+"x"+U},Hardware:{"CPU Usage":r,"CPU Cores":e,"Memory Usage":t},Software:{OS:I,Version:O},Discord:{Branch:i,Version:n,Build:o,Vendetta:f.version},React:{Version:s.React.version,"Hermes Bytecode":l["Bytecode Version"],Hermes:l["OSS Release Version"],Native:`${u.major??0}.${u.minor??0}.${u.patch??0}`}};return window.enmity&&(v.Discord.Enmity=window.enmity.version),v}catch(e){throw alert(e),console.log(e),console.log(e.trace),e}}function D(e,r){try{let t=[`__System Information__
`];const n=C();return Object.keys(n).forEach(o=>{t.push(`[**${o}**]`),Object.keys(n[o]).forEach(i=>{t.push(`> ${i}: ${n[o][i]}`)})}),{content:t.join(`
`)}}catch(t){throw alert(t),console.log(t.trace),t}}let m;var w={onLoad:()=>{m=h.registerCommand({name:"sysinfo",displayName:"sysinfo",description:"system info",displayDescription:"system info",execute:D,applicationId:-1,inputType:1,type:1})},onUnload:()=>{m()}};return a.default=w,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro.common,vendetta,vendetta.metro,vendetta.metro.common.ReactNative,vendetta.metro.common.ReactNative.NativeModules,vendetta.commands);