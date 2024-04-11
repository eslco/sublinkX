import{bd as e,d as t,am as a,r,bq as n,o,C as i,c as l,e as u,Z as s,w as d,a2 as c,t as f,M as h,N as v,m as p,l as m,g,$ as y,ay as C,W as w,aH as E,a1 as M,a0 as _,aN as N,aO as R}from"./index.DDtd-U5d.js";import{E as A}from"./el-card.BrD9DXyp.js";import{g as I,E as k,a as b,c as P,d as S,b as z}from"./node.CEbEhqFk.js";import{E as O}from"./el-tag.rlQtCP1E.js";import{E as D,a as L}from"./el-select.vHplE1dK.js";import"./el-scrollbar.W9MDnCRG.js";import"./el-popper.DIcchwDq.js";import{E as T}from"./el-link.DtAEUXaU.js";import"./el-tooltip.l0sNRNKZ.js";import{E as V,a as B}from"./el-col.d8HNcgOg.js";import{E as x}from"./el-dialog.QTXgS5XX.js";import{_ as U}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.DA1k9kKJ.js";import"./_initCloneObject.CldPqO4-.js";import"./debounce.BGfoqU0l.js";import"./index.DfOG9kuX.js";import"./strings.Beciz0aK.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.iKS4OFZ3.js";import"./refs.5UhZbuPJ.js";function H(t){return e({url:"/api/v1/subcription/delete",method:"delete",params:t})}var F,j,Q,Y,K=function(){return K=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},K.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError,function(e){var t=function(){function t(e,a,r,o){if(this.version=e,this.errorCorrectionLevel=a,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var i=[],l=0;l<this.size;l++)i.push(!1);for(l=0;l<this.size;l++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(r);if(this.drawCodewords(u),-1==o){var s=1e9;for(l=0;l<8;l++){this.applyMask(l),this.drawFormatBits(l);var d=this.getPenaltyScore();d<s&&(o=l,s=d),this.applyMask(l)}}n(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return t.encodeText=function(a,r){var n=e.QrSegment.makeSegments(a);return t.encodeSegments(n,r)},t.encodeBinary=function(a,r){var n=e.QrSegment.makeBytes(a);return t.encodeSegments([n],r)},t.encodeSegments=function(e,r,i,l,u,s){if(void 0===i&&(i=1),void 0===l&&(l=40),void 0===u&&(u=-1),void 0===s&&(s=!0),!(t.MIN_VERSION<=i&&i<=l&&l<=t.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");var d,c;for(d=i;;d++){var f=8*t.getNumDataCodewords(d,r),h=o.getTotalBits(e,d);if(h<=f){c=h;break}if(d>=l)throw new RangeError("Data too long")}for(var v=0,p=[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH];v<p.length;v++){var m=p[v];s&&c<=8*t.getNumDataCodewords(d,m)&&(r=m)}for(var g=[],y=0,C=e;y<C.length;y++){var w=C[y];a(w.mode.modeBits,4,g),a(w.numChars,w.mode.numCharCountBits(d),g);for(var E=0,M=w.getData();E<M.length;E++){var _=M[E];g.push(_)}}n(g.length==c);var N=8*t.getNumDataCodewords(d,r);n(g.length<=N),a(0,Math.min(4,N-g.length),g),a(0,(8-g.length%8)%8,g),n(g.length%8==0);for(var R=236;g.length<N;R^=253)a(R,8,g);for(var A=[];8*A.length<g.length;)A.push(0);return g.forEach((function(e,t){return A[t>>>3]|=e<<7-(7&t)})),new t(d,r,A,u)},t.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},t.prototype.getModules=function(){return this.modules},t.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);var t=this.getAlignmentPatternPositions(),a=t.length;for(e=0;e<a;e++)for(var r=0;r<a;r++)0==e&&0==r||0==e&&r==a-1||e==a-1&&0==r||this.drawAlignmentPattern(t[e],t[r]);this.drawFormatBits(0),this.drawVersion()},t.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,a=t,o=0;o<10;o++)a=a<<1^1335*(a>>>9);var i=21522^(t<<10|a);n(i>>>15==0);for(o=0;o<=5;o++)this.setFunctionModule(8,o,r(i,o));this.setFunctionModule(8,7,r(i,6)),this.setFunctionModule(8,8,r(i,7)),this.setFunctionModule(7,8,r(i,8));for(o=9;o<15;o++)this.setFunctionModule(14-o,8,r(i,o));for(o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,r(i,o));for(o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,r(i,o));this.setFunctionModule(8,this.size-8,!0)},t.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);var a=this.version<<12|e;n(a>>>18==0);for(t=0;t<18;t++){var o=r(a,t),i=this.size-11+t%3,l=Math.floor(t/3);this.setFunctionModule(i,l,o),this.setFunctionModule(l,i,o)}}},t.prototype.drawFinderPattern=function(e,t){for(var a=-4;a<=4;a++)for(var r=-4;r<=4;r++){var n=Math.max(Math.abs(r),Math.abs(a)),o=e+r,i=t+a;0<=o&&o<this.size&&0<=i&&i<this.size&&this.setFunctionModule(o,i,2!=n&&4!=n)}},t.prototype.drawAlignmentPattern=function(e,t){for(var a=-2;a<=2;a++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,t+a,1!=Math.max(Math.abs(r),Math.abs(a)))},t.prototype.setFunctionModule=function(e,t,a){this.modules[t][e]=a,this.isFunction[t][e]=!0},t.prototype.addEccAndInterleave=function(e){var a=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(a,r))throw new RangeError("Invalid argument");for(var o=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][a],i=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][a],l=Math.floor(t.getNumRawDataModules(a)/8),u=o-l%o,s=Math.floor(l/o),d=[],c=t.reedSolomonComputeDivisor(i),f=0,h=0;f<o;f++){var v=e.slice(h,h+s-i+(f<u?0:1));h+=v.length;var p=t.reedSolomonComputeRemainder(v,c);f<u&&v.push(0),d.push(v.concat(p))}var m=[],g=function(e){d.forEach((function(t,a){(e!=s-i||a>=u)&&m.push(t[e])}))};for(f=0;f<d[0].length;f++)g(f);return n(m.length==l),m},t.prototype.drawCodewords=function(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var a=0,o=this.size-1;o>=1;o-=2){6==o&&(o=5);for(var i=0;i<this.size;i++)for(var l=0;l<2;l++){var u=o-l,s=!(o+1&2)?this.size-1-i:i;!this.isFunction[s][u]&&a<8*e.length&&(this.modules[s][u]=r(e[a>>>3],7-(7&a)),a++)}}n(a==8*e.length)},t.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var a=0;a<this.size;a++){var r=void 0;switch(e){case 0:r=(a+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=a%3==0;break;case 3:r=(a+t)%3==0;break;case 4:r=(Math.floor(a/3)+Math.floor(t/2))%2==0;break;case 5:r=a*t%2+a*t%3==0;break;case 6:r=(a*t%2+a*t%3)%2==0;break;case 7:r=((a+t)%2+a*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][a]&&r&&(this.modules[t][a]=!this.modules[t][a])}},t.prototype.getPenaltyScore=function(){for(var e=0,a=0;a<this.size;a++){for(var r=!1,o=0,i=[0,0,0,0,0,0,0],l=0;l<this.size;l++)this.modules[a][l]==r?5==++o?e+=t.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,i),r||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),r=this.modules[a][l],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,i)*t.PENALTY_N3}for(l=0;l<this.size;l++){r=!1;var u=0;for(i=[0,0,0,0,0,0,0],a=0;a<this.size;a++)this.modules[a][l]==r?5==++u?e+=t.PENALTY_N1:u>5&&e++:(this.finderPenaltyAddHistory(u,i),r||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),r=this.modules[a][l],u=1);e+=this.finderPenaltyTerminateAndCount(r,u,i)*t.PENALTY_N3}for(a=0;a<this.size-1;a++)for(l=0;l<this.size-1;l++){var s=this.modules[a][l];s==this.modules[a][l+1]&&s==this.modules[a+1][l]&&s==this.modules[a+1][l+1]&&(e+=t.PENALTY_N2)}for(var d=0,c=0,f=this.modules;c<f.length;c++){d=f[c].reduce((function(e,t){return e+(t?1:0)}),d)}var h=this.size*this.size,v=Math.ceil(Math.abs(20*d-10*h)/h)-1;return n(0<=v&&v<=9),n(0<=(e+=v*t.PENALTY_N4)&&e<=2568888),e},t.prototype.getAlignmentPatternPositions=function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),a=[6],r=this.size-7;a.length<e;r-=t)a.splice(1,0,r);return a},t.getNumRawDataModules=function(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");var a=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;a-=(25*r-10)*r-55,e>=7&&(a-=36)}return n(208<=a&&a<=29648),a},t.getNumDataCodewords=function(e,a){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][e]},t.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var a=[],r=0;r<e-1;r++)a.push(0);a.push(1);var n=1;for(r=0;r<e;r++){for(var o=0;o<a.length;o++)a[o]=t.reedSolomonMultiply(a[o],n),o+1<a.length&&(a[o]^=a[o+1]);n=t.reedSolomonMultiply(n,2)}return a},t.reedSolomonComputeRemainder=function(e,a){for(var r=a.map((function(e){return 0})),n=function(e){var n=e^r.shift();r.push(0),a.forEach((function(e,a){return r[a]^=t.reedSolomonMultiply(e,n)}))},o=0,i=e;o<i.length;o++){n(i[o])}return r},t.reedSolomonMultiply=function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var a=0,r=7;r>=0;r--)a=a<<1^285*(a>>>7),a^=(t>>>r&1)*e;return n(a>>>8==0),a},t.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];n(t<=3*this.size);var a=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(a&&e[0]>=4*t&&e[6]>=t?1:0)+(a&&e[6]>=4*t&&e[0]>=t?1:0)},t.prototype.finderPenaltyTerminateAndCount=function(e,t,a){return e&&(this.finderPenaltyAddHistory(t,a),t=0),t+=this.size,this.finderPenaltyAddHistory(t,a),this.finderPenaltyCountPatterns(a)},t.prototype.finderPenaltyAddHistory=function(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)},t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t}();function a(e,t,a){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var r=t-1;r>=0;r--)a.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function n(e){if(!e)throw new Error("Assertion error")}e.QrCode=t;var o=function(){function e(e,t,a){if(this.mode=e,this.numChars=t,this.bitData=a,t<0)throw new RangeError("Invalid argument");this.bitData=a.slice()}return e.makeBytes=function(t){for(var r=[],n=0,o=t;n<o.length;n++){a(o[n],8,r)}return new e(e.Mode.BYTE,t.length,r)},e.makeNumeric=function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var r=[],n=0;n<t.length;){var o=Math.min(t.length-n,3);a(parseInt(t.substring(n,n+o),10),3*o+1,r),n+=o}return new e(e.Mode.NUMERIC,t.length,r)},e.makeAlphanumeric=function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r,n=[];for(r=0;r+2<=t.length;r+=2){var o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r));a(o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),11,n)}return r<t.length&&a(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)},e.makeSegments=function(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]},e.makeEci=function(t){var r=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)a(t,8,r);else if(t<16384)a(2,2,r),a(t,14,r);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");a(6,3,r),a(t,21,r)}return new e(e.Mode.ECI,0,r)},e.isNumeric=function(t){return e.NUMERIC_REGEX.test(t)},e.isAlphanumeric=function(t){return e.ALPHANUMERIC_REGEX.test(t)},e.prototype.getData=function(){return this.bitData.slice()},e.getTotalBits=function(e,t){for(var a=0,r=0,n=e;r<n.length;r++){var o=n[r],i=o.mode.numCharCountBits(t);if(o.numChars>=1<<i)return Infinity;a+=4+i+o.bitData.length}return a},e.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],a=0;a<e.length;a++)"%"!=e.charAt(a)?t.push(e.charCodeAt(a)):(t.push(parseInt(e.substring(a+1,a+3),16)),a+=2);return t},e.NUMERIC_REGEX=/^[0-9]*$/,e.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,e.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e}();e.QrSegment=o}(F||(F={})),j=F||(F={}),Q=j.QrCode||(j.QrCode={}),Y=function(){function e(e,t){this.ordinal=e,this.formatBits=t}return e.LOW=new e(0,1),e.MEDIUM=new e(1,0),e.QUARTILE=new e(2,3),e.HIGH=new e(3,2),e}(),Q.Ecc=Y,function(e){var t,a;t=e.QrSegment||(e.QrSegment={}),a=function(){function e(e,t){this.modeBits=e,this.numBitsCharCount=t}return e.prototype.numCharCountBits=function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]},e.NUMERIC=new e(1,[10,12,14]),e.ALPHANUMERIC=new e(2,[9,11,13]),e.BYTE=new e(4,[8,16,16]),e.KANJI=new e(8,[8,10,12]),e.ECI=new e(7,[0,0,0]),e}(),t.Mode=a}(F||(F={}));var $=F,G={L:$.QrCode.Ecc.LOW,M:$.QrCode.Ecc.MEDIUM,Q:$.QrCode.Ecc.QUARTILE,H:$.QrCode.Ecc.HIGH},X=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function W(e){return e in G}function q(e,t){void 0===t&&(t=0);var a=[];return e.forEach((function(e,r){var n=null;e.forEach((function(o,i){if(!o&&null!==n)return a.push("M".concat(n+t," ").concat(r+t,"h").concat(i-n,"v1H").concat(n+t,"z")),void(n=null);if(i!==e.length-1)o&&null===n&&(n=i);else{if(!o)return;null===n?a.push("M".concat(i+t,",").concat(r+t," h1v1H").concat(i+t,"z")):a.push("M".concat(n+t,",").concat(r+t," h").concat(i+1-n,"v1H").concat(n+t,"z"))}}))})),a.join("")}var J={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return W(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Z=K(K({},J),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),ee=t({name:"QRCodeSvg",props:J,setup:function(e){var t=r(0),o=r(""),i=function(){var a=e.value,r=e.level,n=e.margin,i=$.QrCode.encodeText(a,G[r]).getModules();t.value=i.length+2*n,o.value=q(i,n)};return i(),n(i),function(){return a("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(t.value," ").concat(t.value)},[a("path",{fill:e.background,d:"M0,0 h".concat(t.value,"v").concat(t.value,"H0z")}),a("path",{fill:e.foreground,d:o.value})])}}}),te=t({name:"QRCodeCanvas",props:J,setup:function(e){var t=r(null),i=function(){var a=e.value,r=e.level,n=e.size,o=e.margin,i=e.background,l=e.foreground,u=t.value;if(u){var s=u.getContext("2d");if(s){var d=$.QrCode.encodeText(a,G[r]).getModules(),c=d.length+2*o,f=window.devicePixelRatio||1,h=n/c*f;u.height=u.width=n*f,s.scale(h,h),s.fillStyle=i,s.fillRect(0,0,c,c),s.fillStyle=l,X?s.fill(new Path2D(q(d,o))):d.forEach((function(e,t){e.forEach((function(e,a){e&&s.fillRect(a+o,t+o,1,1)}))}))}}};return o(i),n(i),function(){return a("canvas",{ref:t,style:{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}})}}}),ae=t({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,r=e.value,n=e.size,o=e.margin,i=e.level,l=e.background,u=e.foreground,s=n>>>0,d=o>>>0,c=W(i)?i:"H";return a("svg"===t?ee:te,{value:r,size:s,margin:d,level:c,background:l,foreground:u})},props:Z});const re=e=>(N("data-v-ce1e73fa"),e=e(),R(),e),ne={class:"dialog-footer"},oe={class:"m-4"},ie=re((()=>m("p",null,"选择已有的节点列表",-1))),le={class:"dialog-footer"},ue=re((()=>m("div",{style:{"margin-bottom":"10px"}},null,-1))),se={key:0},de={key:0},ce={key:1},fe=re((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),he=re((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),ve=U(t({__name:"subs",setup(t){const a=r([]),n=r(""),N=r(""),R=r(""),U=r(""),F=r(!1),j=r(),Q=r([]),Y=r([]),K=r([]),$=r(!1),G=r([]),X=r("");async function W(){const{data:t}=await e({url:"/api/v1/subcription/get",method:"get"});a.value=t}o((()=>{W()})),o((async()=>{const{data:e}=await I();Q.value=e}));const q=async()=>{const t=JSON.stringify({clash:n.value.trim(),udp:!!K.value.includes("udp"),cert:!!K.value.includes("cert")});var a;"添加订阅"===N.value?(await(a={config:t,name:R.value.trim(),nodes:Y.value.join(",")},e({url:"/api/v1/subcription/add",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}})),W(),C.success("添加成功")):(await function(t){return e({url:"/api/v1/subcription/update",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}({config:t,name:R.value.trim(),nodes:Y.value.join(","),oldname:U.value}),W(),C.success("更新成功")),F.value=!1},J=r([]),Z=e=>{J.value=e},ee=()=>{N.value="添加订阅",R.value="",U.value="",K.value=[],n.value="./template/clash.yaml",F.value=!0,Y.value=[]},te=()=>{0!==J.value.length&&E.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<J.value.length;e++)H({id:J.value[e].ID}),a.value=a.value.filter((t=>t.ID!==J.value[e].ID));C({type:"success",message:"删除成功"})}))},re=r(1),ve=r(10),pe=e=>{ve.value=e},me=e=>{re.value=e},ge=i((()=>{const e=(re.value-1)*ve.value,t=e+ve.value;return a.value.slice(e,t)})),ye=e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select();try{const e=document.execCommand("copy");C({type:e?"success":"warning",message:e?"复制成功！":"复制失败！"})}catch(a){C({type:"warning",message:"复制失败！"})}finally{document.body.removeChild(t)}},Ce=r(!1),we=["v2ray","clash"],Ee=r({}),Me=e=>{let t=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");we.forEach((a=>{var r;Ee.value[a]=`${t}/c/${a}/${r=e,window.btoa(unescape(encodeURIComponent(r)))}`})),Ce.value=!0},_e=r(!1);return(e,t)=>{const r=O,o=M,i=x,I=V,J=B,we=k,Ne=b,Re=_,Ae=P,Ie=S,ke=D,be=L,Pe=T,Se=z,ze=A;return l(),u("div",null,[s(i,{modelValue:_e.value,"onUpdate:modelValue":t[2]||(t[2]=e=>_e.value=e),width:"300px",style:{"text-align":"center"}},{default:d((()=>[s(ae,{value:X.value,size:200,level:"H"},null,8,["value"]),s(r,{type:"primary",effect:"dark",round:""},{default:d((()=>[c(f(X.value),1)])),_:1}),s(o,{onClick:t[0]||(t[0]=e=>ye(X.value))},{default:d((()=>[c("复制")])),_:1}),s(o,{onClick:t[1]||(t[1]=e=>{return t=X.value,void window.open(t);var t})},{default:d((()=>[c("打开")])),_:1})])),_:1},8,["modelValue"]),s(i,{modelValue:Ce.value,"onUpdate:modelValue":t[3]||(t[3]=e=>Ce.value=e),title:"客户端",style:{"text-align":"center"}},{default:d((()=>[s(J,null,{default:d((()=>[(l(!0),u(h,null,v(Ee.value,((e,t)=>(l(),p(I,{style:{"margin-bottom":"10px"}},{default:d((()=>[s(r,{type:"success",size:"large"},{default:d((()=>[c(f(t),1)])),_:2},1024),s(o,{onClick:t=>{return a=e,_e.value=!0,void(X.value=a);var a}},{default:d((()=>[c("二维码")])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"]),s(i,{modelValue:$.value,"onUpdate:modelValue":t[4]||(t[4]=e=>$.value=e),title:"访问记录",width:"80%",draggable:""},{footer:d((()=>[m("div",ne,[s(Ne,{data:G.value,border:"",style:{width:"100%"}},{default:d((()=>[s(we,{prop:"IP",label:"Ip"}),s(we,{prop:"Count",label:"总访问次数"}),s(we,{prop:"Addr",label:"来源"}),s(we,{prop:"Date",label:"最近时间"})])),_:1},8,["data"])])])),_:1},8,["modelValue"]),s(i,{modelValue:F.value,"onUpdate:modelValue":t[10]||(t[10]=e=>F.value=e),title:N.value},{footer:d((()=>[m("div",le,[s(o,{onClick:t[9]||(t[9]=e=>F.value=!1)},{default:d((()=>[c("关闭")])),_:1}),s(o,{type:"primary",onClick:q},{default:d((()=>[c("确定")])),_:1})])])),default:d((()=>[s(Re,{modelValue:R.value,"onUpdate:modelValue":t[5]||(t[5]=e=>R.value=e),placeholder:"请输入订阅名称"},null,8,["modelValue"]),s(J,null,{default:d((()=>[s(r,{type:"primary"},{default:d((()=>[c("clash本地模版文件或url连接")])),_:1}),s(Re,{modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=e=>n.value=e),placeholder:"clash模版文件"},null,8,["modelValue"])])),_:1}),s(J,null,{default:d((()=>[s(r,{type:"primary"},{default:d((()=>[c("强制开启选项")])),_:1}),s(Ie,{modelValue:K.value,"onUpdate:modelValue":t[7]||(t[7]=e=>K.value=e),style:{margin:"5px"}},{default:d((()=>[s(Ae,{value:"udp"},{default:d((()=>[c("udp")])),_:1}),s(Ae,{value:"cert"},{default:d((()=>[c("跳过证书")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m("div",oe,[ie,s(be,{modelValue:Y.value,"onUpdate:modelValue":t[8]||(t[8]=e=>Y.value=e),multiple:"",placeholder:"Select",style:{width:"100%"}},{default:d((()=>[(l(!0),u(h,null,v(Q.value,(e=>(l(),p(ke,{key:e.Name,label:e.Name,value:e.Name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue","title"]),s(ze,null,{default:d((()=>[s(o,{type:"primary",onClick:ee},{default:d((()=>[c("添加订阅")])),_:1}),ue,s(Ne,{ref_key:"table",ref:j,data:g(ge),style:{width:"100%"},stripe:"",onSelectionChange:Z,"row-key":"ID","tree-props":{children:"Nodes"}},{default:d((()=>[s(we,{type:"selection",fixed:"",prop:"ID",label:"id"}),s(we,{prop:"Name",label:"订阅名称 / 节点"},{default:d((({row:e})=>[s(r,{type:e.Nodes?"primary":"success"},{default:d((()=>[c(f(e.Name),1)])),_:2},1032,["type"])])),_:1}),s(we,{prop:"Link",label:"链接","show-overflow-tooltip":!0},{default:d((({row:e})=>[e.Nodes?(l(),u("div",se,[s(Pe,{type:"primary",size:"small",onClick:t=>Me(e.Name)},{default:d((()=>[c("客户端")])),_:2},1032,["onClick"])])):y("",!0)])),_:1}),s(we,{prop:"CreateDate",label:"创建时间",sortable:""}),s(we,{label:"操作",width:"120"},{default:d((e=>[e.row.Nodes?(l(),u("div",de,[s(o,{link:"",type:"primary",size:"small",onClick:t=>{return r=e.row,$.value=!0,void w((()=>{a.value.forEach((e=>{e.ID===r.ID&&(G.value=e.SubLogs)}))}));var r}},{default:d((()=>[c("记录")])),_:2},1032,["onClick"]),s(o,{link:"",type:"primary",size:"small",onClick:t=>(e=>{for(let r=0;r<a.value.length;r++)if(a.value[r].ID===e.ID){const e="string"==typeof(t=a.value[r].Config)?JSON.parse(t):t;N.value="编辑订阅",R.value=a.value[r].Name,U.value=R.value,e.udp&&K.value.push("udp"),e.cert&&K.value.push("cert"),n.value=e.clash,F.value=!0,Y.value=a.value[r].Nodes.map((e=>e.Name))}var t})(e.row)},{default:d((()=>[c("编辑")])),_:2},1032,["onClick"]),s(o,{link:"",type:"primary",size:"small",onClick:t=>{return a=e.row,void E.confirm(`你是否要删除 ${a.Name} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await H({id:a.ID}),W(),C({type:"success",message:"删除成功"})}));var a}},{default:d((()=>[c("删除")])),_:2},1032,["onClick"])])):(l(),u("div",ce,[s(o,{link:"",type:"primary",size:"small",onClick:t=>{return a=e.row,void ye(a.Link);var a}},{default:d((()=>[c("复制")])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"]),fe,s(o,{type:"info",onClick:t[11]||(t[11]=e=>{a.value.forEach((e=>{j.value.toggleRowSelection(e,!0)}))})},{default:d((()=>[c("全选")])),_:1}),s(o,{type:"warning",onClick:t[12]||(t[12]=e=>{j.value.clearSelection()})},{default:d((()=>[c("取消选择")])),_:1}),s(o,{type:"danger",onClick:te},{default:d((()=>[c("批量删除")])),_:1}),he,s(Se,{onSizeChange:pe,onCurrentChange:me,"current-page":re.value,"page-size":ve.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:a.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-ce1e73fa"]]);export{ve as default};