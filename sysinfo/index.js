(function(a,s,l,v,c,y,f){"use strict";function h(){const{device:e,deviceManufacturer:n,deviceBrand:t,deviceModel:o,systemVersion:r}=s.ReactNative.NativeModules.DCDDeviceManager,{height:i,width:d}=s.ReactNative.DeviceInfo.getConstants().Dimensions.screen||s.ReactNative.DeviceInfo.getConstants().Dimensions.screenPhysicalPixels;return{device:e,deviceManufacturer:n,deviceBrand:t,deviceModel:o,systemVersion:r,width:d,height:i}}function p(){const{cpuCoreCount:e,cpuPercentage:n,memory:t}=v.findByProps("memory"),o=n.toFixed(2)+"%",r=parseFloat((t/1e3).toPrecision(3))+" MB";return{cpuCoreCount:e,cpuPerc:o,memUsage:r}}function V(){const{OS:e}=c.Platform,n=c.Platform.constants.osVersion||c.Platform.constants.Release;return{osName:e,osVersion:n}}function g(){return y.InfoDictionaryManager}function w(){const e=HermesInternal.getRuntimeProperties(),{reactNativeVersion:n}=s.ReactNative.Platform.constants,t=`${n.major??0}.${n.minor??0}.${n.patch??0}`;return{ReactVersion:s.React.version,RNVersion:t,HermesBytecode:e["Bytecode Version"],HermesRelease:e["OSS Release Version"]}}function M(){try{const{cpuCoreCount:e,cpuPerc:n,memUsage:t}=p(),{Version:o,Build:r,ReleaseChannel:i}=g(),{device:d,deviceManufacturer:P,deviceBrand:C,deviceModel:B,systemVersion:j,width:N,height:$}=h(),{osName:H,osVersion:U}=V(),{ReactVersion:I,RNVersion:O,HermesBytecode:S,HermesRelease:_}=w();let u={Device:{Device:d,Model:B,Manufacturer:P,Brand:C,Display:N+"x"+$},Hardware:{"CPU Usage":n,"CPU Cores":e,"Memory Usage":t},Software:{OS:H,Version:U},Discord:{Branch:i,Version:o,Build:r,Vendetta:l.version},React:{Version:I,"Hermes Bytecode":S,Hermes:_,Native:O}};return window.enmity&&(u.Discord.Enmity=window.enmity.version),window.aliucord&&(u.Discord.Aliucord=window.aliucord.version),u}catch(e){throw alert(e),console.log(e),console.log(e.trace),e}}function R(e,n){try{let t=[`__System Information__
`];const o=M();return Object.keys(o).forEach(r=>{t.push(`[**${r}**]`),Object.keys(o[r]).forEach(i=>{t.push(`> ${i}: ${o[r][i]}`)})}),{content:t.join(`
`)}}catch(t){throw alert(t),console.log(t.trace),t}}let m;var D={onLoad:()=>{m=f.registerCommand({name:"sysinfo",displayName:"sysinfo",description:"system info",displayDescription:"system info",execute:R,applicationId:-1,inputType:1,type:1})},onUnload:()=>{m()}};return a.default=D,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro.common,vendetta,vendetta.metro,vendetta.metro.common.ReactNative,vendetta.metro.common.ReactNative.NativeModules,vendetta.commands);
