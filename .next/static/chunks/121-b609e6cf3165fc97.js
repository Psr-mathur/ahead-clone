"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{2797:function(e,t,n){var r=n(6314);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,function(e,t){if((t||!e||!e.__esModule)&&null!==e&&("object"==typeof e||"function"==typeof e)){var n=a(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,n&&n.set(e,r)}}(n(2265));var i=r(n(984)),o=n(7437);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var l=(0,i.default)((0,o.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");t.default=l},3222:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(1024),i=n(8533),o=i._(n(2265)),a=n(4887),l=r._(n(2912)),u=n(2301),d=n(7709),s=n(9469);n(7873);let f=n(2706),c=r._(n(6515)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,r,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:u,className:d,style:s,fetchPriority:f,placeholder:c,loading:p,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:w,onLoad:S,onError:j,...P}=e;return o.default.createElement("img",{...P,...g(f),loading:p,width:l,height:a,decoding:u,"data-nimg":y?"fill":"1",className:d,style:s,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,c,b,v,_,h))},[n,c,b,v,_,j,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,c,b,v,_,h)},onError:e=>{w(!0),"empty"!==c&&_(!0),j&&j(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&a.preload?((0,a.preload)(n.src,r),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let b=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(f.RouterContext),r=(0,o.useContext)(s.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[b,v]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:S,meta:j}=(0,u.getImgProps)(e,{defaultLoader:c.default,imgConf:i,blurComplete:b,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...S,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:w,ref:t}),j.priority?o.default.createElement(y,{isAppRouter:!n,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7555:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),o=i.default.createContext({})},8551:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2301:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(7873);let r=n(9540),i=n(7709);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,u,d,{src:s,sizes:f,unoptimized:c=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:_,onLoad:w,onLoadingComplete:S,placeholder:j="empty",blurDataURL:P,fetchPriority:O,layout:C,objectFit:x,objectPosition:E,lazyBoundary:M,lazyRoot:z,...k}=e,{imgConf:I,showAltText:A,blurComplete:R,defaultLoader:D}=t,U=I||i.imageConfigDefault;if("allSizes"in U)l=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);l={...U,allSizes:e,deviceSizes:t}}let L=k.loader||D;delete k.loader,delete k.srcSet;let N="__next_img_default"in L;if(N){if("custom"===l.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!f&&(f=t)}let W="",B=a(y),F=a(b);if("object"==typeof(n=s)&&(o(n)||void 0!==n.src)){let e=o(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,W=e.src,!v){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(s="string"==typeof s?s:W)||s.startsWith("data:")||s.startsWith("blob:"))&&(c=!0,G=!1),l.unoptimized&&(c=!0),N&&s.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(c=!0),p&&(O="high");let T=a(h),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:E}:{},A?{}:{color:"transparent"},_),V=R||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:u,blurHeight:d,blurDataURL:P||"",objectFit:H.objectFit})+'")':'url("'+j+'")',q=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:d}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),s=u.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:n,quality:o,width:u[s]})}}({config:l,src:s,unoptimized:c,width:B,quality:T,sizes:f,loader:L}),J={...k,loading:G?"lazy":m,fetchPriority:O,width:B,height:F,decoding:"async",className:g,style:{...H,...q},sizes:$.sizes,srcSet:$.srcSet,src:$.src},Y={unoptimized:c,priority:p,placeholder:j,fill:v};return{props:J,meta:Y}}},2912:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return m}});let r=n(1024),i=n(8533),o=i._(n(2265)),a=r._(n(2378)),l=n(7555),u=n(1330),d=n(8551);function s(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7873);let c=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(s(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9540:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,u=i?40*i:n,d=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},9469:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(1024),i=r._(n(2265)),o=n(7709),a=i.default.createContext(o.imageConfigDefault)},7709:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6515:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},2378:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(8533),i=r._(n(2265)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7873:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}}}]);