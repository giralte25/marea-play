var Tp=Object.defineProperty;var Ap=(i,e,t)=>e in i?Tp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var pe=(i,e,t)=>Ap(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="186",Cp=0,Zd=1,Rp=2,zr=1,Pp=2,is=3,ls=0,Cn=1,Gt=2,Qt=0,Pa=1,Jr=2,jd=3,Kd=4,Ch=5,ii=100,Lp=101,Dp=102,Np=103,Ip=104,Aa=200,Up=201,Op=202,Fp=203,Rh=204,Ph=205,Ul=206,Bp=207,Ol=208,zp=209,kp=210,Vp=211,Gp=212,Hp=213,Wp=214,Fl=0,Bl=1,zl=2,Fa=3,kl=4,Vl=5,Gl=6,Hl=7,Lh=0,$p=1,Xp=2,ci=0,kc=1,Vc=2,Gc=3,qa=4,Hc=5,Wc=6,$c=7,Dh=300,cs=301,na=302,Oo=303,Fo=304,bo=306,ds=1e3,ai=1001,Wl=1002,Yt=1003,qp=1004,tr=1005,nn=1006,Bo=1007,ss=1008,An=1009,Nh=1010,Ih=1011,Ba=1012,Xc=1013,hi=1014,Zn=1015,on=1016,qc=1017,Yc=1018,ia=1020,Uh=35902,Oh=35899,Fh=1021,Bh=1022,Vn=1023,bi=1026,zi=1027,Zc=1028,jc=1029,us=1030,Kc=1031,Jc=1033,kr=33776,Vr=33777,Gr=33778,Hr=33779,$l=35840,Xl=35841,ql=35842,Yl=35843,Zl=36196,jl=37492,Kl=37496,Jl=37488,Ql=37489,Qr=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,ac=37812,rc=37813,oc=37814,lc=37815,cc=37816,dc=37817,uc=37818,hc=37819,fc=37820,pc=37821,mc=36492,gc=36494,vc=36495,xc=36283,_c=36284,eo=36285,Mc=36286,Yp=3200,to=0,Zp=1,Oi="",En="srgb",no="srgb-linear",io="linear",Mt="srgb",zo=7680,jp=519,Kp=512,Jp=513,Qp=514,Qc=515,em=516,tm=517,ed=518,nm=519,zh=35044,Jd="300 es",ri=2e3,za=2001;function im(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sm(){const i=so("canvas");return i.style.display="block",i}const Qd={};function ao(...i){const e="THREE."+i.shift();console.log(e,...i)}function kh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=kh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=kh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qs(...i){const e=i.join(" ");e in Qd||(Qd[e]=!0,Ke(...i))}function am(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const rm={[Fl]:Bl,[zl]:Gl,[kl]:Hl,[Fa]:Vl,[Bl]:Fl,[Gl]:zl,[Hl]:kl,[Vl]:Fa};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eu=1234567;const La=Math.PI/180,sa=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function td(i,e){return(i%e+e)%e}function om(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lm(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function cm(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function dm(i,e=1){return e-Math.abs(td(i,e*2)-e)}function um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pm(i,e){return i+Math.random()*(e-i)}function mm(i){return i*(.5-Math.random())}function gm(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(i){return i*La}function xm(i){return i*sa}function _m(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ym(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sm(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),d=r((e+n)/2),u=a((e-n)/2),h=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bm={DEG2RAD:La,RAD2DEG:sa,generateUUID:di,clamp:rt,euclideanModulo:td,mapLinear:om,inverseLerp:lm,lerp:Da,damp:cm,pingpong:dm,smoothstep:um,smootherstep:hm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:vm,radToDeg:xm,isPowerOfTwo:_m,ceilPowerOfTwo:Mm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Sm,normalize:yt,denormalize:Yn},Id=class Id{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Id.prototype.isVector2=!0;let oe=Id;class ha{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=a[r+0],f=a[r+1],g=a[r+2],v=a[r+3];if(u!==v||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+h*o,c=c*p+f*o,d=d*p+g*o,u=u*p+v*o}else{l=l*p+h*o,c=c*p+f*o,d=d*p+g*o,u=u*p+v*o;const y=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=y,c*=y,d*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(a/2),h=l(n/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*o+s*c-a*l,this._y=s*d+r*l+a*o-n*c,this._z=a*d+r*c+n*l-s*o,this._w=r*d-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ud=class Ud{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),d=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*d,this.y=n+l*d+o*c-a*u,this.z=s+l*u+a*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ud.prototype.isVector3=!0;let P=Ud;const ko=new P,tu=new ha,Od=class Od{constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],T=s[4],M=s[7],w=s[2],E=s[5],R=s[8];return a[0]=r*v+o*y+l*w,a[3]=r*m+o*T+l*E,a[6]=r*p+o*M+l*R,a[1]=c*v+d*y+u*w,a[4]=c*m+d*T+u*E,a[7]=c*p+d*M+u*R,a[2]=h*v+f*y+g*w,a[5]=h*m+f*T+g*E,a[8]=h*p+f*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*o*c-n*a*d+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*r-o*c,h=o*l-d*a,f=c*a-r*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*r)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Od.prototype.isMatrix3=!0;let tt=Od;const Vo=new tt,nu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){const i={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Mt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Mt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[no]:{primaries:e,whitePoint:n,transfer:io,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const ht=wm();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ys;class Em{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=so("canvas")),ys.width=e.width,ys.height=e.height;const s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Si(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tm=0;class nd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Go(s[r].image)):a.push(Go(s[r]))}else a=Go(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Am=0;const Ho=new P;class mn extends gs{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=ai,s=ai,a=nn,r=ss,o=Vn,l=An,c=mn.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=di(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Dh;mn.DEFAULT_ANISOTROPY=1;const Fd=class Fd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(f+1)/2,w=(p+1)/2,E=(d+h)/4,R=(u+v)/4,_=(g+m)/4;return T>M&&T>w?T<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(T),s=E/n,a=R/n):M>w?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=E/s,a=_/s):w<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(w),n=R/a,s=_/a),this.set(n,s,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(h-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fd.prototype.isVector4=!0;let Ft=Fd;class Cm extends gs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new mn(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nd(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Cm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rm extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const So=class So{constructor(e,t,n,s,a,r,o,l,c,d,u,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,d,u,h,f,g,v,m)}set(e,t,n,s,a,r,o,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),a=1/Ss.setFromMatrixColumn(e,1).length(),r=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=r*d,f=r*u,g=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*d,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=r*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*d,t[9]=v-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const h=r*d,f=r*u,g=o*d,v=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=r*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=r*l,f=r*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=r*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Lm)}lookAt(e,t,n){const s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ri.crossVectors(n,Pn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ri.crossVectors(n,Pn)),Ri.normalize(),nr.crossVectors(Pn,Ri),s[0]=Ri.x,s[4]=nr.x,s[8]=Pn.x,s[1]=Ri.y,s[5]=nr.y,s[9]=Pn.y,s[2]=Ri.z,s[6]=nr.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],T=n[7],M=n[11],w=n[15],E=s[0],R=s[4],_=s[8],b=s[12],C=s[1],D=s[5],U=s[9],G=s[13],O=s[2],k=s[6],K=s[10],X=s[14],re=s[3],q=s[7],Q=s[11],ee=s[15];return a[0]=r*E+o*C+l*O+c*re,a[4]=r*R+o*D+l*k+c*q,a[8]=r*_+o*U+l*K+c*Q,a[12]=r*b+o*G+l*X+c*ee,a[1]=d*E+u*C+h*O+f*re,a[5]=d*R+u*D+h*k+f*q,a[9]=d*_+u*U+h*K+f*Q,a[13]=d*b+u*G+h*X+f*ee,a[2]=g*E+v*C+m*O+p*re,a[6]=g*R+v*D+m*k+p*q,a[10]=g*_+v*U+m*K+p*Q,a[14]=g*b+v*G+m*X+p*ee,a[3]=y*E+T*C+M*O+w*re,a[7]=y*R+T*D+M*k+w*q,a[11]=y*_+T*U+M*K+w*Q,a[15]=y*b+T*G+M*X+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=l*f-c*h,T=o*f-c*u,M=o*h-l*u,w=r*f-c*d,E=r*h-l*d,R=r*u-o*d;return t*(v*y-m*T+p*M)-n*(g*y-m*w+p*E)+s*(g*T-v*w+p*R)-a*(g*M-v*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(r*d-o*c)-n*(a*d-o*l)+s*(a*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*o-n*r,T=t*l-s*r,M=t*c-a*r,w=n*l-s*o,E=n*c-a*o,R=s*c-a*l,_=d*v-u*g,b=d*m-h*g,C=d*p-f*g,D=u*m-h*v,U=u*p-f*v,G=h*p-f*m,O=y*G-T*U+M*D+w*C-E*b+R*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=(o*G-l*U+c*D)*k,e[1]=(s*U-n*G-a*D)*k,e[2]=(v*R-m*E+p*w)*k,e[3]=(h*E-u*R-f*w)*k,e[4]=(l*C-r*G-c*b)*k,e[5]=(t*G-s*C+a*b)*k,e[6]=(m*M-g*R-p*T)*k,e[7]=(d*R-h*M+f*T)*k,e[8]=(r*U-o*C+c*_)*k,e[9]=(n*C-t*U-a*_)*k,e[10]=(g*E-v*M+p*y)*k,e[11]=(u*M-d*E-f*y)*k,e[12]=(o*b-r*D-l*_)*k,e[13]=(t*D-n*b+s*_)*k,e[14]=(v*T-g*w-m*y)*k,e[15]=(d*w-u*T+h*y)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,d=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*r,0,c*l-s*o,d*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,d=r+r,u=o+o,h=a*c,f=a*d,g=a*u,v=r*d,m=r*u,p=o*u,y=l*c,T=l*d,M=l*u,w=n.x,E=n.y,R=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+M)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(h+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+T)*R,s[9]=(m-y)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Wn.copy(this);const c=1/r,d=1/o,u=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=ri,l=!1){const c=this.elements,d=2*a/(t-e),u=2*a/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let g,v;if(l)g=a/(r-a),v=r*a/(r-a);else if(o===ri)g=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===za)g=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=ri,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,v;if(l)g=1/(r-a),v=r/(r-a);else if(o===ri)g=-2/(r-a),v=-(r+a)/(r-a);else if(o===za)g=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};So.prototype.isMatrix4=!0;let bt=So;const Ss=new P,Wn=new bt,Pm=new P(0,0,0),Lm=new P(1,1,1),Ri=new P,nr=new P,Pn=new P,su=new bt,au=new ha;class Vi{constructor(e=0,t=0,n=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const ru=new P,bs=new ha,gi=new bt,ir=new P,ga=new P,Nm=new P,Im=new ha,ou=new P(1,0,0),lu=new P(0,1,0),cu=new P(0,0,1),du={type:"added"},Um={type:"removed"},ws={type:"childadded",child:null},Wo={type:"childremoved",child:null};class Xt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new P,t=new Vi,n=new ha,s=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new tt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ga,ir,this.up):gi.lookAt(ir,ga,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(gi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),ws.child=e,this.dispatchEvent(ws),ws.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),u=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xt.DEFAULT_UP=new P(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Xo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=td(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Xo(r,a,e+1/3),this.g=Xo(r,a,e),this.b=Xo(r,a,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=En){function n(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return ht.workingToColorSpace(hn.copy(this),e),Math.round(rt(hn.r*255,0,255))*65536+Math.round(rt(hn.g*255,0,255))*256+Math.round(rt(hn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(hn.copy(this),t);const n=hn.r,s=hn.g,a=hn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=d<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=En){ht.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,s=hn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(sr);const n=Da(Pi.h,sr.h,t),s=Da(Pi.s,sr.s,t),a=Da(Pi.l,sr.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Pe;Pe.NAMES=Gh;class sd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new sd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hh extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $n=new P,vi=new P,qo=new P,xi=new P,Es=new P,Ts=new P,uu=new P,Yo=new P,Zo=new P,jo=new P,Ko=new Ft,Jo=new Ft,Qo=new Ft;class kn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){$n.subVectors(s,t),vi.subVectors(n,t),qo.subVectors(e,t);const r=$n.dot($n),o=$n.dot(vi),l=$n.dot(qo),c=vi.dot(vi),d=vi.dot(qo),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,g=(r*d-o*l)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,xi.x),l.addScaledVector(r,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Ko.setScalar(0),Jo.setScalar(0),Qo.setScalar(0),Ko.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,n),Qo.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Ko,a.x),r.addScaledVector(Jo,a.y),r.addScaledVector(Qo,a.z),r}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),vi.subVectors(e,t),$n.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),$n.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Es.subVectors(s,n),Ts.subVectors(a,n),Yo.subVectors(e,n);const l=Es.dot(Yo),c=Ts.dot(Yo);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,s);const d=Es.dot(Zo),u=Ts.dot(Zo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(Es,r);jo.subVectors(e,a);const f=Es.dot(jo),g=Ts.dot(jo);if(g>=0&&f<=g)return t.copy(a);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ts,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return uu.subVectors(a,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(uu,o);const p=1/(m+v+h);return r=v*p,o=h*p,t.copy(n).addScaledVector(Es,r).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fa{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Xn):Xn.fromBufferAttribute(a,r),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),rr.subVectors(this.max,va),As.subVectors(e.a,va),Cs.subVectors(e.b,va),Rs.subVectors(e.c,va),Li.subVectors(Cs,As),Di.subVectors(Rs,Cs),$i.subVectors(As,Rs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-$i.z,$i.y,Li.z,0,-Li.x,Di.z,0,-Di.x,$i.z,0,-$i.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-$i.y,$i.x,0];return!el(t,As,Cs,Rs,rr)||(t=[1,0,0,0,1,0,0,0,1],!el(t,As,Cs,Rs,rr))?!1:(or.crossVectors(Li,Di),t=[or.x,or.y,or.z],el(t,As,Cs,Rs,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,ar=new fa,As=new P,Cs=new P,Rs=new P,Li=new P,Di=new P,$i=new P,va=new P,rr=new P,or=new P,Xi=new P;function el(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Xi.fromArray(i,a);const o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),d=n.dot(Xi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $t=new P,lr=new oe;let Fm=0;class Gn extends gs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wh extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bm=new fa,xa=new P,tl=new P;class ad{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bm.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(tl)),this.expandByPoint(xa.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zm=0;const Fn=new bt,nl=new Xt,Ps=new P,Ln=new fa,_a=new fa,Kt=new P;class kt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?$h:Wh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new tt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Ln.min,_a.min),Ln.expandByPoint(Kt),Kt.addVectors(Ln.max,_a.max),Ln.expandByPoint(Kt)):(Ln.expandByPoint(_a.min),Ln.expandByPoint(_a.max))}Ln.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Kt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Kt.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Kt.add(Ps)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;const c=new P,d=new P,u=new P,h=new oe,f=new oe,g=new oe,v=new P,m=new P;function p(_,b,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,C),h.fromBufferAttribute(a,_),f.fromBufferAttribute(a,b),g.fromBufferAttribute(a,C),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(D),o[_].add(v),o[b].add(v),o[C].add(v),l[_].add(m),l[b].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,b=y.length;_<b;++_){const C=y[_],D=C.start,U=C.count;for(let G=D,O=D+U;G<O;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new P,M=new P,w=new P,E=new P;function R(_){w.fromBufferAttribute(s,_),E.copy(w);const b=o[_];T.copy(b),T.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(E,b);const D=M.dot(l[_])<0?-1:1;r.setXYZW(_,T.x,T.y,T.z,D)}for(let _=0,b=y.length;_<b;++_){const C=y[_],D=C.start,U=C.count;for(let G=D,O=D+U;G<O;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,d=new P,u=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,a),u.subVectors(s,a),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Gn(h,d,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],u=a[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class km{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const vn=new P;class ro{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),a=yt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new P,Vm=new P,Gm=new tt;class Ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=il.subVectors(n,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(il),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gm.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hm=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Pa,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xh extends vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ls;const Ma=new P,Ds=new P,Ns=new P,Is=new oe,ya=new oe,qh=new bt,cr=new P,Sa=new P,dr=new P,hu=new oe,sl=new oe,fu=new oe;class Wm extends Xt{constructor(e=new Xh){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new km(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new ro(n,3,0,!1)),Ls.setAttribute("uv",new ro(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),qh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ns.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;ur(cr.set(-.5,-.5,0),Ns,r,Ds,s,a),ur(Sa.set(.5,-.5,0),Ns,r,Ds,s,a),ur(dr.set(.5,.5,0),Ns,r,Ds,s,a),hu.set(0,0),sl.set(1,0),fu.set(1,1);let o=e.ray.intersectTriangle(cr,Sa,dr,!1,Ma);if(o===null&&(ur(Sa.set(-.5,.5,0),Ns,r,Ds,s,a),sl.set(0,1),o=e.ray.intersectTriangle(cr,dr,Sa,!1,Ma),o===null))return;const l=e.ray.origin.distanceTo(Ma);l<e.near||l>e.far||t.push({distance:l,point:Ma.clone(),uv:kn.getInterpolation(Ma,cr,Sa,dr,hu,sl,fu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ur(i,e,t,n,s,a){Is.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ya.x=a*Is.x-s*Is.y,ya.y=s*Is.x+a*Is.y):ya.copy(Is),i.copy(e),i.x+=ya.x,i.y+=ya.y,i.applyMatrix4(qh)}const Mi=new P,al=new P,hr=new P,fr=new P;class Yh{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(al);const a=e.distanceTo(t)*.5,r=-this.direction.dot(hr),o=fr.dot(this.direction),l=-fr.dot(hr),c=fr.lengthSq(),d=Math.abs(1-r*r);let u,h,f,g;if(d>0)if(u=r*l-o,h=r*o-l,g=a*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+r*h+2*o)+h*(r*u+h+2*l)+c}else h=a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*l)+c;else h=-a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-r*a+o)),h=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(u=Math.max(0,-(r*a+o)),h=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+h*(h+2*l)+c);else h=r>0?-a:a,u=Math.max(0,-(r*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(al).addScaledVector(hr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-r.x,h=e.y-r.y,f=e.z-r.z,g=t.x-r.x,v=t.y-r.y,m=t.z-r.z,p=n.x-r.x,y=n.y-r.y,T=n.z-r.z,M=Math.abs(l),w=Math.abs(c),E=Math.abs(d);let R,_,b,C,D,U,G,O,k,K,X,re;if(M>=w&&M>=E?(b=l,U=u,k=g,re=p,l>=0?(R=c,_=d,C=h,D=f,G=v,O=m,K=y,X=T):(R=d,_=c,C=f,D=h,G=m,O=v,K=T,X=y)):w>=E?(b=c,U=h,k=v,re=y,c>=0?(R=d,_=l,C=f,D=u,G=m,O=g,K=T,X=p):(R=l,_=d,C=u,D=f,G=g,O=m,K=p,X=T)):(b=d,U=f,k=m,re=T,d>=0?(R=l,_=c,C=u,D=h,G=g,O=v,K=p,X=y):(R=c,_=l,C=h,D=u,G=v,O=g,K=y,X=p)),b===0)return null;const q=R/b,Q=_/b,ee=1/b,Le=C-q*U,Ae=D-Q*U,at=G-q*k,et=O-Q*k,ae=K-q*re,N=X-Q*re,z=ae*et-N*at,Z=Le*N-Ae*ae,de=at*Ae-et*Le;if(s){if(z<0||Z<0||de<0)return null}else if((z<0||Z<0||de<0)&&(z>0||Z>0||de>0))return null;const ge=z+Z+de;if(ge===0)return null;const Ie=ee*(z*U+Z*k+de*re);return(ge>0?Ie<0:Ie>0)?null:this.at(Ie/ge,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gi extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pu=new bt,qi=new Yh,pr=new ad,mu=new P,mr=new P,gr=new P,vr=new P,rl=new P,xr=new P,gu=new P,_r=new P;class se extends Xt{constructor(e=new kt,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){xr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],u=a[l];d!==0&&(rl.fromBufferAttribute(u,e),r?xr.addScaledVector(rl,d):xr.addScaledVector(rl.sub(t),d))}t.add(xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(a),qi.copy(e.ray).recast(e.near),!(pr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(pr,mu)===null||qi.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(a).invert(),qi.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,u=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=T;M<w;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);s=Mr(this,p,e,n,c,d,u,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Mr(this,r,e,n,c,d,u,y,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=T;M<w;M+=3){const E=M,R=M+1,_=M+2;s=Mr(this,p,e,n,c,d,u,E,R,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,T=m+1,M=m+2;s=Mr(this,r,e,n,c,d,u,y,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function $m(i,e,t,n,s,a,r,o){let l;if(e.side===Cn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===ls,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:i}}function Mr(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const d=$m(i,e,t,n,mr,gr,vr,gu);if(d){const u=new P;kn.getBarycoord(gu,mr,gr,vr,u),s&&(d.uv=kn.getInterpolatedAttribute(s,o,l,c,u,new oe)),a&&(d.uv1=kn.getInterpolatedAttribute(a,o,l,c,u,new oe)),r&&(d.normal=kn.getInterpolatedAttribute(r,o,l,c,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};kn.getNormal(mr,gr,vr,h.normal),d.face=h,d.barycoord=u}return d}class wo extends mn{constructor(e=null,t=1,n=1,s,a,r,o,l,c=Yt,d=Yt,u,h){super(null,r,o,l,c,d,s,a,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yi=new ad,Xm=new oe(.5,.5),yr=new P;class rd{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,a=new Ui,r=new Ui){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],d=a[4],u=a[5],h=a[6],f=a[7],g=a[8],v=a[9],m=a[10],p=a[11],y=a[12],T=a[13],M=a[14],w=a[15];if(s[0].setComponents(c-r,f-d,p-g,w-y).normalize(),s[1].setComponents(c+r,f+d,p+g,w+y).normalize(),s[2].setComponents(c+o,f+u,p+v,w+T).normalize(),s[3].setComponents(c-o,f-u,p-v,w-T).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,w-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,w-M).normalize(),t===ri)s[5].setComponents(c+l,f+h,p+m,w+M).normalize();else if(t===za)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=Xm.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends mn{constructor(e=[],t=cs,n,s,a,r,o,l,c,d){super(e,t,n,s,a,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends mn{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class aa extends mn{constructor(e,t,n=hi,s,a,r,o=Yt,l=Yt,c,d=bi,u=1){if(d!==bi&&d!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,a,r,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qm extends aa{constructor(e,t=hi,n=cs,s,a,r=Yt,o=Yt,l,c=bi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kh extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class He extends kt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(u,2));function g(v,m,p,y,T,M,w,E,R,_,b){const C=M/R,D=w/_,U=M/2,G=w/2,O=E/2,k=R+1,K=_+1;let X=0,re=0;const q=new P;for(let Q=0;Q<K;Q++){const ee=Q*D-G;for(let Le=0;Le<k;Le++){const Ae=Le*C-U;q[v]=Ae*y,q[m]=ee*T,q[p]=O,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=E>0?1:-1,d.push(q.x,q.y,q.z),u.push(Le/R),u.push(1-Q/_),X+=1}}for(let Q=0;Q<_;Q++)for(let ee=0;ee<R;ee++){const Le=h+ee+k*Q,Ae=h+ee+k*(Q+1),at=h+(ee+1)+k*(Q+1),et=h+(ee+1)+k*Q;l.push(Le,Ae,et),l.push(Ae,at,et),re+=6}o.addGroup(f,re,b),f+=re,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new He(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class od extends kt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],d=t/2,u=Math.PI/2*e,h=t,f=2*u+h,g=n*2+a,v=s+1,m=new P,p=new P;for(let y=0;y<=g;y++){let T=0,M=0,w=0,E=0;if(y<=n){const b=y/n,C=b*Math.PI/2;M=-d-e*Math.cos(C),w=e*Math.sin(C),E=-e*Math.cos(C),T=b*u}else if(y<=n+a){const b=(y-n)/a;M=-d+b*t,w=e,E=0,T=u+b*h}else{const b=(y-n-a)/n,C=b*Math.PI/2;M=d+e*Math.sin(C),w=e*Math.cos(C),E=e*Math.sin(C),T=u+h+b*u}const R=Math.max(0,Math.min(1,T/f));let _=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let b=0;b<=s;b++){const C=b/s,D=C*Math.PI*2,U=Math.sin(D),G=Math.cos(D);p.x=-w*G,p.y=M,p.z=w*U,o.push(p.x,p.y,p.z),m.set(-w*G,E,w*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+_,R)}if(y>0){const b=(y-1)*v;for(let C=0;C<s;C++){const D=b+C,U=b+C+1,G=y*v+C,O=y*v+C+1;r.push(D,U,G),r.push(U,O,G)}}}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ld extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new P,d=new oe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(r[h]/e+1)/2,d.y=(r[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ld(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends kt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const d=[],u=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function y(){const M=new P,w=new P;let E=0;const R=(t-e)/n;for(let _=0;_<=a;_++){const b=[],C=_/a,D=C*(t-e)+e;for(let U=0;U<=s;U++){const G=U/s,O=G*l+o,k=Math.sin(O),K=Math.cos(O);w.x=D*k,w.y=-C*n+m,w.z=D*K,u.push(w.x,w.y,w.z),M.set(k,R,K).normalize(),h.push(M.x,M.y,M.z),f.push(G,1-C),b.push(g++)}v.push(b)}for(let _=0;_<s;_++)for(let b=0;b<a;b++){const C=v[b][_],D=v[b+1][_],U=v[b+1][_+1],G=v[b][_+1];(e>0||b!==0)&&(d.push(C,D,G),E+=3),(t>0||b!==a-1)&&(d.push(D,U,G),E+=3)}c.addGroup(p,E,0),p+=E}function T(M){const w=g,E=new oe,R=new P;let _=0;const b=M===!0?e:t,C=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),g++;const D=g;for(let U=0;U<=s;U++){const O=U/s*l+o,k=Math.cos(O),K=Math.sin(O);R.x=b*K,R.y=m*C,R.z=b*k,u.push(R.x,R.y,R.z),h.push(0,C,0),E.x=k*.5+.5,E.y=K*.5*C+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){const G=w+U,O=D+U;M===!0?d.push(O,O+1,G):d.push(O+1,O,G),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ln extends Qe{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ln(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),c(n),d(),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(a.slice(),3)),this.setAttribute("uv",new ot(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new P,M=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],M),f(t[E+2],w),l(T,M,w,y)}function l(y,T,M,w){const E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const b=y.clone().lerp(M,_/E),C=T.clone().lerp(M,_/E),D=E-_;for(let U=0;U<=D;U++)U===0&&_===E?R[_][U]=b:R[_][U]=b.clone().lerp(C,U/D)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const C=Math.floor(b/2);b%2===0?(h(R[_][C+1]),h(R[_+1][C]),h(R[_][C])):(h(R[_][C+1]),h(R[_+1][C+1]),h(R[_+1][C]))}}function c(y){const T=new P;for(let M=0;M<a.length;M+=3)T.x=a[M+0],T.y=a[M+1],T.z=a[M+2],T.normalize().multiplyScalar(y),a[M+0]=T.x,a[M+1]=T.y,a[M+2]=T.z}function d(){const y=new P;for(let T=0;T<a.length;T+=3){y.x=a[T+0],y.y=a[T+1],y.z=a[T+2];const M=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;r.push(M,1-w)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const T=r[y+0],M=r[y+2],w=r[y+4],E=Math.max(T,M,w),R=Math.min(T,M,w);E>.9&&R<.1&&(T<.2&&(r[y+0]+=1),M<.2&&(r[y+2]+=1),w<.2&&(r[y+4]+=1))}}function h(y){a.push(y.x,y.y,y.z)}function f(y,T){const M=y*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const y=new P,T=new P,M=new P,w=new P,E=new oe,R=new oe,_=new oe;for(let b=0,C=0;b<a.length;b+=9,C+=6){y.set(a[b+0],a[b+1],a[b+2]),T.set(a[b+3],a[b+4],a[b+5]),M.set(a[b+6],a[b+7],a[b+8]),E.set(r[C+0],r[C+1]),R.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),w.copy(y).add(T).add(M).divideScalar(3);const D=m(w);v(E,C+0,y,D),v(R,C+2,T,D),v(_,C+4,M,D)}}function v(y,T,M,w){w<0&&y.x===1&&(r[T]=y.x-1),M.x===0&&M.z===0&&(r[T]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.vertices,e.indices,e.radius,e.detail)}}class Za extends Ya{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Za(e.radius,e.detail)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const d=n[s],h=n[s+1]-d,f=(r-d)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new oe:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],a=[],r=[],o=new P,l=new bt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(rt(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cd extends fi{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ym extends cd{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function dd(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,d,u){let h=(r-a)/c-(o-a)/(c+d)+(o-r)/d,f=(o-r)/d-(l-r)/(d+u)+(l-o)/u;h*=d,f*=d,s(r,o,h,f)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const vu=new P,xu=new P,ol=new dd,ll=new dd,cl=new dd;class Zm extends fi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%a]:(xu.subVectors(s[0],s[1]).add(s[0]),c=xu);const u=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?d=s[(o+2)%a]:(vu.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=vu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ol.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,v,m),ll.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,v,m),cl.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),ll.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),cl.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(ol.calc(l),ll.calc(l),cl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function jm(i,e){const t=1-i;return t*t*e}function Km(i,e){return 2*(1-i)*i*e}function Jm(i,e){return i*i*e}function Na(i,e,t,n){return jm(i,e)+Km(i,t)+Jm(i,n)}function Qm(i,e){const t=1-i;return t*t*t*e}function e0(i,e){const t=1-i;return 3*t*t*i*e}function t0(i,e){return 3*(1-i)*i*i*e}function n0(i,e){return i*i*i*e}function Ia(i,e,t,n,s){return Qm(i,e)+e0(i,t)+t0(i,n)+n0(i,s)}class Jh extends fi{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ia(e,s.x,a.x,r.x,o.x),Ia(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class i0 extends fi{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ia(e,s.x,a.x,r.x,o.x),Ia(e,s.y,a.y,r.y,o.y),Ia(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qh extends fi{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s0 extends fi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends fi{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Na(e,s.x,a.x,r.x),Na(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends fi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(Na(e,s.x,a.x,r.x),Na(e,s.y,a.y,r.y),Na(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tf extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],d=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(_u(o,l.x,c.x,d.x,u.x),_u(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var yc=Object.freeze({__proto__:null,ArcCurve:Ym,CatmullRomCurve3:Zm,CubicBezierCurve:Jh,CubicBezierCurve3:i0,EllipseCurve:cd,LineCurve:Qh,LineCurve3:s0,QuadraticBezierCurve:ef,QuadraticBezierCurve3:a0,SplineCurve:tf});class r0 extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new yc[s.type]().fromJSON(s))}return this}}class Mu extends r0{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qh(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new ef(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){const o=new Jh(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new tf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,a,r,o,l),this}absellipse(e,t,n,s,a,r,o,l){const c=new cd(e,t,n,s,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Eo extends Mu{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Mu().fromJSON(s))}return this}}function o0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=nf(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=h0(i,e,a,t)),i.length>80*t){o=i[0],l=i[1];let d=o,u=l;for(let h=t;h<s;h+=t){const f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>d&&(d=f),g>u&&(u=g)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return ka(a,r,t,o,l,c,0),r}function nf(i,e,t,n,s){let a;if(s===b0(i,e,t,n)>0)for(let r=e;r<t;r+=n)a=yu(r/n|0,i[r],i[r+1],a);else for(let r=t-n;r>=e;r-=n)a=yu(r/n|0,i[r],i[r+1],a);return a&&ra(a,a.next)&&(Ga(a),a=a.next),a}function hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ra(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(i,e,t,n,s,a,r){if(!i)return;!r&&a&&v0(i,n,s,a);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?c0(i,n,s,a):l0(i)){e.push(l.i,i.i,c.i),Ga(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=d0(hs(i),e),ka(i,e,t,n,s,a,2)):r===2&&u0(i,e,t,n,s,a):ka(hs(i),e,t,n,s,a,1);break}}}function l0(i){const e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,a,r),u=Math.min(o,l,c),h=Math.max(s,a,r),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&Ca(s,o,a,l,r,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function c0(i,e,t,n){const s=i.prev,a=i,r=i.next;if(Bt(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,d=s.y,u=a.y,h=r.y,f=Math.min(o,l,c),g=Math.min(d,u,h),v=Math.max(o,l,c),m=Math.max(d,u,h),p=Sc(f,g,e,t,n),y=Sc(v,m,e,t,n);let T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=y;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==r&&Ca(o,d,l,u,c,h,T.x,T.y)&&Bt(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&Ca(o,d,l,u,c,h,M.x,M.y)&&Bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==r&&Ca(o,d,l,u,c,h,T.x,T.y)&&Bt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&Ca(o,d,l,u,c,h,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function d0(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ra(n,s)&&af(n,t,t.next,s)&&Va(n,s)&&Va(s,n)&&(e.push(n.i,t.i,s.i),Ga(t),Ga(t.next),t=i=s),t=t.next}while(t!==i);return hs(t)}function u0(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&M0(r,o)){let l=rf(r,o);r=hs(r,r.next),l=hs(l,l.next),ka(r,e,t,n,s,a,0),ka(l,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function h0(i,e,t,n){const s=[];for(let a=0,r=e.length;a<r;a++){const o=e[a]*n,l=a<r-1?e[a+1]*n:i.length,c=nf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_0(c))}s.sort(f0);for(let a=0;a<s.length;a++)t=p0(s[a],t);return t}function f0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function p0(i,e){const t=m0(i,e);if(!t)return e;const n=rf(t,i);return hs(n,n.next),hs(t,t.next)}function m0(i,e){let t=e;const n=i.x,s=i.y;let a=-1/0,r;if(ra(i,t))return t;do{if(ra(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>a&&(a=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let d=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sf(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Va(t,i)&&(u<d||u===d&&(t.x>r.x||t.x===r.x&&g0(r,t)))&&(r=t,d=u)}t=t.next}while(t!==o);return r}function g0(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function v0(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,x0(s)}function x0(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,t*=2}while(e>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sf(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Ca(i,e,t,n,s,a,r,o){return!(i===r&&e===o)&&sf(i,e,t,n,s,a,r,o)}function M0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!y0(i,e)&&(Va(i,e)&&Va(e,i)&&S0(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||ra(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ra(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){const s=br(Bt(i,e,t)),a=br(Bt(i,e,n)),r=br(Bt(t,n,i)),o=br(Bt(t,n,e));return!!(s!==a&&r!==o||s===0&&Sr(i,t,e)||a===0&&Sr(i,n,e)||r===0&&Sr(t,i,n)||o===0&&Sr(t,e,n))}function Sr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function br(i){return i>0?1:i<0?-1:0}function y0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function S0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rf(i,e){const t=bc(i.i,i.x,i.y),n=bc(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function yu(i,e,t,n){const s=bc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function b0(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class w0{static triangulate(e,t,n=2){return o0(e,t,n)}}class yi{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return yi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];Su(e),bu(n,e);let r=e.length;t.forEach(Su);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,bu(n,t[l]);const o=w0.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Su(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ud extends kt{constructor(e=new Eo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(a,2)),this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:E0;let T,M=!1,w,E,R,_;if(p){T=p.getSpacedPoints(d),M=!0,h=!1;const ne=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(d,ne),E=new P,R=new P,_=new P}h||(m=0,f=0,g=0,v=0);const b=o.extractPoints(c);let C=b.shape;const D=b.holes;if(!yi.isClockWise(C)){C=C.reverse();for(let ne=0,ce=D.length;ne<ce;ne++){const ue=D[ne];yi.isClockWise(ue)&&(D[ne]=ue.reverse())}}function G(ne){const ue=10000000000000001e-36;let he=ne[0];for(let ve=1;ve<=ne.length;ve++){const $e=ve%ne.length,Ve=ne[$e],qe=Ve.x-he.x,Ze=Ve.y-he.y,I=qe*qe+Ze*Ze,pt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(he.x),Math.abs(he.y)),nt=ue*pt*pt;if(I<=nt){ne.splice($e,1),ve--;continue}he=Ve}}G(C),D.forEach(G);const O=D.length,k=C;for(let ne=0;ne<O;ne++){const ce=D[ne];C=C.concat(ce)}function K(ne,ce,ue){return ce||ft("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ce,ue)}const X=C.length;function re(ne,ce,ue){let he,ve,$e;const Ve=ne.x-ce.x,qe=ne.y-ce.y,Ze=ue.x-ne.x,I=ue.y-ne.y,pt=Ve*Ve+qe*qe,nt=Ve*I-qe*Ze;if(Math.abs(nt)>Number.EPSILON){const A=Math.sqrt(pt),x=Math.sqrt(Ze*Ze+I*I),V=ce.x-qe/A,H=ce.y+Ve/A,j=ue.x-I/x,fe=ue.y+Ze/x,xe=((j-V)*I-(fe-H)*Ze)/(Ve*I-qe*Ze);he=V+Ve*xe-ne.x,ve=H+qe*xe-ne.y;const J=he*he+ve*ve;if(J<=2)return new oe(he,ve);$e=Math.sqrt(J/2)}else{let A=!1;Ve>Number.EPSILON?Ze>Number.EPSILON&&(A=!0):Ve<-Number.EPSILON?Ze<-Number.EPSILON&&(A=!0):Math.sign(qe)===Math.sign(I)&&(A=!0),A?(he=-qe,ve=Ve,$e=Math.sqrt(pt)):(he=Ve,ve=qe,$e=Math.sqrt(pt/2))}return new oe(he/$e,ve/$e)}const q=[];for(let ne=0,ce=k.length,ue=ce-1,he=ne+1;ne<ce;ne++,ue++,he++)ue===ce&&(ue=0),he===ce&&(he=0),q[ne]=re(k[ne],k[ue],k[he]);const Q=[];let ee,Le=q.concat();for(let ne=0,ce=O;ne<ce;ne++){const ue=D[ne];ee=[];for(let he=0,ve=ue.length,$e=ve-1,Ve=he+1;he<ve;he++,$e++,Ve++)$e===ve&&($e=0),Ve===ve&&(Ve=0),ee[he]=re(ue[he],ue[$e],ue[Ve]);Q.push(ee),Le=Le.concat(ee)}let Ae;if(m===0)Ae=yi.triangulateShape(k,D);else{const ne=[],ce=[];for(let ue=0;ue<m;ue++){const he=ue/m,ve=f*Math.cos(he*Math.PI/2),$e=g*Math.sin(he*Math.PI/2)+v;for(let Ve=0,qe=k.length;Ve<qe;Ve++){const Ze=K(k[Ve],q[Ve],$e);Z(Ze.x,Ze.y,-ve),he===0&&ne.push(Ze)}for(let Ve=0,qe=O;Ve<qe;Ve++){const Ze=D[Ve];ee=Q[Ve];const I=[];for(let pt=0,nt=Ze.length;pt<nt;pt++){const A=K(Ze[pt],ee[pt],$e);Z(A.x,A.y,-ve),he===0&&I.push(A)}he===0&&ce.push(I)}}Ae=yi.triangulateShape(ne,ce)}const at=Ae.length,et=g+v;for(let ne=0;ne<X;ne++){const ce=h?K(C[ne],Le[ne],et):C[ne];M?(R.copy(w.normals[0]).multiplyScalar(ce.x),E.copy(w.binormals[0]).multiplyScalar(ce.y),_.copy(T[0]).add(R).add(E),Z(_.x,_.y,_.z)):Z(ce.x,ce.y,0)}for(let ne=1;ne<=d;ne++)for(let ce=0;ce<X;ce++){const ue=h?K(C[ce],Le[ce],et):C[ce];M?(R.copy(w.normals[ne]).multiplyScalar(ue.x),E.copy(w.binormals[ne]).multiplyScalar(ue.y),_.copy(T[ne]).add(R).add(E),Z(_.x,_.y,_.z)):Z(ue.x,ue.y,u/d*ne)}for(let ne=m-1;ne>=0;ne--){const ce=ne/m,ue=f*Math.cos(ce*Math.PI/2),he=g*Math.sin(ce*Math.PI/2)+v;for(let ve=0,$e=k.length;ve<$e;ve++){const Ve=K(k[ve],q[ve],he);Z(Ve.x,Ve.y,u+ue)}for(let ve=0,$e=D.length;ve<$e;ve++){const Ve=D[ve];ee=Q[ve];for(let qe=0,Ze=Ve.length;qe<Ze;qe++){const I=K(Ve[qe],ee[qe],he);M?Z(I.x,I.y+T[d-1].y,T[d-1].x+ue):Z(I.x,I.y,u+ue)}}}ae(),N();function ae(){const ne=s.length/3;if(h){let ce=0,ue=X*ce;for(let he=0;he<at;he++){const ve=Ae[he];de(ve[2]+ue,ve[1]+ue,ve[0]+ue)}ce=d+m*2,ue=X*ce;for(let he=0;he<at;he++){const ve=Ae[he];de(ve[0]+ue,ve[1]+ue,ve[2]+ue)}}else{for(let ce=0;ce<at;ce++){const ue=Ae[ce];de(ue[2],ue[1],ue[0])}for(let ce=0;ce<at;ce++){const ue=Ae[ce];de(ue[0]+X*d,ue[1]+X*d,ue[2]+X*d)}}n.addGroup(ne,s.length/3-ne,0)}function N(){const ne=s.length/3;let ce=0;z(k,ce),ce+=k.length;for(let ue=0,he=D.length;ue<he;ue++){const ve=D[ue];z(ve,ce),ce+=ve.length}n.addGroup(ne,s.length/3-ne,1)}function z(ne,ce){let ue=ne.length;for(;--ue>=0;){const he=ue;let ve=ue-1;ve<0&&(ve=ne.length-1);for(let $e=0,Ve=d+m*2;$e<Ve;$e++){const qe=X*$e,Ze=X*($e+1),I=ce+he+qe,pt=ce+ve+qe,nt=ce+ve+Ze,A=ce+he+Ze;ge(I,pt,nt,A)}}}function Z(ne,ce,ue){l.push(ne),l.push(ce),l.push(ue)}function de(ne,ce,ue){Ie(ne),Ie(ce),Ie(ue);const he=s.length/3,ve=y.generateTopUV(n,s,he-3,he-2,he-1);lt(ve[0]),lt(ve[1]),lt(ve[2])}function ge(ne,ce,ue,he){Ie(ne),Ie(ce),Ie(he),Ie(ce),Ie(ue),Ie(he);const ve=s.length/3,$e=y.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);lt($e[0]),lt($e[1]),lt($e[3]),lt($e[1]),lt($e[2]),lt($e[3])}function Ie(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function lt(ne){a.push(ne.x),a.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return T0(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,r=e.shapes.length;a<r;a++){const o=t[e.shapes[a]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yc[s.type]().fromJSON(s)),new ud(n,e.options)}}const E0={generateTopUV:function(i,e,t,n,s){const a=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new oe(a,r),new oe(o,l),new oe(c,d)]},generateSideWallUV:function(i,e,t,n,s,a){const r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(o-d)<Math.abs(r-c)?[new oe(r,1-l),new oe(c,1-u),new oe(h,1-g),new oe(v,1-p)]:[new oe(o,1-l),new oe(d,1-u),new oe(f,1-g),new oe(m,1-p)]}};function T0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pi extends Ya{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pi(e.radius,e.detail)}}class hd extends Ya{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hd(e.radius,e.detail)}}class cn extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const y=p*h-r;for(let T=0;T<c;T++){const M=T*u-a;g.push(M,-y,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,M=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;f.push(T,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ha extends kt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,f=new P,g=new oe;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,T=y,M=y+n+1,w=y+n+2,E=y+1;o.push(T,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fd extends kt{constructor(e=new Eo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],a=[],r=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(r,2));function c(d){const u=s.length/3,h=d.extractPoints(t);let f=h.shape;const g=h.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];yi.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=yi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),a.push(0,0,1),r.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],T=y[0]+u,M=y[1]+u,w=y[2]+u;n.push(T,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return A0(t,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const r=t[e.shapes[s]];n.push(r)}return new fd(n,e.curveSegments)}}function A0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class wi extends kt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const d=[],u=new P,h=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],T=p/n,M=r+T*o,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w);let R=0;p===0&&r===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const b=_/t,C=s+b*a;u.x=-E*Math.cos(C),u.y=w,u.z=E*Math.sin(C),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(b+R,1-T),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const T=d[p][y+1],M=d[p][y],w=d[p+1][y],E=d[p+1][y+1];(p!==0||r>0)&&f.push(T,M,E),(p!==n-1||l<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ja extends kt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],u=[],h=new P,f=new P,g=new P;for(let v=0;v<=n;v++){const m=r+v/n*o;for(let p=0;p<=s;p++){const y=p/s*a;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(f,h).normalize(),d.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,T=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function oa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(wu(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=oa(i[t]);for(const s in n)e[s]=n[s]}return e}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function C0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function of(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const si={clone:oa,merge:_n};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lf extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class as extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L0 extends vs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class D0 extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N0 extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ka extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cf extends Ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dl=new bt,Eu=new P,Tu=new P;class pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(dl,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===za||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wr=new P,Er=new ha,Qn=new P;class df extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wr,Er,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Er,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wr,Er,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Er,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new P,Au=new oe,Cu=new oe;class Nn extends df{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Au,Cu),t.subVectors(Cu,Au)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class I0 extends pd{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=sa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class U0 extends Ka{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new I0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class O0 extends pd{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}}class uf extends Ka{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pa extends df{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class F0 extends pd{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hf extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new F0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ff extends Ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Os=1;class B0 extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Us,Os,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Us,Os,e,t);a.layers=this.layers,this.add(a);const r=new Nn(Us,Os,e,t);r.layers=this.layers,this.add(r);const o=new Nn(Us,Os,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Us,Os,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Us,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class z0 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class k0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=V0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function V0(){this._document.hidden===!1&&this.reset()}const Ru=new bt;class G0{constructor(e,t,n=0,s=1/0){this.ray=new Yh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(e,t=!0,n=[]){return wc(e,this,n,t),n.sort(Pu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)wc(e[s],this,n,t);return n.sort(Pu),n}}function Pu(i,e){return i.distance-e.distance}function wc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)wc(a[r],e,t,!0)}}const Bd=class Bd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};Bd.prototype.isMatrix2=!0;let Lu=Bd;function Du(i,e,t,n){const s=H0(n);switch(t){case Fh:return i*e;case Zc:return i*e/s.components*s.byteLength;case jc:return i*e/s.components*s.byteLength;case us:return i*e*2/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Bh:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Jc:return i*e*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(e,8)/4;case $l:case ql:return Math.max(i,8)*Math.max(e,8)/2;case Zl:case jl:case Jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Qr:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(i){switch(i){case An:case Nh:return{byteLength:1,components:1};case Ba:case Ih:case on:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case hi:case Xc:case Zn:return{byteLength:4,components:1};case Uh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pf(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function W0(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:$0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:Z0,alphatest_pars_fragment:j0,aomap_fragment:K0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:ag,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:dg,color_pars_fragment:ug,color_pars_vertex:hg,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:Mg,colorspace_fragment:yg,colorspace_pars_fragment:Sg,envmap_fragment:bg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:Ag,fog_vertex:Cg,fog_pars_vertex:Rg,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Ug,lights_pars_begin:Og,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:kg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:$g,lights_fragment_end:Xg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Kg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:av,morphnormal_vertex:rv,morphtarget_pars_vertex:ov,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:dv,normal_pars_fragment:uv,normal_pars_vertex:hv,normal_vertex:fv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:vv,iridescence_pars_fragment:xv,opaque_fragment:_v,packing:Mv,premultiplied_alpha_fragment:yv,project_vertex:Sv,dithering_fragment:bv,dithering_pars_fragment:wv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:Cv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Pv,skinbase_vertex:Lv,skinning_pars_vertex:Dv,skinning_vertex:Nv,skinnormal_vertex:Iv,specularmap_fragment:Uv,specularmap_pars_fragment:Ov,tonemapping_fragment:Fv,tonemapping_pars_fragment:Bv,transmission_fragment:zv,transmission_pars_fragment:kv,uv_pars_fragment:Vv,uv_pars_vertex:Gv,uv_vertex:Hv,worldpos_vertex:Wv,background_vert:$v,background_frag:Xv,backgroundCube_vert:qv,backgroundCube_frag:Yv,cube_vert:Zv,cube_frag:jv,depth_vert:Kv,depth_frag:Jv,distance_vert:Qv,distance_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:ax,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:dx,meshnormal_vert:ux,meshnormal_frag:hx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:vx,meshtoon_frag:xx,points_vert:_x,points_frag:Mx,shadow_vert:yx,shadow_frag:Sx,sprite_vert:bx,sprite_frag:wx},we={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ni={basic:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:_n([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:_n([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:_n([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:_n([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:_n([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:_n([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:_n([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:_n([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:_n([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:_n([we.common,we.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:_n([we.lights,we.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ni.physical={uniforms:_n([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Tr={r:0,b:0,g:0},Ex=new bt,mf=new tt;mf.set(-1,0,0,0,1,0,0,0,1);function Tx(i,e,t,n,s,a){const r=new Pe(0);let o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(y){let T=!1;const M=f(y);M===null?m(r,o):M&&M.isColor&&(m(M,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(y,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===bo)?(c===void 0&&(c=new se(new He(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:oa(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mf),c.material.toneMapped=ht.getTransfer(M.colorSpace)!==Mt,(d!==M||u!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new cn(2,2),new zt({name:"BackgroundMaterial",uniforms:oa(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ht.getTransfer(M.colorSpace)!==Mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(Tr,of(i)),t.buffers.color.setClear(Tr.r,Tr.g,Tr.b,T,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,T=1){r.set(y),o=T,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(r,o)},render:g,addToRenderList:v,dispose:p}}function Ax(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,r=!1;function o(D,U,G,O,k){let K=!1;const X=u(D,O,G,U);a!==X&&(a=X,c(a.object)),K=f(D,O,G,k),K&&g(D,O,G,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,M(D,U,G,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function d(D){return i.deleteVertexArray(D)}function u(D,U,G,O){const k=O.wireframe===!0;let K=n[U.id];K===void 0&&(K={},n[U.id]=K);const X=D.isInstancedMesh===!0?D.id:0;let re=K[X];re===void 0&&(re={},K[X]=re);let q=re[G.id];q===void 0&&(q={},re[G.id]=q);let Q=q[k];return Q===void 0&&(Q=h(l()),q[k]=Q),Q}function h(D){const U=[],G=[],O=[];for(let k=0;k<t;k++)U[k]=0,G[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:O,object:D,attributes:{},index:null}}function f(D,U,G,O){const k=a.attributes,K=U.attributes;let X=0;const re=G.getAttributes();for(const q in re)if(re[q].location>=0){const ee=k[q];let Le=K[q];if(Le===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Le=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Le=D.instanceColor)),ee===void 0||ee.attribute!==Le||Le&&ee.data!==Le.data)return!0;X++}return a.attributesNum!==X||a.index!==O}function g(D,U,G,O){const k={},K=U.attributes;let X=0;const re=G.getAttributes();for(const q in re)if(re[q].location>=0){let ee=K[q];ee===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const Le={};Le.attribute=ee,ee&&ee.data&&(Le.data=ee.data),k[q]=Le,X++}a.attributes=k,a.attributesNum=X,a.index=O}function v(){const D=a.newAttributes;for(let U=0,G=D.length;U<G;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){const G=a.newAttributes,O=a.enabledAttributes,k=a.attributeDivisors;G[D]=1,O[D]===0&&(i.enableVertexAttribArray(D),O[D]=1),k[D]!==U&&(i.vertexAttribDivisor(D,U),k[D]=U)}function y(){const D=a.newAttributes,U=a.enabledAttributes;for(let G=0,O=U.length;G<O;G++)U[G]!==D[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function T(D,U,G,O,k,K,X){X===!0?i.vertexAttribIPointer(D,U,G,k,K):i.vertexAttribPointer(D,U,G,O,k,K)}function M(D,U,G,O){v();const k=O.attributes,K=G.getAttributes(),X=U.defaultAttributeValues;for(const re in K){const q=K[re];if(q.location>=0){let Q=k[re];if(Q===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ee=Q.normalized,Le=Q.itemSize,Ae=e.get(Q);if(Ae===void 0)continue;const at=Ae.buffer,et=Ae.type,ae=Ae.bytesPerElement,N=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===Xc;if(Q.isInterleavedBufferAttribute){const z=Q.data,Z=z.stride,de=Q.offset;if(z.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,z.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ge=0;ge<q.locationSize;ge++)T(q.location+ge,Le/q.locationSize,et,ee,Z*ae,(de+Le/q.locationSize*ge)*ae,N)}else{if(Q.isInstancedBufferAttribute){for(let z=0;z<q.locationSize;z++)p(q.location+z,Q.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let z=0;z<q.locationSize;z++)m(q.location+z);i.bindBuffer(i.ARRAY_BUFFER,at);for(let z=0;z<q.locationSize;z++)T(q.location+z,Le/q.locationSize,et,ee,Le*ae,Le/q.locationSize*z*ae,N)}}else if(X!==void 0){const ee=X[re];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(q.location,ee);break;case 3:i.vertexAttrib3fv(q.location,ee);break;case 4:i.vertexAttrib4fv(q.location,ee);break;default:i.vertexAttrib1fv(q.location,ee)}}}}y()}function w(){b();for(const D in n){const U=n[D];for(const G in U){const O=U[G];for(const k in O){const K=O[k];for(const X in K)d(K[X].object),delete K[X];delete O[k]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const U=n[D.id];for(const G in U){const O=U[G];for(const k in O){const K=O[k];for(const X in K)d(K[X].object),delete K[X];delete O[k]}}delete n[D.id]}function R(D){for(const U in n){const G=n[U];for(const O in G){const k=G[O];if(k[D.id]===void 0)continue;const K=k[D.id];for(const X in K)d(K[X].object),delete K[X];delete k[D.id]}}}function _(D){for(const U in n){const G=n[U],O=D.isInstancedMesh===!0?D.id:0,k=G[O];if(k!==void 0){for(const K in k){const X=k[K];for(const re in X)d(X[re].object),delete X[re];delete k[K]}delete G[O],Object.keys(G).length===0&&delete n[U]}}}function b(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Cx(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Rx(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==An&&R!==Zn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ke("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:E}}function Px(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Ui,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?d(null):c();else{const y=a?0:n,T=y*4;let M=p.clippingState||null;l.value=M,M=d(g,h,T,f);for(let w=0;w!==T;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==v;++T,M+=4)r.copy(u[T]).applyMatrix4(y,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Gs=4,Lx=6,Dx=20,Nx=256,ba=new pa,Nu=new Pe;let ul=null,hl=0,fl=0,pl=!1;const Ix=new P,Zi=new P;class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=Ix}=a;ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,hl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:on,format:Vn,colorSpace:no,depthBuffer:!1},s=Uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ux(a)),this._blurMaterial=Fx(a,e,t),this._ggxMaterial=Ox(a,e,t)}return s}_compileMaterial(e){const t=new se(new kt,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,s,a){const l=new Nn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Nu),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new He,new Gi({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Nu),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[T],a.y,a.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[T],a.z)):(l.up.set(0,c[T],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[T]));const w=this._cubeSize;Fs(s,M*w,T>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===cs||e.mapping===na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Gs?n-g+Gs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Fs(a,m,p,3*v,2*v),s.setRenderTarget(a),s.render(o,ba),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,Fs(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,ba)}_blur(e,t,n,s){const a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,s,a){const r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[s],u=3*d*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),h=4*(this._cubeSize-d);Fs(t,u,h,3*d,2*d),r.setRenderTarget(t),r.render(l,ba)}}function Ux(i){const e=[],t=[];let n=i;const s=i-Gs+1+Lx;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);const o=1/(r-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,g=new Float32Array(f*h*u),v=new Float32Array(f*h*u);for(let p=0;p<u;p++){const y=p%3*2/3-1,T=p>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(M,f*h*p);for(let w=0;w<h;w++){const E=d[w*2]*2-1,R=d[w*2+1]*2-1;p===0?Zi.set(1,R,E):p===1?Zi.set(-E,1,-R):p===2?Zi.set(-E,R,1):p===3?Zi.set(-1,R,-E):p===4?Zi.set(-E,-1,R):Zi.set(E,R,-1),Zi.toArray(v,(p*h+w)*f)}}const m=new kt;m.setAttribute("position",new Gn(g,f)),m.setAttribute("outputDirection",new Gn(v,f)),t.push(new se(m,null)),n>Gs&&n--}return{lodMeshes:t,sizeLods:e}}function Uu(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ox(i,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Fx(i,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:Dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Ou(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Fu(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gf extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new He(5,5,5),a=new zt({name:"CubemapFromEquirect",uniforms:oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Qt});a.uniforms.tEquirect.value=t;const r=new se(s,a),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=nn),new B0(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}function Bx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){const f=h.mapping;if(f===Oo||f===Fo)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new gf(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const f=h.mapping,g=f===Oo||f===Fo,v=f===cs||f===na;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Iu(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||v&&y&&l(y)?(n===null&&(n=new Iu(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Oo?h.mapping=cs:f===Fo&&(h.mapping=na),h}function l(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function zx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&qs("WebGLRenderer: "+n+" extension not supported."),s}}}function kx(i,e,t,n){const s={},a=new WeakMap;function r(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let T=0,M=y.length;T<M;T+=3){const w=y[T+0],E=y[T+1],R=y[T+2];h.push(w,E,E,R,R,w)}}else{const y=g.array;v=g.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const w=T+0,E=T+1,R=T+2;h.push(w,E,E,R,R,w)}}const m=new(g.count>=65535?$h:Wh)(h,1);m.version=v;const p=a.get(u);p&&e.remove(p),a.set(u,m)}function d(u){const h=a.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Vx(i,e,t){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,h){i.drawElements(n,h,a,u*r),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,a,u*r,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,u,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Gx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:ft("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hx(i,e,t){const n=new WeakMap,s=new Ft;function a(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*E*4*u),_=new Vh(R,w,E,u);_.type=Zn,_.needsUpdate=!0;const b=M*4;for(let D=0;D<u;D++){const U=p[D],G=y[D],O=T[D],k=w*E*4*D;for(let K=0;K<U.count;K++){const X=K*b;g===!0&&(s.fromBufferAttribute(U,K),R[k+X+0]=s.x,R[k+X+1]=s.y,R[k+X+2]=s.z,R[k+X+3]=0),v===!0&&(s.fromBufferAttribute(G,K),R[k+X+4]=s.x,R[k+X+5]=s.y,R[k+X+6]=s.z,R[k+X+7]=0),m===!0&&(s.fromBufferAttribute(O,K),R[k+X+8]=s.x,R[k+X+9]=s.y,R[k+X+10]=s.z,R[k+X+11]=O.itemSize===4?s.w:1)}}h={count:u,texture:_,size:new oe(w,E)},n.set(o,h),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function Wx(i,e,t,n,s){let a=new WeakMap;function r(c){const d=s.render.frame,u=c.geometry,h=e.get(c,u);if(a.get(h)!==d&&(e.update(h),a.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return h}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:o}}const $x={[kc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[qa]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function Xx(i,e,t,n,s,a){const r=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new kt;c.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ot([0,2,0,0,2,0],2));const d=new lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new se(c,d),h=new pa(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,y=[],T=!1;this.setSize=function(M,w){r.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(M,w)}},this.setEffects=function(M){y=M,T=y.length>0&&y[0].isRenderPass===!0;const w=r.width,E=r.height;y.length>0&&o===null&&(o=new sn(w,E,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new sn(w,E,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const _=y[R];_.setSize&&_.setSize(w,E)}},this.begin=function(M,w){if(v||M.toneMapping===ci&&y.length===0)return!1;if(p=w,w!==null){const E=w.width,R=w.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return T===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=ci,!0},this.hasRenderPass=function(){return T},this.end=function(M,w){M.toneMapping=m,v=!0;let E=r,R=o;for(let _=0;_<y.length;_++){const b=y[_];b.enabled!==!1&&(b.render(M,R,E,w),b.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,d.defines={},ht.getTransfer(f)===Mt&&(d.defines.SRGB_TRANSFER="");const _=$x[g];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(u,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const vf=new mn,Ec=new aa(1,1),xf=new Vh,_f=new Rm,Mf=new Zh,Bu=[],zu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Gu=new Float32Array(4);function ma(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Bu[s];if(a===void 0&&(a=new Float32Array(s),Bu[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),jt(t,n)}}function Jx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),jt(t,n)}}function Qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),jt(t,n)}}function e_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function s_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function l_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=t.isReversedDepthBuffer()?ed:Qc,a=Ec):a=vf,t.setTexture2D(e||a,s)}function c_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_f,s)}function d_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mf,s)}function u_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xf,s)}function h_(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Zx;case 35666:return jx;case 35674:return Kx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return a_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return u_}}function f_(i,e){i.uniform1fv(this.addr,e)}function p_(i,e){const t=ma(e,this.size,2);i.uniform2fv(this.addr,t)}function m_(i,e){const t=ma(e,this.size,3);i.uniform3fv(this.addr,t)}function g_(i,e){const t=ma(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){const t=ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x_(i,e){const t=ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function __(i,e){const t=ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function S_(i,e){i.uniform3iv(this.addr,e)}function b_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function E_(i,e){i.uniform2uiv(this.addr,e)}function T_(i,e){i.uniform3uiv(this.addr,e)}function A_(i,e){i.uniform4uiv(this.addr,e)}function C_(i,e,t){const n=this.cache,s=e.length,a=Ao(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=Ec:r=vf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function R_(i,e,t){const n=this.cache,s=e.length,a=Ao(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||_f,a[r])}function P_(i,e,t){const n=this.cache,s=e.length,a=Ao(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Mf,a[r])}function L_(i,e,t){const n=this.cache,s=e.length,a=Ao(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||xf,a[r])}function D_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return v_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return M_;case 35667:case 35671:return y_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}}class I_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D_(t.type)}}class U_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Hu(i,e){i.seq.push(e),i.map[e.id]=e}function O_(i,e,t){const n=i.name,s=n.length;for(ml.lastIndex=0;;){const a=ml.exec(n),r=ml.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Hu(t,c===void 0?new N_(o,i,e):new I_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new U_(o),Hu(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);O_(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Wu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const F_=37297;let B_=0;function z_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const $u=new tt;function k_(i){ht._getMatrix($u,ht.workingColorSpace,i);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+z_(i.getShaderSource(e),o)}else return a}function V_(i,e){const t=k_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G_={[kc]:"Linear",[Vc]:"Reinhard",[Gc]:"Cineon",[qa]:"ACESFilmic",[Wc]:"AgX",[$c]:"Neutral",[Hc]:"Custom"};function H_(i,e){const t=G_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new P;function W_(){ht.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function X_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Ra(i){return i!==""}function qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(Y_,j_)}const Z_=new Map;function j_(i,e){let t=st[e];if(t===void 0){const n=Z_.get(e);if(n!==void 0)t=st[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tc(t)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(K_,J_)}function J_(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ju(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q_={[zr]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function e1(i){return Q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t1={[cs]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function n1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const i1={[na]:"ENVMAP_MODE_REFRACTION"};function s1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a1={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[$p]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};function r1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a1[i.combine]||"ENVMAP_BLENDING_NONE"}function o1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l1(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=e1(t),c=n1(t),d=s1(t),u=r1(t),h=o1(t),f=$_(t),g=X_(a),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?st.tonemapping_pars_fragment:"",t.toneMapping!==ci?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),r=Tc(r),r=qu(r,t),r=Yu(r,t),o=Tc(o),o=qu(o,t),o=Yu(o,t),r=Zu(r),o=Zu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+r,M=y+p+o,w=Wu(s,s.VERTEX_SHADER,T),E=Wu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,w),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(E)||"",k=U.trim(),K=G.trim(),X=O.trim();let re=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,E);else{const Q=Xu(s,w,"vertex"),ee=Xu(s,E,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Q+`
`+ee)}else k!==""?Ke("WebGLProgram: Program Info Log:",k):(K===""||X==="")&&(q=!1);q&&(D.diagnostics={runnable:re,programLog:k,vertexShader:{log:K,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(E),_=new Wr(s,v),b=q_(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,F_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let c1=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u1(e),t.set(e,n)),n}}class u1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function h1(i){return i===us||i===Qr||i===eo}function f1(i,e,t,n,s,a){const r=new id,o=new d1,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,b,C,D,U,G){const O=D.fog,k=U.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||K,X),q=re&&re.mapping===bo?re.image.height:null,Q=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Le=ee!==void 0?ee.length:0;let Ae=0;k.morphAttributes.position!==void 0&&(Ae=1),k.morphAttributes.normal!==void 0&&(Ae=2),k.morphAttributes.color!==void 0&&(Ae=3);let at,et,ae,N;if(Q){const Ct=ni[Q];at=Ct.vertexShader,et=Ct.fragmentShader}else{at=_.vertexShader,et=_.fragmentShader;const Ct=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,Ct,xt),ae=Ct.id,N=xt.id}const z=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),de=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Ie=!!_.map,lt=!!_.matcap,ne=!!re,ce=!!_.aoMap,ue=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,$e=!!_.displacementMap,Ve=!!_.emissiveMap,qe=!!_.metalnessMap,Ze=!!_.roughnessMap,I=_.anisotropy>0,pt=_.clearcoat>0,nt=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,H=_.transmission>0,j=I&&!!_.anisotropyMap,fe=pt&&!!_.clearcoatMap,xe=pt&&!!_.clearcoatNormalMap,J=pt&&!!_.clearcoatRoughnessMap,ie=x&&!!_.iridescenceMap,ye=x&&!!_.iridescenceThicknessMap,ze=V&&!!_.sheenColorMap,Me=V&&!!_.sheenRoughnessMap,_e=!!_.specularMap,Ue=!!_.specularColorMap,Ge=!!_.specularIntensityMap,je=H&&!!_.transmissionMap,B=H&&!!_.thicknessMap,Se=!!_.gradientMap,te=!!_.alphaMap,be=_.alphaTest>0,Ce=!!_.alphaHash,le=!!_.extensions;let We=ci;_.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(We=i.toneMapping);const Be={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:et,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:N,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:de,instancingColor:de&&U.instanceColor!==null,instancingMorph:de&&U.morphTexture!==null,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:lt,envMap:ne,envMapMode:ne&&re.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:ue,bumpMap:he,normalMap:ve,displacementMap:$e,emissiveMap:Ve,normalMapObjectSpace:ve&&_.normalMapType===Zp,normalMapTangentSpace:ve&&_.normalMapType===to,packedNormalMap:ve&&_.normalMapType===to&&h1(_.normalMap.format),metalnessMap:qe,roughnessMap:Ze,anisotropy:I,anisotropyMap:j,clearcoat:pt,clearcoatMap:fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:J,dispersion:nt,retroreflection:A,iridescence:x,iridescenceMap:ie,iridescenceThicknessMap:ye,sheen:V,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:Ue,specularIntensityMap:Ge,transmission:H,transmissionMap:je,thicknessMap:B,gradientMap:Se,opaque:_.transparent===!1&&_.blending===Pa&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:be,alphaHash:Ce,combine:_.combine,mapUv:Ie&&g(_.map.channel),aoMapUv:ce&&g(_.aoMap.channel),lightMapUv:ue&&g(_.lightMap.channel),bumpMapUv:he&&g(_.bumpMap.channel),normalMapUv:ve&&g(_.normalMap.channel),displacementMapUv:$e&&g(_.displacementMap.channel),emissiveMapUv:Ve&&g(_.emissiveMap.channel),metalnessMapUv:qe&&g(_.metalnessMap.channel),roughnessMapUv:Ze&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:fe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(_.sheenRoughnessMap.channel),specularMapUv:_e&&g(_.specularMap.channel),specularColorMapUv:Ue&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:je&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:te&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ve||I),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ie||te),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Z,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:le&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(b,_),y(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function T(_){const b=f[_.type];let C;if(b){const D=ni[b];C=si.clone(D.uniforms)}else C=_.uniforms;return C}function M(_,b){let C=d.get(b);return C!==void 0?++C.usedTimes:(C=new l1(i,b,_,s),c.push(C),d.set(b,C)),C}function w(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function p1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function m1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ju(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:r(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=r(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function l(h,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const T=o(h,f,g,v,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(h,f,g,v,m,p){const y=o(h,f,g,v,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function d(h,f){t.length>1&&t.sort(h||m1),n.length>1&&n.sort(f||Ku),s.length>1&&s.sort(f||Ku)}function u(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:u,sort:d}}function g1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Ju,i.set(n,[r])):s>=a.length?(r=new Ju,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function v1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Pe};break;case"SpotLight":t={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function x1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _1=0;function M1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y1(i){const e=new v1,t=x1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,a=new bt,r=new bt;function o(c){let d=0,u=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,T=0,M=0,w=0,E=0,R=0,_=0,b=0,C=0;c.sort(M1);for(let U=0,G=c.length;U<G;U++){const O=c[U],k=O.color,K=O.intensity,X=O.distance;let re=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===us?re=O.shadow.map.texture:re=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)d+=k.r*K,u+=k.g*K,h+=k.b*K;else if(O.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(O.sh.coefficients[q],K);C++}else if(O.isSunLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,ee=t.get(O);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=re;const Le=Q.getViewportCount();for(let Ae=0;Ae<Le;Ae++)n.sunShadowMatrix[v+Ae]=Q.getMatrix(Ae),n.sunShadowCascade[v+Ae]=Q._cascadeData[Ae];v+=Le,g++}n.sun[f]=q,f++}else if(O.isDirectionalLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Q=O.shadow,ee=t.get(O);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=O.shadow.matrix,w++}n.directional[m]=q,m++}else if(O.isSpotLight){const q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(k).multiplyScalar(K),q.distance=X,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,n.spot[y]=q;const Q=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,Q.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[y]=Q.matrix,O.castShadow){const ee=t.get(O);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=re,R++}y++}else if(O.isRectAreaLight){const q=e.get(O);q.color.copy(k).multiplyScalar(K),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),n.rectArea[T]=q,T++}else if(O.isPointLight){const q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),q.distance=O.distance,q.decay=O.decay,O.castShadow){const Q=O.shadow,ee=t.get(O);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=O.shadow.matrix,E++}n.point[p]=q,p++}else if(O.isHemisphereLight){const q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(K),q.groundColor.copy(O.groundColor).multiplyScalar(K),n.hemi[M]=q,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==T||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=T,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=C,n.version=_1++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const M=c[y];if(M.isSunLight){const w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),r.identity(),a.copy(M.matrixWorld),a.premultiply(p),r.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),v++}else if(M.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Qu(i){const e=new y1(i),t=[],n=[],s=[];function a(h){u.camera=h,t.length=0,n.length=0,s.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function S1(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Qu(i),e.set(s,[o])):a>=r.length?(o=new Qu(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],T1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],eh=new bt,wa=new P,gl=new P;function A1(i,e,t){let n=new rd;const s=new oe,a=new oe,r=new Ft,o=new D0,l=new N0,c={},d=t.maxTextureSize,u={[ls]:Cn,[Cn]:ls,[Gt]:Gt},h=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:b1,fragmentShader:w1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new se(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Pp&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Qt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==this.type;G&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=E.length;O<k;O++){const K=E[O],X=K.shadow;if(X===void 0){Ke("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const re=X.getFrameExtents();s.multiply(re),a.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/re.x),s.x=a.x*re.x,X.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/re.y),s.y=a.y*re.y,X.mapSize.y=a.y));const q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||G===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===is){if(K.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new sn(s.x,s.y,{format:us,type:on,minFilter:nn,magFilter:nn,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new aa(s.x,s.y,Zn),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=bi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt}else K.isPointLight?(X.map=new gf(s.x),X.map.depthTexture=new qm(s.x,hi)):(X.map=new sn(s.x,s.y),X.map.depthTexture=new aa(s.x,s.y,hi)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=bi,this.type===zr?(X.map.depthTexture.compareFunction=q?ed:Qc,X.map.depthTexture.minFilter=nn,X.map.depthTexture.magFilter=nn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,_);for(let ee=0;ee<Q;ee++){const Le=X.getCamera(ee);if(K.isPointLight){const Ae=X.camera,at=X.matrix,et=K.distance||Ae.far;et!==Ae.far&&(Ae.far=et,Ae.updateProjectionMatrix()),wa.setFromMatrixPosition(K.matrixWorld),Ae.position.copy(wa),gl.copy(Ae.position),gl.add(E1[ee]),Ae.up.copy(T1[ee]),Ae.lookAt(gl),Ae.updateMatrixWorld(),at.makeTranslation(-wa.x,-wa.y,-wa.z),eh.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(eh,Ae.coordinateSystem,Ae.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(X.map),i.clear());const Ae=X.getViewport(ee);r.set(a.x*Ae.x,a.y*Ae.y,a.x*Ae.z,a.y*Ae.w),U.viewport(r)}n=X.getFrustum(ee),M(R,_,Le,K,this.type)}X.isPointLightShadow!==!0&&this.type===is&&y(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,D)};function y(E,R){const _=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new sn(s.x,s.y,{format:us,type:on}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,f,v,null)}function T(E,R,_,b){let C=null;const D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,G=R.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let k=O[G];k===void 0&&(k=C.clone(),O[G]=k,R.addEventListener("dispose",w)),C=k}if(C.visible=R.visible,C.wireframe=R.wireframe,b===is?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=_}return C}function M(E,R,_,b,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===is)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const G=e.update(E),O=E.material;if(Array.isArray(O)){const k=G.groups;for(let K=0,X=k.length;K<X;K++){const re=k[K],q=O[re.materialIndex];if(q&&q.visible){const Q=T(E,q,b,C);E.onBeforeShadow(i,E,R,_,G,Q,re),i.renderBufferDirect(_,null,G,Q,E,re),E.onAfterShadow(i,E,R,_,G,Q,re)}}}else if(O.visible){const k=T(E,O,b,C);E.onBeforeShadow(i,E,R,_,G,k,null),i.renderBufferDirect(_,null,G,k,E,null),E.onAfterShadow(i,E,R,_,G,k,null)}}const U=E.children;for(let G=0,O=U.length;G<O;G++)M(U[G],R,_,b,C)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in c){const b=c[_],C=E.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function C1(i,e){function t(){let B=!1;const Se=new Ft;let te=null;const be=new Ft(0,0,0,0);return{setMask:function(Ce){te!==Ce&&!B&&(i.colorMask(Ce,Ce,Ce,Ce),te=Ce)},setLocked:function(Ce){B=Ce},setClear:function(Ce,le,We,Be,Ct){Ct===!0&&(Ce*=Be,le*=Be,We*=Be),Se.set(Ce,le,We,Be),be.equals(Se)===!1&&(i.clearColor(Ce,le,We,Be),be.copy(Se))},reset:function(){B=!1,te=null,be.set(-1,0,0,0)}}}function n(){let B=!1,Se=!1,te=null,be=null,Ce=null;return{setReversed:function(le){if(Se!==le){const We=e.get("EXT_clip_control");le?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Se=le;const Be=Ce;Ce=null,this.setClear(Be)}},getReversed:function(){return Se},setTest:function(le){le?z(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(le){te!==le&&!B&&(i.depthMask(le),te=le)},setFunc:function(le){if(Se&&(le=rm[le]),be!==le){switch(le){case Fl:i.depthFunc(i.NEVER);break;case Bl:i.depthFunc(i.ALWAYS);break;case zl:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Gl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=le}},setLocked:function(le){B=le},setClear:function(le){Ce!==le&&(Ce=le,Se&&(le=1-le),i.clearDepth(le))},reset:function(){B=!1,te=null,be=null,Ce=null,Se=!1}}}function s(){let B=!1,Se=null,te=null,be=null,Ce=null,le=null,We=null,Be=null,Ct=null;return{setTest:function(xt){B||(xt?z(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(xt){Se!==xt&&!B&&(i.stencilMask(xt),Se=xt)},setFunc:function(xt,Hn,Kn){(te!==xt||be!==Hn||Ce!==Kn)&&(i.stencilFunc(xt,Hn,Kn),te=xt,be=Hn,Ce=Kn)},setOp:function(xt,Hn,Kn){(le!==xt||We!==Hn||Be!==Kn)&&(i.stencilOp(xt,Hn,Kn),le=xt,We=Hn,Be=Kn)},setLocked:function(xt){B=xt},setClear:function(xt){Ct!==xt&&(i.clearStencil(xt),Ct=xt)},reset:function(){B=!1,Se=null,te=null,be=null,Ce=null,le=null,We=null,Be=null,Ct=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,T=null,M=null,w=null,E=null,R=null,_=new Pe(0,0,0),b=0,C=!1,D=null,U=null,G=null,O=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=re>=2);let Q=null,ee={};const Le=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),at=new Ft().fromArray(Le),et=new Ft().fromArray(Ae);function ae(B,Se,te,be){const Ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<te;We++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return le}const N={};N[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),z(i.DEPTH_TEST),r.setFunc(Fa),he(!1),ve(Zd),z(i.CULL_FACE),ce(Qt);function z(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function Z(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function de(B,Se){return h[B]!==Se?(i.bindFramebuffer(B,Se),h[B]=Se,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ge(B,Se){let te=g,be=!1;if(B){te=f.get(Se),te===void 0&&(te=[],f.set(Se,te));const Ce=B.textures;if(te.length!==Ce.length||te[0]!==i.COLOR_ATTACHMENT0){for(let le=0,We=Ce.length;le<We;le++)te[le]=i.COLOR_ATTACHMENT0+le;te.length=Ce.length,be=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,be=!0);be&&i.drawBuffers(te)}function Ie(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const lt={[ii]:i.FUNC_ADD,[Lp]:i.FUNC_SUBTRACT,[Dp]:i.FUNC_REVERSE_SUBTRACT};lt[Np]=i.MIN,lt[Ip]=i.MAX;const ne={[Aa]:i.ZERO,[Up]:i.ONE,[Op]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[kp]:i.SRC_ALPHA_SATURATE,[Ol]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Bp]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Hp]:i.CONSTANT_ALPHA,[Wp]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(B,Se,te,be,Ce,le,We,Be,Ct,xt){if(B===Qt){m===!0&&(Z(i.BLEND),m=!1);return}if(m===!1&&(z(i.BLEND),m=!0),B!==Ch){if(B!==p||xt!==C){if((y!==ii||w!==ii)&&(i.blendEquation(i.FUNC_ADD),y=ii,w=ii),xt)switch(B){case Pa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.ONE,i.ONE);break;case jd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",B);break}else switch(B){case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jd:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",B);break}T=null,M=null,E=null,R=null,_.set(0,0,0),b=0,p=B,C=xt}return}Ce=Ce||Se,le=le||te,We=We||be,(Se!==y||Ce!==w)&&(i.blendEquationSeparate(lt[Se],lt[Ce]),y=Se,w=Ce),(te!==T||be!==M||le!==E||We!==R)&&(i.blendFuncSeparate(ne[te],ne[be],ne[le],ne[We]),T=te,M=be,E=le,R=We),(Be.equals(_)===!1||Ct!==b)&&(i.blendColor(Be.r,Be.g,Be.b,Ct),_.copy(Be),b=Ct),p=B,C=!1}function ue(B,Se){B.side===Gt?Z(i.CULL_FACE):z(i.CULL_FACE);let te=B.side===Cn;Se&&(te=!te),he(te),B.blending===Pa&&B.transparent===!1?ce(Qt):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),a.setMask(B.colorWrite);const be=B.stencilWrite;o.setTest(be),be&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function ve(B){B!==Cp?(z(i.CULL_FACE),B!==U&&(B===Zd?i.cullFace(i.BACK):B===Rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),U=B}function $e(B){B!==G&&(X&&i.lineWidth(B),G=B)}function Ve(B,Se,te){B?(z(i.POLYGON_OFFSET_FILL),(O!==Se||k!==te)&&(O=Se,k=te,r.getReversed()&&(Se=-Se),i.polygonOffset(Se,te))):Z(i.POLYGON_OFFSET_FILL)}function qe(B){B?z(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function Ze(B){B===void 0&&(B=i.TEXTURE0+K-1),Q!==B&&(i.activeTexture(B),Q=B)}function I(B,Se,te){te===void 0&&(Q===null?te=i.TEXTURE0+K-1:te=Q);let be=ee[te];be===void 0&&(be={type:void 0,texture:void 0},ee[te]=be),(be.type!==B||be.texture!==Se)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(B,Se||N[B]),be.type=B,be.texture=Se)}function pt(){const B=ee[Q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function V(){try{i.texSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function fe(){try{i.texStorage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function xe(){try{i.texStorage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function J(){try{i.texImage2D(...arguments)}catch(B){ft("WebGLState:",B)}}function ie(){try{i.texImage3D(...arguments)}catch(B){ft("WebGLState:",B)}}function ye(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function ze(B,Se){u[B]!==Se&&(i.pixelStorei(B,Se),u[B]=Se)}function Me(B){at.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),at.copy(B))}function _e(B){et.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function Ue(B,Se){let te=c.get(Se);te===void 0&&(te=new WeakMap,c.set(Se,te));let be=te.get(B);be===void 0&&(be=i.getUniformBlockIndex(Se,B.name),te.set(B,be))}function Ge(B,Se){const be=c.get(Se).get(B);l.get(Se)!==be&&(i.uniformBlockBinding(Se,be,B.__bindingPointIndex),l.set(Se,be))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},Q=null,ee={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,T=null,M=null,w=null,E=null,R=null,_=new Pe(0,0,0),b=0,C=!1,D=null,U=null,G=null,O=null,k=null,at.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:z,disable:Z,bindFramebuffer:de,drawBuffers:ge,useProgram:Ie,setBlending:ce,setMaterial:ue,setFlipSided:he,setCullFace:ve,setLineWidth:$e,setPolygonOffset:Ve,setScissorTest:qe,activeTexture:Ze,bindTexture:I,unbindTexture:pt,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:J,texImage3D:ie,pixelStorei:ze,getParameter:ye,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:fe,texStorage3D:xe,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:j,scissor:Me,viewport:_e,reset:je}}function R1(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):so("canvas")}function m(A,x,V){let H=1;const j=nt(A);if((j.width>V||j.height>V)&&(H=V/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const fe=Math.floor(H*j.width),xe=Math.floor(H*j.height);h===void 0&&(h=v(fe,xe));const J=x?v(fe,xe):h;return J.width=fe,J.height=xe,J.getContext("2d").drawImage(A,0,0,fe,xe),Ke("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+fe+"x"+xe+")."),J}else return"data"in A&&Ke("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,V,H,j,fe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;H&&(xe=e.get("EXT_texture_norm16"),xe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8),V===i.UNSIGNED_SHORT&&xe&&(J=xe.R16_EXT),V===i.SHORT&&xe&&(J=xe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),x===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8),V===i.UNSIGNED_SHORT&&xe&&(J=xe.RG16_EXT),V===i.SHORT&&xe&&(J=xe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&xe&&(J=xe.RGB16_EXT),V===i.SHORT&&xe&&(J=xe.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const ie=fe?io:ht.getTransfer(j);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=ie===Mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&xe&&(J=xe.RGBA16_EXT),V===i.SHORT&&xe&&(J=xe.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(A,x){let V;return A?x===null||x===hi||x===ia?V=i.DEPTH24_STENCIL8:x===Zn?V=i.DEPTH32F_STENCIL8:x===Ba&&(V=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===ia?V=i.DEPTH_COMPONENT24:x===Zn?V=i.DEPTH_COMPONENT32F:x===Ba&&(V=i.DEPTH_COMPONENT16),V}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&u.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),D(x)}function b(A){const x=n.get(A);if(x.__webglInit===void 0)return;const V=A.source,H=f.get(V);if(H){const j=H[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(A),Object.keys(H).length===0&&f.delete(V)}n.remove(A)}function C(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const V=A.source,H=f.get(V);delete H[x.__cacheKey],r.memory.textures--}function D(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let j=0;j<x.__webglFramebuffer[H].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[H][j]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=A.textures;for(let H=0,j=V.length;H<j;H++){const fe=n.get(V[H]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),r.memory.textures--),n.remove(V[H])}n.remove(A)}let U=0;function G(){U=0}function O(){return U}function k(A){U=A}function K(){const A=U;return A>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function X(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function re(A,x){const V=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const H=A.image;if(H===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,A,x);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function q(A,x){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Z(V,A,x);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function Q(A,x){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Z(V,A,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function ee(A,x){const V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){de(V,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const Le={[ds]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Wl]:i.MIRRORED_REPEAT},Ae={[Yt]:i.NEAREST,[qp]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},at={[Kp]:i.NEVER,[nm]:i.ALWAYS,[Jp]:i.LESS,[Qc]:i.LEQUAL,[Qp]:i.EQUAL,[ed]:i.GEQUAL,[em]:i.GREATER,[tm]:i.NOTEQUAL};function et(A,x){if(x.type===Zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===Bo||x.magFilter===tr||x.magFilter===ss||x.minFilter===nn||x.minFilter===Bo||x.minFilter===tr||x.minFilter===ss)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Le[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Le[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Le[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ae[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Yt||x.minFilter!==tr&&x.minFilter!==ss||x.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ae(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let j=f.get(H);j===void 0&&(j={},f.set(H,j));const fe=X(x);if(fe!==A.__cacheKey){j[fe]===void 0&&(j[fe]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,V=!0),j[fe].usedTimes++;const xe=j[A.__cacheKey];xe!==void 0&&(j[A.__cacheKey].usedTimes--,xe.usedTimes===0&&C(x)),A.__cacheKey=fe,A.__webglTexture=j[fe].texture}return V}function N(A,x,V){return Math.floor(Math.floor(A/V)/x)}function z(A,x,V,H){const fe=A.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,H,x.data);else{fe.sort((ze,Me)=>ze.start-Me.start);let xe=0;for(let ze=1;ze<fe.length;ze++){const Me=fe[xe],_e=fe[ze],Ue=Me.start+Me.count,Ge=N(_e.start,x.width,4),je=N(Me.start,x.width,4);_e.start<=Ue+1&&Ge===je&&N(_e.start+_e.count-1,x.width,4)===Ge?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++xe,fe[xe]=_e)}fe.length=xe+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ze=0,Me=fe.length;ze<Me;ze++){const _e=fe[ze],Ue=Math.floor(_e.start/4),Ge=Math.ceil(_e.count/4),je=Ue%x.width,B=Math.floor(Ue/x.width),Se=Ge,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,je,B,Se,te,V,H,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function Z(A,x,V){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);const j=ae(A,x),fe=x.source;t.bindTexture(H,A.__webglTexture,i.TEXTURE0+V);const xe=n.get(fe);if(fe.version!==xe.__version||j===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const te=ht.getPrimaries(ht.workingColorSpace),be=x.colorSpace===Oi?null:ht.getPrimaries(x.colorSpace),Ce=x.colorSpace===Oi||te===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=m(x.image,!1,s.maxTextureSize);ie=pt(x,ie);const ye=a.convert(x.format,x.colorSpace),ze=a.convert(x.type);let Me=M(x.internalFormat,ye,ze,x.normalized,x.colorSpace,x.isVideoTexture);et(H,x);let _e;const Ue=x.mipmaps,Ge=x.isVideoTexture!==!0,je=xe.__version===void 0||j===!0,B=fe.dataReady,Se=E(x,ie);if(x.isDepthTexture)Me=w(x.format===zi,x.type),je&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,ye,ze,null));else if(x.isDataTexture)if(Ue.length>0){Ge&&je&&t.texStorage2D(i.TEXTURE_2D,Se,Me,Ue[0].width,Ue[0].height);for(let te=0,be=Ue.length;te<be;te++)_e=Ue[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,ye,ze,_e.data):t.texImage2D(i.TEXTURE_2D,te,Me,_e.width,_e.height,0,ye,ze,_e.data);x.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(i.TEXTURE_2D,Se,Me,ie.width,ie.height),B&&z(x,ie,ye,ze)):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,ye,ze,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Me,Ue[0].width,Ue[0].height,ie.depth);for(let te=0,be=Ue.length;te<be;te++)if(_e=Ue[te],x.format!==Vn)if(ye!==null)if(Ge){if(B)if(x.layerUpdates.size>0){const Ce=Du(_e.width,_e.height,x.format,x.type);for(const le of x.layerUpdates){const We=_e.data.subarray(le*Ce/_e.data.BYTES_PER_ELEMENT,(le+1)*Ce/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,le,_e.width,_e.height,1,ye,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ie.depth,ye,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,_e.width,_e.height,ie.depth,0,_e.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ie.depth,ye,ze,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,_e.width,_e.height,ie.depth,0,ye,ze,_e.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ge&&je&&t.texStorage2D(i.TEXTURE_2D,Se,Me,Ue[0].width,Ue[0].height);for(let te=0,be=Ue.length;te<be;te++)_e=Ue[te],x.format!==Vn?ye!==null?Ge?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,_e.width,_e.height,0,_e.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,_e.width,_e.height,ye,ze,_e.data):t.texImage2D(i.TEXTURE_2D,te,Me,_e.width,_e.height,0,ye,ze,_e.data)}else if(x.isDataArrayTexture)if(Ge){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Me,ie.width,ie.height,ie.depth),B)if(x.layerUpdates.size>0){const te=Du(ie.width,ie.height,x.format,x.type);for(const be of x.layerUpdates){const Ce=ie.data.subarray(be*te/ie.data.BYTES_PER_ELEMENT,(be+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ie.width,ie.height,1,ye,ze,Ce)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,ze,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,ye,ze,ie.data);else if(x.isData3DTexture)Ge?(je&&t.texStorage3D(i.TEXTURE_3D,Se,Me,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,ze,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,ye,ze,ie.data);else if(x.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(i.TEXTURE_2D,Se,Me,ie.width,ie.height);else{let te=ie.width,be=ie.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Me,te,be,0,ye,ze,null),te>>=1,be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),u.add(x),te.onpaint=be=>{const Ce=be.changedElements;for(const le of u)Ce.includes(le.image)&&(le.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const Ce=i.RGBA,le=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,le,We,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ge&&je){const te=nt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Se,Me,te.width,te.height)}for(let te=0,be=Ue.length;te<be;te++)_e=Ue[te],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ye,ze,_e):t.texImage2D(i.TEXTURE_2D,te,Me,ye,ze,_e);x.generateMipmaps=!1}else if(Ge){if(je){const te=nt(ie);t.texStorage2D(i.TEXTURE_2D,Se,Me,te.width,te.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ze,ie)}else t.texImage2D(i.TEXTURE_2D,0,Me,ye,ze,ie);p(x)&&y(H),xe.__version=fe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function de(A,x,V){if(x.image.length!==6)return;const H=ae(A,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const fe=n.get(j);if(j.version!==fe.__version||H===!0){t.activeTexture(i.TEXTURE0+V);const xe=ht.getPrimaries(ht.workingColorSpace),J=x.colorSpace===Oi?null:ht.getPrimaries(x.colorSpace),ie=x.colorSpace===Oi||xe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,ze=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!ye&&!ze?Me[le]=m(x.image[le],!0,s.maxCubemapSize):Me[le]=ze?x.image[le].image:x.image[le],Me[le]=pt(x,Me[le]);const _e=Me[0],Ue=a.convert(x.format,x.colorSpace),Ge=a.convert(x.type),je=M(x.internalFormat,Ue,Ge,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,Se=fe.__version===void 0||H===!0,te=j.dataReady;let be=E(x,_e);et(i.TEXTURE_CUBE_MAP,x);let Ce;if(ye){B&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,je,_e.width,_e.height);for(let le=0;le<6;le++){Ce=Me[le].mipmaps;for(let We=0;We<Ce.length;We++){const Be=Ce[We];x.format!==Vn?Ue!==null?B?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Be.width,Be.height,Ue,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,je,Be.width,Be.height,0,Be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,Be.width,Be.height,Ue,Ge,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,je,Be.width,Be.height,0,Ue,Ge,Be.data)}}}else{if(Ce=x.mipmaps,B&&Se){Ce.length>0&&be++;const le=nt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,je,le.width,le.height)}for(let le=0;le<6;le++)if(ze){B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Ue,Ge,Me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Me[le].width,Me[le].height,0,Ue,Ge,Me[le].data);for(let We=0;We<Ce.length;We++){const Ct=Ce[We].image[le].image;B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Ct.width,Ct.height,Ue,Ge,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,je,Ct.width,Ct.height,0,Ue,Ge,Ct.data)}}else{B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Ge,Me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ue,Ge,Me[le]);for(let We=0;We<Ce.length;We++){const Be=Ce[We];B?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Ue,Ge,Be.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,je,Ue,Ge,Be.image[le])}}}p(x)&&y(i.TEXTURE_CUBE_MAP),fe.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ge(A,x,V,H,j,fe){const xe=a.convert(V.format,V.colorSpace),J=a.convert(V.type),ie=M(V.internalFormat,xe,J,V.normalized,V.colorSpace),ye=n.get(x),ze=n.get(V);if(ze.__renderTarget=x,!ye.__hasExternalTextures){const Me=Math.max(1,x.width>>fe),_e=Math.max(1,x.height>>fe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,fe,ie,Me,_e,x.depth,0,xe,J,null):t.texImage2D(j,fe,ie,Me,_e,0,xe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,j,ze.__webglTexture,0,qe(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,j,ze.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const H=x.depthTexture,j=H&&H.isDepthTexture?H.type:null,fe=w(x.stencilBuffer,j),xe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(x),fe,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(x),fe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,fe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,A)}else{const H=x.textures;for(let j=0;j<H.length;j++){const fe=H[j],xe=a.convert(fe.format,fe.colorSpace),J=a.convert(fe.type),ie=M(fe.internalFormat,xe,J,fe.normalized,fe.colorSpace);Ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(x),ie,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(x),ie,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(A,x,V){const H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),et(i.TEXTURE_CUBE_MAP,x.depthTexture);const ye=a.convert(x.depthTexture.format),ze=a.convert(x.depthTexture.type);let Me;x.depthTexture.format===bi?Me=i.DEPTH_COMPONENT24:x.depthTexture.format===zi&&(Me=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,x.width,x.height,0,ye,ze,null)}}else re(x.depthTexture,0);const fe=j.__webglTexture,xe=qe(x),J=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ie=x.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===bi)Ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,fe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,fe,0);else if(x.depthTexture.format===zi)Ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,J,fe,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){const x=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let H=0;H<6;H++)lt(x.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?lt(x.__webglFramebuffer[0],A,0):lt(x.__webglFramebuffer,A,0)}else if(V){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[H],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,fe)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(A,x,V){const H=n.get(A);x!==void 0&&ge(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ne(A)}function ue(A){const x=A.texture,V=n.get(A),H=n.get(x);A.addEventListener("dispose",_);const j=A.textures,fe=A.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,r.memory.textures++),fe){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let ie=0;ie<x.mipmaps.length;ie++)V.__webglFramebuffer[J][ie]=i.createFramebuffer()}else V.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)V.__webglFramebuffer[J]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(xe)for(let J=0,ie=j.length;J<ie;J++){const ye=n.get(j[J]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&Ze(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){const ie=j[J];V.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[J]);const ye=a.convert(ie.format,ie.colorSpace),ze=a.convert(ie.type),Me=M(ie.internalFormat,ye,ze,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),_e=qe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,V.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),et(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ge(V.__webglFramebuffer[J][ie],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else ge(V.__webglFramebuffer[J],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(x)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let J=0,ie=j.length;J<ie;J++){const ye=j[J],ze=n.get(ye);let Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ze.__webglTexture),et(Me,ye),ge(V.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+J,Me,0),p(ye)&&y(Me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),et(J,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ge(V.__webglFramebuffer[ie],A,x,i.COLOR_ATTACHMENT0,J,ie);else ge(V.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,J,0);p(x)&&y(J),t.unbindTexture()}A.depthBuffer&&ne(A)}function he(A){const x=A.textures;for(let V=0,H=x.length;V<H;V++){const j=x[V];if(p(j)){const fe=T(A),xe=n.get(j).__webglTexture;t.bindTexture(fe,xe),y(fe),t.unbindTexture()}}}const ve=[],$e=[];function Ve(A){if(A.samples>0){if(Ze(A)===!1){const x=A.textures,V=A.width,H=A.height;let j=i.COLOR_BUFFER_BIT;const fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(A),J=x.length>1;if(J)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const ze=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,V,H,0,0,V,H,j,i.NEAREST),l===!0&&(ve.length=0,$e.length=0,ve.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ve.push(fe),$e.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const ze=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qe(A){return Math.min(s.maxSamples,A.samples)}function Ze(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){const x=r.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function pt(A,x){const V=A.colorSpace,H=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==no&&V!==Oi&&(ht.getTransfer(V)===Mt?(H!==Vn||j!==An)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",V)),x}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=O,this.setTextureUnits=k,this.setTexture2D=re,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function P1(i,e){function t(n,s=Oi){let a;const r=ht.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Vn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===jc)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Gr||n===Hr)if(r===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Xl||n===ql||n===Yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===$l)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===jl||n===Kl||n===Jl||n===Ql||n===Qr||n===ec)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Zl||n===jl)return r===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Kl)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return a.COMPRESSED_R11_EAC;if(n===Ql)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return a.COMPRESSED_RG11_EAC;if(n===ec)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===ac||n===rc||n===oc||n===lc||n===cc||n===dc||n===uc||n===hc||n===fc||n===pc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===tc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===mc)return r===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===_c||n===eo||n===Mc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:L1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I1 extends gs{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new N1,p={},y=t.getContextAttributes();let T=null,M=null;const w=[],E=[],R=new oe;let _=null,b=null;const C=new Nn;C.viewport=new Ft;const D=new Nn;D.viewport=new Ft;const U=[C,D],G=new z0;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=w[N];return z===void 0&&(z=new $o,w[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=w[N];return z===void 0&&(z=new $o,w[N]=z),z.getGripSpace()},this.getHand=function(N){let z=w[N];return z===void 0&&(z=new $o,w[N]=z),z.getHandSpace()};function K(N){const z=E.indexOf(N.inputSource);if(z===-1)return;const Z=w[z];Z!==void 0&&(Z.update(N.inputSource,N.frame,c||r),Z.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let N=0;N<w.length;N++){const z=E[N];z!==null&&(E[N]=null,w[N].disconnect(z))}O=null,k=null,m.reset();for(const N in p)delete p[N];if(e.setRenderTarget(T),f=null,h=null,u=null,s=null,M=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),b!==null){const N=b.camera;N.fov=b.fov,N.zoom=b.zoom,N.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){a=N,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,de=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=y.stencil?zi:bi,de=y.stencil?ia:hi);const Ie={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};u=this.getBinding(),h=u.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new sn(h.textureWidth,h.textureHeight,{format:Vn,type:An,depthTexture:new aa(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new sn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(N){for(let z=0;z<N.removed.length;z++){const Z=N.removed[z],de=E.indexOf(Z);de>=0&&(E[de]=null,w[de].disconnect(Z))}for(let z=0;z<N.added.length;z++){const Z=N.added[z];let de=E.indexOf(Z);if(de===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=E.length){E.push(Z),de=Ie;break}else if(E[Ie]===null){E[Ie]=Z,de=Ie;break}if(de===-1)break}const ge=w[de];ge&&ge.connect(Z)}}const q=new P,Q=new P;function ee(N,z,Z){q.setFromMatrixPosition(z.matrixWorld),Q.setFromMatrixPosition(Z.matrixWorld);const de=q.distanceTo(Q),ge=z.projectionMatrix.elements,Ie=Z.projectionMatrix.elements,lt=ge[14]/(ge[10]-1),ne=ge[14]/(ge[10]+1),ce=(ge[9]+1)/ge[5],ue=(ge[9]-1)/ge[5],he=(ge[8]-1)/ge[0],ve=(Ie[8]+1)/Ie[0],$e=lt*he,Ve=lt*ve,qe=de/(-he+ve),Ze=qe*-he;if(z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ze),N.translateZ(qe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ge[10]===-1)N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const I=lt+qe,pt=ne+qe,nt=$e-Ze,A=Ve+(de-Ze),x=ce*ne/pt*I,V=ue*ne/pt*I;N.projectionMatrix.makePerspective(nt,A,x,V,I,pt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Le(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let z=N.near,Z=N.far;m.texture!==null&&(m.depthNear>0&&(z=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),G.near=D.near=C.near=z,G.far=D.far=C.far=Z,(O!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),O=G.near,k=G.far),G.layers.mask=N.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const de=N.parent,ge=G.cameras;Le(G,de);for(let Ie=0;Ie<ge.length;Ie++)Le(ge[Ie],de);ge.length===2?ee(G,C,D):G.projectionMatrix.copy(C.projectionMatrix),b===null&&N.isPerspectiveCamera&&(b={camera:N,fov:N.fov,zoom:N.zoom}),Ae(N,G,de)};function Ae(N,z,Z){Z===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(Z.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=sa*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(N){return p[N]};let at=null;function et(N,z){if(d=z.getViewerPose(c||r),g=z,d!==null){const Z=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let de=!1;Z.length!==G.cameras.length&&(G.cameras.length=0,de=!0);for(let ne=0;ne<Z.length;ne++){const ce=Z[ne];let ue=null;if(f!==null)ue=f.getViewport(ce);else{const ve=u.getViewSubImage(h,ce);ue=ve.viewport,ne===0&&(e.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(M))}let he=U[ne];he===void 0&&(he=new Nn,he.layers.enable(ne),he.viewport=new Ft,U[ne]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ue.x,ue.y,ue.width,ue.height),ne===0&&(G.matrix.copy(he.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),de===!0&&G.cameras.push(he)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const ne=u.getDepthInformation(Z[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<Z.length;ne++){const ce=Z[ne].camera;if(ce){let ue=p[ce];ue||(ue=new Kh,p[ce]=ue);const he=u.getCameraImage(ce);ue.sourceTexture=he}}}}for(let Z=0;Z<w.length;Z++){const de=E[Z],ge=w[Z];de!==null&&ge!==void 0&&ge.update(de,z,c||r)}at&&at(N,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const ae=new pf;ae.setAnimationLoop(et),this.setAnimationLoop=function(N){at=N},this.dispose=function(){}}}const U1=new bt,yf=new tt;yf.set(-1,0,0,0,1,0,0,0,1);function O1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,of(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,M=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F1(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const E=w.program;n.uniformBlockBinding(M,E)}function c(M,w){let E=s[M.id];E===void 0&&(m(M),E=d(M),s[M.id]=E,M.addEventListener("dispose",y));const R=w.program;n.updateUBOMapping(M,R);const _=e.render.frame;a[M.id]!==_&&(h(M),a[M.id]=_)}function d(M){const w=u();M.__bindingPointIndex=w;const E=i.createBuffer(),R=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=s[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,b=E.length;_<b;_++){const C=E[_];if(Array.isArray(C))for(let D=0,U=C.length;D<U;D++)f(C[D],_,D,R);else f(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,E,R){if(v(M,w,E,R)===!0){const _=M.__offset,b=M.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const U=b[D],G=p(U);g(U,M.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function v(M,w,E,R){const _=M.value,b=w+"_"+E;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const C=R[b];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){const w=M.uniforms;let E=0;const R=16;for(let b=0,C=w.length;b<C;b++){const D=Array.isArray(w[b])?w[b]:[w[b]];for(let U=0,G=D.length;U<G;U++){const O=D[U],k=Array.isArray(O.value)?O.value:[O.value];for(let K=0,X=k.length;K<X;K++){const re=k[K],q=p(re),Q=E%R,ee=Q%q.boundary,Le=Q+ee;E+=ee,Le!==0&&R-Le<q.storage&&(E+=R-Le),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=q.storage}}}const _=E%R;return _>0&&(E+=R-_),M.__size=E,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){const w=M.target;w.removeEventListener("dispose",y);const E=r.indexOf(w.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function T(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:l,update:c,dispose:T}}const B1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function z1(){return ei===null&&(ei=new wo(B1,16,16,us,on),ei.name="DFG_LUT",ei.minFilter=nn,ei.magFilter=nn,ei.wrapS=ai,ei.wrapT=ai,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Sf{constructor(e={}){const{canvas:t=sm(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=An}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const v=f,m=new Set([Jc,Kc,jc]),p=new Set([An,hi,Ba,ia,qc,Yc]),y=new Uint32Array(4),T=new Int32Array(4),M=new P;let w=null,E=null;const R=[],_=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,U=null,G=null,O=null,k=null;this._outputColorSpace=En;let K=0,X=0,re=null,q=-1,Q=null;const ee=new Ft,Le=new Ft;let Ae=null;const at=new Pe(0);let et=0,ae=t.width,N=t.height,z=1,Z=null,de=null;const ge=new Ft(0,0,ae,N),Ie=new Ft(0,0,ae,N);let lt=!1;const ne=new rd;let ce=!1,ue=!1;const he=new bt,ve=new P,$e=new Ft,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ze(){return re===null?z:1}let I=n;function pt(S,F){return t.getContext(S,F)}let nt,A,x,V,H,j,fe,xe,J,ie,ye,ze,Me,_e,Ue,Ge,je,B,Se,te,be,Ce,le;try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),I===null){const F="webgl2";if(I=pt(F,S),I===null)throw pt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(S){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),ft("WebGLRenderer: "+S.message),S}function We(){nt=new zx(I),nt.init(),be=new P1(I,nt),A=new Rx(I,nt,e,be),x=new C1(I,nt),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),G=I.createFramebuffer(),O=I.createFramebuffer(),k=I.createFramebuffer(),V=new Gx(I),H=new p1,j=new R1(I,nt,x,H,A,be,V),fe=new Bx(C),xe=new W0(I),Ce=new Ax(I,xe),J=new kx(I,xe,V,Ce),ie=new Wx(I,J,xe,Ce,V),B=new Hx(I,A,j),Ue=new Px(H),ye=new f1(C,fe,nt,A,Ce,Ue),ze=new O1(C,H),Me=new g1,_e=new S1(nt),je=new Tx(C,fe,x,ie,g,l),Ge=new A1(C,ie,A),le=new F1(I,V,A,x),Se=new Cx(I,nt,V),te=new Vx(I,nt,V),V.programs=ye.programs,C.capabilities=A,C.extensions=nt,C.properties=H,C.renderLists=Me,C.shadowMap=Ge,C.state=x,C.info=V}v!==An&&(b=new Xx(v,t.width,t.height,o,s,a));const Be=new I1(C,I);this.xr=Be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(ae,N,!1))},this.getSize=function(S){return S.set(ae,N)},this.setSize=function(S,F,Y=!0){if(Be.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=S,N=F,t.width=Math.floor(S*z),t.height=Math.floor(F*z),Y===!0&&(t.style.width=S+"px",t.style.height=F+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ae*z,N*z).floor()},this.setDrawingBufferSize=function(S,F,Y){ae=S,N=F,z=Y,t.width=Math.floor(S*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(v===An){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ee)},this.getViewport=function(S){return S.copy(ge)},this.setViewport=function(S,F,Y,W){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,F,Y,W),x.viewport(ee.copy(ge).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,F,Y,W){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,F,Y,W),x.scissor(Le.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(S){x.setScissorTest(lt=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Y=!0){let W=0;if(S){let $=!1;if(re!==null){const Te=re.texture.format;$=m.has(Te)}if($){const Te=re.texture.type,Ne=p.has(Te),Ee=je.getClearColor(),Oe=je.getClearAlpha(),ke=Ee.r,it=Ee.g,ct=Ee.b;Ne?(y[0]=ke,y[1]=it,y[2]=ct,y[3]=Oe,I.clearBufferuiv(I.COLOR,0,y)):(T[0]=ke,T[1]=it,T[2]=ct,T[3]=Oe,I.clearBufferiv(I.COLOR,0,T))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),je.dispose(),Me.dispose(),_e.dispose(),H.dispose(),fe.dispose(),ie.dispose(),Ce.dispose(),le.dispose(),ye.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",kd),Be.removeEventListener("sessionend",Vd),Wi.stop()};function Ct(S){S.preventDefault(),ao("WebGLRenderer: Context Lost."),D=!0}function xt(){ao("WebGLRenderer: Context Restored."),D=!1;const S=V.autoReset,F=Ge.enabled,Y=Ge.autoUpdate,W=Ge.needsUpdate,$=Ge.type;We(),V.autoReset=S,Ge.enabled=F,Ge.autoUpdate=Y,Ge.needsUpdate=W,Ge.type=$}function Hn(S){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kn(S){const F=S.target;F.removeEventListener("dispose",Kn),_p(F)}function _p(S){Mp(S),H.remove(S)}function Mp(S){const F=H.get(S).programs;F!==void 0&&(F.forEach(function(Y){ye.releaseProgram(Y)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Y,W,$,Te){F===null&&(F=Ve);const Ne=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ee=bp(S,F,Y,W,$);x.setMaterial(W,Ne);let Oe=Y.index,ke=1;if(W.wireframe===!0){if(Oe=J.getWireframeAttribute(Y),Oe===void 0)return;ke=2}const it=Y.drawRange,ct=Y.attributes.position;let Fe=it.start*ke,_t=(it.start+it.count)*ke;Te!==null&&(Fe=Math.max(Fe,Te.start*ke),_t=Math.min(_t,(Te.start+Te.count)*ke)),Oe!==null?(Fe=Math.max(Fe,0),_t=Math.min(_t,Oe.count)):ct!=null&&(Fe=Math.max(Fe,0),_t=Math.min(_t,ct.count));const Wt=_t-Fe;if(Wt<0||Wt===1/0)return;Ce.setup($,W,Ee,Y,Oe);let Dt,Tt=Se;if(Oe!==null&&(Dt=xe.get(Oe),Tt=te,Tt.setIndex(Dt)),$.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*Ze()),Tt.setMode(I.LINES)):Tt.setMode(I.TRIANGLES);else if($.isLine){let dn=W.linewidth;dn===void 0&&(dn=1),x.setLineWidth(dn*Ze()),$.isLineSegments?Tt.setMode(I.LINES):$.isLineLoop?Tt.setMode(I.LINE_LOOP):Tt.setMode(I.LINE_STRIP)}else $.isPoints?Tt.setMode(I.POINTS):$.isSprite&&Tt.setMode(I.TRIANGLES);if($.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const dn=$._multiDrawStarts,De=$._multiDrawCounts,gn=$._multiDrawCount,gt=Oe?xe.get(Oe).bytesPerElement:1,On=H.get(W).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)On.setValue(I,"_gl_DrawID",Jn),Tt.render(dn[Jn]/gt,De[Jn])}else if($.isInstancedMesh)Tt.renderInstances(Fe,Wt,$.count);else if(Y.isInstancedBufferGeometry){const dn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,De=Math.min(Y.instanceCount,dn);Tt.renderInstances(Fe,Wt,De)}else Tt.render(Fe,Wt)};function zd(S,F,Y,W){U!==null&&S.isNodeMaterial&&U.setObject(W,S),ce===!0&&Ue.setState(S,Y,!1),S.transparent===!0&&S.side===Gt&&S.forceSinglePass===!1?(S.side=Cn,S.needsUpdate=!0,er(S,F,W),S.side=ls,S.needsUpdate=!0,er(S,F,W),S.side=Gt):er(S,F,W)}this.compile=function(S,F,Y=null){Y===null&&(Y=S),U!==null&&U.renderStart(S,F,Y),E=_e.get(Y),E.init(F),_.push(E),Y.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),S!==Y&&S.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,ue),ce===!0&&Ue.setGlobalState(this.clippingPlanes,F),U!==null&&Ge.render(E.state.shadowsArray,Y,F);const W=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Ee=Te[Ne];zd(Ee,Y,F,$),W.add(Ee)}else zd(Te,Y,F,$),W.add(Te)}),E=_.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(S,F,Y=null){const W=this.compile(S,F,Y);return new Promise($=>{function Te(){if(W.forEach(function(Ne){const Oe=H.get(Ne).currentProgram;(Oe===void 0||Oe.isReady())&&W.delete(Ne)}),W.size===0){$(S);return}setTimeout(Te,10)}nt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Io=null;function yp(S){Io&&Io(S)}function kd(){Wi.stop()}function Vd(){Wi.start()}const Wi=new pf;Wi.setAnimationLoop(yp),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(S){Io=S,Be.setAnimationLoop(S),S===null?Wi.stop():Wi.start()},Be.addEventListener("sessionstart",kd),Be.addEventListener("sessionend",Vd),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,F);const Y=Be.enabled===!0&&Be.isPresenting===!0,W=b!==null&&(re===null||Y)&&b.begin(C,re);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(F),F=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,re),E=_e.get(S,_.length),E.init(F),E.state.textureUnits=j.getTextureUnits(),_.push(E),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(he,ri,F.reversedDepth),ue=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,ue),w=Me.get(S,R.length),w.init(),R.push(w),Be.enabled===!0&&Be.isPresenting===!0){const Ne=C.xr.getDepthSensingMesh();Ne!==null&&Uo(Ne,F,-1/0,C.sortObjects)}Uo(S,F,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&w.sort(Z,de),qe=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,qe&&je.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ue.beginShadows();const $=E.state.shadowsArray;if(Ge.render($,S,F),ce===!0&&Ue.endShadows(),(W&&b.hasRenderPass())===!1){const Ne=w.opaque,Ee=w.transmissive;if(E.setupLights(),F.isArrayCamera){const Oe=F.cameras;if(Ee.length>0)for(let ke=0,it=Oe.length;ke<it;ke++){const ct=Oe[ke];Hd(Ne,Ee,S,ct)}qe&&je.render(S);for(let ke=0,it=Oe.length;ke<it;ke++){const ct=Oe[ke];Gd(w,S,ct,ct.viewport)}}else Ee.length>0&&Hd(Ne,Ee,S,F),qe&&je.render(S),Gd(w,S,F)}re!==null&&X===0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re)),W&&b.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),Ce.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],j.setTextureUnits(E.state.textureUnits),ce===!0&&Ue.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function Uo(S,F,Y,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ne)){W&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const Ne=ie.update(S),Ee=S.material;Ee.visible&&w.push(S,Ne,Ee,Y,$e.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ne))){const Ne=ie.update(S),Ee=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),$e.copy(Ne.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(Ee)){const Oe=Ne.groups;for(let ke=0,it=Oe.length;ke<it;ke++){const ct=Oe[ke],Fe=Ee[ct.materialIndex];Fe&&Fe.visible&&w.push(S,Ne,Fe,Y,$e.z,ct,F)}}else Ee.visible&&w.push(S,Ne,Ee,Y,$e.z,null,F)}}const Te=S.children;for(let Ne=0,Ee=Te.length;Ne<Ee;Ne++)Uo(Te[Ne],F,Y,W)}function Gd(S,F,Y,W){const{opaque:$,transmissive:Te,transparent:Ne}=S;E.setupLightsView(Y),ce===!0&&Ue.setGlobalState(C.clippingPlanes,Y),W&&x.viewport(ee.copy(W)),$.length>0&&Qa($,F,Y),Te.length>0&&Qa(Te,F,Y),Ne.length>0&&Qa(Ne,F,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Hd(S,F,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Fe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new sn(1,1,{generateMipmaps:!0,type:Fe?on:An,minFilter:ss,samples:Math.max(4,A.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Te=E.state.transmissionRenderTarget[W.id],Ne=W.viewport||ee;Te.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);const Ee=C.getRenderTarget(),Oe=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(at),et=C.getClearAlpha(),et<1&&C.setClearColor(16777215,.5),C.clear(),qe&&je.render(Y);const it=C.toneMapping;C.toneMapping=ci;const ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ce===!0&&Ue.setGlobalState(C.clippingPlanes,W),Qa(S,Y,W),j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let _t=0,Wt=F.length;_t<Wt;_t++){const Dt=F[_t],{object:Tt,geometry:dn,material:De,group:gn}=Dt;if(De.side===Gt&&Tt.layers.test(W.layers)){const gt=De.side;De.side=Cn,De.needsUpdate=!0,Wd(Tt,Y,W,dn,De,gn),De.side=gt,De.needsUpdate=!0,Fe=!0}}Fe===!0&&(j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te))}C.setRenderTarget(Ee,Oe,ke),C.setClearColor(at,et),ct!==void 0&&(W.viewport=ct),C.toneMapping=it}function Qa(S,F,Y){const W=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Te=S.length;$<Te;$++){const Ne=S[$],{object:Ee,geometry:Oe,group:ke}=Ne;let it=Ne.material;it.allowOverride===!0&&W!==null&&(it=W),Ee.layers.test(Y.layers)&&Wd(Ee,F,Y,Oe,it,ke)}}function Wd(S,F,Y,W,$,Te){U!==null&&$.isNodeMaterial&&U.setObject(S,$),S.onBeforeRender(C,F,Y,W,$,Te),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(C,F,Y,W,S,Te),$.transparent===!0&&$.side===Gt&&$.forceSinglePass===!1?($.side=Cn,$.needsUpdate=!0,C.renderBufferDirect(Y,F,W,$,S,Te),$.side=ls,$.needsUpdate=!0,C.renderBufferDirect(Y,F,W,$,S,Te),$.side=Gt):C.renderBufferDirect(Y,F,W,$,S,Te),S.onAfterRender(C,F,Y,W,$,Te)}function er(S,F,Y){F.isScene!==!0&&(F=Ve);const W=H.get(S),$=E.state.lights,Te=E.state.shadowsArray,Ne=$.state.version,Ee=ye.getParameters(S,$.state,Te,F,Y,E.state.lightProbeGridArray),Oe=ye.getProgramCacheKey(Ee);let ke=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const it=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=fe.get(S.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Kn),ke=new Map,W.programs=ke);let ct=ke.get(Oe);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Ne)return Xd(S,Ee),ct}else Ee.uniforms=ye.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,Y,Ee),S.onBeforeCompile(Ee,C),ct=ye.acquireProgram(Ee,Oe),ke.set(Oe,ct),W.uniforms=Ee.uniforms;const Fe=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Ue.uniform),Xd(S,Ee),W.needsLights=Ep(S),W.lightsStateVersion=Ne,W.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.sunLights.value=$.state.sun,Fe.sunLightShadows.value=$.state.sunShadow,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.sunShadowMatrix.value=$.state.sunShadowMatrix,Fe.sunShadowCascade.value=$.state.sunShadowCascade,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=ct,W.uniformsList=null,ct}function $d(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Wr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Xd(S,F){const Y=H.get(S);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Sp(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let Y=0,W=S.length;Y<W;Y++){const $=S[Y];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function bp(S,F,Y,W,$){F.isScene!==!0&&(F=Ve),j.resetTextureUnits();const Te=F.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Ee=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ht.workingColorSpace,Oe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ke=fe.get(W.envMap||Ne,Oe),it=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ct=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Wt=!!Y.morphAttributes.color;let Dt=ci;W.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Dt=C.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dn=Tt!==void 0?Tt.length:0,De=H.get(W),gn=E.state.lights;if(ce===!0&&(ue===!0||S!==Q)){const Rt=S===Q&&W.id===q;Ue.setState(W,S,Rt)}let gt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gn.state.version||De.outputColorSpace!==Ee||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==ke||W.fog===!0&&De.fog!==Te||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ue.numPlanes||De.numIntersection!==Ue.numIntersection)||De.vertexAlphas!==it||De.vertexTangents!==ct||De.morphTargets!==Fe||De.morphNormals!==_t||De.morphColors!==Wt||De.toneMapping!==Dt||De.morphTargetsCount!==dn||!!De.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,De.__version=W.version);let On=De.currentProgram;gt===!0&&(On=er(W,F,$),U&&W.isNodeMaterial&&U.onUpdateProgram(W,On,De));let Jn=!1,Ti=!1,_s=!1;const wt=On.getUniforms(),Vt=De.uniforms;if(x.useProgram(On.program)&&(Jn=!0,Ti=!0,_s=!0),W.id!==q&&(q=W.id,Ti=!0),De.needsLights){const Rt=Sp(E.state.lightProbeGridArray,$);De.lightProbeGrid!==Rt&&(De.lightProbeGrid=Rt,Ti=!0)}if(Jn||Q!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",S.projectionMatrix),wt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Ci=wt.map.cameraPosition;Ci!==void 0&&Ci.setValue(I,ve.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Ti=!0,_s=!0)}if(De.needsLights&&(gn.state.sunShadowMap.length>0&&wt.setValue(I,"sunShadowMap",gn.state.sunShadowMap,j),gn.state.directionalShadowMap.length>0&&wt.setValue(I,"directionalShadowMap",gn.state.directionalShadowMap,j),gn.state.spotShadowMap.length>0&&wt.setValue(I,"spotShadowMap",gn.state.spotShadowMap,j),gn.state.pointShadowMap.length>0&&wt.setValue(I,"pointShadowMap",gn.state.pointShadowMap,j)),$.isSkinnedMesh){wt.setOptional(I,$,"bindMatrix"),wt.setOptional(I,$,"bindMatrixInverse");const Rt=$.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),wt.setValue(I,"boneTexture",Rt.boneTexture,j))}$.isBatchedMesh&&(wt.setOptional(I,$,"batchingTexture"),wt.setValue(I,"batchingTexture",$._matricesTexture,j),wt.setOptional(I,$,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",$._indirectTexture,j),wt.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",$._colorsTexture,j));const Ai=Y.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&B.update($,Y,On),(Ti||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,wt.setValue(I,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Vt.envMapIntensity.value=F.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=z1()),Ti){if(wt.setValue(I,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&wp(Vt,_s),Te&&W.fog===!0&&ze.refreshFogUniforms(Vt,Te),ze.refreshMaterialUniforms(Vt,W,z,N,E.state.transmissionRenderTarget[S.id]),De.needsLights&&De.lightProbeGrid){const Rt=De.lightProbeGrid;Vt.probesSH.value=Rt.texture,Vt.probesMin.value.copy(Rt.boundingBox.min),Vt.probesMax.value.copy(Rt.boundingBox.max),Vt.probesResolution.value.copy(Rt.resolution)}Wr.upload(I,$d(De),Vt,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Wr.upload(I,$d(De),Vt,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(I,"center",$.center),wt.setValue(I,"modelViewMatrix",$.modelViewMatrix),wt.setValue(I,"normalMatrix",$.normalMatrix),wt.setValue(I,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){const Rt=W.uniformsGroups;for(let Ci=0,Ms=Rt.length;Ci<Ms;Ci++){const Yd=Rt[Ci];le.update(Yd,On),le.bind(Yd,On)}}return On}function wp(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ep(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(S,F,Y){const W=H.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=F,H.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const Y=H.get(S);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Y=0){re=S,K=F,X=Y;let W=null,$=!1,Te=!1;if(S){const Ee=H.get(S);if(Ee.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Ee.__webglFramebuffer),ee.copy(S.viewport),Le.copy(S.scissor),Ae=S.scissorTest,x.viewport(ee),x.scissor(Le),x.setScissorTest(Ae),q=-1;return}else if(Ee.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(Ee.__hasExternalTextures)j.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const it=S.depthTexture;if(Ee.__boundDepthTexture!==it){if(it!==null&&H.has(it)&&(S.width!==it.image.width||S.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const ke=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?W=ke[F][Y]:W=ke[F],$=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?W=H.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[Y]:W=ke,ee.copy(S.viewport),Le.copy(S.scissor),Ae=S.scissorTest}else ee.copy(ge).multiplyScalar(z).floor(),Le.copy(Ie).multiplyScalar(z).floor(),Ae=lt;if(Y!==0&&(W=G),x.bindFramebuffer(I.FRAMEBUFFER,W)&&x.drawBuffers(S,W),x.viewport(ee),x.scissor(Le),x.setScissorTest(Ae),$){const Ee=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,Y)}else if(Te){const Ee=F;for(let Oe=0;Oe<S.textures.length;Oe++){const ke=H.get(S.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ke.__webglTexture,Y,Ee)}}else if(S!==null&&Y!==0){const Ee=H.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,Y)}q=-1};function qd(S){const F=H.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=A.textureFormatReadable(S.format),F.__typeReadable=A.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Y,W,$,Te,Ne,Ee=0){if(!(S&&S.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){x.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const ke=S.textures[Ee],it=ke.format,ct=ke.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const Fe=qd(ke);if(Fe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&Y>=0&&Y<=S.height-$&&I.readPixels(F,Y,W,$,be.convert(it),be.convert(ct),Te)}finally{const ke=re!==null?H.get(re).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,F,Y,W,$,Te,Ne,Ee=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(F>=0&&F<=S.width-W&&Y>=0&&Y<=S.height-$){x.bindFramebuffer(I.FRAMEBUFFER,Oe);const ke=S.textures[Ee],it=ke.format,ct=ke.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const Fe=qd(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(F,Y,W,$,be.convert(it),be.convert(ct),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Wt=re!==null?H.get(re).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Wt);const Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await am(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(_t),I.deleteSync(Dt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Y=0){const W=Math.pow(2,-Y),$=Math.floor(S.image.width*W),Te=Math.floor(S.image.height*W),Ne=F!==null?F.x:0,Ee=F!==null?F.y:0;j.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ne,Ee,$,Te),x.unbindTexture()},this.copyTextureToTexture=function(S,F,Y=null,W=null,$=0,Te=0){let Ne,Ee,Oe,ke,it,ct,Fe,_t,Wt;const Dt=S.isCompressedTexture?S.mipmaps[Te]:S.image;if(Y!==null)Ne=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,it=Y.min.y,ct=Y.isBox3?Y.min.z:0;else{const Vt=Math.pow(2,-$);Ne=Math.floor(Dt.width*Vt),Ee=Math.floor(Dt.height*Vt),S.isDataArrayTexture?Oe=Dt.depth:S.isData3DTexture?Oe=Math.floor(Dt.depth*Vt):Oe=1,ke=0,it=0,ct=0}W!==null?(Fe=W.x,_t=W.y,Wt=W.z):(Fe=0,_t=0,Wt=0);const Tt=be.convert(F.format),dn=be.convert(F.type);let De;F.isData3DTexture?(j.setTexture3D(F,0),De=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),De=I.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),De=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const gn=x.getParameter(I.UNPACK_ROW_LENGTH),gt=x.getParameter(I.UNPACK_IMAGE_HEIGHT),On=x.getParameter(I.UNPACK_SKIP_PIXELS),Jn=x.getParameter(I.UNPACK_SKIP_ROWS),Ti=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),x.pixelStorei(I.UNPACK_SKIP_ROWS,it),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ct);const _s=S.isDataArrayTexture||S.isData3DTexture,wt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Vt=H.get(S),Ai=H.get(F),Rt=H.get(Vt.__renderTarget),Ci=H.get(Ai.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,Rt.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ms=0;Ms<Oe;Ms++)_s&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(S).__webglTexture,$,ct+Ms),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Te,Wt+Ms)),I.blitFramebuffer(ke,it,Ne,Ee,Fe,_t,Ne,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||H.has(S)){const Vt=H.get(S),Ai=H.get(F);x.bindFramebuffer(I.READ_FRAMEBUFFER,O),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let Rt=0;Rt<Oe;Rt++)_s?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,$,ct+Rt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,$),wt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ai.__webglTexture,Te,Wt+Rt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ai.__webglTexture,Te),$!==0?I.blitFramebuffer(ke,it,Ne,Ee,Fe,_t,Ne,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):wt?I.copyTexSubImage3D(De,Te,Fe,_t,Wt+Rt,ke,it,Ne,Ee):I.copyTexSubImage2D(De,Te,Fe,_t,ke,it,Ne,Ee);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else wt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(De,Te,Fe,_t,Wt,Ne,Ee,Oe,Tt,dn,Dt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(De,Te,Fe,_t,Wt,Ne,Ee,Oe,Tt,Dt.data):I.texSubImage3D(De,Te,Fe,_t,Wt,Ne,Ee,Oe,Tt,dn,Dt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,Fe,_t,Ne,Ee,Tt,dn,Dt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,Fe,_t,Dt.width,Dt.height,Tt,Dt.data):I.texSubImage2D(I.TEXTURE_2D,Te,Fe,_t,Ne,Ee,Tt,dn,Dt);x.pixelStorei(I.UNPACK_ROW_LENGTH,gn),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),x.pixelStorei(I.UNPACK_SKIP_PIXELS,On),x.pixelStorei(I.UNPACK_SKIP_ROWS,Jn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Ti),Te===0&&F.generateMipmaps&&I.generateMipmap(De),x.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){K=0,X=0,re=null,x.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k1=new pa(-1,1,1,-1,0,1);class V1 extends kt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const G1=new V1;class Co{constructor(e){this._mesh=new se(G1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bf extends Hi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Co(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class th extends Hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class H1 extends Hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class W1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bf(rs),this.copyPass.material.blending=Qt,this.timer=new k0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}th!==void 0&&(r instanceof th?n=!0:r instanceof H1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $1 extends Hi{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Cr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new bt},cameraProjectionMatrixInverse:{value:new bt},cameraWorldMatrix:{value:new bt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Rr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},vl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function X1(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=q1(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],l=2*Math.PI*o/n,c=new P(Math.cos(l),Math.sin(l),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const a=new wo(s,e,e);return a.wrapS=ds,a.wrapT=ds,a.needsUpdate=!0,a}function q1(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}const Pr={defines:{SAMPLES:16,SAMPLE_VECTORS:wf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new bt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function wf(i,e,t){const n=Y1(i,e,t);let s="vec3[SAMPLES](";for(let a=0;a<i;a++){const r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function Y1(i,e,t){const n=[];for(let s=0;s<i;s++){const a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new P(Math.cos(a),Math.sin(a),r))}return n}class Z1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,a;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,l=Math.floor(e+o),c=Math.floor(t+o),d=(3-Math.sqrt(3))/6,u=(l+c)*d,h=l-u,f=c-u,g=e-h,v=t-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const y=g-m+d,T=v-p+d,M=g-1+2*d,w=v-1+2*d,E=l&255,R=c&255,_=this.perm[E+this.perm[R]]%12,b=this.perm[E+m+this.perm[R+p]]%12,C=this.perm[E+1+this.perm[R+1]]%12;let D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[_],g,v));let U=.5-y*y-T*T;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[b],y,T));let G=.5-M*M-w*w;return G<0?a=0:(G*=G,a=G*G*this._dot(this.grad3[C],M,w)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o;const c=(e+t+n)*.3333333333333333,d=Math.floor(e+c),u=Math.floor(t+c),h=Math.floor(n+c),f=1/6,g=(d+u+h)*f,v=d-g,m=u-g,p=h-g,y=e-v,T=t-m,M=n-p;let w,E,R,_,b,C;y>=T?T>=M?(w=1,E=0,R=0,_=1,b=1,C=0):y>=M?(w=1,E=0,R=0,_=1,b=0,C=1):(w=0,E=0,R=1,_=1,b=0,C=1):T<M?(w=0,E=0,R=1,_=0,b=1,C=1):y<M?(w=0,E=1,R=0,_=0,b=1,C=1):(w=0,E=1,R=0,_=1,b=1,C=0);const D=y-w+f,U=T-E+f,G=M-R+f,O=y-_+2*f,k=T-b+2*f,K=M-C+2*f,X=y-1+3*f,re=T-1+3*f,q=M-1+3*f,Q=d&255,ee=u&255,Le=h&255,Ae=this.perm[Q+this.perm[ee+this.perm[Le]]]%12,at=this.perm[Q+w+this.perm[ee+E+this.perm[Le+R]]]%12,et=this.perm[Q+_+this.perm[ee+b+this.perm[Le+C]]]%12,ae=this.perm[Q+1+this.perm[ee+1+this.perm[Le+1]]]%12;let N=.6-y*y-T*T-M*M;N<0?s=0:(N*=N,s=N*N*this._dot3(this.grad3[Ae],y,T,M));let z=.6-D*D-U*U-G*G;z<0?a=0:(z*=z,a=z*z*this._dot3(this.grad3[at],D,U,G));let Z=.6-O*O-k*k-K*K;Z<0?r=0:(Z*=Z,r=Z*Z*this._dot3(this.grad3[et],O,k,K));let de=.6-X*X-re*re-q*q;return de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[ae],X,re,q)),32*(s+a+r+o)}noise4d(e,t,n,s){const a=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let d,u,h,f,g;const v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),y=Math.floor(n+v),T=Math.floor(s+v),M=(m+p+y+T)*c,w=m-M,E=p-M,R=y-M,_=T-M,b=e-w,C=t-E,D=n-R,U=s-_,G=b>C?32:0,O=b>D?16:0,k=C>D?8:0,K=b>U?4:0,X=C>U?2:0,re=D>U?1:0,q=G+O+k+K+X+re,Q=r[q][0]>=3?1:0,ee=r[q][1]>=3?1:0,Le=r[q][2]>=3?1:0,Ae=r[q][3]>=3?1:0,at=r[q][0]>=2?1:0,et=r[q][1]>=2?1:0,ae=r[q][2]>=2?1:0,N=r[q][3]>=2?1:0,z=r[q][0]>=1?1:0,Z=r[q][1]>=1?1:0,de=r[q][2]>=1?1:0,ge=r[q][3]>=1?1:0,Ie=b-Q+c,lt=C-ee+c,ne=D-Le+c,ce=U-Ae+c,ue=b-at+2*c,he=C-et+2*c,ve=D-ae+2*c,$e=U-N+2*c,Ve=b-z+3*c,qe=C-Z+3*c,Ze=D-de+3*c,I=U-ge+3*c,pt=b-1+4*c,nt=C-1+4*c,A=D-1+4*c,x=U-1+4*c,V=m&255,H=p&255,j=y&255,fe=T&255,xe=o[V+o[H+o[j+o[fe]]]]%32,J=o[V+Q+o[H+ee+o[j+Le+o[fe+Ae]]]]%32,ie=o[V+at+o[H+et+o[j+ae+o[fe+N]]]]%32,ye=o[V+z+o[H+Z+o[j+de+o[fe+ge]]]]%32,ze=o[V+1+o[H+1+o[j+1+o[fe+1]]]]%32;let Me=.6-b*b-C*C-D*D-U*U;Me<0?d=0:(Me*=Me,d=Me*Me*this._dot4(a[xe],b,C,D,U));let _e=.6-Ie*Ie-lt*lt-ne*ne-ce*ce;_e<0?u=0:(_e*=_e,u=_e*_e*this._dot4(a[J],Ie,lt,ne,ce));let Ue=.6-ue*ue-he*he-ve*ve-$e*$e;Ue<0?h=0:(Ue*=Ue,h=Ue*Ue*this._dot4(a[ie],ue,he,ve,$e));let Ge=.6-Ve*Ve-qe*qe-Ze*Ze-I*I;Ge<0?f=0:(Ge*=Ge,f=Ge*Ge*this._dot4(a[ye],Ve,qe,Ze,I));let je=.6-pt*pt-nt*nt-A*A-x*x;return je<0?g=0:(je*=je,g=je*je*this._dot4(a[ze],pt,nt,A,x)),27*(d+u+h+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}}class qn extends Hi{constructor(e,t,n=512,s=512,a,r,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=X1(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new sn(this.width,this.height,{type:on,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new zt({defines:Object.assign({},Cr.defines),uniforms:si.clone(Cr.uniforms),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new L0,this.normalMaterial.blending=Qt,this.pdMaterial=new zt({defines:Object.assign({},Pr.defines),uniforms:si.clone(Pr.uniforms),vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new zt({defines:Object.assign({},Rr.defines),uniforms:si.clone(Rr.uniforms),vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new zt({uniforms:si.clone(rs.uniforms),vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ol,blendDst:Aa,blendEquation:ii,blendSrcAlpha:Ul,blendDstAlpha:Aa,blendEquationAlpha:ii}),this.blendMaterial=new zt({uniforms:si.clone(vl.uniforms),vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ch,blendSrc:Ol,blendDst:Aa,blendEquation:ii,blendSrcAlpha:Ul,blendDstAlpha:Aa,blendEquationAlpha:ii}),this._fsQuad=new Co(null),this._originalClearColor=new Pe,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new aa,this.depthTexture.format=zi,this.depthTexture.type=ia,this.normalRenderTarget=new sn(this.width,this.height,{minFilter:Yt,magFilter:Yt,type:on,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case qn.OUTPUT.Off:break;case qn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,a){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,n,s,a){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new Z1,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const l=r,c=o;s[(r*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const a=new wo(s,e,e,Vn,An);return a.wrapS=ds,a.wrapT=ds,a.needsUpdate=!0,a}}qn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const j1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class la extends Hi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(a,r,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new sn(a,r,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new sn(a,r,{type:on,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),r=Math.round(r/2)}const o=j1;this.highPassUniforms=si.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new oe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=si.clone(rs.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,premultipliedAlpha:!0,blending:Jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pe,this._oldClearAlpha=1,this._basic=new Gi,this._fsQuad=new Co(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=la.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=la.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);const s=[],a=[];for(let r=1;r<e;r+=2){const o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new zt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}la.BlurDirectionX=new oe(1,0);la.BlurDirectionY=new oe(0,1);const Lr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class K1 extends Hi{constructor(){super(),this.isOutputPass=!0,this.uniforms=si.clone(Lr.uniforms),this.material=new lf({name:Lr.name,uniforms:this.uniforms,vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader}),this._fsQuad=new Co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Hc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wa=(i,e,t)=>Math.max(e,Math.min(t,i)),$r=(i,e,t)=>i+(e-i)*t,oo=(i,e,t)=>{const n=Wa((t-i)/(e-i),0,1);return n*n*(3-2*n)};function It(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Dr(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function J1(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,a=e-n,r=s*s*(3-2*s),o=a*a*(3-2*a),l=Dr(t,n),c=Dr(t+1,n),d=Dr(t,n+1),u=Dr(t+1,n+1);return $r($r(l,c,r),$r(d,u,r),o)*2-1}function lo(i,e,t=4,n=2.1,s=.5){let a=0,r=1,o=1,l=0;for(let c=0;c<t;c++)a+=J1(i*o+c*17.3,e*o-c*9.1)*r,l+=r,r*=s,o*=n;return a/l}const Ac=(i,e,t)=>{const n=Wa(.5+.5*(e-i)/t,0,1);return $r(i,e,n)+t*n*(1-n)},Q1=(i,e,t)=>-Ac(-i,-e,t),oi={mediterranea:{id:"mediterranea",name:"Mediterránea",desc:"Cal, teja, olivos y pinos. La isla de siempre.",rule:"Sin reglas especiales. Mercancía propia: vino.",grass:[9420643,10931572,7316046],sand:[15918022,14272934],rock:[12102030,9405552],seabed:[13227696,4098708],path:14930608,water:{shallow:5819350,deep:1140618,sky:12577014,foam:16186364},fogTint:13625072,relief:.55,coast:.5,islets:1,trees:{pine:1,olive:1,cypress:.4,palm:0,snowPine:0,scrub:.6},rocks:.6,snow:!1,fumaroles:!1,special:"vino",quarryMul:1,fieldMul:1,fishMul:1,foodMul:1,noQuarry:!1,dayLength:1},volcanica:{id:"volcanica",name:"Volcánica",desc:"Basalto negro, playas de ceniza, matorral rojizo y fumarolas.",rule:"Canteras ×2, campos ×0,5. Mercancía propia: obsidiana.",grass:[8358474,10133594,6056506],sand:[7301734,5591117],rock:[4867656,3025709],seabed:[6975336,2509400],path:9275e3,water:{shallow:4169648,deep:1002086,sky:11194332,foam:15266290},fogTint:13030102,relief:1,coast:.8,islets:2,trees:{pine:.5,olive:.2,cypress:.1,palm:0,snowPine:0,scrub:1.4},rocks:1.6,snow:!1,fumaroles:!0,special:"obsidiana",quarryMul:2,fieldMul:.5,fishMul:1,foodMul:1,noQuarry:!1,dayLength:1},boreal:{id:"boreal",name:"Boreal",desc:"Nieve en las copas, pinos oscuros, agua gris y días cortos.",rule:"La gente come ×1,5. Mercancía propia: pieles.",grass:[10466442,13095862,7309923],sand:[14605520,12567221],rock:[10133670,7107448],seabed:[12173492,4877948],path:14209732,water:{shallow:7317944,deep:2050654,sky:14082792,foam:16054521},fogTint:14673642,relief:.8,coast:.6,islets:1,trees:{pine:.6,olive:0,cypress:0,palm:0,snowPine:1.4,scrub:.3},rocks:1,snow:!0,fumaroles:!1,special:"pieles",quarryMul:1,fieldMul:.8,fishMul:1,foodMul:1.5,noQuarry:!1,dayLength:.8},atolon:{id:"atolon",name:"Atolón",desc:"Arena blanca, palmeras, agua turquesa e islotes alrededor.",rule:"Pesca ×1,5, sin cantera (la piedra llega en barco). Mercancía propia: perlas.",grass:[11063418,12902543,8828256],sand:[16446433,15326400],rock:[14077368,11773068],seabed:[15130824,4698550],path:15853519,water:{shallow:8381404,deep:1806246,sky:13956342,foam:16777215},fogTint:14349044,relief:.25,coast:.4,islets:5,trees:{pine:0,olive:.2,cypress:0,palm:1.6,snowPine:0,scrub:.8},rocks:.5,snow:!1,fumaroles:!1,special:"perlas",quarryMul:0,fieldMul:1,fishMul:1.5,foodMul:1,noQuarry:!0,dayLength:1}},eM=Object.values(oi),tM={size:120,segs:240},ui=[];let In;const ca=()=>In;function md(i,e,t=1){const n=It(i*7919+17),s=oi[e],a=17+n()*6-(t>=4?3:0),r=[{x:0,z:0,r:a}],o=3+Math.floor(n()*3);for(let v=0;v<o;v++){const m=Math.PI*.75+v/o*Math.PI*1.5+(n()-.5)*.6,p=7+n()*8,y=6+n()*8;r.push({x:Math.cos(m)*p,z:Math.sin(m)*p*.8-2,r:y})}const l=(n()-.5)*10,c=[{x:l,z:a-4+n()*3,r:7+n()*3.5},{x:l-3+n()*6,z:a+2,r:6+n()*2}],d=[];for(let v=0;v<s.islets;v++){const m=Math.PI*.6+n()*Math.PI*1.8,p=a+14+n()*12;d.push({x:Math.cos(m)*p,z:Math.sin(m)*p,r:2.5+n()*3.5})}In={seed:i,biome:s,land:r,bay:c,islets:d,dock:[0,0],plaza:[l-1,3],lighthouse:[0,0],landmark:[0,0],hamlet:[],radius:a};const u=In;u.dock=Hs(l,2,0,1,3,40),u.lighthouse=xl(Hs(0,0,1,.1,6,50),2.4),u.landmark=xl(Hs(0,0,-.4,-1,6,50),5.5);const h=[];for(let v=0;v<3;v++){const m=-.4+v*1.3+(n()-.5)*.4,p=4.2+n()*1.2;h.push([u.plaza[0]+Math.cos(m)*p,u.plaza[1]+Math.sin(m)*p*.7,(n()-.5)*1.2])}u.hamlet=h,ui.length=0;const f=[(u.dock[0]+u.plaza[0])/2+(n()-.5)*2,(u.dock[1]+u.plaza[1])/2];ui.push([u.dock,f,u.plaza]);const g=v=>{const m=[(u.plaza[0]+v[0])/2+(n()-.5)*3,(u.plaza[1]+v[1])/2+(n()-.5)*3];Et(m[0],m[1])<.5&&(m[0]=(u.plaza[0]+v[0])/2,m[1]=(u.plaza[1]+v[1])/2),ui.push([u.plaza,m,v])};return g(u.lighthouse),g(u.landmark),g(xl(Hs(0,0,-1,.3,6,50),4)),u}md(1,"mediterranea");function nM(i,e,t=1){return md(i,e,t)}function iM(i,e){let t=-10;for(const s of In.land){const a=Math.hypot(i-s.x,e-s.z);t=Ac(t,(s.r-a)/s.r,.35)}for(const s of In.islets){const a=Math.hypot(i-s.x,e-s.z);t=Ac(t,(s.r-a)/s.r,.3)}for(const s of In.bay){const a=Math.hypot(i-s.x,e-s.z);t=Q1(t,(a-s.r)/s.r,.3)}const n=In.seed*.37;return t+=lo(i*.08+3.1+n,e*.08-1.7+n,3)*(.08+.1*In.biome.coast),t}function Et(i,e){const t=iM(i,e);if(t<0)return t*7-.4;const n=In.seed*.11,s=lo(i*.045+10+n,e*.045+20+n,4)*.5+.5,a=1.6+2.8*In.biome.relief;return oo(0,.22,t)*1.1+oo(.15,1,t)*(1.6+a*s)}function gd(i,e){const n=Et(i+.5,e)-Et(i-.5,e),s=Et(i,e+.5)-Et(i,e-.5);return Math.hypot(n,s)/(2*.5)}function Hs(i,e,t,n,s=4,a=30){const r=Math.hypot(t,n);t/=r,n/=r;for(let o=s;o<a;o+=.25)if(Et(i+t*o,e+n*o)<.05)return[i+t*(o-.6),e+n*(o-.6)];return[i+t*a,e+n*a]}function xl(i,e){const t=Math.hypot(i[0],i[1])||1;return[i[0]-i[0]/t*e,i[1]-i[1]/t*e]}function sM(i,e){let t=1e9;for(const n of ui)for(let s=0;s+1<n.length;s++){const[a,r]=n[s],[o,l]=n[s+1],c=o-a,d=l-r,u=i-a,h=e-r,f=Wa((c*u+d*h)/(c*c+d*d||1),0,1);t=Math.min(t,Math.hypot(i-(a+c*f),e-(r+d*f)))}return t}const Ii={a:new Pe,b:new Pe,c:new Pe},Nr=new Pe;function Ef(i,e,t,n,s){const a=In.biome,r=lo(i*.3,e*.3,2)*.5+.5;if(t<-1.2)s.set(a.seabed[1]).lerp(Ii.a.set(a.seabed[0]),Wa((t+4)/3,0,1));else if(t<.35)s.set(a.sand[1]).lerp(Ii.a.set(a.sand[0]),Wa((t+.4)/.7,0,1));else if(n>.9)s.set(a.rock[1]).lerp(Ii.a.set(a.rock[0]),r);else{const o=lo(i*.12+40,e*.12+7,2)*.5+.5;s.set(a.grass[0]).lerp(Ii.a.set(a.grass[1]),o).lerp(Ii.b.set(a.grass[2]),oo(2.8,4.5,t)*.5),t<.9&&s.lerp(Ii.c.set(a.sand[0]),.35),a.snow&&t>3.2+r*1.2&&s.lerp(Ii.c.set(16185595),oo(3.2,4.6,t)*.9)}return t>.3&&sM(i,e)<.75&&n<1.1&&s.set(a.path).lerp(Ii.a.set(a.rock[1]),.12),s}function nh(i){const e=i.geometry,t=e.attributes.position,n=e.attributes.color;for(let s=0;s<t.count;s++){const a=t.getX(s),r=t.getZ(s),o=t.getY(s);o<.3||(Ef(a,r,o,gd(a,r),Nr),n.setXYZ(s,Nr.r,Nr.g,Nr.b))}n.needsUpdate=!0}function aM(i,e){let t=null,n=1e9;for(const a of ui)for(const[r,o]of a){const l=Math.hypot(r-i,o-e);l<n&&(n=l,t=[r,o])}if(!t||n<1)return null;const s=[[i,e],t];return ui.push(s),s}function Tf(){const{size:i,segs:e}=tM,t=new cn(i,i,e,e);t.rotateX(-Math.PI/2);const n=t.attributes.position;for(let u=0;u<n.count;u++)n.setY(u,Et(n.getX(u),n.getZ(u)));t.computeVertexNormals();const s=new Float32Array(n.count*3),a=new Pe;for(let u=0;u<n.count;u++){const h=n.getX(u),f=n.getZ(u),g=n.getY(u);Ef(h,f,g,gd(h,f),a),s[u*3]=a.r,s[u*3+1]=a.g,s[u*3+2]=a.b}t.setAttribute("color",new Gn(s,3));const r=new as({vertexColors:!0,roughness:.95,metalness:0}),o=new se(t,r);o.receiveShadow=!0,o.castShadow=!0;const l=256,c=new Float32Array(l*l);for(let u=0;u<l;u++)for(let h=0;h<l;h++){const f=-i/2+h/(l-1)*i,g=-i/2+u/(l-1)*i;c[u*l+h]=Et(f,g)}const d=new wo(c,l,l,Zc,Zn);return d.magFilter=nn,d.minFilter=nn,d.wrapS=d.wrapT=ai,d.needsUpdate=!0,{mesh:o,heightTex:d,heightMin:-i/2,heightSize:i}}function Zs(i,e,t=.6){let n=-1e9;for(const[s,a]of[[0,0],[t,0],[-t,0],[0,t],[0,-t],[t,t],[-t,-t],[t,-t],[-t,t]])n=Math.max(n,Et(i+s,e+a));return n}function rM(i,e,t=112){const n=In,s=ui.map(p=>p.slice());md(i,e);const a=oi[e],r=document.createElement("canvas");r.width=r.height=t;const o=r.getContext("2d"),l=o.createImageData(t,t),c=78,d=new Pe(a.water.deep),u=new Pe(a.water.shallow),h=new Pe(a.sand[0]),f=new Pe(a.grass[0]),g=new Pe(a.grass[2]),v=new Pe(a.snow?16185595:a.rock[0]),m=new Pe;for(let p=0;p<t;p++)for(let y=0;y<t;y++){const T=-c/2+y/t*c,M=-c/2+p/t*c,w=Et(T,M);w<-2.5?m.copy(d):w<0?m.copy(u).lerp(d,-w/2.5):w<.5?m.copy(h):w>4.4?m.copy(v):m.copy(f).lerp(g,(w-.5)/4);const E=(p*t+y)*4;l.data[E]=m.r*255,l.data[E+1]=m.g*255,l.data[E+2]=m.b*255,l.data[E+3]=255}o.putImageData(l,0,0),In=n,ui.length=0;for(const p of s)ui.push(p);return r.toDataURL("image/png")}const oM=`
uniform float uTime;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vWave;

float wave(vec2 p, float t) {
  float h = 0.0;
  h += sin(p.x * 0.55 + t * 0.9) * 0.06;
  h += sin((p.x * 0.35 + p.y * 0.62) + t * 1.15) * 0.05;
  h += sin((p.x * -0.9 + p.y * 0.4) + t * 1.6) * 0.025;
  h += sin((p.x * 1.7 + p.y * 1.3) + t * 2.3) * 0.012;
  return h;
}

void main() {
  vec3 pos = position;
  float e = 0.25;
  float h = wave(pos.xz, uTime);
  float hx = wave(pos.xz + vec2(e, 0.0), uTime);
  float hz = wave(pos.xz + vec2(0.0, e), uTime);
  pos.y += h;
  vWave = h;
  vNormal = normalize(vec3(h - hx, e, h - hz));
  vec4 w = modelMatrix * vec4(pos, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,lM=`
precision highp float;
uniform sampler2D uHeight;
uniform float uHeightMin;
uniform float uHeightSize;
uniform float uTime;
uniform float uLift;
uniform vec3 uShallow;
uniform vec3 uDeep;
uniform vec3 uSky;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform vec3 uViewDir;
uniform vec3 uFoam;
uniform float uSunPower;
uniform float uSparkle;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vWave;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

void main() {
  vec2 uv = (vWorld.xz - vec2(uHeightMin)) / uHeightSize;
  float terrain = texture2D(uHeight, uv).r;
  float depth = max(0.0, -terrain + vWave + uLift);

  // color por profundidad
  vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 4.5, depth));
  // reflejo del cielo por Fresnel
  vec3 N = normalize(vNormal);
  float fres = pow(1.0 - max(dot(N, uViewDir), 0.0), 3.0);
  col = mix(col, uSky, fres * 0.55);
  // sol
  vec3 H = normalize(uSunDir + uViewDir);
  float spec = pow(max(dot(N, H), 0.0), uSunPower);
  col += uSunColor * spec * 1.6;
  // chispas
  float sp = vnoise(vWorld.xz * 14.0 + uTime * 0.6) * vnoise(vWorld.xz * 23.0 - uTime * 0.45);
  float glint = smoothstep(0.52, 0.72, sp) * uSparkle * smoothstep(0.0, 0.35, pow(max(dot(N, H), 0.0), 24.0));
  col += uSunColor * glint;
  // espuma en la orilla: banda que respira con una textura de ruido
  float shore = 1.0 - smoothstep(0.0, 0.55, depth);
  float n1 = vnoise(vWorld.xz * 1.6 + vec2(uTime * 0.25, -uTime * 0.18));
  float n2 = vnoise(vWorld.xz * 5.0 - vec2(uTime * 0.4, uTime * 0.3));
  float band = sin(depth * 14.0 - uTime * 1.4 + n1 * 3.0) * 0.5 + 0.5;
  float foam = smoothstep(0.62, 0.9, shore * (0.35 + 0.65 * band) + n2 * 0.3 * shore) * 0.8;
  foam += smoothstep(0.1, 0.135, vWave) * 0.3 * (1.0 - smoothstep(1.2, 3.0, depth));   // crestas, solo en aguas someras
  col = mix(col, uFoam, clamp(foam, 0.0, 1.0));
  // transparencia: el fondo de arena se ve a través del agua somera
  float alpha = mix(0.5, 0.94, smoothstep(0.0, 2.6, depth));
  alpha = max(alpha, foam);
  // niebla
  float dist = gl_FragCoord.z / gl_FragCoord.w;
  float fog = smoothstep(uFogNear, uFogFar, dist);
  col = mix(col, uFogColor, fog);
  gl_FragColor = vec4(col, alpha);
}
`;class cM{constructor(e,t,n){pe(this,"mesh");pe(this,"mat");pe(this,"tint",{shallow:new Pe(1,1,1),deep:new Pe(1,1,1),sky:new Pe(1,1,1),foam:new Pe(1,1,1)});const s=new cn(240,240,300,300);s.rotateX(-Math.PI/2),this.mat=new zt({vertexShader:oM,fragmentShader:lM,transparent:!0,depthWrite:!0,uniforms:{uTime:{value:0},uHeight:{value:e},uHeightMin:{value:t},uHeightSize:{value:n},uShallow:{value:new Pe},uDeep:{value:new Pe},uSky:{value:new Pe},uSunColor:{value:new Pe},uSunDir:{value:new P(0,1,0)},uViewDir:{value:new P(0,1,0)},uFoam:{value:new Pe},uSunPower:{value:180},uSparkle:{value:.3},uLift:{value:0},uFogColor:{value:new Pe},uFogNear:{value:100},uFogFar:{value:170}}}),this.mesh=new se(s,this.mat),this.mesh.position.y=0,this.mesh.renderOrder=10}setTint(e,t){const n=(s,a,r)=>{const o=new Pe(s),l=new Pe(a);r.setRGB(Math.pow(o.r/Math.max(.02,l.r),1.6),Math.pow(o.g/Math.max(.02,l.g),1.6),Math.pow(o.b/Math.max(.02,l.b),1.6))};n(e.shallow,t.shallow,this.tint.shallow),n(e.deep,t.deep,this.tint.deep),n(e.sky,t.sky,this.tint.sky),n(e.foam,t.foam,this.tint.foam)}setHeightMap(e){this.mat.uniforms.uHeight.value=e}apply(e,t,n){const s=this.mat.uniforms;s.uShallow.value.set(e.water.shallow).multiply(this.tint.shallow),s.uDeep.value.set(e.water.deep).multiply(this.tint.deep),s.uSky.value.set(e.water.sky).multiply(this.tint.sky),s.uSunColor.value.set(e.water.sun),s.uFoam.value.set(e.water.foam).multiply(this.tint.foam),s.uSunDir.value.copy(t).normalize(),s.uViewDir.value.copy(n).normalize(),s.uSunPower.value=e.water.sunPower,s.uSparkle.value=e.water.sparkle,s.uFogColor.value.set(e.fog),s.uFogNear.value=e.fogNear,s.uFogFar.value=e.fogFar}update(e){this.mat.uniforms.uTime.value=e}setLift(e){this.mesh.position.y=e,this.mat.uniforms.uLift.value=e}}class dM{constructor(){pe(this,"texture");pe(this,"canvas",document.createElement("canvas"));pe(this,"ctx");this.canvas.width=4,this.canvas.height=512,this.ctx=this.canvas.getContext("2d"),this.texture=new jh(this.canvas),this.texture.colorSpace=En}update(e){const t=this.ctx.createLinearGradient(0,0,0,512);t.addColorStop(0,"#"+e.sky.top.toString(16).padStart(6,"0")),t.addColorStop(1,"#"+e.sky.horizon.toString(16).padStart(6,"0")),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,4,512),this.texture.needsUpdate=!0}}const wn={day:{name:"Tarde de verano",sunPos:[-22,28,16],sunColor:16773590,sunIntensity:3,hemiSky:12575477,hemiGround:14206888,hemiIntensity:.85,ambient:16777215,ambientIntensity:.15,fog:13625072,fogNear:125,fogFar:230,sky:{top:6271462,horizon:14085365},water:{shallow:5819350,deep:1140618,sky:12577014,sun:16774364,foam:16186364,sunPower:180,sparkle:.35},windowEmissive:0,lanternEmissive:.15,lanternLight:0,lighthouseLight:0,bloom:{strength:.22,threshold:.95,radius:.5},exposure:1.02,vignette:.28},predawn:{name:"Antes del alba",sunPos:[34,3,-10],sunColor:16763296,sunIntensity:.3,hemiSky:7307192,hemiGround:2764880,hemiIntensity:.85,ambient:4872842,ambientIntensity:.55,fog:6056602,fogNear:118,fogFar:218,sky:{top:2240606,horizon:9080767},water:{shallow:3108746,deep:995150,sky:4872842,sun:16765096,foam:11058384,sunPower:200,sparkle:.15},windowEmissive:1.6,lanternEmissive:2.4,lanternLight:6,lighthouseLight:1.6,bloom:{strength:.4,threshold:.86,radius:.6},exposure:1.03,vignette:.4},dawn:{name:"Amanecer",sunPos:[30,9,-12],sunColor:16759178,sunIntensity:1.9,hemiSky:16239028,hemiGround:7237522,hemiIntensity:.8,ambient:9209524,ambientIntensity:.3,fog:15780020,fogNear:115,fogFar:215,sky:{top:8097746,horizon:16763558},water:{shallow:5813960,deep:1727612,sky:16766138,sun:16759178,foam:16509408,sunPower:110,sparkle:.3},windowEmissive:.5,lanternEmissive:1,lanternLight:2,lighthouseLight:.4,bloom:{strength:.32,threshold:.88,radius:.6},exposure:1,vignette:.34},dusk:{name:"Atardecer",sunPos:[-30,6,-16],sunColor:16751194,sunIntensity:2,hemiSky:15901316,hemiGround:5196656,hemiIntensity:.7,ambient:6967928,ambientIntensity:.38,fog:15117212,fogNear:115,fogFar:215,sky:{top:6119326,horizon:16758663},water:{shallow:4956861,deep:1461612,sky:16757898,sun:16752736,foam:16245464,sunPower:60,sparkle:.5},windowEmissive:.9,lanternEmissive:1.8,lanternLight:3.5,lighthouseLight:1.2,bloom:{strength:.42,threshold:.82,radius:.6},exposure:1,vignette:.36},twilight:{name:"Crepúsculo",sunPos:[-30,3,-14],sunColor:16751210,sunIntensity:.25,hemiSky:6971290,hemiGround:2368570,hemiIntensity:.85,ambient:4868216,ambientIntensity:.55,fog:5918848,fogNear:118,fogFar:218,sky:{top:1975632,horizon:10123936},water:{shallow:3041926,deep:994636,sky:5918848,sun:16756880,foam:11581644,sunPower:180,sparkle:.18},windowEmissive:2.2,lanternEmissive:3,lanternLight:8,lighthouseLight:1.9,bloom:{strength:.45,threshold:.85,radius:.6},exposure:1.04,vignette:.4},night:{name:"Noche con farolillos",sunPos:[16,22,-12],sunColor:9414911,sunIntensity:1.3,hemiSky:3821450,hemiGround:1317420,hemiIntensity:.9,ambient:2900072,ambientIntensity:.6,fog:1318968,fogNear:120,fogFar:220,sky:{top:857907,horizon:2768755},water:{shallow:2052723,deep:663872,sky:1780298,sun:12833791,foam:9416908,sunPower:260,sparkle:.18},windowEmissive:2.4,lanternEmissive:3.2,lanternLight:9,lighthouseLight:2,bloom:{strength:.45,threshold:.85,radius:.6},exposure:1.05,vignette:.42}},_l=[[0,wn.night],[.16,wn.night],[.21,wn.predawn],[.26,wn.dawn],[.36,wn.day],[.66,wn.day],[.76,wn.dusk],[.82,wn.twilight],[.88,wn.night],[1,wn.night]],ih={night:.06,predawn:.21,dawn:.26,day:.5,dusk:.76,twilight:.82},uM=new Pe,hM=new Pe,Bn=(i,e,t)=>uM.set(i).lerp(hM.set(e),t).getHex(),qt=(i,e,t)=>i+(e-i)*t,fM=i=>i*i*(3-2*i);function pM(i,e,t){return{name:t<.5?i.name:e.name,sunPos:[qt(i.sunPos[0],e.sunPos[0],t),qt(i.sunPos[1],e.sunPos[1],t),qt(i.sunPos[2],e.sunPos[2],t)],sunColor:Bn(i.sunColor,e.sunColor,t),sunIntensity:qt(i.sunIntensity,e.sunIntensity,t),hemiSky:Bn(i.hemiSky,e.hemiSky,t),hemiGround:Bn(i.hemiGround,e.hemiGround,t),hemiIntensity:qt(i.hemiIntensity,e.hemiIntensity,t),ambient:Bn(i.ambient,e.ambient,t),ambientIntensity:qt(i.ambientIntensity,e.ambientIntensity,t),fog:Bn(i.fog,e.fog,t),fogNear:qt(i.fogNear,e.fogNear,t),fogFar:qt(i.fogFar,e.fogFar,t),sky:{top:Bn(i.sky.top,e.sky.top,t),horizon:Bn(i.sky.horizon,e.sky.horizon,t)},water:{shallow:Bn(i.water.shallow,e.water.shallow,t),deep:Bn(i.water.deep,e.water.deep,t),sky:Bn(i.water.sky,e.water.sky,t),sun:Bn(i.water.sun,e.water.sun,t),foam:Bn(i.water.foam,e.water.foam,t),sunPower:qt(i.water.sunPower,e.water.sunPower,t),sparkle:qt(i.water.sparkle,e.water.sparkle,t)},windowEmissive:qt(i.windowEmissive,e.windowEmissive,t),lanternEmissive:qt(i.lanternEmissive,e.lanternEmissive,t),lanternLight:qt(i.lanternLight,e.lanternLight,t),lighthouseLight:qt(i.lighthouseLight,e.lighthouseLight,t),bloom:{strength:qt(i.bloom.strength,e.bloom.strength,t),threshold:qt(i.bloom.threshold,e.bloom.threshold,t),radius:qt(i.bloom.radius,e.bloom.radius,t)},exposure:qt(i.exposure,e.exposure,t),vignette:qt(i.vignette,e.vignette,t)}}function mM(i){i=(i%1+1)%1;for(let e=0;e+1<_l.length;e++){const[t,n]=_l[e],[s,a]=_l[e+1];if(i>=t&&i<=s)return n===a?n:pM(n,a,fM((i-t)/(s-t)))}return wn.night}const gM=i=>i.windowEmissive/wn.night.windowEmissive,At={cal:16249834,calCrema:15853520,calRosa:15981773,calOcre:15324068,teja:14251850,tejaOscura:12082232,tejaPalida:15177067,madera:10119999,maderaClara:13146718,maderaOscura:7162411,piedra:12102030,piedraOscura:9405552,pino:4160846,pinoOscuro:3105088,oliva:9083467,olivaClara:11122794,farol:16762740,vela:16446692,azulBarco:3108776,rojoBarco:13127738,verdeBarco:5214058,tronco:8017462,cristal:3104378,nube:16777215,gaviota:16777215,vid:6265418},co={uTime:{value:0},uGust:{value:1}};function vd(i,e=1,t="clamp(abs(transformed.x) + abs(transformed.y), 0.0, 2.0)"){i.onBeforeCompile=n=>{n.uniforms.uTime=co.uTime,n.uniforms.uGust=co.uGust,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uGust;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { float ph = modelMatrix[3].x * 0.7 + modelMatrix[3].z * 0.4;
          float edge = ${t};
          transformed.z += (sin(uTime * 5.5 + transformed.x * 4.0 + transformed.y * 2.5 + ph) * 0.035 + sin(uTime * 9.0 + transformed.y * 6.0 + transformed.x * 3.0 + ph) * 0.014) * edge * uGust * ${e.toFixed(2)}; }`)},i.customProgramCacheKey=()=>"cloth"+e+t}const Af=[];let sh=0;function Ro(i,e=.03){Af.push({obj:i,amp:e,phase:sh++*1.37,speed:.8+sh*7%5*.1})}function vM(i){co.uTime.value=i;const e=.75+.25*Math.sin(i*.23)*Math.sin(i*.11+1.3)+.12*Math.sin(i*.9);co.uGust.value=e;for(const t of Af)t.obj.rotation.z=Math.sin(i*t.speed+t.phase)*t.amp*e,t.obj.rotation.x=Math.sin(i*t.speed*.8+t.phase*1.3)*t.amp*.6*e;return e}const Xe=(i,e={})=>new as({color:i,roughness:.92,metalness:0,...e}),Cf=new zt({uniforms:{uOpacity:{value:0},uColor:{value:new Pe(16773312)}},vertexShader:`varying float vAlong; varying vec3 vN; varying vec3 vV;
    void main(){ vAlong = clamp(position.x / 42.0, 0.0, 1.0); vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uOpacity; uniform vec3 uColor; varying float vAlong; varying vec3 vN; varying vec3 vV;
    void main(){ float edge = abs(dot(normalize(vN), normalize(vV))); edge *= edge; float f = 1.0 - clamp(vAlong, 0.0, 1.0); float a = uOpacity * f * f * edge * smoothstep(0.0, 0.06, vAlong); gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0)); }`,transparent:!0,depthWrite:!1,blending:Jr,side:Gt}),L={cal:Xe(At.cal),calCrema:Xe(At.calCrema),calRosa:Xe(At.calRosa),calOcre:Xe(At.calOcre),teja:Xe(At.teja,{flatShading:!0}),tejaOscura:Xe(At.tejaOscura,{flatShading:!0}),tejaPalida:Xe(At.tejaPalida,{flatShading:!0}),madera:Xe(At.madera),maderaClara:Xe(At.maderaClara),maderaOscura:Xe(At.maderaOscura),piedra:Xe(At.piedra,{flatShading:!0}),piedraOscura:Xe(At.piedraOscura,{flatShading:!0}),pino:Xe(At.pino,{flatShading:!0}),pinoOscuro:Xe(At.pinoOscuro,{flatShading:!0}),oliva:Xe(At.oliva,{flatShading:!0}),olivaClara:Xe(At.olivaClara,{flatShading:!0}),vid:Xe(At.vid,{flatShading:!0}),tronco:Xe(At.tronco),vela:Xe(At.vela,{side:Gt,roughness:1}),bandera:Xe(14172986,{side:Gt,roughness:1}),banderaAzul:Xe(3108776,{side:Gt,roughness:1}),azulBarco:Xe(At.azulBarco),rojoBarco:Xe(At.rojoBarco),verdeBarco:Xe(At.verdeBarco),nube:Xe(At.nube,{roughness:1,transparent:!0,opacity:.92}),gaviota:Xe(At.gaviota,{side:Gt}),rojo:Xe(14172986),blanco:Xe(16249834),cristal:Xe(At.cristal,{roughness:.4,metalness:.1}),ventana:new as({color:2837088,emissive:At.farol,emissiveIntensity:0,roughness:.5}),farolCristal:new as({color:16770736,emissive:At.farol,emissiveIntensity:.2,roughness:.4}),faroLuz:new as({color:16773832,emissive:16773832,emissiveIntensity:0,roughness:.3}),haz:Cf,meeple:[Xe(14702410),Xe(4029892),Xe(15316554),Xe(7121260),Xe(15856113),Xe(9132720)],palma:Xe(5216842,{flatShading:!0,side:Gt}),palmaClara:Xe(8109914,{flatShading:!0,side:Gt}),nieve:Xe(16185595,{flatShading:!0,roughness:.8}),basalto:Xe(3814968,{flatShading:!0}),basaltoClaro:Xe(5920088,{flatShading:!0}),lava:new as({color:16742954,emissive:16734746,emissiveIntensity:1.6,roughness:.6}),matorralRojo:Xe(11032122,{flatShading:!0}),matorralOcre:Xe(12159562,{flatShading:!0})},ah={mediterranea:{walls:[16249834,15853520,15981773,15324068],roofs:[14251850,12082232,15177067],wood:10119999},volcanica:{walls:[14275268,13221806,12169896,11049608],roofs:[4143677,2828330,5917252],wood:6965814},boreal:{walls:[13209436,12089932,14268042,15393490],roofs:[7162411,5192228,9058860],wood:9068090},atolon:{walls:[16513006,15986396,15332074,16245967],roofs:[13214826,12095578,8368288],wood:11569754}};function xM(i){const e=ah[i]??ah.mediterranea;L.cal.color.set(e.walls[0]),L.calCrema.color.set(e.walls[1]),L.calRosa.color.set(e.walls[2]),L.calOcre.color.set(e.walls[3]),L.teja.color.set(e.roofs[0]),L.tejaOscura.color.set(e.roofs[1]),L.tejaPalida.color.set(e.roofs[2]),L.madera.color.set(e.wood)}vd(L.vela,1,"clamp(abs(transformed.x) + abs(transformed.y), 0.0, 2.0)");vd(L.bandera,1,"clamp(transformed.x * 2.4, 0.0, 1.5)");vd(L.banderaAzul,1,"clamp(transformed.x * 2.4, 0.0, 1.5)");const Rf=[],Pf=[],Ws=[];let Cc=null;const _M=i=>{Cc=i},MM=It(7);function xd(){const i=L.ventana.clone();return Pf.push({mat:i,threshold:.12+MM()*.62}),i}function yM(i,e){const t=gM(i);for(const n of Pf){const s=Math.min(1,Math.max(0,(t-n.threshold)/.1));n.mat.emissiveIntensity=wn.night.windowEmissive*s}L.farolCristal.emissiveIntensity=i.lanternEmissive,L.faroLuz.emissiveIntensity=i.lighthouseLight,Cf.uniforms.uOpacity.value=.22*Math.min(1,i.lighthouseLight/1.5),Rf.forEach((n,s)=>{n.intensity=i.lanternLight*(.94+.06*Math.sin(e*9+s*1.7)*Math.sin(e*3.1+s))}),Cc&&(Cc.intensity=i.lighthouseLight*45)}class SM{constructor(e,t,n,s){pe(this,"target",new P(1.5,0,4));pe(this,"goal",this.target.clone());pe(this,"vel",new P);pe(this,"frustum",30);pe(this,"goalFrustum",30);pe(this,"dragging",!1);pe(this,"last",{x:0,y:0});pe(this,"lastMove",0);pe(this,"right",new P);pe(this,"fwd",new P);this.camera=e,this.dir=t,this.dom=n,this.frustum=this.goalFrustum=s,this.right.set(t.z,0,-t.x).normalize(),this.fwd.set(-t.x,0,-t.z).normalize(),n.style.cursor="grab",n.addEventListener("pointerdown",r=>{this.dragging=!0,this.vel.set(0,0,0),this.last={x:r.clientX,y:r.clientY},this.lastMove=performance.now(),n.setPointerCapture(r.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",r=>{if(!this.dragging)return;const o=r.clientX-this.last.x,l=r.clientY-this.last.y;this.last={x:r.clientX,y:r.clientY};const c=this.frustum/n.clientHeight,d=new P().addScaledVector(this.right,-o*c).addScaledVector(this.fwd,l*c/Math.sin(Math.atan2(t.y,Math.hypot(t.x,t.z))));this.goal.add(d);const u=performance.now(),h=Math.max(1,u-this.lastMove)/1e3;this.vel.copy(d).multiplyScalar(1/h),this.lastMove=u,this.clampGoal()});const a=()=>{this.dragging&&(this.dragging=!1,n.style.cursor="grab",performance.now()-this.lastMove>80&&this.vel.set(0,0,0))};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),n.addEventListener("wheel",r=>{r.preventDefault(),this.goalFrustum=bm.clamp(this.goalFrustum*Math.pow(1.0012,r.deltaY),11,40)},{passive:!1})}moveTo(e,t,n=0){this.goal.set(e,n,t),this.vel.set(0,0,0),this.clampGoal()}get zoomLevel(){return this.frustum}clampGoal(){const t=Math.hypot(this.goal.x,this.goal.z);t>34&&(this.goal.x*=34/t,this.goal.z*=34/t)}update(e){!this.dragging&&this.vel.lengthSq()>1e-4&&(this.goal.addScaledVector(this.vel,e),this.vel.multiplyScalar(Math.exp(-e*4.5)),this.clampGoal());const t=1-Math.exp(-e*10);this.target.lerp(this.goal,t),this.frustum+=(this.goalFrustum-this.frustum)*(1-Math.exp(-e*6)),this.apply()}apply(){const e=this.dom.clientWidth/this.dom.clientHeight,t=this.frustum;this.camera.left=-t*e/2,this.camera.right=t*e/2,this.camera.top=t/2,this.camera.bottom=-t/2,this.camera.updateProjectionMatrix(),this.camera.position.copy(this.dir).multiplyScalar(110).add(this.target),this.camera.lookAt(this.target)}}function bM(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new jh(i);return n.colorSpace=En,n}class wM{constructor(e=220){pe(this,"group",new Je);pe(this,"live",[]);pe(this,"free",[]);pe(this,"tex",bM());this.max=e,this.group.renderOrder=20}emit(e,t={}){if(this.live.length>=this.max)return;let n=this.free.pop();if(!n){const s=new Xh({map:this.tex,transparent:!0,depthWrite:!1,opacity:0}),a=new Wm(s);a.layers.set(1),this.group.add(a),n={s:a,mat:s,age:0,life:1,size0:.3,size1:1,rise:0,drift:new P,alpha:.5,vx:0,vz:0}}n.age=0,n.life=t.life??3,n.size0=t.size0??.25,n.size1=t.size1??.9,n.rise=t.rise??.4,n.alpha=t.alpha??.45,n.drift.copy(t.drift??new P(.25,0,.1)),n.vx=(Math.random()-.5)*.15,n.vz=(Math.random()-.5)*.15,n.mat.color.set(t.color??16777215),n.mat.opacity=n.alpha,n.s.position.copy(e),n.s.scale.setScalar(n.size0),n.s.visible=!0,this.live.push(n)}update(e){for(let t=this.live.length-1;t>=0;t--){const n=this.live[t];n.age+=e;const s=n.age/n.life;if(s>=1){n.s.visible=!1,this.live.splice(t,1),this.free.push(n);continue}n.s.position.x+=(n.drift.x+n.vx)*e,n.s.position.z+=(n.drift.z+n.vz)*e,n.s.position.y+=n.rise*e;const a=n.size0+(n.size1-n.size0)*Math.sqrt(s);n.s.scale.setScalar(a),n.mat.opacity=n.alpha*(1-s)*Math.min(1,s*6)}}}const Ht=i=>(i.castShadow=!0,i.receiveShadow=!0,i);function Rc(i=1){const e=It(i),t=new Je,n=1.6+e()*1.2,s=new se(new Qe(.07,.11,n*.35,6),L.tronco);s.position.y=n*.17,Ht(s),t.add(s);const a=3;for(let r=0;r<a;r++){const o=r/a,l=new se(new ln(.55*(1-o*.55)*(.9+e()*.2),n*.42,7),r%2?L.pino:L.pinoOscuro);l.position.y=n*.3+r*n*.22,l.rotation.y=e()*6.28,Ht(l),t.add(l)}return t.scale.setScalar(.85+e()*.3),Ro(t,.022),t}function Pc(i=1){const e=It(i),t=new Je,n=new se(new Qe(.08,.14,.7,6),L.tronco);n.position.y=.35,n.rotation.z=(e()-.5)*.3,Ht(n),t.add(n);const s=3+Math.floor(e()*3);for(let a=0;a<s;a++){const r=e()*6.28,o=e()*.35,l=new se(new pi(.42+e()*.22,1),e()<.5?L.oliva:L.olivaClara);l.position.set(Math.cos(r)*o,.9+e()*.4,Math.sin(r)*o),Ht(l),t.add(l)}return t.scale.setScalar(.8+e()*.4),Ro(t,.03),t}function Ml(i=1){const e=It(i),t=new Je,n=2.6+e()*1.4,s=(e()-.5)*.5,a=5;let r=0,o=0;for(let d=0;d<a;d++){const u=new se(new Qe(.07-d*.006,.09-d*.006,n/a+.05,6),L.tronco);r+=s*(d/a)*(n/a),o+=n/a,u.position.set(r,o-n/a/2,0),u.rotation.z=-s*.6*(d/a),Ht(u),t.add(u)}const l=6+Math.floor(e()*3);for(let d=0;d<l;d++){const u=new cn(.34,1.7,1,5),h=u.attributes.position;for(let g=0;g<h.count;g++){const v=h.getY(g)+.85;h.setZ(g,-v*v*.28),h.setX(g,h.getX(g)*(1-v/2.2))}u.translate(0,.85,0),u.computeVertexNormals();const f=new se(u,d%2?L.palma:L.palmaClara);f.position.set(r,o,0),f.rotation.y=d/l*6.28+e()*.3,f.rotation.x=-.35-e()*.2,f.castShadow=!0,t.add(f)}const c=new se(new wi(.09,6,5),L.maderaOscura);return c.position.set(r+.08,o-.1,.05),t.add(c),t.scale.setScalar(.85+e()*.3),Ro(t,.035),t}function yl(i=1){const e=Rc(i),t=It(i+99);return e.children.filter(s=>s.geometry instanceof ln).forEach(s=>{const a=s.geometry,r=new se(new ln(a.parameters.radius*(.55+t()*.15),a.parameters.height*.42,7),L.nieve);r.position.copy(s.position),r.position.y+=a.parameters.height*.3,r.rotation.y=s.rotation.y,r.castShadow=!0,e.add(r)}),e}function EM(i=1,e=L.oliva){const t=It(i),n=new Je,s=2+Math.floor(t()*3);for(let a=0;a<s;a++){const r=new se(new pi(.18+t()*.16,1),e);r.position.set((t()-.5)*.6,.12+t()*.08,(t()-.5)*.6),r.scale.y=.7,Ht(r),n.add(r)}return n}function TM(i=1){const e=It(i),t=new Je,n=new se(new ln(.9+e()*.4,.55,9),L.basalto);n.position.y=.27,Ht(n),t.add(n);const s=new se(new Qe(.22,.3,.12,8),L.lava);return s.position.y=.52,t.add(s),t.rotation.y=e()*6.28,t}function AM(i=1){const e=It(i),t=new Je,n=2.6+e()*1.4,s=new se(new ln(.32,n,7),L.pinoOscuro);s.position.y=n/2,Ht(s),t.add(s);const a=new se(new Qe(.05,.08,.3,5),L.tronco);return a.position.y=.1,t.add(a),Ro(t,.04),t}function uo(i,e=1.8){const t=new Je,n=Math.round(i/.42);for(let s=0;s<n;s++){const a=new se(new He(e,.08,.34),s%5===2?L.maderaClara:L.madera);a.position.set(0,.45,(s+.5)*(i/n)),Ht(a),t.add(a)}for(let s=.3;s<i;s+=1.3)for(const a of[-1,1]){const r=new se(new Qe(.09,.1,1.6,7),L.maderaOscura);if(r.position.set(a*(e/2-.05),-.25,s),Ht(r),t.add(r),s>i*.3&&Math.abs(Math.round(s)%3)===0){const o=new se(new Qe(.1,.1,.5,7),L.maderaOscura);o.position.set(a*(e/2-.05),.7,s),o.castShadow=!0,t.add(o)}}return t}function Lf(i,e){const t=new cn(i,e,8,3);return t.translate(i/2,0,0),t}function js(i,e,t){const n=new Eo;n.moveTo(-i/2,0),n.quadraticCurveTo(-i*.1,e/2*1.15,i*.5,0),n.quadraticCurveTo(-i*.1,-e/2*1.15,-i/2,0);const s=new ud(n,{depth:t,bevelEnabled:!0,bevelThickness:t*.6,bevelSize:e*.22,bevelSegments:3,steps:1});return s.rotateX(Math.PI/2),s.translate(0,t*.55,0),s}function Lc(i=L.azulBarco,e=1,t=!0){const n=It(e),s=new Je,a=2.2+n()*.5,r=.9+n()*.2,o=Ht(new se(js(a,r,.42),i));s.add(o);const l=Ht(new se(js(a*1.02,r*1.06,.08),L.maderaOscura));l.position.y=.4,s.add(l);const c=new se(js(a*.82,r*.7,.06),L.maderaClara);c.position.y=.36,s.add(c);for(const d of[-a*.2,a*.15]){const u=new se(new He(.1,.05,r*.7),L.maderaClara);u.position.set(d,.42,0),s.add(u)}if(t){const d=new se(new Qe(.03,.04,2.2,6),L.maderaOscura);d.position.set(a*.05,1.4,0),d.castShadow=!0,s.add(d);const u=new Eo;u.moveTo(0,0),u.lineTo(0,1.7),u.quadraticCurveTo(.9,1,1.1,.1),u.lineTo(0,0);const h=new se(new fd(u,24),L.vela);h.name="sail",h.position.set(a*.05+.03,.75,0),h.rotation.y=-.35,h.castShadow=!0,s.add(h);const f=new se(Lf(.3,.17),L.bandera);f.position.set(a*.05+.02,2.42,0),s.add(f)}return s}function CM(i=3){const e=It(i),t=new Je,n=6.2,s=2.2,a=Ht(new se(js(n,s,1.1),L.maderaOscura));t.add(a);const r=Ht(new se(js(n*1.01,s*1.04,.18),L.rojoBarco));r.position.y=.85,t.add(r);const o=new se(js(n*.92,s*.86,.06),L.maderaClara);o.position.y=1.08,t.add(o);const l=Ht(new se(new He(1.6,.8,1.4),L.cal));l.position.set(-1.6,1.5,0),t.add(l);const c=Ht(new se(new He(1.8,.1,1.6),L.tejaOscura));c.position.set(-1.6,1.95,0),t.add(c);for(const u of[-.3,1.6]){const h=new se(new Qe(.05,.07,4.6,7),L.maderaOscura);h.position.set(u,3.3,0),h.castShadow=!0,t.add(h);const f=new se(new Qe(.035,.035,2.3,6),L.maderaOscura);f.rotation.x=Math.PI/2,f.position.set(u,4.7,0),t.add(f);const g=new se(new cn(2.2,1.9,6,6),L.vela),v=g.geometry.attributes.position;for(let m=0;m<v.count;m++){const p=v.getX(m)/2.2,y=v.getY(m)/1.9;v.setZ(m,(.25-p*p)*(.6-y*y)*1.3*.9)}g.geometry.computeVertexNormals(),g.position.set(u+.05,3.6,0),g.rotation.y=-Math.PI/2+.25,g.castShadow=!0,t.add(g)}const d=new se(Lf(.55,.32),L.bandera);d.position.set(1.62,5.75,0),t.add(d);for(let u=0;u<3;u++){const h=Ks(i+u);h.position.set(.3+u*.5,1.12,(e()-.5)*.8),t.add(h)}return t}function Ks(i=1){const e=It(i),t=new se(new He(.42,.42,.42),e()<.5?L.maderaClara:L.madera);return t.position.y=.21,t.rotation.y=(e()-.5)*.5,Ht(t),t}function zs(){const i=new se(new Qe(.2,.2,.5,10),L.madera);i.position.y=.25,Ht(i);const e=new se(new ja(.21,.015,4,12),L.maderaOscura);e.rotation.x=Math.PI/2,e.position.y=.12,i.add(e);const t=e.clone();return t.position.y=-.12,i.add(t),i}function Df(i=0){const e=new Je,t=new se(new od(.13,.22,4,10),L.meeple[i%L.meeple.length]);t.position.y=.28,Ht(t),e.add(t);const n=new se(new wi(.11,10,8),L.calRosa);n.position.y=.6,Ht(n),e.add(n);const s=new se(new ln(.16,.08,10),L.maderaClara);return s.position.y=.69,e.add(s),e}function RM(i=1){const e=It(i),t=new Je,n=4+Math.floor(e()*3);for(let s=0;s<n;s++){const a=1.2+e()*1.6,r=new se(new pi(a,3),L.nube);r.position.set((s-n/2)*1.5+(e()-.5),(e()-.5)*.5,(e()-.5)*1.2),r.scale.y=.5,r.castShadow=!0,t.add(r)}return t}function PM(){const i=new Je;for(const e of[-1,1]){const t=new se(new cn(.42,.1),L.gaviota);t.position.x=e*.2,t.rotation.z=e*.45,t.rotation.x=-Math.PI/2,t.castShadow=!0,i.add(t)}return i}function Dc(i=1,e=[L.piedra,L.piedraOscura]){const t=It(i),n=new se(new Za(.4+t()*.5,0),t()<.5?e[0]:e[1]);return n.scale.set(1+t()*.6,.6+t()*.4,1+t()*.4),n.rotation.set(t(),t()*3,t()),Ht(n),n}function rh(){const i=[],e=[],t=(n,s)=>{let a=i.findIndex(r=>Math.hypot(r.x-n,r.z-s)<.6);return a<0&&(i.push({x:n,z:s,edges:[]}),a=i.length-1),a};for(const n of ui)for(let s=0;s+1<n.length;s++){const a=t(n[s][0],n[s][1]),r=t(n[s+1][0],n[s+1][1]);e.push({a,b:r,len:Math.hypot(i[r].x-i[a].x,i[r].z-i[a].z)}),i[a].edges.push(e.length-1),i[r].edges.push(e.length-1)}return{nodes:i,edges:e}}class LM{constructor(e=9){pe(this,"group",new Je);pe(this,"net",rh());pe(this,"list",[]);pe(this,"r",It(9));for(let t=0;t<e;t++){const n=Math.floor(this.r()*this.net.edges.length),s=this.net.edges[n],a={g:Df(t),edge:n,from:this.r()<.5?s.a:s.b,s:this.r()*s.len,speed:.75+this.r()*.4,wait:0,phase:this.r()*6.28,heading:0};this.group.add(a.g),this.list.push(a)}}rebuild(){this.net=rh();for(const e of this.list){e.edge=Math.floor(this.r()*this.net.edges.length);const t=this.net.edges[e.edge];e.from=t.a,e.s=this.r()*t.len}}update(e,t){for(const n of this.list){const s=this.net.edges[n.edge];if(n.wait>0){n.wait-=e,n.g.position.y=Et(n.g.position.x,n.g.position.z)+Math.sin(t*1.3+n.phase)*.004;continue}if(n.s+=n.speed*e,n.s>=s.len){const h=s.a===n.from?s.b:s.a,f=this.net.nodes[h].edges.filter(m=>m!==n.edge),g=f.length===0;n.wait=g?4+this.r()*8:.6+this.r()*2.5;const v=g?n.edge:f[Math.floor(this.r()*f.length)];n.edge=v,n.from=h,n.s=0;continue}const a=this.net.nodes[n.from],r=this.net.nodes[s.a===n.from?s.b:s.a],o=n.s/s.len,l=a.x+(r.x-a.x)*o,c=a.z+(r.z-a.z)*o;let u=Math.atan2(r.x-a.x,r.z-a.z)-n.heading;u=Math.atan2(Math.sin(u),Math.cos(u)),n.heading+=u*Math.min(1,e*6),n.g.position.set(l,Et(l,c)+Math.abs(Math.sin(t*8+n.phase))*.03,c),n.g.rotation.y=n.heading,n.g.rotation.z=Math.sin(t*8+n.phase)*.04}}}class DM{constructor(e,t){pe(this,"group",new Je);pe(this,"items",[]);const n=It(5);t.forEach(([s,a,r,o])=>{const l=e();this.group.add(l),this.items.push({g:l,cx:s,cz:a,r,y:o,a:n()*6.28,w:(.16+n()*.1)*(n()<.5?1:-1),flap:n()*6.28})})}update(e,t){for(const n of this.items){n.a+=n.w*e,n.g.position.set(n.cx+Math.cos(n.a)*n.r,n.y+Math.sin(t*.7+n.flap)*.6,n.cz+Math.sin(n.a)*n.r),n.g.rotation.y=-n.a+(n.w>0?0:Math.PI),n.g.rotation.z=n.w>0?-.25:.25;const s=Math.max(0,Math.sin(t*.5+n.flap)),a=Math.sin(t*7+n.flap)*s;n.g.children.forEach((r,o)=>{r.rotation.z=(o?1:-1)*(.35+a*.3)})}}}const Ea=new P;function zn(i,e,t,n,s,a){const r=2*Math.PI*s/4,o=Math.max(a-2*s,0),l=Math.PI/4;Ea.copy(e),Ea[n]=0,Ea.normalize();const c=.5*r/(r+o),d=1-Ea.angleTo(i)/l;return Math.sign(Ea[t])===1?d*c:o/(r+o)+c+c*(1-d)}class _d extends He{constructor(e=1,t=1,n=1,s=2,a=.1){const r=s*2+1;if(a=Math.min(e/2,t/2,n/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:a},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,d=new P(e,t,n).divideScalar(2).subScalar(a),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new P,m=.5/r;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=d.x*Math.sign(l.x)+c.x*a,u[p+1]=d.y*Math.sign(l.y)+c.y*a,u[p+2]=d.z*Math.sign(l.z)+c.z*a,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[y+0]=zn(v,c,"z","y",a,n),f[y+1]=1-zn(v,c,"y","z",a,t);break;case 1:v.set(-1,0,0),f[y+0]=1-zn(v,c,"z","y",a,n),f[y+1]=1-zn(v,c,"y","z",a,t);break;case 2:v.set(0,1,0),f[y+0]=1-zn(v,c,"x","z",a,e),f[y+1]=zn(v,c,"z","x",a,n);break;case 3:v.set(0,-1,0),f[y+0]=1-zn(v,c,"x","z",a,e),f[y+1]=1-zn(v,c,"z","x",a,n);break;case 4:v.set(0,0,1),f[y+0]=1-zn(v,c,"x","y",a,e),f[y+1]=1-zn(v,c,"y","x",a,t);break;case 5:v.set(0,0,-1),f[y+0]=zn(v,c,"x","y",a,e),f[y+1]=1-zn(v,c,"y","x",a,t);break}}static fromJSON(e){return new _d(e.width,e.height,e.depth,e.segments,e.radius)}}const Un=i=>(i.castShadow=!0,i.receiveShadow=!0,i),ho=(i,e,t,n,s=.06)=>Un(new se(new _d(i,e,t,3,Math.min(s,i/3,e/3,t/3)),n)),fo=(i,e,t,n)=>Un(new se(new He(i,e,t),n));function Md(i,e,t,n,s=.18){const a=i/2+s,r=e/2+s,o=new kt,l=[-a,0,r,a,0,r,a,t,0,-a,0,r,a,t,0,-a,t,0,a,0,-r,-a,0,-r,-a,t,0,a,0,-r,-a,t,0,a,t,0,-a,0,r,-a,t,0,-a,0,-r,a,0,-r,a,t,0,a,0,r,-a,0,-r,a,0,-r,a,0,r,-a,0,-r,a,0,r,-a,0,r];o.setAttribute("position",new ot(l,3)),o.computeVertexNormals();const c=Un(new se(o,n)),d=Math.hypot(t,r),u=Math.atan2(t,r),h=Math.max(3,Math.round(d/.22));for(const f of[1,-1])for(let g=0;g<h;g++){const v=(g+.5)/h,m=new se(new He(a*2+.02,.035,.1),n);m.position.set(0,t*v+.02,f*(r*(1-v))),m.rotation.x=f*u,m.castShadow=!0,c.add(m)}return c}function fn(i={}){const e=It(i.seed??1),t=i.w??2.4+e()*.8,n=i.d??2+e()*.8,s=i.floors??(e()<.45?2:1),a=i.h??1.25*s+.25,r=i.wall??[L.cal,L.calCrema,L.calRosa,L.calOcre][Math.floor(e()*4)],o=i.roof??[L.teja,L.tejaOscura,L.tejaPalida][Math.floor(e()*3)],l=new Je,c=xd(),d=ho(t,a,n,r,.08);d.position.y=a/2,l.add(d);const u=Md(t,n,.55+n*.22,o);if(u.position.y=a-.02,l.add(u),i.chimney??e()<.7){const v=fo(.28,.6,.28,L.piedra);v.position.set(-t*.3,a+.45,n*.15),l.add(v);const m=fo(.36,.08,.36,L.piedraOscura);m.position.set(-t*.3,a+.76,n*.15),l.add(m),Ws.push(m)}const h=(v,m,p,y)=>{const T=new se(new He(.42,.52,.06),L.maderaOscura);T.position.set(v,m,p),T.rotation.y=y,l.add(T);const M=new se(new cn(.32,.42),c);M.position.set(v,m,p),M.rotation.y=y,M.translateZ(.035),l.add(M);const w=new se(new He(.5,.05,.14),L.piedra);w.position.set(v,m-.29,p),w.rotation.y=y,w.translateZ(.05),w.castShadow=!0,l.add(w)},f=Math.max(1,Math.round(t/1.1));for(let v=0;v<s;v++){const m=.75+v*1.25;for(let p=0;p<f;p++){const y=-t/2+(p+.5)*(t/f);v===0&&p===Math.floor(f/2)||(h(y,m,n/2,0),e()<.6&&h(y,m,-n/2,Math.PI))}}const g=new se(new He(.5,.95,.06),L.maderaOscura);if(g.position.set(-t/2+(Math.floor(f/2)+.5)*(t/f),.48,n/2+.01),l.add(g),i.awning??e()<.3){const v=new se(new He(t*.7,.04,.7),[L.rojo,L.blanco][Math.floor(e()*2)]);v.position.set(0,1.12,n/2+.35),v.rotation.x=.25,v.castShadow=!0,l.add(v)}if(e()<.6)for(const v of[-1,1]){const m=new se(new Qe(.1,.08,.16,7),L.teja);m.position.set(v*(t/2-.25),.08,n/2+.2),m.castShadow=!0,l.add(m);const p=new se(new pi(.14,1),[L.oliva,L.rojo,L.olivaClara][Math.floor(e()*3)]);p.position.set(v*(t/2-.25),.24,n/2+.2),p.castShadow=!0,l.add(p)}return l}function NM(){const i=new Je,e=xd(),t=ho(3.2,2.6,5.2,L.cal,.08);t.position.y=1.3,i.add(t);const n=Md(3.2,5.2,1.1,L.tejaOscura);n.position.y=2.58,i.add(n);const s=ho(1.3,4.6,1.3,L.calCrema,.08);s.position.set(-1,2.3,2),i.add(s);const a=new se(new Qe(.72,.82,.6,8),L.cal);a.position.set(-1,4.9,2),Un(a),i.add(a);const r=new se(new wi(.72,12,8,0,Math.PI*2,0,Math.PI/2),L.cristal);r.position.set(-1,5.2,2),Un(r),i.add(r);const o=fo(.06,.5,.06,L.maderaOscura);o.position.set(-1,6.15,2),i.add(o);const l=fo(.28,.06,.06,L.maderaOscura);l.position.set(-1,6.25,2),i.add(l);for(const u of[-1.4,0,1.4])for(const h of[-1,1]){const f=new se(new cn(.34,.9),e);f.position.set(h*1.61,1.5,u),f.rotation.y=h>0?Math.PI/2:-Math.PI/2,i.add(f)}const c=new se(new He(.8,1.5,.06),L.maderaOscura);c.position.set(.3,.75,2.61),i.add(c);const d=new se(new ja(.4,.05,6,16),L.piedra);return d.position.set(.3,1.95,2.62),i.add(d),i}function IM(){const i=new Je,e=new se(new Qe(1.3,1.5,.5,16),L.piedra);e.position.y=.25,Un(e),i.add(e);const t=6;for(let u=0;u<t;u++){const h=.95-u*.07,f=.95-(u+1)*.07,g=new se(new Qe(f,h,1,16),u%2?L.rojo:L.blanco);g.position.y=.5+u+.5,Un(g),i.add(g)}const n=new se(new Qe(.85,.75,.18,16),L.piedraOscura);n.position.y=6.6,Un(n),i.add(n);const s=new se(new ja(.8,.03,6,24),L.maderaOscura);s.position.y=7,s.rotation.x=Math.PI/2,i.add(s);const a=new se(new Qe(.5,.5,.9,12),L.faroLuz);a.position.y=7.15,i.add(a);const r=new se(new ln(.7,.6,12),L.tejaOscura);r.position.y=7.9,Un(r),i.add(r);const o=new Je;o.name="beam",o.position.y=7.15;const l=new U0(16773832,0,70,.16,.7,1);l.target.position.set(40,-5,0),o.add(l,l.target);const c=new ln(3.4,42,24,1,!0);c.translate(0,-21,0),c.rotateZ(Math.PI/2),c.rotateZ(-.09);const d=new se(c,L.haz);return d.renderOrder=15,d.layers.set(1),o.add(d),i.add(o),_M(l),i}function UM(){const i=new Je,e=new se(new Qe(1.1,1.35,3.4,12),L.cal);e.position.y=1.7,Un(e),i.add(e);const t=new se(new ln(1.35,1.1,12),L.tejaOscura);t.position.y=3.9,Un(t),i.add(t);const n=new Je;n.name="hub",n.position.set(0,3.3,1.2);const s=new se(new Qe(.08,.08,.6,8),L.maderaOscura);s.rotation.x=Math.PI/2,n.add(s);for(let o=0;o<4;o++){const l=new Je;l.rotation.z=o*Math.PI/2+.4;const c=new se(new He(.08,2.4,.06),L.maderaOscura);c.position.y=1.2,c.castShadow=!0,l.add(c);const d=new se(new cn(.55,1.9,2,6),L.vela);d.position.set(.32,1.35,0),d.castShadow=!0,l.add(d),n.add(l)}i.add(n);const a=new se(new He(.5,.9,.06),L.maderaOscura);a.position.set(0,.45,1.33),i.add(a);const r=new se(new cn(.3,.4),xd());return r.position.set(0,2,1.25),i.add(r),i}function oh(){const i=new Je,e=ho(4.2,2.2,3,L.piedra,.06);e.position.y=1.1,i.add(e);const t=Md(4.2,3,.9,L.tejaOscura);t.position.y=2.18,i.add(t);const n=new se(new He(1.2,1.5,.06),L.maderaOscura);n.position.set(.6,.75,1.51),i.add(n);const s=new se(new He(1,.3,.05),L.maderaClara);return s.position.set(-1,1.7,1.53),i.add(s),i}function OM(){const i=fn({w:3.4,d:2.6,floors:2,wall:L.calOcre,roof:L.teja,chimney:!0,seed:77,awning:!0});for(const e of[-.9,.3]){const t=new se(new Qe(.32,.32,.05,10),L.maderaClara);t.position.set(e,.45,2.1),Un(t),i.add(t);const n=new se(new Qe(.04,.04,.45,6),L.maderaOscura);n.position.set(e,.22,2.1),i.add(n);const s=new se(new ln(.6,.25,8),e<0?L.rojo:L.blanco);s.position.set(e,1.35,2.1),s.castShadow=!0,i.add(s);const a=new se(new Qe(.025,.025,1.3,6),L.maderaOscura);a.position.set(e,.75,2.1),i.add(a)}return i}function lh(){const i=new Je,e=new se(new Qe(.035,.05,1.6,6),L.maderaOscura);e.position.y=.8,e.castShadow=!0,i.add(e);const t=new se(new He(.3,.04,.04),L.maderaOscura);t.position.set(.12,1.58,0),i.add(t);const n=new se(new He(.2,.26,.2),L.maderaOscura);n.position.set(.26,1.42,0),i.add(n);const s=new se(new He(.15,.2,.15),L.farolCristal);s.position.set(.26,1.42,0),i.add(s);const a=new se(new ln(.17,.12,4),L.maderaOscura);a.position.set(.26,1.61,0),a.rotation.y=Math.PI/4,i.add(a);const r=new uf(16762740,0,9,2);return r.position.set(.26,1.42,0),i.add(r),Rf.push(r),i}function Xr(i){const e=new Je,t=Math.round(i/.5),n=It(Math.round(i*100));for(let s=0;s<t;s++){const a=new se(new He(.46+n()*.08,.32+n()*.14,.34),n()<.5?L.piedra:L.piedraOscura);a.position.set(-i/2+(s+.5)*(i/t),.18,(n()-.5)*.05),a.rotation.y=(n()-.5)*.1,Un(a),e.add(a)}return e}const en=[{id:"pescado",name:"Pescado",base:6,elasticity:.014,tier:1,color:"#6fa8c9",food:!0},{id:"sal",name:"Sal",base:5,elasticity:.014,tier:1,color:"#e9e6dc"},{id:"trigo",name:"Trigo",base:4,elasticity:.012,tier:1,color:"#d9b65a"},{id:"uva",name:"Uva",base:6,elasticity:.014,tier:1,color:"#7a4f8f"},{id:"oliva",name:"Oliva",base:7,elasticity:.014,tier:1,color:"#8a9a4b"},{id:"madera",name:"Madera",base:5,elasticity:.011,tier:1,color:"#9a6b3f"},{id:"piedra",name:"Piedra",base:6,elasticity:.011,tier:1,color:"#b8a98e"},{id:"lana",name:"Lana",base:8,elasticity:.016,tier:1,color:"#f1ece2"},{id:"arcilla",name:"Arcilla",base:4,elasticity:.012,tier:1,color:"#b57a52"},{id:"harina",name:"Harina",base:10,elasticity:.012,tier:2,color:"#f3e9cf"},{id:"vino",name:"Vino",base:20,elasticity:.01,tier:2,color:"#8e2f4b"},{id:"aceite",name:"Aceite",base:22,elasticity:.01,tier:2,color:"#c9b43a"},{id:"conservas",name:"Conservas",base:18,elasticity:.01,tier:2,color:"#5c8fb0",food:!0},{id:"tejido",name:"Tejido",base:20,elasticity:.011,tier:2,color:"#d8433a"},{id:"ceramica",name:"Cerámica",base:16,elasticity:.011,tier:2,color:"#d9774a"},{id:"obsidiana",name:"Obsidiana",base:30,elasticity:.012,tier:2,color:"#2f2b33"},{id:"pieles",name:"Pieles",base:26,elasticity:.012,tier:2,color:"#8a6a4a"},{id:"perlas",name:"Perlas",base:40,elasticity:.014,tier:2,color:"#eef1f7"},{id:"pan",name:"Pan",base:24,elasticity:.009,tier:3,color:"#e0a85a",food:!0},{id:"jabon",name:"Jabón",base:42,elasticity:.008,tier:3,color:"#9fd3c7"},{id:"muebles",name:"Muebles",base:48,elasticity:.008,tier:3,color:"#6d4a2b"}],Ut=Object.fromEntries(en.map(i=>[i.id,i])),Fi=[{id:"aserradero",name:"Aserradero",cat:"extraccion",desc:"Corta madera del bosque. Casi todo se construye con ella.",cost:140,materials:{},workers:2,footprint:[3.2,2.8],tier:1,recipe:{inputs:{},outputs:{madera:3},seconds:36},buildSeconds:10},{id:"pesqueria",name:"Pesquería",cat:"extraccion",desc:"Barcas y redes. Necesita estar en la costa.",cost:180,materials:{madera:6},workers:2,footprint:[3,2.6],coast:!0,tier:1,recipe:{inputs:{},outputs:{pescado:4},seconds:40},buildSeconds:12},{id:"campo",name:"Campo de trigo",cat:"extraccion",desc:"Trigo para el molino. Ocupa bastante.",cost:120,materials:{},workers:2,footprint:[4.2,3.2],tier:1,recipe:{inputs:{},outputs:{trigo:4},seconds:46},buildSeconds:9,field:!0},{id:"cantera",name:"Cantera",cat:"extraccion",desc:"Piedra para los edificios grandes.",cost:220,materials:{madera:8},workers:2,footprint:[3.4,3],tier:1,recipe:{inputs:{},outputs:{piedra:3},seconds:44},buildSeconds:14},{id:"salinas",name:"Salinas",cat:"extraccion",desc:"Balsas de sal al sol. En la costa.",cost:180,materials:{madera:6},workers:1,footprint:[3.6,2.8],coast:!0,tier:1,recipe:{inputs:{},outputs:{sal:3},seconds:40},buildSeconds:12},{id:"vinedo",name:"Viñedo",cat:"extraccion",desc:"Uva para la bodega.",cost:260,materials:{madera:6},workers:2,footprint:[4.2,3.2],tier:1,recipe:{inputs:{},outputs:{uva:3},seconds:52},buildSeconds:14,field:!0},{id:"pastizal",name:"Pastizal",cat:"extraccion",desc:"Ovejas y lana para el telar.",cost:220,materials:{madera:8},workers:1,footprint:[4.2,3.2],tier:1,recipe:{inputs:{},outputs:{lana:2},seconds:52},buildSeconds:12,field:!0},{id:"olivar",name:"Olivar",cat:"extraccion",desc:"Olivas para la almazara.",cost:300,materials:{madera:6},workers:2,footprint:[4.2,3.2],tier:1,recipe:{inputs:{},outputs:{oliva:3},seconds:56},buildSeconds:14,field:!0},{id:"barrero",name:"Barrero",cat:"extraccion",desc:"Arcilla para el alfar.",cost:180,materials:{madera:6},workers:1,footprint:[3,2.8],tier:1,recipe:{inputs:{},outputs:{arcilla:3},seconds:40},buildSeconds:10},{id:"ostrero",name:"Ostrero",cat:"extraccion",desc:"Bancos de ostras en el arrecife. Perlas, de vez en cuando. En la costa.",cost:320,materials:{madera:10},workers:2,footprint:[3.2,2.8],coast:!0,tier:2,recipe:{inputs:{},outputs:{perlas:1},seconds:48},buildSeconds:14,biome:"atolon"},{id:"molino",name:"Molino",cat:"produccion",desc:"Trigo → harina.",cost:380,materials:{madera:12,piedra:10},workers:2,footprint:[3,3],tier:2,recipe:{inputs:{trigo:3},outputs:{harina:3},seconds:40},buildSeconds:18},{id:"conservera",name:"Conservera",cat:"produccion",desc:"Pescado + sal → conservas. Viajan bien y alimentan.",cost:480,materials:{madera:14,piedra:8},workers:3,footprint:[4,3],tier:2,recipe:{inputs:{pescado:3,sal:1},outputs:{conservas:3},seconds:46},buildSeconds:20},{id:"bodega",name:"Bodega",cat:"produccion",desc:"Uva → vino. El clásico de la isla.",cost:560,materials:{madera:14,piedra:12},workers:3,footprint:[3.6,3],tier:2,recipe:{inputs:{uva:3},outputs:{vino:2},seconds:52},buildSeconds:22},{id:"almazara",name:"Almazara",cat:"produccion",desc:"Oliva → aceite.",cost:640,materials:{madera:14,piedra:14},workers:3,footprint:[3.6,3],tier:2,recipe:{inputs:{oliva:3},outputs:{aceite:2},seconds:52},buildSeconds:22},{id:"telar",name:"Telar",cat:"produccion",desc:"Lana → tejido.",cost:540,materials:{madera:14},workers:2,footprint:[3.2,2.8],tier:2,recipe:{inputs:{lana:2},outputs:{tejido:2},seconds:52},buildSeconds:20},{id:"alfar",name:"Alfar",cat:"produccion",desc:"Arcilla + leña → cerámica.",cost:500,materials:{madera:10,piedra:12},workers:2,footprint:[3.4,3],tier:2,recipe:{inputs:{arcilla:3,madera:1},outputs:{ceramica:3},seconds:46},buildSeconds:20},{id:"tallador",name:"Tallador",cat:"produccion",desc:"Piedra volcánica → obsidiana tallada. Solo en islas de fuego.",cost:520,materials:{madera:12,piedra:16},workers:2,footprint:[3.2,2.8],tier:2,recipe:{inputs:{piedra:4},outputs:{obsidiana:2},seconds:50},buildSeconds:20,biome:"volcanica"},{id:"peleteria",name:"Peletería",cat:"produccion",desc:"Lana → pieles curtidas. Solo en el norte.",cost:500,materials:{madera:14,piedra:6},workers:2,footprint:[3.2,2.8],tier:2,recipe:{inputs:{lana:2},outputs:{pieles:2},seconds:50},buildSeconds:20,biome:"boreal"},{id:"panaderia",name:"Panadería",cat:"produccion",desc:"Harina + leña → pan. La comida favorita.",cost:600,materials:{madera:12,piedra:12},workers:2,footprint:[3.2,2.8],tier:3,recipe:{inputs:{harina:2,madera:1},outputs:{pan:3},seconds:46},buildSeconds:22},{id:"jaboneria",name:"Jabonería",cat:"produccion",desc:"Aceite + sal → jabón. Caro y pequeño.",cost:900,materials:{madera:16,piedra:16},workers:3,footprint:[3.4,3],tier:3,recipe:{inputs:{aceite:2,sal:1},outputs:{jabon:2},seconds:62},buildSeconds:24,meta:!0},{id:"carpinteria",name:"Carpintería",cat:"produccion",desc:"Madera + tejido → muebles.",cost:980,materials:{madera:20,piedra:14},workers:3,footprint:[3.8,3],tier:3,recipe:{inputs:{madera:3,tejido:1},outputs:{muebles:1},seconds:64},buildSeconds:24,meta:!0},{id:"casa",name:"Casa",cat:"pueblo",desc:"Cuatro vecinos más para trabajar. Comen cada día.",cost:220,materials:{madera:8,piedra:4},workers:0,footprint:[3,2.6],tier:1,housing:4,buildSeconds:12},{id:"almacen",name:"Almacén",cat:"pueblo",desc:"+80 de capacidad. Lo que no cabe para la producción.",cost:420,materials:{madera:16,piedra:12},workers:0,footprint:[4.2,3],tier:1,storage:80,buildSeconds:16},{id:"taberna",name:"Taberna",cat:"pueblo",desc:"Sube el ánimo: todos producen un 10 % más (máx. 2).",cost:760,materials:{madera:14,piedra:12},workers:1,footprint:[3.6,3],tier:2,happiness:.1,buildSeconds:20}],dt=Object.fromEntries(Fi.map(i=>[i.id,i])),FM=.2,BM=3,bn={cycle:[1,.72,.52],housing:[4,6,8],storage:[80,130,190],costMul:[0,1,2.2],materialsMul:[0,.8,1.3],extraStone:[0,8,20],seconds:[0,14,22],repNeeded:[0,2,5]},yd=[{id:"barca",name:"Barca",capacity:24,voyage:80,cost:450,rep:0,desc:"Pequeña y rápida."},{id:"balandro",name:"Balandro",capacity:60,voyage:110,cost:1600,rep:3,desc:"Bodega mediana."},{id:"mercante",name:"Mercante",capacity:140,voyage:140,cost:4200,rep:6,desc:"Lento, pero lo lleva todo."}],es=Object.fromEntries(yd.map(i=>[i.id,i])),Nf=.6,zM=.06,kM=[{cost:0,materials:{},rep:0},{cost:900,materials:{madera:24,piedra:12},rep:2},{cost:2800,materials:{madera:40,piedra:30},rep:5}],VM=1.6,GM=110,Sd=600,ch=.25,If=[{id:"tormenta",name:"Tormenta",text:"Tormenta en el mar: los barcos en ruta se retrasan y pierden parte de la carga si no van asegurados.",seconds:1},{id:"feria",name:"Feria",text:"Feria en el continente: todo se vende un 20 % más caro durante un rato.",seconds:150},{id:"plaga",name:"Plaga",text:"Plaga en los campos: campo, viñedo, olivar y pastizal rinden la mitad un rato.",seconds:160},{id:"buenapesca",name:"Buena pesca",text:"Bancos de peces junto a la isla: las pesquerías rinden el doble un rato.",seconds:140},{id:"mareaalta",name:"Marea alta",text:"Marea alta: las salinas no producen hasta que baje.",seconds:120}],Uf=Object.fromEntries(If.map(i=>[i.id,i])),HM=[{good:"vino",text:"Boda en la isla vecina: piden vino.",factor:1.7},{good:"conservas",text:"Una flota pesquera varada: faltan conservas.",factor:1.6},{good:"pan",text:"Feria en el puerto grande: pan a buen precio.",factor:1.5},{good:"aceite",text:"Mala cosecha en tierra firme: el aceite sube.",factor:1.7},{good:"jabon",text:"Los baños de la capital compran jabón.",factor:1.6},{good:"muebles",text:"Se amueblan las casas nuevas del puerto.",factor:1.6},{good:"tejido",text:"El gremio de sastres hace acopio de tejido.",factor:1.5},{good:"ceramica",text:"Vajilla nueva para la posada grande.",factor:1.5},{good:"madera",text:"Reparan el muelle del continente: madera cara.",factor:1.5},{good:"piedra",text:"Nueva muralla en la capital: piedra cara.",factor:1.5},{good:"pescado",text:"Cuaresma: todo el mundo come pescado.",factor:1.5},{good:"harina",text:"El molino del continente está roto.",factor:1.6},{good:"obsidiana",text:"Los joyeros de la capital pagan la obsidiana a precio de oro.",factor:1.8},{good:"pieles",text:"Invierno duro en tierra firme: faltan pieles.",factor:1.7},{good:"perlas",text:"La corte encarga collares: perlas por las nubes.",factor:1.8}],Nc=[];function po(i,e=0){const t=Math.cos(i.rot),n=Math.sin(i.rot),s=i.w/2+e,a=i.d/2+e;return[[-s,-a],[s,-a],[s,a],[-s,a]].map(([r,o])=>[i.x+r*t+o*n,i.z-r*n+o*t])}function dh(i,e,t=0){const n=po(i,t),s=po(e),a=[];for(const r of[n,s])for(let o=0;o<2;o++){const l=r[o+1][0]-r[o][0],c=r[o+1][1]-r[o][1],d=Math.hypot(l,c);a.push([l/d,c/d])}for(const[r,o]of a){const l=n.map(([d,u])=>d*r+u*o),c=s.map(([d,u])=>d*r+u*o);if(Math.max(...l)<Math.min(...c)||Math.max(...c)<Math.min(...l))return!1}return!0}function Of(i){const[e,t]=dt[i.type].footprint;return{x:i.x,z:i.z,w:e,d:t,rot:i.rot}}function WM(i,e){const n=Et(i+1.2,e)-Et(i-1.2,e),s=Et(i,e+1.2)-Et(i,e-1.2);return Math.atan2(-n,-s)}function mo(i,e,t,n,s){const a=dt[i],[r,o]=a.footprint;if(a.coast){n=WM(e,t);const g=Math.cos(n),v=Math.sin(n),m=Et(e-v*(o/2-.3),t-g*(o/2-.3)),p=Et(e+v*(o/2+.2),t+g*(o/2+.2)),T={ok:!1,y:Math.max(.15,Et(e,t)),rot:n,x:e,z:t};return m<.25?{...T,why:"Demasiado dentro del mar"}:p>.05?{...T,why:"Tiene que tocar el mar"}:uh({x:e,z:t,w:r,d:o,rot:n},s)?{...T,why:"Choca con otro edificio"}:{...T,ok:!0}}const l={x:e,z:t,w:r,d:o,rot:n},c=po(l,-.2).concat([[e,t]]);let d=1e9,u=0;for(const[g,v]of c)d=Math.min(d,Et(g,v)),u=Math.max(u,gd(g,v));const f={ok:!1,y:Math.max(...c.map(([g,v])=>Et(g,v))),rot:n,x:e,z:t};return d<.45?{...f,why:"Demasiado cerca del agua"}:u>.75?{...f,why:"Demasiada pendiente"}:uh(l,s)?{...f,why:"Choca con otro edificio"}:{...f,ok:!0}}function uh(i,e){for(const t of Nc)if(dh(i,t,.3))return!0;for(const t of e)if(dh(i,Of(t),.35))return!0;return!1}function Ff(i){const e=ca(),t=e.biome,n=new Je,s=[],a=[],r=It(e.seed*13+5);Nc.length=0;const o=(ae,N,z,Z=0,de=0,ge=.6)=>(ae.position.set(N,Math.max(.05,i(N,z,ge))+de,z),ae.rotation.y=Z,n.add(ae),ae),l=(ae,N,z,Z=0,de=0,ge=.6)=>{o(ae,N,z,Z,de,ge),s.push({obj:ae,x:N,z})},c=(ae,N,z,Z,de=0)=>Nc.push({x:ae,z:N,w:z,d:Z,rot:de}),d=(ae,N,z)=>{const Z=new se(new He(N,1.2,z),L.piedra);return Z.position.y=-.58,Z.castShadow=!0,Z.receiveShadow=!0,ae.add(Z),ae},u=(ae,N)=>Et(ae,N)>.6,[h,f]=e.dock,g=uo(7.5);g.position.set(h,0,f-.6),g.rotation.y=.1,n.add(g),c(h+.4,f+3.2,2.2,8.4,.1);const v=uo(5,1.4);v.position.set(h+5.2,0,f+.4),v.rotation.y=-.35,n.add(v),c(h+4.3,f+2.7,1.8,5.4,-.35);const m=Xr(8);m.position.set(h+2.4,.35,f-1.2),m.rotation.y=-.25,n.add(m),c(h+2.4,f-1.2,8,.8,-.25);const p=[{x:h+2.6,z:f+7.4,rot:-1.45},{x:h-1,z:f+5.6,rot:-1.45},{x:h+7,z:f+4.6,rot:-1.92}];for(const ae of p)c(ae.x,ae.z,7,3,ae.rot);[[h-.4,f+.8],[h+.2,f+.9],[h-.1,f+1.3],[h+5.4,f+1.2]].forEach(([ae,N],z)=>{const Z=z%3===2?zs():Ks(800+z);Z.position.set(ae,.49,N),n.add(Z)});const T=Ks(850);T.position.set(h-.4,.91,f+.8),n.add(T),[[h-.8,f+6.8],[h+1.2,f+3.2]].forEach(([ae,N])=>{const z=lh();z.position.set(ae,.49,N),n.add(z)}),[[h-.2,f+4.2],[h+.5,f+2.6],[h+1.4,f+6]].forEach(([ae,N],z)=>{const Z=Df(z);Z.position.set(ae,.49,N),Z.rotation.y=r()*6.28,n.add(Z)});const[E,R]=e.plaza;o(Xr(5),E+2.2,R+2.6,.25,0,.4),c(E+2.2,R+2.6,5,.5,.25),o(Xr(4),E-1.6,R-1.2,1.1,0,.4),c(E-1.6,R-1.2,4,.5,1.1);const _=new Je,b=new se(new Qe(.45,.5,.5,10),L.piedra);b.position.y=.25,b.castShadow=!0,b.receiveShadow=!0,_.add(b);const C=new se(new ln(.55,.4,8),L.tejaOscura);C.position.y=1.35,C.castShadow=!0,_.add(C);for(const ae of[-1,1]){const N=new se(new Qe(.03,.03,1,5),L.maderaOscura);N.position.set(ae*.35,.8,0),_.add(N)}o(_,E,R,0,0,.5),c(E,R,1.6,1.6),[[E-1.6,R+2.4],[E+1.8,R-1],[h+1.4,f-2.4],[(E+h)/2+1.2,(R+f)/2]].forEach(([ae,N])=>{u(ae,N)&&(o(lh(),ae,N,r()*6.28,0,.2),c(ae,N,.5,.5))});const[U,G]=e.lighthouse;o(IM(),U,G,0,0,1.2),c(U,G,3.4,3.4);const[O,k]=e.landmark;if(t.id==="mediterranea")o(d(NM(),3.4,5.4),O,k,.45,0,1.8),c(O,k,4.2,6.2,.45);else if(t.id==="volcanica"){const ae=new Je;for(let N=0;N<12;N++){const z=N/12*6.28,Z=N<8?.6+N*7%4*.35:.3,de=new se(new He(.6,Z,.45),N%2?L.basalto:L.basaltoClaro);de.position.set(Math.cos(z)*1.5,Z/2,Math.sin(z)*1.5),de.rotation.y=-z,de.castShadow=!0,de.receiveShadow=!0,ae.add(de)}o(ae,O,k,.4,0,1.6),c(O,k,4.6,4.6)}else if(t.id==="boreal"){for(let N=0;N<5;N++){const z=r()*6.28,Z=1+r()*2.5,de=yl(500+N);de.scale.setScalar(1.35),l(de,O+Math.cos(z)*Z,k+Math.sin(z)*Z,r()*6.28)}const ae=new Je;for(let N=0;N<3;N++){const z=new se(new He(.6,.8,.6),N%2?L.madera:L.maderaOscura);z.position.y=.4+N*.8,z.rotation.y=N*.3,z.castShadow=!0,ae.add(z)}o(ae,O,k,.2,0,.6),c(O,k,1.4,1.4)}else{for(let z=0;z<7;z++){const Z=r()*6.28,de=.8+r()*3.2;l(Ml(540+z),O+Math.cos(Z)*de,k+Math.sin(Z)*de,r()*6.28)}const ae=new Je;for(let z=0;z<6;z++){const Z=new se(new Za(.22,0),L.piedraOscura);Z.position.set(Math.cos(z)*.55,.12,Math.sin(z)*.55),Z.castShadow=!0,ae.add(Z)}const N=new se(new Qe(.2,.26,.1,8),L.lava);N.position.y=.1,ae.add(N),o(ae,O,k,0,0,.6),c(O,k,1.6,1.6),a.push(new P(O,Math.max(.05,i(O,k))+.3,k))}const K=e.radius+12,X=150+Math.round(60*(t.trees.pine+t.trees.palm+t.trees.snowPine)),re=t.trees.pine+t.trees.olive+t.trees.cypress+t.trees.palm+t.trees.snowPine+t.trees.scrub;let q=100;const Q=(ae,N)=>Math.hypot(ae-E,N-R)<7||Math.hypot(ae-h,N-f)<6||Math.hypot(ae-U,N-G)<3||Math.hypot(ae-O,N-k)<3.5;for(let ae=0;ae<X;ae++){const N=(r()-.5)*2*K,z=(r()-.5)*2*K,Z=Et(N,z);if(Z<.7||Q(N,z)||r()>.45+Z*.12)continue;let de=r()*re;const ge=r()*6.28,Ie=q++;(de-=t.trees.pine)<0?l(Rc(Ie),N,z,ge):(de-=t.trees.olive)<0?l(Pc(Ie),N,z,ge):(de-=t.trees.cypress)<0?l(AM(Ie),N,z):(de-=t.trees.palm)<0?l(Ml(Ie),N,z,ge):(de-=t.trees.snowPine)<0?l(yl(Ie),N,z,ge):l(EM(Ie,t.id==="volcanica"?r()<.5?L.matorralRojo:L.matorralOcre:r()<.5?L.oliva:L.olivaClara),N,z,ge)}for(let ae=0;ae<10*t.rocks;ae++){const N=r()*6.28,z=e.radius*(.55+r()*.55),Z=Math.cos(N)*z,de=Math.sin(N)*z;if(Et(Z,de)<-.5||Q(Z,de))continue;const ge=t.id==="volcanica"?[L.basalto,L.basaltoClaro]:t.id==="atolon"?[L.piedra,L.cal]:[L.piedra,L.piedraOscura];l(Dc(600+ae,ge),Z,de,0,-.15)}if(t.fumaroles)for(let ae=0;ae<4;ae++){const N=r()*6.28,z=4+r()*e.radius*.6,Z=Math.cos(N)*z,de=Math.sin(N)*z;Et(Z,de)<1.2||Q(Z,de)||(l(TM(650+ae),Z,de),a.push(new P(Z,Math.max(.05,i(Z,de))+.6,de)))}if(t.id==="mediterranea")for(let ae=0;ae<6;ae++){const N=new Je,z=new se(new pi(.22,1),L.blanco);z.position.y=.26,z.scale.set(1.3,.9,1),z.castShadow=!0,N.add(z);const Z=new se(new wi(.1,8,6),L.maderaOscura);Z.position.set(.3,.3,0),N.add(Z);const de=r()*6.28,ge=6+r()*6,Ie=Math.cos(de)*ge,lt=Math.sin(de)*ge;Et(Ie,lt)>.9&&!Q(Ie,lt)&&l(N,Ie,lt,r()*6.28,0,.2)}for(const ae of e.islets){const N=t.id==="volcanica"?[L.basalto,L.basaltoClaro]:[L.piedra,L.piedraOscura];if(l(Dc(700+Math.round(ae.x),N),ae.x+.6,ae.z-.4,0,-.15),Et(ae.x,ae.z)>.9){const z=t.trees.palm?Ml(710+Math.round(ae.z)):t.snow?yl(710+Math.round(ae.z)):Rc(710+Math.round(ae.z));l(z,ae.x-.5,ae.z+.4,r()*6.28)}}const ee=new P(1,.78,1).normalize(),Le=[[-34,0,14],[30,0,-16],[-12,0,40],[38,0,30]],Ae=[];Le.forEach(([ae,,N],z)=>{const Z=RM(900+z),de=20+z*2;Z.position.set(ae,0,N).addScaledVector(ee,de/ee.y),Z.scale.setScalar(.75),Z.userData.x0=Z.position.x,n.add(Z),Ae.push(Z)});const at=n.getObjectByName("beam"),et=(ae,N,z)=>{at&&(at.rotation.y=ae*.55),Ae.forEach(Z=>{Z.position.x+=N*.22*z,Z.position.z+=N*.09*z,Z.position.x>Z.userData.x0+46&&(Z.position.x-=92,Z.position.z-=38)})};return Hs(h,f,0,1),{group:n,nature:s,fumaroles:a,spots:p,update:et}}function Bf(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,l=new kt;let c=0;for(let d=0;d<i.length;++d){const u=i[d];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0;const u=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(const d in a){const u=hh(a[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in r){const u=r[d][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){const f=[];for(let v=0;v<r[d].length;++v)f.push(r[d][v][h]);const g=hh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(g)}}}return l}function hh(i){let e,t,n,s=-1,a=0;for(let c=0;c<i.length;++c){const d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=d.count*t}const r=new e(a),o=new Gn(r,t,n);let l=0;for(let c=0;c<i.length;++c){const d=i[c];if(d.isInterleavedBufferAttribute){const u=l/t;for(let h=0,f=d.count;h<f;h++)for(let g=0;g<t;g++){const v=d.getComponent(h,g);o.setComponent(h+u,g,v)}}else r.set(d.array,l);l+=d.count*t}return s!==void 0&&(o.gpuType=s),o}const bd=i=>(i.castShadow=!0,i.receiveShadow=!0,i),Ye=(i,e,t=0,n=0,s=0)=>{const a=bd(new se(i,e));return a.position.set(t,n,s),a},xn={trigo:Xe(14267994,{flatShading:!0}),trigoOscuro:Xe(13214282,{flatShading:!0}),sal:Xe(16052970,{roughness:.6}),salAgua:Xe(12575720,{roughness:.3,transparent:!0,opacity:.85}),barro:Xe(9396030,{flatShading:!0}),arcilla:Xe(11893330),tierra:Xe(12163690,{flatShading:!0}),hierbaSeca:Xe(10925418,{flatShading:!0}),cuerda:Xe(14206618),red:Xe(7178874,{transparent:!0,opacity:.6,side:Gt})};function Nt(i,e,t,n=L.piedra,s=1.2){const a=new se(new He(e,s,t),n);a.position.y=-s/2+.02,a.castShadow=!0,a.receiveShadow=!0,i.add(a),i.userData.plinth=a}function $M(i,e){i.userData.chimneys=Ws.splice(e)}function XM(i=5,e=1.4){const t=new Je,n=new Qe(.13,.13,e,8);n.rotateZ(Math.PI/2);let s=0;for(let a=0;s<i;a++)for(let r=0;r<=2-a&&s<i;r++,s++)t.add(Ye(n,L.tronco,0,.13+a*.23,-.26+r*.27+a*.135));return t}function qM(i,e){const t=new Je,n=new Qe(.035,.04,.6,5),s=r=>new He(r,.04,.04),a=[[0,-e/2,i,0,0],[0,e/2,i,0,0],[-i/2,0,e,Math.PI/2,0],[i/2,0,e,Math.PI/2,0]];for(const[r,o,l,c]of a){for(const u of[.25,.45]){const h=Ye(s(l),L.maderaOscura,r,u,o);h.rotation.y=c,t.add(h)}const d=Math.round(l/.9);for(let u=0;u<=d;u++){const h=-l/2+u*(l/d),f=Ye(n,L.maderaOscura,c?r:h,.3,c?h:o);t.add(f)}}return t}function YM(i){const e=It(i),t=new Je,n=Ye(new pi(.22,1),L.blanco,0,.26,0);return n.scale.set(1.3,.9,1),t.add(n),t.add(Ye(new wi(.1,8,6),L.maderaOscura,.3,.3,0)),t.rotation.y=e()*6.28,t}function ZM(i,e,t,n,s=.5){const a=[],r=Math.round(i/.42);for(let o=0;o<t;o++)for(let l=0;l<r;l++){const c=new ln(.16,s,5);c.translate(-i/2+.3+l*((i-.6)/(r-1)),s/2,-e/2+.35+o*((e-.7)/(t-1))),a.push(c)}return bd(new se(Bf(a),n))}function fh(i=L.maderaClara){const e=new Je;return e.add(Ye(new Qe(.03,.03,1,5),L.maderaOscura,0,.5,0)),e.add(Ye(new He(.6,.28,.05),i,0,.95,0)),e}function go(i,e=1){const t=It(e),[n,s]=dt[i].footprint,a=new Je,r=Ws.length;switch(i){case"aserradero":{const o=fn({w:2.2,d:2.2,floors:1,wall:L.madera,roof:L.tejaOscura,chimney:!1,seed:e,awning:!1});o.position.x=-.5,a.add(o);const l=XM(6,1.3);l.position.set(1.1,0,.4),l.rotation.y=.2,a.add(l);const c=Ye(new He(1,.08,.4),L.maderaClara,1,.5,-.8);a.add(c);for(const d of[-.4,.4])a.add(Ye(new He(.06,.5,.36),L.maderaOscura,1+d,.25,-.8));Nt(a,n,s);break}case"pesqueria":{const o=fn({w:2,d:1.7,floors:1,wall:L.cal,roof:L.teja,chimney:!1,seed:e,awning:!1});o.position.set(-.4,0,-.5),a.add(o);const l=uo(2.4,1);l.position.set(.9,-.45,.2),a.add(l);const c=Lc(L.azulBarco,e+3,!1);c.scale.setScalar(.75),c.position.set(-.6,-.4,1.4),c.rotation.y=.3,a.add(c);for(const u of[-1.1,.1])a.add(Ye(new Qe(.03,.03,1.1,5),L.maderaOscura,u,.55,.6));a.add(Ye(new He(1.2,.02,.02),L.maderaOscura,-.5,1.05,.6));const d=Ye(new cn(1.1,.7),xn.red,-.5,.7,.6);a.add(d),Nt(a,2.4,2,L.piedra,1.4),a.userData.plinth.position.set(-.4,-.68,-.5),a.userData.sea=!0;break}case"salinas":{for(let l=0;l<3;l++)for(let c=0;c<2;c++){const d=-n/2+.7+l*1.05,u=-s/2+.6+c*1.1;a.add(Ye(new He(.95,.12,.95),L.piedra,d,.06,u)),a.add(Ye(new He(.8,.06,.8),(l+c)%2?xn.sal:xn.salAgua,d,.12,u))}a.add(Ye(new ln(.3,.4,7),xn.sal,n/2-.4,.2,-s/2+.5)),a.add(Ye(new ln(.22,.3,7),xn.sal,n/2-.9,.15,-s/2+.3));const o=fn({w:1.4,d:1.2,floors:1,wall:L.calCrema,roof:L.tejaPalida,chimney:!1,seed:e,awning:!1});o.scale.setScalar(.8),o.position.set(n/2-.6,0,s/2-.6),a.add(o),Nt(a,n,s,xn.tierra,.8),a.userData.sea=!0;break}case"campo":{a.add(ZM(n-.4,s-.4,5,xn.trigo,.55));const o=fh();o.position.set(n/2-.3,0,s/2-.2),a.add(o),Nt(a,n,s,xn.tierra,.8);break}case"vinedo":{for(let o=0;o<3;o++){const l=jM(n-.6,e+o);l.position.set(0,0,-s/2+.6+o*((s-1.2)/2)),a.add(l)}Nt(a,n,s,xn.hierbaSeca,.8);break}case"olivar":{[[-1.3,-.9],[1.2,-.8],[-1.1,.9],[1.3,.9]].forEach(([c,d],u)=>{const h=Pc(e+u);h.position.set(c,0,d),h.scale.setScalar(.85),a.add(h)});const l=Xr(n-.4);l.position.set(0,0,-s/2+.2),a.add(l),Nt(a,n,s,xn.hierbaSeca,.8);break}case"cantera":{for(let l=0;l<4;l++){const c=Dc(e+l);c.position.set(-1+t()*1.4,.1,-.9+t()*1.2),c.scale.multiplyScalar(.9),a.add(c)}for(let l=0;l<3;l++)a.add(Ye(new He(.5,.4,.5),L.piedra,1,.2+(l===2?.4:0),-.9+l%2*.55));a.add(Ye(new Qe(.05,.06,2.2,6),L.maderaOscura,-1.1,1.1,1));const o=Ye(new He(1.6,.07,.07),L.maderaOscura,-.4,2,1);o.rotation.z=.15,a.add(o),a.add(Ye(new Qe(.01,.01,1.2,4),xn.cuerda,.3,1.4,1)),a.add(Ye(new He(.35,.3,.35),L.piedraOscura,.3,.75,1)),Nt(a,n,s,L.piedraOscura,1);break}case"pastizal":{a.add(qM(n-.3,s-.3));for(let o=0;o<3;o++){const l=YM(e+o);l.position.set(-1.2+t()*2.4,0,-.8+t()*1.6),a.add(l)}a.add(Ye(new He(.8,.25,.3),L.maderaOscura,1.3,.13,-.9)),Nt(a,n,s,xn.hierbaSeca,.8);break}case"barrero":{const o=Ye(new Qe(1,.8,.3,12),xn.barro,-.3,-.12,.3);a.add(o);const l=fn({w:1.5,d:1.3,floors:1,wall:L.madera,roof:L.tejaOscura,chimney:!1,seed:e,awning:!1});l.scale.setScalar(.8),l.position.set(.9,0,-.8),a.add(l);for(let c=0;c<4;c++)a.add(Ye(new He(.5,.2,.3),xn.arcilla,-1+c%2*.55,.1+Math.floor(c/2)*.21,-1));Nt(a,n,s,xn.tierra,.8);break}case"molino":{const o=UM();o.scale.setScalar(.82),a.add(o),a.userData.spin=o.getObjectByName("hub"),Nt(a,2.8,2.8);break}case"bodega":{const o=fn({w:3,d:2.4,floors:1,wall:L.calCrema,roof:L.tejaOscura,chimney:!1,seed:e,awning:!1});a.add(o);for(let c=0;c<3;c++){const d=zs();d.position.set(-1+c*.5,0,1.6),a.add(d)}const l=zs();l.position.set(-.75,.5,1.6),a.add(l),Nt(a,n,s);break}case"almazara":{const o=fn({w:2.8,d:2.4,floors:1,wall:L.calOcre,roof:L.teja,chimney:!0,seed:e,awning:!1});o.position.x=-.3,a.add(o);const l=Ye(new Qe(.5,.5,.2,14),L.piedra,1.4,.1,.6);a.add(l);const c=Ye(new Qe(.4,.4,.16,14),L.piedraOscura,1.4,.5,.6);c.rotation.z=Math.PI/2,a.add(c);const d=Pc(e);d.scale.setScalar(.7),d.position.set(1.4,0,-.9),a.add(d),Nt(a,n,s);break}case"conservera":{const o=oh();o.scale.set(.9,.9,.9),a.add(o);const l=Ye(new Qe(.16,.2,1.4,8),L.piedra,1.4,2.4,-.6);a.add(l);const c=Ye(new Qe(.22,.2,.12,8),L.piedraOscura,1.4,3.12,-.6);a.add(c),Ws.push(c);for(let u=0;u<2;u++){const h=zs();h.position.set(-1.6,0,.6+u*.5),a.add(h)}const d=Ks(e);d.position.set(1.7,.21,1.2),a.add(d),Nt(a,n,s);break}case"telar":{const o=fn({w:2.6,d:2.2,floors:2,wall:L.calRosa,roof:L.tejaPalida,chimney:!1,seed:e,awning:!0});a.add(o);for(let l=0;l<3;l++)a.add(Ye(new pi(.22,1),L.blanco,-1.5+l%2*.4,.22+Math.floor(l/2)*.38,.9-l%2*.3));Nt(a,n,s);break}case"alfar":{const o=fn({w:2.2,d:2,floors:1,wall:L.calCrema,roof:L.teja,chimney:!1,seed:e,awning:!1});o.position.x=-.5,a.add(o);const l=Ye(new wi(.62,12,8,0,Math.PI*2,0,Math.PI/2),L.piedraOscura,1.1,0,.3);a.add(l);const c=Ye(new Qe(.1,.12,.3,8),L.piedraOscura,1.1,.7,.3);a.add(c),Ws.push(c),a.add(Ye(new He(.4,.5,.06),L.maderaOscura,1.1,.25,.92));for(let d=0;d<3;d++)a.add(Ye(new Qe(.1,.07,.24,8),L.teja,.4+d*.3,.12,-1));Nt(a,n,s);break}case"panaderia":{const o=fn({w:2.6,d:2.2,floors:1,wall:L.cal,roof:L.teja,chimney:!0,seed:e,awning:!0});a.add(o);const l=Ye(new He(.4,1,.4),L.piedra,.9,1.9,-.4);a.add(l);const c=Ye(new He(.5,.1,.5),L.piedraOscura,.9,2.42,-.4);a.add(c),Ws.push(c);const d=fh(L.calOcre);d.position.set(1.5,0,1),a.add(d),Nt(a,n,s);break}case"jaboneria":{const o=fn({w:2.8,d:2.4,floors:1,wall:L.calCrema,roof:L.tejaOscura,chimney:!0,seed:e,awning:!1});a.add(o);for(let c=0;c<2;c++){const d=zs();d.position.set(1.7,0,-.4+c*.5),a.add(d)}const l=Ks(e+1);l.position.set(-1.7,.21,.8),a.add(l),a.add(Ye(new He(.4,.3,.3),Xe(10474439),-1.7,.57,.8)),Nt(a,n,s);break}case"carpinteria":{const o=fn({w:2.4,d:2.2,floors:1,wall:L.madera,roof:L.tejaOscura,chimney:!1,seed:e,awning:!1});o.position.x=-.6,a.add(o);for(let l=0;l<5;l++)a.add(Ye(new He(1.3,.07,.3),L.maderaClara,1.2,.04+l*.08,-.6+l%2*.05));for(const l of[.5,1.1])a.add(Ye(new He(.9,.06,.08),L.maderaOscura,1.2,.5,l));a.add(Ye(new He(.5,.6,.5),L.maderaClara,1.2,.3,.8)),Nt(a,n,s);break}case"casa":{a.add(fn({seed:e,floors:t()<.5?2:1})),Nt(a,n,s);break}case"tallador":{const o=fn({w:2.2,d:2,floors:1,wall:L.piedraOscura,roof:L.tejaOscura,chimney:!0,seed:e,awning:!1});o.position.x=-.5,a.add(o);const l=Ye(new He(1,.08,.5),L.maderaClara,1,.5,.4);a.add(l);for(let c=0;c<3;c++)a.add(Ye(new hd(.16+c*.03,0),L.basalto,.7+c*.3,.64,.4));a.add(Ye(new Za(.4,0),L.basaltoClaro,1.1,.25,-.8)),Nt(a,n,s,L.basaltoClaro);break}case"peleteria":{const o=fn({w:2.4,d:2,floors:1,wall:L.madera,roof:L.tejaOscura,chimney:!0,seed:e,awning:!1});o.position.x=-.4,a.add(o);for(const l of[.9,1.5])a.add(Ye(new Qe(.03,.03,1.4,5),L.maderaOscura,l,.7,.9));a.add(Ye(new He(.7,.02,.02),L.maderaOscura,1.2,1.35,.9));for(let l=0;l<2;l++){const c=Ye(new cn(.26,.5),Xe(9071178,{side:Gt}),1.02+l*.36,1.05,.9);a.add(c)}Nt(a,n,s);break}case"ostrero":{const o=fn({w:1.8,d:1.6,floors:1,wall:L.cal,roof:L.tejaPalida,chimney:!1,seed:e,awning:!1});o.position.set(-.5,0,-.5),a.add(o);const l=uo(2.6,1);l.position.set(.8,-.45,.1),a.add(l);for(let c=0;c<6;c++){const d=Ye(new wi(.1,7,6),c%2?L.rojo:L.blanco,-.6+c%3*.6,-.3,1.5+Math.floor(c/3)*.5);a.add(d)}a.add(Ye(new He(1.6,.02,.02),L.maderaOscura,0,-.3,1.5)),a.add(Ye(new He(1.6,.02,.02),L.maderaOscura,0,-.3,2)),Nt(a,2.2,1.9,L.piedra,1.4),a.userData.plinth.position.set(-.5,-.68,-.5),a.userData.sea=!0;break}case"almacen":{a.add(oh());const o=Ks(e);o.position.set(-1.6,.21,1.1),a.add(o);const l=zs();l.position.set(1.7,0,1),a.add(l),Nt(a,n,s);break}case"taberna":{a.add(OM()),Nt(a,n,s);break}}return $M(a,r),a.userData.type=i,a}function jM(i,e){const t=It(e),n=new Je,s=Math.round(i/.55),a=[];for(let r=0;r<=s;r++){const o=-i/2+r*(i/s);if(r%3===0&&n.add(Ye(new Qe(.03,.03,.9,5),L.maderaOscura,o,.45,0)),r<s){const l=new pi(.24+t()*.06,1);l.scale(1,.9,.7),l.translate(o+.27,.5,0),a.push(l)}}return n.add(bd(new se(Bf(a),L.vid))),n.add(Ye(new He(i,.015,.015),L.maderaOscura,0,.75,0)),n}function zf(i,e=1){if(i==="barca")return Lc(L.verdeBarco,e,!0);if(i==="balandro"){const s=Lc(L.azulBarco,e+7,!0);return s.scale.setScalar(1.35),s}const t=new Je,n=KM(e);return t.add(n),t}function KM(i){const e=CM(i);return e.traverse(t=>{t.isMesh&&t.material===L.vela&&(t.name="sail")}),e}const ph=new Gi({color:6279562,transparent:!0,opacity:.55,depthWrite:!1}),JM=new Gi({color:14702410,transparent:!0,opacity:.55,depthWrite:!1}),QM=new Gi({color:16765562,transparent:!0,opacity:.85,depthWrite:!1,side:Gt}),ey=new Gi({color:16777215,transparent:!0,opacity:.45,depthWrite:!1,side:Gt}),ty=i=>1-Math.pow(1-i,3);class ny{constructor(e,t,n,s){pe(this,"group",new Je);pe(this,"views",new Map);pe(this,"ghost",null);pe(this,"ghostType",null);pe(this,"ring");pe(this,"hover");pe(this,"tmp",new P);pe(this,"groundY",()=>0);pe(this,"pendingRepaint",!1);pe(this,"ringBase",1);this.puffs=e,this.nature=t,this.walkers=n,this.island=s,this.island,this.ring=new se(new Ha(1,1.12,40),QM),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,this.ring.renderOrder=12,this.ring.layers.set(1),this.hover=new se(new Ha(1,1.06,40),ey),this.hover.rotation.x=-Math.PI/2,this.hover.visible=!1,this.hover.renderOrder=12,this.hover.layers.set(1),this.group.add(this.ring,this.hover)}sync(e){const t=new Set;for(const s of e.buildings){t.add(s.id);let a=this.views.get(s.id);if(!a){const r=go(s.type,s.id);r.position.set(s.x,0,s.z),r.rotation.y=s.rot,r.userData.buildingId=s.id,r.traverse(o=>{o.userData.buildingId=s.id}),this.group.add(r),a={g:r,b:s,pop:0,chimneys:r.userData.chimneys??[],spin:r.userData.spin,connected:!1,spinAngle:0,shownLevel:1,flags:null},this.views.set(s.id,a),this.clearNature(s),s.built>=1&&(this.connect(s,!1),a.connected=!0)}a.b=s,s.level!==a.shownLevel&&(a.shownLevel=s.level,this.decorate(a))}let n=!1;for(const[s,a]of this.views)t.has(s)||(this.group.remove(a.g),this.views.delete(s),n=!0);n&&this.placeOnGround()}decorate(e){if(e.flags&&(e.g.remove(e.flags),e.flags=null),e.b.level<=1)return;const[t,n]=dt[e.b.type].footprint,s=new Je,a=e.b.level-1;for(let r=0;r<a;r++){const o=new se(new Qe(.025,.03,1.6+r*.3,5),L.maderaOscura),l=t/2-.2-r*.5,c=n/2-.15;o.position.set(l,.8+r*.15,c),o.castShadow=!0,s.add(o);const d=new se(new cn(.42,.26,6,2).translate(.21,0,0),r?L.bandera:L.banderaAzul);d.position.set(l,1.45+r*.3,c),d.castShadow=!0,s.add(d)}e.g.add(s),e.flags=s}reset(e,t){for(const n of this.views.values())this.group.remove(n.g);this.views.clear(),this.nature=e,this.island=t,this.setGhost(null),this.select(null),this.setHover(null)}placeOnGround(e){e&&(this.groundY=e);for(const t of this.views.values())t.g.position.y=Math.max(.15,this.groundY(t.b.x,t.b.z,Math.min(...dt[t.b.type].footprint)*.45))}clearNature(e){var a;const t=Of(e),n=Math.cos(t.rot),s=Math.sin(t.rot);for(let r=this.nature.length-1;r>=0;r--){const o=this.nature[r],l=o.x-t.x,c=o.z-t.z,d=l*n-c*s,u=l*s+c*n;Math.abs(d)<t.w/2+.6&&Math.abs(u)<t.d/2+.6&&((a=o.obj.parent)==null||a.remove(o.obj),this.nature.splice(r,1))}}connect(e,t=!0){if(dt[e.type].workers===0&&e.type!=="casa")return;const n=aM(e.x,e.z);n&&t?(nh(this.island),this.walkers.rebuild()):n&&(this.pendingRepaint=!0)}flushRepaint(){this.pendingRepaint&&(nh(this.island),this.walkers.rebuild(),this.pendingRepaint=!1)}update(e,t){for(const n of this.views.values()){const s=n.b,a=dt[s.type];if(s.built<1){const r=ty(s.built);if(n.g.scale.set(1,.03+.97*r,1),Math.random()<e*6){const[o,l]=a.footprint,c=po({x:s.x,z:s.z,w:o,d:l,rot:s.rot},.1),d=Math.floor(Math.random()*4),u=(d+1)%4,h=Math.random();this.puffs.emit(this.tmp.set(c[d][0]+(c[u][0]-c[d][0])*h,n.g.position.y+.15,c[d][1]+(c[u][1]-c[d][1])*h),{color:14206632,life:1.4,size0:.25,size1:.9,rise:.5,alpha:.35,drift:new P(.1,0,.05)})}n.pop=0}else{if(s.upgrading>0&&Math.random()<e*4){const[o,l]=a.footprint;this.puffs.emit(this.tmp.set(s.x+(Math.random()-.5)*o,n.g.position.y+.6+Math.random()*1.2,s.z+(Math.random()-.5)*l),{color:14206632,life:1.2,size0:.2,size1:.7,rise:.5,alpha:.3,drift:new P(.1,0,.05)})}if(n.connected||(n.connected=!0,this.connect(s),n.pop=.001),n.pop>0&&n.pop<1){n.pop=Math.min(1,n.pop+e*2.5);const o=1+Math.sin(n.pop*Math.PI)*.06;n.g.scale.set(o,o,o)}else n.g.scale.set(1,1,1);(s.type==="casa"?!0:s.working)&&n.chimneys.length&&Math.random()<e*(s.type==="casa"?1.2:2.4)&&(n.chimneys[Math.floor(Math.random()*n.chimneys.length)].getWorldPosition(this.tmp),this.tmp.y+=.1,this.puffs.emit(this.tmp,{color:15132394,life:3.4+Math.random()*1.2,size0:.14,size1:.85,rise:.4,alpha:.24,drift:new P(.3,0,.12)})),n.spin&&(s.working&&(n.spinAngle+=e*.5),n.spin.rotation.z=n.spinAngle)}}if(this.ring.visible){const n=1+Math.sin(t*3)*.03;this.ring.scale.set(this.ringBase*n,this.ringBase*n,1)}}select(e){if(!e){this.ring.visible=!1;return}const t=this.views.get(e.id);if(!t)return;const[n,s]=dt[e.type].footprint;this.ringBase=Math.hypot(n,s)/2+.3,this.ring.position.set(e.x,t.g.position.y+.06,e.z),this.ring.visible=!0}setHover(e){if(!e){this.hover.visible=!1;return}const t=this.views.get(e.id);if(!t)return;const[n,s]=dt[e.type].footprint,a=Math.hypot(n,s)/2+.2;this.hover.scale.set(a,a,1),this.hover.position.set(e.x,t.g.position.y+.05,e.z),this.hover.visible=!0}pick(e){for(const t of e){let n=t.object;for(;n;){if(n.userData.buildingId!=null&&n!==this.ghost)return n.userData.buildingId;n=n.parent}}return null}pickables(){return[...this.views.values()].map(e=>e.g)}setGhost(e){if(this.ghost&&(this.group.remove(this.ghost),this.ghost=null),this.ghostType=e,!e)return;const t=go(e,999);t.traverse(n=>{const s=n;s.isMesh&&(s.material=ph,s.castShadow=!1,s.receiveShadow=!1),n.isLight&&(n.visible=!1)}),t.visible=!1,this.ghost=t,this.group.add(t)}moveGhost(e){if(!this.ghost)return;if(!e){this.ghost.visible=!1;return}this.ghost.visible=!0,this.ghost.position.set(e.x,e.y,e.z),this.ghost.rotation.y=e.rot;const t=e.ok?ph:JM;this.ghost.traverse(n=>{const s=n;s.isMesh&&(s.material=t)})}get placing(){return this.ghostType}}const mh=new P(36,0,44),iy=new P(15,0,30),sy=new P(21,0,24),ay=new P(46,0,36),ry=20,gh=24;function vh(i,e,t,n,s){const a=1-n;return s.set(a*a*i.x+2*a*n*e.x+n*n*t.x,0,a*a*i.z+2*a*n*e.z+n*n*t.z)}class oy{constructor(e,t,n,s){pe(this,"group");pe(this,"sails",[]);pe(this,"heading");pe(this,"pos",new P);pe(this,"prev",new P);pe(this,"dockV");this.shipId=e,this.type=t,this.spot=n,this.puffs=s,this.group=zf(t,e*13+5),this.group.traverse(a=>{a.name==="sail"&&this.sails.push(a)}),this.heading=n.rot,this.dockV=new P(n.x,0,n.z),this.group.position.copy(this.dockV),this.group.rotation.y=n.rot}update(e,t,n){const s=this.group;this.prev.copy(s.position);let a=!1,r=!0;if(e.state==="moored")s.visible=!0,s.position.x=this.dockV.x,s.position.z=this.dockV.z;else if(e.state==="leaving"){s.visible=!0,a=!0,r=e.timer<1.5;const g=Math.min(1,e.timer/ry),v=g*g*(3-2*g);vh(this.dockV,sy,ay,v,this.pos),s.position.x=this.pos.x,s.position.z=this.pos.z}else if(e.state==="out")s.visible=!1,s.position.copy(mh);else{s.visible=!0,a=!0,r=e.timer>gh*.88;const g=Math.min(1,e.timer/gh),v=1-Math.pow(1-g,2.4);vh(mh,iy,this.dockV,v,this.pos),s.position.x=this.pos.x,s.position.z=this.pos.z}const o=s.position.x-this.prev.x,l=s.position.z-this.prev.z,c=Math.hypot(o,l)/Math.max(t,.001);let u=(c>.15&&a?Math.atan2(o,l)-Math.PI/2:e.state==="moored"||e.state==="returning"?this.spot.rot:this.heading)-this.heading;u=Math.atan2(Math.sin(u),Math.cos(u)),this.heading+=u*Math.min(1,t*2.2),s.rotation.y=this.heading;const h=r?.06:1;for(const g of this.sails)g.scale.y+=(h-g.scale.y)*Math.min(1,t*1.8);const f=this.type==="mercante"?.5:1;if(s.position.y=Math.sin(n*1.2+this.shipId)*.05*f,s.rotation.z=Math.sin(n*.9+this.shipId)*.03*f-Math.min(.06,c*.02),s.rotation.x=Math.sin(n*1.4+this.shipId)*.02*f+Math.min(.03,c*.01),c>.3&&s.visible&&Math.random()<t*(10+c*4)){const g=-Math.cos(this.heading),v=Math.sin(this.heading),m=(Math.random()-.5)*.7*(this.type==="mercante"?2:1),p=this.type==="mercante"?3.2:1.2;this.puffs.emit(new P(s.position.x+g*p-v*m,.22,s.position.z+v*p+g*m),{color:15924221,life:2.2+Math.random(),size0:.3,size1:1.4*(this.type==="mercante"?1.5:1),rise:0,alpha:.42,drift:new P(g*.25,0,v*.25)})}}}function ly(){const e=new Sf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(176,176),e.setPixelRatio(1),e.toneMapping=qa,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=is;const t=new Hh,n=new hf(16773590,3);n.position.set(-6,9,5),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-5,n.shadow.camera.right=5,n.shadow.camera.top=5,n.shadow.camera.bottom=-5,n.shadow.camera.near=1,n.shadow.camera.far=30,n.shadow.radius=3,n.shadow.blurSamples=8,t.add(n,n.target),t.add(new cf(12575477,14206888,.9)),t.add(new ff(16777215,.2));const s=new se(new ld(3.2,40),new as({color:10472304,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,t.add(s);const a=new P(1,.78,1).normalize(),r=new pa(-1,1,1,-1,.1,100),o={},l=new fa,c=new P,d=new P,u=(h,f,g=1)=>{t.add(f),l.setFromObject(f),l.getCenter(c),l.getSize(d);const v=Math.max(d.x,d.y*1.4,d.z)*.78*g+.6;r.left=-v,r.right=v,r.top=v,r.bottom=-v,r.updateProjectionMatrix(),r.position.copy(a).multiplyScalar(30).add(new P(c.x,c.y*.9,c.z)),r.lookAt(c.x,c.y*.9,c.z),s.position.set(c.x,-.02,c.z),s.visible=g===1,e.render(t,r),o[h]=e.domElement.toDataURL("image/png"),t.remove(f)};for(const h of Fi){const f=go(h.id,7);f.traverse(g=>{g.isLight&&(g.visible=!1)}),u(h.id,f)}for(const h of yd)u(h.id,zf(h.id,3),1.25);return e.dispose(),o}const Ua=10,cy=2700,Ic=[1,1,2,4,8,16],kf=[{id:"levante",name:"Viento de levante",desc:"Los viajes duran un 25 % menos."},{id:"red",name:"Red milagrosa",desc:"Las pesquerías rinden una unidad más por ciclo."},{id:"contrabando",name:"Lonja de contrabando",desc:"Vender no hunde el precio."},{id:"canteros",name:"Canteros del norte",desc:"Las canteras rinden el doble."},{id:"bodegas",name:"Bodegas hondas",desc:"+90 de capacidad de almacén."},{id:"hornos",name:"Hornos grandes",desc:"Los talleres van un 30 % más rápido."},{id:"despensa",name:"Despensa",desc:"La gente come la mitad."},{id:"fiesta",name:"Fiesta mayor",desc:"El ánimo sube un 15 % siempre."},{id:"gremio",name:"Gremio de mercaderes",desc:"Los encargos pagan un 40 % más."},{id:"vigia",name:"Vigía",desc:"El temporal avanza un 20 % más despacio."},{id:"lonja",name:"Lonja",desc:"Todo lo que vendes paga un 15 % más."},{id:"aduana",name:"Aduana",desc:"Traer mercancía del continente cuesta la mitad."},{id:"carpinteros",name:"Carpinteros",desc:"Construir y mejorar cuesta un 25 % menos."},{id:"escuela",name:"Escuela",desc:"Cada casa aloja dos vecinos más."},{id:"faro",name:"Faro mayor",desc:"Los barcos cargan un 30 % más."},{id:"sal",name:"Salazón",desc:"Las conservas valen el doble."},{id:"molinos",name:"Molinos de viento",desc:"La extracción va un 30 % más rápida."},{id:"siesta",name:"Siesta",desc:"Las obras tardan la mitad."},{id:"bandera",name:"Bandera roja",desc:"Las tormentas no te tocan."},{id:"apuesta",name:"Apostador",desc:"Cada punto de reputación da 150 monedas."},{id:"seguro",name:"Mutua",desc:"Asegurar la carga es gratis."},{id:"muelle",name:"Muelle largo",desc:"Un amarre más desde ya."},{id:"cronista",name:"Cronista",desc:"Cada mercancía nueva da el doble de reputación."},{id:"rezo",name:"Ermita",desc:"Cada día con la gente contenta da el doble de reputación."}],$s=Object.fromEntries(kf.map(i=>[i.id,i])),dy=[2,5,8],uy=["aserradero","pesqueria","campo","casa","almacen"],Uc=[{id:"produccion",name:"Manos",desc:i=>`Todo produce un ${8*i} % más rápido.`,base:150,max:20},{id:"comercio",name:"Comercio",desc:i=>`Los precios de venta suben un ${6*i} %.`,base:180,max:20},{id:"viento",name:"Viento",desc:i=>`Los viajes duran un ${5*i} % menos.`,base:160,max:10},{id:"oro",name:"Arcón",desc:i=>`Empiezas con ${200*i} monedas más.`,base:120,max:15},{id:"bodega",name:"Bodega",desc:i=>`Los barcos cargan ${6*i} unidades más.`,base:200,max:10},{id:"calma",name:"Calma chicha",desc:i=>`El temporal avanza un ${4*i} % más despacio.`,base:260,max:10},{id:"almacen",name:"Alacena",desc:i=>`+${20*i} de capacidad de almacén al empezar.`,base:140,max:10},{id:"planos",name:"Taller de planos",desc:i=>"Eliges cada plano entre 4 en vez de 3.",base:900,max:1},{id:"remo",name:"Segunda barca",desc:i=>"Empiezas cada travesía con dos barcas.",base:1400,max:1},{id:"suerte",name:"Suerte",desc:i=>`Los cofres y las apuestas pagan un ${6*i} % más.`,base:220,max:10},{id:"mana",name:"Maña",desc:i=>`Las habilidades se recargan un ${6*i} % más rápido.`,base:170,max:10},{id:"estibador",name:"Estibador",desc:()=>"Los barcos amarrados se cargan solos con lo que sobra y zarpan al llenarse al 70 %.",base:700,max:1},{id:"recadero",name:"Recadero",desc:()=>"Los encargos aceptados se entregan solos en cuanto hay género.",base:500,max:1}],hy=Object.fromEntries(Uc.map(i=>[i.id,i])),fy=(i,e)=>Math.round(i.base*Math.pow(1.15,e)),Vf={mediterranea:0,volcanica:400,boreal:900,atolon:1600},xh=["Cala","Punta","Isla","Cabo","Roca","Puerto","Ensenada","Bahía","Islote","Peñón"],_h=["Brava","del Sol","Negra","Blanca","de las Gaviotas","del Viento","Quebrada","Serena","de la Sal","del Faro","Verde","de los Vientos","Honda","Dorada","del Norte","Perdida","Azul","del Coral","de Plata","Vieja"];function py(i){const e=It(i*31+7);return`${xh[Math.floor(e()*xh.length)]} ${_h[Math.floor(e()*_h.length)]}`}function wd(i,e,t){const n=It(t*104729+3),s=[];for(let a=0;a<3;a++){const r=Math.floor(n()*1e6)+1,o=i[Math.min(i.length-1,Math.floor(n()*i.length))],l=Math.max(1,Math.min(e,1+Math.floor(n()*e)));s.push({seed:r,biome:o,level:l,name:py(r)})}return s.some(a=>a.level===1)||(s[0].level=1),s}function Ed(i,e,t,n,s=0){const a=Ic[Math.max(1,Math.min(5,n))],r=[["Reputación",Math.round(100*i)],["Oro",Math.round(Math.max(0,e)/50)],["Carta de puerto",t?300:0]];s&&r.push(["Reliquias",50*s]);const o=r.reduce((l,[,c])=>l+c,0);return a>1&&r.push([`Isla de nivel ${n} (×${a})`,Math.round(o*(a-1))]),{total:Math.round(o*a),parts:r}}const Sl={gold:.25,perk:.12,relic:.03},my=22,bl=[300,480],gy=.44,vy=.09,xy=.2,vo=50,_y=300,My=120,Gf=.08,yy=[{mul:.5,p:.35},{mul:1,p:.35},{mul:2,p:.22},{mul:4,p:.08}],Hf=[{id:"viento",name:"Viento",desc:"El barco que esté más lejos llega ahora mismo.",cooldown:240,icon:"≋"},{id:"jornada",name:"Jornada doble",desc:"Todos los edificios que están produciendo terminan el ciclo ya.",cooldown:300,icon:"☼"},{id:"regateo",name:"Regateo",desc:"La siguiente venta paga un 30 % más.",cooldown:360,icon:"⚖"}],Sy=Object.fromEntries(Hf.map(i=>[i.id,i])),by=[{id:"carga",title:"Mercante extranjero",text:"Un mercante fondea fuera de la bahía y ofrece un cargamento cerrado. No deja mirar dentro.",options:[{text:"Comprar el cargamento",odds:"35 % vale la mitad · 35 % lo que cuesta · 22 % el doble · 8 % el cuádruple",effect:"blind"},{text:"Dejarlo pasar",effect:"none"}]},{id:"naufragos",title:"Náufragos",text:"Una balsa con cuatro náufragos llega a la playa. Piden quedarse.",options:[{text:"Acogerlos",odds:"+4 vecinos para siempre, comen como todos",effect:"castaways"},{text:"Darles agua y despedirlos",odds:"+0,3 de reputación",effect:"rep03"}]},{id:"pirata",title:"Vela negra",text:"Un bergantín pirata exige tributo a cambio de no tocar tus barcos esta semana.",minRep:2,options:[{text:"Pagar 250 monedas",effect:"pay250"},{text:"Negarse",odds:"50 %: no pasa nada · 50 %: los barcos en el mar pierden la mitad de la carga",effect:"pirate"}]},{id:"peregrinos",title:"Peregrinos",text:"Un grupo de peregrinos pasa por la isla camino del santuario. Tienen hambre.",options:[{text:"Darles 6 de comida",odds:"+0,6 de reputación",effect:"pilgrims"},{text:"No hay para todos",effect:"none"}]},{id:"planos",title:"Maestro de obras",text:"Un maestro de obras itinerante vende un plano de su cuaderno.",minRep:1,options:[{text:"Pagar 400 monedas por un plano extra",odds:"Eliges 1 de 3 ahora",effect:"buyplan"},{text:"No",effect:"none"}]},{id:"playa",title:"Algo brilla en la arena",text:"Tras la marea, algo brilla medio enterrado en la playa. Sacarlo lleva una tarde de trabajo.",options:[{text:"Excavar (cuesta 150 monedas de jornales)",odds:"50 % reliquia · 50 % un montón de conchas",effect:"dig"},{text:"Dejarlo",effect:"none"}]},{id:"fiesta",title:"Santo del pueblo",text:"Es el día del santo. La gente quiere fiesta.",minRep:1,options:[{text:"Pagar la fiesta (200 monedas)",odds:"El temporal retrocede un 8 % y +0,5 de reputación",effect:"party"},{text:"Este año no",odds:"La gente trabaja un día a desgana",effect:"noparty"}]},{id:"inversor",title:"Prestamista",text:"Un prestamista del continente ofrece 600 monedas ahora a cambio de la mitad de tu siguiente venta.",options:[{text:"Aceptar",effect:"loan"},{text:"No",effect:"none"}]},{id:"faro",title:"Barco perdido",text:"Una noche de niebla, un barco perdido sigue tu faro hasta la bahía. Agradecido, el capitán ofrece algo.",options:[{text:"Que descargue parte de su mercancía",odds:"12 unidades de una mercancía al azar",effect:"gift"},{text:"Que cuente de ti en el continente",odds:"+0,8 de reputación",effect:"rep08"}]}],wl=[260,420],ks=[{id:"pescadora",name:"La Pescadora",desc:"Las pesquerías rinden una unidad más. Empiezas con 12 de pescado.",cost:0,color:"#3d7dc4"},{id:"cantero",name:"El Cantero",desc:"Empiezas con 24 de piedra y el plano de la cantera. Construir cuesta un 10 % menos.",cost:600,color:"#8f8470"},{id:"mercadera",name:"La Mercadera",desc:"Todo se vende un 10 % más caro. Empiezas con 300 monedas más.",cost:900,color:"#d9a441"},{id:"vigia",name:"El Vigía",desc:"El temporal avanza un 15 % más despacio y la habilidad Viento se recarga el doble de rápido.",cost:1200,color:"#1f8a98"}],wy=Object.fromEntries(ks.map(i=>[i.id,i])),Bi=[{id:"caracola",name:"Caracola de nácar",desc:"Los precios de venta suben un 4 %."},{id:"ancla",name:"Ancla vieja",desc:"Los barcos cargan 4 unidades más."},{id:"brujula",name:"Brújula de latón",desc:"Los viajes duran un 5 % menos."},{id:"amuleto",name:"Amuleto de coral",desc:"El temporal avanza un 4 % más despacio."},{id:"cuaderno",name:"Cuaderno del naturalista",desc:"Descubrir una mercancía da +0,1 de reputación."},{id:"moneda",name:"Moneda de oro antigua",desc:"Empiezas cada travesía con 150 monedas más."},{id:"red",name:"Red de seda",desc:"Las pesquerías van un 10 % más rápido."},{id:"campana",name:"Campana de barco",desc:"Los encargos pagan un 10 % más."},{id:"mapa",name:"Mapa manchado",desc:"Los cofres aparecen un 25 % más a menudo."},{id:"catalejo",name:"Catalejo",desc:"Las habilidades se recargan un 10 % más rápido."},{id:"sextante",name:"Sextante",desc:"Las tormentas solo se llevan la mitad."},{id:"timon",name:"Timón tallado",desc:"+20 de capacidad de almacén."}];Object.fromEntries(Bi.map(i=>[i.id,i]));const Ey=[{level:2,name:"Piratas",desc:"Las tormentas son piratas: los barcos sin seguro pierden el 25 %."},{level:3,name:"Mercado volátil",desc:"Los precios se mueven el doble y se hunden más al vender."},{level:4,name:"Isla escasa",desc:"Isla más pequeña y los edificios repetidos cuestan un 30 % más."},{level:5,name:"Temporal bravo",desc:"El temporal avanza un 20 % más rápido."}],Mh=i=>Ey.filter(e=>e.level<=i),Oa=[{id:"primera",name:"Primera travesía",reward:100,check:i=>i.runs>=1},{id:"carta1",name:"Primera Carta de puerto",reward:200,check:i=>i.wins>=1},{id:"carta5",name:"Cinco Cartas",reward:500,check:i=>i.wins>=5},{id:"carta10",name:"Fundar Marea: diez Cartas",reward:3e3,check:i=>i.wins>=10},{id:"carta15",name:"Quince Cartas",reward:1500,check:i=>i.wins>=15},{id:"legado1k",name:"1000 de legado",reward:150,check:i=>i.totalLegado>=1e3},{id:"legado10k",name:"10 000 de legado",reward:800,check:i=>i.totalLegado>=1e4},{id:"biomas",name:"Los cuatro biomas",reward:600,check:i=>i.biomes.length>=4},{id:"volcan",name:"Carta en una isla volcánica",reward:300,check:i=>i.islands.some(e=>e.biome==="volcanica")},{id:"nivel3",name:"Carta en una isla de nivel III",reward:700,check:i=>i.islands.some(e=>e.level>=3)},{id:"reliquias6",name:"Seis reliquias",reward:400,check:i=>i.relics.length>=6},{id:"vendido100k",name:"100 000 monedas vendidas",reward:600,check:i=>i.stats.earned>=1e5},{id:"millon",name:"Un millón de unidades producidas",reward:2e3,check:i=>i.stats.produced>=1e6}],Ty=8,Ay=12,Td=[{id:"vela-roja",name:"Velas rojas",cost:250,kind:"vela",color:14172986},{id:"vela-azul",name:"Velas azules",cost:250,kind:"vela",color:4029892},{id:"vela-oro",name:"Velas doradas",cost:500,kind:"vela",color:15316554},{id:"bandera-verde",name:"Banderas verdes",cost:150,kind:"bandera",color:5214058},{id:"bandera-blanca",name:"Banderas blancas",cost:150,kind:"bandera",color:16249834},{id:"farol-azul",name:"Farolillos azules",cost:400,kind:"farol",color:9422079},{id:"farol-verde",name:"Farolillos verdes",cost:400,kind:"farol",color:10479776}],Ad="marea.meta.v1";function qr(){const i={version:1,legado:0,totalLegado:0,perks:{},biomes:["mediterranea"],islands:[],runs:0,wins:0,offers:[],offerSalt:1,stats:{earned:0,sold:0,produced:0,contracts:0,bestRep:0,days:0},lastSeen:Date.now(),relics:[],captains:["pescadora"],captain:"pescadora",cosmetics:[],active:{},milestones:[],goodsSeen:[],buildingsBuilt:[],bottles:[],name:"",playSeconds:0,bestRun:0,rivals:[]};return i.offers=wd(i.biomes,1,i.offerSalt),i}function Cy(){var i;try{const e=localStorage.getItem(Ad);if(!e)return qr();const t=JSON.parse(e);return t.version!==1?qr():((i=t.offers)!=null&&i.length||(t.offers=wd(t.biomes,Cd(t),t.offerSalt)),t.relics??(t.relics=[]),t.captains??(t.captains=["pescadora"]),t.captain??(t.captain="pescadora"),t.cosmetics??(t.cosmetics=[]),t.active??(t.active={}),t.milestones??(t.milestones=[]),t.goodsSeen??(t.goodsSeen=[]),t.buildingsBuilt??(t.buildingsBuilt=[]),t.bottles??(t.bottles=[]),t.name??(t.name=""),t.playSeconds??(t.playSeconds=0),t.bestRun??(t.bestRun=0),t.rivals??(t.rivals=[]),t)}catch{return qr()}}function Rn(i){try{localStorage.setItem(Ad,JSON.stringify(i))}catch{}}function Wf(){try{localStorage.removeItem(Ad)}catch{}}const Cd=i=>Math.min(5,1+Math.floor(i.wins/2)),Js=(i,e)=>i.perks[e]??0;function $f(i,e){const t=hy[e],n=Js(i,e),s=fy(t,n);return n>=t.max?{ok:!1,cost:s,why:"Al máximo"}:i.legado<s?{ok:!1,cost:s,why:"Falta legado"}:{ok:!0,cost:s}}function Ry(i,e){const t=$f(i,e);return t.ok?(i.legado-=t.cost,i.perks[e]=Js(i,e)+1,Rn(i),!0):!1}function Xf(i,e){const t=Vf[e];return i.biomes.includes(e)?{ok:!1,cost:t,why:"Ya es tuyo"}:i.legado<t?{ok:!1,cost:t,why:"Falta legado"}:{ok:!0,cost:t}}function Py(i,e){const t=Xf(i,e);return t.ok?(i.legado-=t.cost,i.biomes.push(e),Rn(i),!0):!1}function qf(i){i.offerSalt++,i.offers=wd(i.biomes,Cd(i),i.offerSalt),Rn(i)}function Ly(i){const e=s=>Js(i,s),t=s=>i.relics.includes(s),n=i.captain;return{prodMul:1+.08*e("produccion"),priceMul:(1+.06*e("comercio"))*(t("caracola")?1.04:1)*(n==="mercadera"?1.1:1),voyageMul:(1-.05*e("viento"))*(t("brujula")?.95:1),startGold:200*e("oro")+(t("moneda")?150:0)+(n==="mercadera"?300:0),capacityAdd:6*e("bodega")+(t("ancla")?4:0),tempestMul:(1-.04*e("calma"))*(t("amuleto")?.96:1)*(n==="vigia"?.85:1),storageAdd:20*e("almacen")+(t("timon")?20:0),draftSize:e("planos")?4:3,startShips:e("remo")?2:1,luckMul:1+.06*e("suerte"),skillMul:(1-.06*e("mana"))*(t("catalejo")?.9:1),autoLoad:e("estibador")>0,autoDeliver:e("recadero")>0,fishBonus:n==="pescadora"?1:0,fishSpeed:t("red")?1.1:1,buildCostMul:n==="cantero"?.9:1,contractMul:t("campana")?1.1:1,chestMul:t("mapa")?.8:1,stormHalf:t("sextante"),discoverRep:t("cuaderno")?.1:0,vientoFast:n==="vigia",startStock:{pescado:n==="pescadora"?12:0,piedra:n==="cantero"?24:0},startPlan:n==="cantero"?"cantera":null,captain:n}}function Yf(i,e){const t=wy[e].cost;return i.captains.includes(e)?{ok:!1,cost:t,why:"Ya navega contigo"}:i.legado<t?{ok:!1,cost:t,why:"Falta legado"}:{ok:!0,cost:t}}function Dy(i,e){const t=Yf(i,e);return t.ok?(i.legado-=t.cost,i.captains.push(e),i.captain=e,Rn(i),!0):!1}function Ny(i,e){i.captains.includes(e)&&(i.captain=e,Rn(i))}function Iy(i,e){const t=Td.find(n=>n.id===e);if(!t)return!1;if(!i.cosmetics.includes(e)){if(i.legado<t.cost)return!1;i.legado-=t.cost,i.cosmetics.push(e)}return i.active[t.kind]=i.active[t.kind]===e?void 0:e,Rn(i),!0}function Uy(i){const e=[];for(const t of Oa)i.milestones.includes(t.id)||t.check(i)&&(i.milestones.push(t.id),i.legado+=t.reward,i.totalLegado+=t.reward,e.push({name:t.name,reward:t.reward}));return e.length&&Rn(i),e}function Zf(i){const e=Math.min(Ty,Math.max(0,(Date.now()-i.lastSeen)/36e5)),t=Math.floor(e*Ay*i.islands.length);return{hours:e,amount:t}}function Oy(i){const{amount:e}=Zf(i);return e>0&&(i.legado+=e,i.totalLegado+=e),i.lastSeen=Date.now(),Rn(i),e}function Fy(i,e,t){const n=Ly(e),s=Object.fromEntries(en.map(o=>[o.id,0]));s.madera=24,s.piedra=10,s.pescado=6;const a=Object.fromEntries(en.map(o=>[o.id,{m:1,event:1,eventTimer:0,drift:0}])),r={version:3,money:1e3+n.startGold,day:1,dayFrac:.42,speed:1,stock:s,buildings:[],ships:[],contracts:[],rep:0,market:a,news:[],nextId:1,contractTimer:70,newsTimer:150,fullWarnTimer:0,eventTimer:260,stats:{sold:0,earned:0,contracts:0,built:0,produced:0},time:0,docks:1,discovered:["madera","piedra","pescado"],events:[],fed:1,hungerDays:0,run:{seed:i.seed,biome:i.biome,level:i.level,name:i.name,rep:0,repShown:0,tempest:0,phase:"playing",blueprints:[...uy],draft:null,pendingDrafts:0,perkDraft:null,pendingPerks:0,perks:[],perksGiven:[],salesMilestone:0,happyDays:0,legacy:0,captain:n.captain,cooldowns:{viento:0,jornada:0,regateo:0},regateo:!1,loanShare:!1,chest:null,chestTimer:240,choice:null,choiceTimer:200,tavernDay:0,lotteryDay:0,lotteryPot:300,relicsFound:[],halfDay:0,extraPeople:0,bottles:[]},perm:n};s.pescado+=n.startStock.pescado,s.piedra+=n.startStock.piedra,n.startPlan&&!r.run.blueprints.includes(n.startPlan)&&r.run.blueprints.push(n.startPlan);for(const[o,l,c]of t)r.buildings.push({id:r.nextId++,type:"casa",x:o,z:l,rot:c,built:1,progress:0,working:!1,paused:!1,level:1,upgrading:0});for(let o=0;o<n.startShips;o++)r.ships.push({id:r.nextId++,type:"barca",state:"moored",cargo:{},timer:0,mode:"sell"});return n.startShips>1&&(r.docks=2),r}const Rd=i=>Math.max(0,Math.min(2,(i.level??1)-1)),jf=(i,e=0)=>dt[i.type].housing?bn.housing[Rd(i)]+e:0,Kf=i=>dt[i.type].storage?bn.storage[Rd(i)]:0,Pd=i=>dt[i.type].workers+(dt[i.type].workers?Rd(i):0),Ir=i=>i.run.extraPeople+i.buildings.filter(e=>e.built>=1).reduce((e,t)=>e+jf(t,i.run.perks.includes("escuela")?2:0),0),By=i=>i.buildings.filter(e=>e.built>=1).reduce((e,t)=>e+Pd(t),0),ji=i=>GM+i.perm.storageAdd+(i.run.perks.includes("bodegas")?90:0)+i.buildings.filter(e=>e.built>=1).reduce((e,t)=>e+Kf(t),0),Ki=i=>en.reduce((e,t)=>e+i.stock[t.id],0);function El(i){const e=Math.min(.2,i.buildings.filter(n=>n.built>=1).reduce((n,s)=>n+(dt[s.type].happiness??0),0)),t=i.run.perks.includes("fiesta");return .8+.2*i.fed+e+(t?.15:0)}const Po="marea.run.v3";function $a(i){try{localStorage.setItem(Po,JSON.stringify(i))}catch{}}function zy(){try{const i=localStorage.getItem(Po);if(!i)return null;const e=JSON.parse(i);if(e.version!==3||!e.run||e.run.phase==="ended")return null;for(const t of en)e.stock[t.id]==null&&(e.stock[t.id]=0),e.market[t.id]||(e.market[t.id]={m:1,event:1,eventTimer:0,drift:0});return e}catch{return null}}function Ld(){try{localStorage.removeItem(Po),localStorage.removeItem("marea.save.v1")}catch{}}const Tl=()=>{try{const i=localStorage.getItem(Po);if(!i)return!1;const e=JSON.parse(i);return e.version===3&&e.run&&e.run.phase!=="ended"}catch{return!1}};class Jf{constructor(e){pe(this,"toasts",[]);pe(this,"toastId",1);pe(this,"onToast",null);pe(this,"onRep",null);pe(this,"onRunEnd",null);pe(this,"onChest",null);pe(this,"metaBuildings",[]);pe(this,"ownedRelics",[]);this.s=e}toast(e,t="info"){var s;const n={id:this.toastId++,text:e,kind:t,t:0};this.toasts.push(n),(s=this.onToast)==null||s.call(this,n)}has(e){return this.s.run.perks.includes(e)}eventActive(e){return this.s.events.some(t=>t.id===e)}biome(){return oi[this.s.run.biome]}mods(){const e=this.s,t=e.perm,n=this.biome();return{prodMul:t.prodMul,extractMul:this.has("molinos")?1.3:1,craftMul:this.has("hornos")?1.3:1,priceMul:t.priceMul*(this.has("lonja")?1.15:1)*(this.eventActive("feria")?1.2:1),voyageMul:t.voyageMul*(this.has("levante")?.75:1),capacityAdd:t.capacityAdd,capacityMul:this.has("faro")?1.3:1,foodMul:n.foodMul*(this.has("despensa")?.5:1),contractMul:(this.has("gremio")?1.4:1)*t.contractMul,tempestMul:t.tempestMul*(this.has("vigia")?.8:1)*Math.pow(.88,Math.max(0,e.run.level-1))*(e.run.level>=5?1.2:1),importMul:this.has("aduana")?.5:1,buildCostMul:(this.has("carpinteros")?.75:1)*t.buildCostMul,buildTimeMul:this.has("siesta")?.5:1,insuranceFree:this.has("seguro"),stormImmune:this.has("bandera"),noElasticity:this.has("contrabando"),repDiscoverMul:this.has("cronista")?2:1,repHappyMul:this.has("rezo")?2:1,repGold:this.has("apuesta")?150:0}}capacityOf(e){const t=this.mods();return Math.round((es[e].capacity+t.capacityAdd)*t.capacityMul)}voyageSeconds(e){return Math.round(es[e].voyage*this.mods().voyageMul)}speedOf(e){const t=dt[e.type],n=this.biome(),s=this.mods();let a=El(this.s)*s.prodMul;return t.cat==="extraccion"&&(a*=s.extractMul),t.cat==="produccion"&&(a*=s.craftMul),t.field&&(a*=n.fieldMul*(this.eventActive("plaga")?.5:1)),e.type==="cantera"&&(a*=n.quarryMul*(this.has("canteros")?2:1)),e.type==="pesqueria"&&(a*=n.fishMul*(this.eventActive("buenapesca")?2:1)*this.s.perm.fishSpeed),e.type==="salinas"&&this.eventActive("mareaalta")&&(a=0),this.s.day===this.s.run.halfDay&&(a*=.6),a}cycleSeconds(e){const t=dt[e.type];return t.recipe?t.recipe.seconds*bn.cycle[Math.max(0,Math.min(2,e.level-1))]:0}outputsOf(e){const t=dt[e.type].recipe;if(!t)return{};const n={...t.outputs};return e.type==="pesqueria"&&(n.pescado=(n.pescado??0)+(this.has("red")?1:0)+this.s.perm.fishBonus),n}price(e){const t=this.s.market[e],n=e==="conservas"&&this.has("sal")?2:1;return Math.max(1,Math.round(Ut[e].base*t.m*t.event*(1+t.drift)*this.mods().priceMul*n))}importPrice(e){return Math.round(Ut[e].base*this.s.market[e].m*(1+this.s.market[e].drift)*VM*this.mods().importMul)}trend(e){const t=this.s.market[e];return t.event>1?1:t.m<.85?-1:0}sellUnits(e,t){const n=this.s.market[e],s=this.mods(),a=e==="conservas"&&this.has("sal")?2:1;let r=0;const o=Ut[e].elasticity*(this.s.run.level>=3?1.5:1);for(let l=0;l<t;l++)r+=Ut[e].base*n.m*n.event*(1+n.drift)*s.priceMul*a,s.noElasticity||(n.m=Math.max(.3,n.m*(1-o)));return Math.round(r)}cargoValue(e){return Object.entries(e).reduce((t,[n,s])=>t+this.price(n)*(s??0),0)}available(e){return this.s.run.blueprints.includes(e)}countOf(e){return this.s.buildings.filter(t=>t.type===e).length}buildCost(e){const t=dt[e],n=(1+FM*(this.s.run.level>=4?1.3:1)*this.countOf(e))*this.mods().buildCostMul,s={};for(const[a,r]of Object.entries(t.materials))s[a]=Math.round(r*n);return{money:Math.round(t.cost*n),materials:s}}canPay(e){if(this.s.money<e.money)return{ok:!1,why:"Falta dinero"};for(const[t,n]of Object.entries(e.materials))if(this.s.stock[t]<n)return{ok:!1,why:`Faltan ${n-this.s.stock[t]} de ${Ut[t].name.toLowerCase()}`};return{ok:!0}}pay(e){this.s.money-=e.money;for(const[t,n]of Object.entries(e.materials))this.s.stock[t]-=n}canAfford(e){return this.available(e)?e==="taberna"&&this.countOf("taberna")>=2?{ok:!1,why:"Máximo 2"}:e==="cantera"&&this.biome().noQuarry?{ok:!1,why:"No hay piedra en este atolón"}:this.canPay(this.buildCost(e)):{ok:!1,why:"Sin plano"}}place(e,t,n,s){if(!this.canAfford(e).ok)return null;this.pay(this.buildCost(e));const a={id:this.s.nextId++,type:e,x:t,z:n,rot:s,built:0,progress:0,working:!1,paused:!1,level:1,upgrading:0};return this.s.buildings.push(a),this.s.stats.built++,a}demolish(e){const t=this.s.buildings.findIndex(a=>a.id===e);if(t<0)return;const n=dt[this.s.buildings[t].type],s=Math.round(n.cost*.4);this.s.money+=s,this.s.buildings.splice(t,1),this.toast(`${n.name} derribado: recuperas ${s} monedas.`)}pool(){const e=this.s.run,t=e.rep,n=e.biome,s=t<3?1:t<6?2:3;return Fi.filter(a=>!e.blueprints.includes(a.id)&&a.tier<=s&&(!a.biome||a.biome===n)&&(!a.meta||this.metaBuildings.includes(a.id))&&!(a.id==="cantera"&&this.biome().noQuarry)).map(a=>a.id)}offerDraft(){const e=this.s.run;if(e.draft||e.pendingDrafts<=0)return;const t=this.pool();if(!t.length){e.pendingDrafts=0;return}const n=[],s=Math.min(this.s.perm.draftSize,t.length);for(;n.length<s;){const a=t[Math.floor(Math.random()*t.length)];n.includes(a)||n.push(a)}e.draft=n,e.pendingDrafts--}chooseBlueprint(e){const t=this.s.run;return!t.draft||!t.draft.includes(e)?!1:(t.blueprints.push(e),t.draft=null,this.toast(`Plano nuevo: ${dt[e].name}.`,"good"),this.offerDraft(),!0)}offerPerks(){const e=this.s.run;if(e.perkDraft||e.pendingPerks<=0)return;const t=kf.filter(s=>!e.perks.includes(s.id)).map(s=>s.id),n=[];for(;n.length<3&&n.length<t.length;){const s=t[Math.floor(Math.random()*t.length)];n.includes(s)||n.push(s)}e.perkDraft=n,e.pendingPerks--}choosePerk(e){const t=this.s.run;return!t.perkDraft||!t.perkDraft.includes(e)?!1:(t.perks.push(e),t.perkDraft=null,e==="muelle"&&this.s.docks++,this.toast(`${$s[e].name}: ${$s[e].desc}`,"level"),this.offerPerks(),!0)}upgradeCost(e){if(e.level>=BM)return null;const t=dt[e.type],n=this.mods().buildCostMul,s={};for(const[a,r]of Object.entries(t.materials))s[a]=Math.round(r*bn.materialsMul[e.level]*n);return s.piedra=(s.piedra??0)+Math.round(bn.extraStone[e.level]*n),{money:Math.round(t.cost*bn.costMul[e.level]*n),materials:s}}canUpgrade(e){if(e.built<1)return{ok:!1,why:"En obra"};if(e.upgrading>0)return{ok:!1,why:"Mejorando"};const t=this.upgradeCost(e);return t?this.s.run.rep<bn.repNeeded[e.level]?{ok:!1,why:`Reputación ${bn.repNeeded[e.level]}`}:this.canPay(t):{ok:!1,why:"Nivel máximo"}}upgrade(e){const t=this.s.buildings.find(n=>n.id===e);return!t||!this.canUpgrade(t).ok?!1:(this.pay(this.upgradeCost(t)),t.upgrading=bn.seconds[t.level]*this.mods().buildTimeMul,t.progress=0,t.working=!1,!0)}upgradeEffect(e){const t=dt[e.type],n=Math.min(2,e.level);return t.recipe?`ciclo de ${Math.round(this.cycleSeconds(e))} s a ${Math.round(t.recipe.seconds*bn.cycle[n])} s, +1 trabajador`:t.housing?`de ${bn.housing[n-1]} a ${bn.housing[n]} vecinos`:t.storage?`de +${bn.storage[n-1]} a +${bn.storage[n]} de capacidad`:""}maxShips(){return this.s.docks}buyShip(e){const t=es[e];return this.s.run.rep<t.rep||this.s.money<t.cost||this.s.ships.length>=this.maxShips()?!1:(this.s.money-=t.cost,this.s.ships.push({id:this.s.nextId++,type:e,state:"moored",cargo:{},timer:0,mode:"sell"}),this.toast(`${t.name} nuevo en el muelle.`,"good"),!0)}sellShip(e){const t=this.s.ships.findIndex(a=>a.id===e);if(t<0||this.s.ships[t].state!=="moored")return!1;const n=this.s.ships[t];for(const[a,r]of Object.entries(n.cargo))this.s.stock[a]+=Math.min(r,Math.max(0,ji(this.s)-Ki(this.s)));const s=Math.round(es[n.type].cost*Nf);return this.s.money+=s,this.s.ships.splice(t,1),this.toast(`${es[n.type].name} vendido por ${s} monedas.`),!0}nextDock(){return kM[this.s.docks]??null}canExpandDock(){const e=this.nextDock();return e?this.s.run.rep<e.rep?{ok:!1,why:`Reputación ${e.rep}`}:this.canPay({money:e.cost,materials:e.materials}):{ok:!1,why:"Muelle completo"}}expandDock(){if(!this.canExpandDock().ok)return!1;const e=this.nextDock();return this.pay({money:e.cost,materials:e.materials}),this.s.docks++,this.toast(`Muelle ampliado: ${this.s.docks} amarres.`,"good"),!0}loadCargo(e,t,n){if(e.state!=="moored")return;const s=this.capacityOf(e.type),a=Math.max(0,Math.min(n,this.s.stock[t],s-Xs(e.cargo)));a<=0||(e.cargo[t]=(e.cargo[t]??0)+a,this.s.stock[t]-=a)}unloadCargo(e,t,n){if(e.state!=="moored")return;const s=Math.min(n,e.cargo[t]??0,ji(this.s)-Ki(this.s));s<=0||(e.cargo[t]-=s,e.cargo[t]<=0&&delete e.cargo[t],this.s.stock[t]+=s)}insuranceCost(e){return this.mods().insuranceFree?0:Math.round(this.cargoValue(e.cargo)*zM)}depart(e,t,n,s=!1){if(e.state!=="moored")return!1;const a=Xs(e.cargo)>0;let r=0,o=0;return t&&n&&n>0&&(r=Math.min(n,this.capacityOf(e.type)),o+=r*this.importPrice(t)),s&&a&&(o+=this.insuranceCost(e)),!a&&r===0?(this.toast("El barco va vacío. Carga algo o encarga una compra.","bad"),!1):this.s.money<o?(this.toast("No hay dinero para esa compra.","bad"),!1):(this.s.money-=o,r>0?(e.mode="import",e.importGood=t,e.importQty=r):(e.mode="sell",e.importGood=void 0,e.importQty=0),e.insured=(s||this.mods().insuranceFree)&&a,e.state="leaving",e.timer=0,!0)}acceptContract(e){const t=this.s.contracts.find(n=>n.id===e);if(!(!t||t.accepted)){if(this.s.contracts.filter(n=>n.accepted).length>=2){this.toast("Ya tienes dos encargos en marcha.","bad");return}t.accepted=!0}}rejectContract(e){this.s.contracts=this.s.contracts.filter(t=>t.id!==e)}deliverContract(e){const t=this.s.contracts.find(n=>n.id===e);return!t||!t.accepted||this.s.stock[t.good]<t.qty?!1:(this.s.stock[t.good]-=t.qty,this.s.money+=t.reward,this.s.stats.contracts++,this.s.contracts=this.s.contracts.filter(n=>n.id!==e),this.addRep(t.rep,`Encargo cumplido: +${t.reward} monedas`),!0)}togglePause(e){const t=this.s.buildings.find(n=>n.id===e);t&&(t.paused=!t.paused)}addRep(e,t){var r,o;const n=this.s.run;if(n.phase!=="playing"&&n.phase!=="won")return;const s=Math.floor(n.rep);n.rep=Math.min(Ua,n.rep+e),this.s.rep=n.rep,n.tempest=Math.max(0,n.tempest-.04*e);const a=Math.floor(n.rep);this.toast(`${t} · reputación +${e%1?e.toFixed(2):e}`,"good");for(let l=s+1;l<=a;l++)n.pendingDrafts++,this.mods().repGold&&(this.s.money+=this.mods().repGold),dy.includes(l)&&!n.perksGiven.includes(l)&&(n.perksGiven.push(l),n.pendingPerks++),n.repShown=l,(r=this.onRep)==null||r.call(this,l);this.offerDraft(),this.offerPerks(),n.rep>=Ua&&n.phase==="playing"&&(n.phase="won",this.toast("¡Carta de puerto! La isla es tuya. Puedes zarpar ya o quedarte hasta el temporal para ganar más oro.","level"),(o=this.onRunEnd)==null||o.call(this,"won"))}finish(){const e=this.s.run;if(e.phase==="ended")return e.legacy;const t=e.phase==="won"||e.rep>=Ua;return e.legacy=Ed(e.rep,this.s.money,t,e.level).total,e.phase="ended",e.legacy}update(e){var a,r;const t=this.s,n=t.run;if(n.phase==="ended")return;t.time+=e,t.dayFrac+=e/(Sd*this.biome().dayLength),t.dayFrac>=1&&(t.dayFrac-=1,t.day++,this.newDay()),this.updateProduction(e),this.updateMarket(e),this.updateShips(e),this.updateContracts(e),this.updateEvents(e),this.updateExtras(e);const s=El(t)<.95?1.3:1;n.tempest+=e/cy*this.mods().tempestMul*s,n.tempest>=1&&n.phase!=="lost"&&(n.tempest=1,n.phase==="playing"?(n.phase="lost",this.toast("Llega el temporal. Hay que evacuar la isla.","bad"),(a=this.onRunEnd)==null||a.call(this,"lost")):(this.toast("Llega el temporal. Zarpamos con lo que hay.","bad"),(r=this.onRunEnd)==null||r.call(this,"won")))}newDay(){const e=this.s,t=Math.ceil(Ir(e)*ch*this.mods().foodMul);let n=t;for(const s of["pan","conservas","pescado"]){const a=Math.min(n,e.stock[s]);e.stock[s]-=a,n-=a}e.fed=t?(t-n)/t:1,e.fed<1?(e.hungerDays++,e.run.tempest=Math.min(1,e.run.tempest+.04),this.toast(`Día ${e.day}. Falta comida: la gente trabaja más despacio y el temporal se acerca. Pescado, conservas o pan.`,"bad")):(e.hungerDays=0,El(e)>=1.05?(e.run.happyDays++,this.addRep(.3*this.mods().repHappyMul,`Día ${e.day}: la gente está contenta`)):this.toast(`Día ${e.day}. La gente ha comido ${t} raciones.`))}updateProduction(e){const t=this.s;let n=Ir(t);const s=ji(t);let a=!1;for(const r of t.buildings){const o=dt[r.type];if(r.built<1){r.built=Math.min(1,r.built+e/(o.buildSeconds*this.mods().buildTimeMul)),r.built>=1&&this.toast(`${o.name} terminado.`,"good");continue}if(r.upgrading>0){r.upgrading-=e,r.working=!1,r.upgrading<=0&&(r.upgrading=0,r.level++,this.toast(`${o.name} mejorado a nivel ${r.level}.`,"good"));continue}if(!o.recipe)continue;const l=Pd(r),c=n>=l;if(c&&(n-=l),!c||r.paused){r.working=!1;continue}const d=o.recipe;if(r.progress===0){const h=Object.entries(d.inputs);if(h.some(([g,v])=>t.stock[g]<v)){r.working=!1;continue}const f=yh(this.outputsOf(r))-yh(d.inputs);if(Ki(t)+f>s){r.working=!1,a=!0;continue}for(const[g,v]of h)t.stock[g]-=v;r.progress=1e-6}const u=this.speedOf(r);if(r.working=u>0,r.progress+=e*u/this.cycleSeconds(r),r.progress>=1){r.progress=0;for(const[h,f]of Object.entries(this.outputsOf(r)))t.stock[h]+=f,t.stats.produced+=f,this.discover(h)}}t.fullWarnTimer-=e,a&&t.fullWarnTimer<=0&&(t.fullWarnTimer=60,this.toast("Almacén lleno: hay edificios parados. Vende, mejora el almacén o construye otro.","bad"))}discover(e){if(this.s.discovered.includes(e))return;this.s.discovered.push(e);const t=(Ut[e].tier===1?.3:Ut[e].tier===2?.6:1)*this.mods().repDiscoverMul+this.s.perm.discoverRep;this.addRep(t,`Mercancía nueva: ${Ut[e].name}`)}updateMarket(e){const t=this.s;for(const n of en){const s=t.market[n.id];s.m+=(1-s.m)*(1-Math.exp(-e*.0075)),s.drift+=((Math.random()-.5)*.02*(t.run.level>=3?2:1)-s.drift*.05)*e,s.drift=Math.max(-.15,Math.min(.15,s.drift)),s.eventTimer>0&&(s.eventTimer-=e,s.eventTimer<=0&&(s.event=1))}if(t.newsTimer-=e,t.newsTimer<=0){t.newsTimer=200+Math.random()*160;const n=HM.filter(a=>this.couldProduce(a.good)),s=n[Math.floor(Math.random()*n.length)];if(s){const a=t.market[s.good];a.event=s.factor,a.eventTimer=200,t.news.unshift({text:s.text,good:s.good,until:t.time+200}),t.news=t.news.slice(0,4),this.toast(`Noticia: ${s.text}`)}}t.news=t.news.filter(n=>n.until>t.time)}updateShips(e){const t=this.s;for(const n of t.ships){const s=es[n.type];if(n.state==="leaving")n.timer+=e,n.timer>=20&&(n.state="out",n.timer=this.voyageSeconds(n.type));else if(n.state==="out"){if(n.timer-=e,n.timer<=0){let a=0,r=0;for(const[o,l]of Object.entries(n.cargo))a+=this.sellUnits(o,l),r+=l;if(n.cargo={},r>0){let o="";if(t.run.regateo&&(a=Math.round(a*1.3),t.run.regateo=!1,o+=" Regateo: +30 %."),t.run.loanShare){const l=Math.round(a/2);a-=l,t.run.loanShare=!1,o+=` El prestamista se lleva ${l}.`}for(t.money+=a,t.stats.sold+=r,t.stats.earned+=a,n.lastSale=a,this.toast(`${s.name}: vendidas ${r} unidades por ${a} monedas.${o}`,"good");t.stats.earned-t.run.salesMilestone>=1e3;)t.run.salesMilestone+=1e3,this.addRep(.5,`Ventas: ${t.run.salesMilestone} monedas`)}n.mode==="import"&&n.importGood&&n.importQty&&(n.cargo[n.importGood]=n.importQty),n.state="returning",n.timer=0,n.insured=!1}}else if(n.state==="returning"&&(n.timer+=e,n.timer>=24&&(n.state="moored",n.timer=0,n.mode==="import"&&n.importGood))){const a=n.cargo[n.importGood]??0,r=Math.min(a,Math.max(0,ji(t)-Ki(t)));t.stock[n.importGood]+=r,n.cargo={},r<a&&(n.cargo[n.importGood]=a-r),this.toast(`${s.name} vuelve con ${a} de ${Ut[n.importGood].name.toLowerCase()}.`+(r<a?" Parte se queda a bordo: almacén lleno.":""),"good")}}}updateContracts(e){const t=this.s;for(const n of t.contracts)n.deadline-=e,n.deadline<=0&&n.accepted&&(t.run.tempest=Math.min(1,t.run.tempest+.03),this.toast(`Encargo de ${Ut[n.good].name.toLowerCase()} vencido: el temporal se acerca.`,"bad"));if(t.contracts=t.contracts.filter(n=>n.deadline>0),t.contractTimer-=e,t.contractTimer<=0&&t.contracts.filter(n=>!n.accepted).length<2){t.contractTimer=110+Math.random()*90;const n=en.filter(s=>this.produces(s.id)).map(s=>s.id);if(n.length){const s=n[Math.floor(Math.random()*n.length)],a=Math.random()<.25&&t.run.rep>=4,r=Math.max(4,Math.round((8+t.run.rep*2.5)*(Ut[s].tier===1?1.6:Ut[s].tier===2?1:.6)*(a?1.6:1))),o=Math.round(r*Ut[s].base*(1.5+Math.random()*.3)*this.mods().contractMul*(a?1.15:1)),l={id:t.nextId++,good:s,qty:r,reward:o,rep:a?2:1,deadline:300+Math.random()*180,accepted:!1};t.contracts.push(l),this.toast(`Encargo nuevo: ${r} de ${Ut[s].name.toLowerCase()} por ${o} monedas${a?" (grande)":""}.`)}}}updateEvents(e){const t=this.s;if(t.events=t.events.filter(a=>a.until>t.time),t.eventTimer-=e,t.eventTimer>0||t.run.rep<1)return;t.eventTimer=240+Math.random()*200;const n=If.filter(a=>!this.eventActive(a.id)&&(a.id!=="mareaalta"||this.countOf("salinas")>0)&&(a.id!=="buenapesca"||this.countOf("pesqueria")>0)&&(a.id!=="plaga"||t.buildings.some(r=>dt[r.type].field))),s=n[Math.floor(Math.random()*n.length)];if(s){if(s.id==="tormenta"){const a=t.run.level>=2;if(this.mods().stormImmune){this.toast(a?"Velas piratas en el horizonte, pero la bandera roja los espanta.":"Tormenta en el mar, pero la bandera roja la aleja de tus barcos.");return}let r=0;const o=(a?.25:.15)*(t.perm.stormHalf?.5:1);for(const l of t.ships)if(l.state==="out"&&(l.timer+=30,!l.insured))for(const[c,d]of Object.entries(l.cargo)){const u=Math.ceil(d*o);l.cargo[c]=d-u,r+=u}this.toast(`${a?"Piratas: abordan a los barcos en ruta y se llevan parte de la carga si no va asegurada.":Uf.tormenta.text}${r?` Se han perdido ${r} unidades.`:""}`,"bad");return}t.events.push({id:s.id,until:t.time+s.seconds}),this.toast(s.text,s.id==="plaga"||s.id==="mareaalta"?"bad":"good")}}canUseSkill(e){const t=this.s.run;return t.phase!=="playing"&&t.phase!=="won"?{ok:!1,why:"Travesía terminada"}:t.cooldowns[e]>0?{ok:!1,why:"Recargando"}:e==="viento"&&!this.s.ships.some(n=>n.state==="out")?{ok:!1,why:"No hay barcos en el mar"}:e==="jornada"&&!this.s.buildings.some(n=>n.working&&n.progress>0)?{ok:!1,why:"Nada en marcha"}:e==="regateo"&&t.regateo?{ok:!1,why:"Ya activo"}:{ok:!0}}useSkill(e){if(!this.canUseSkill(e).ok)return!1;const t=this.s.run;if(e==="viento"){const n=this.s.ships.filter(s=>s.state==="out").sort((s,a)=>a.timer-s.timer)[0];n.timer=.01,this.toast("Un viento de popa empuja al barco hasta el puerto del continente.","good")}if(e==="jornada"){let n=0;for(const s of this.s.buildings)s.working&&s.progress>0&&(s.progress=.9999,n++);this.toast(`Jornada doble: ${n} edificios terminan su ciclo.`,"good")}return e==="regateo"&&(t.regateo=!0,this.toast("Regateo: la siguiente venta paga un 30 % más.","good")),t.cooldowns[e]=Sy[e].cooldown*this.s.perm.skillMul*(e==="viento"&&this.s.perm.vientoFast?.5:1),!0}openChest(){var t;const e=this.s.run;return!e.chest||e.chest.fetching>0?!1:(e.chest.fetching=my,this.toast("Una barca sale a por el cofre."),(t=this.onChest)==null||t.call(this,"open"),!0)}resolveChest(){const e=this.s,t=e.run,n=e.perm.luckMul;let s=Math.random();const a=Sl.relic*n,r=Sl.perk*n,o=Sl.gold,l=1+.5*(t.level-1);if((s-=a)<0){const g=Bi.filter(v=>!this.ownedRelics.includes(v.id)&&!t.relicsFound.includes(v.id));if(g.length){const v=g[Math.floor(Math.random()*g.length)];t.relicsFound.push(v.id),this.toast(`¡Reliquia! ${v.name}: ${v.desc} Se queda contigo para siempre.`,"level");return}s=.5}if((s-=r)<0){t.pendingPerks++,this.offerPerks(),this.toast("Dentro del cofre: un pergamino con una ventaja.","level");return}if((s-=o)<0){const g=Math.round((120+t.rep*40)*n*l);e.money+=g,this.toast(`Dentro del cofre: ${g} monedas.`,"good");return}const c=en.filter(g=>g.tier<=2&&(this.couldProduce(g.id)||g.tier===1)).map(g=>g.id),d=c[Math.floor(Math.random()*c.length)],u=Math.round((8+Math.random()*12)*n*l),h=Math.max(0,ji(e)-Ki(e)),f=Math.min(u,h);e.stock[d]+=f,this.discover(d),this.toast(`Dentro del cofre: ${f} de ${Ut[d].name.toLowerCase()}.${f<u?" El resto no cabe en el almacén.":""}`,"good")}canPlayDice(){const e=Math.floor(this.s.money*xy);return this.s.run.tavernDay===this.s.day?{ok:!1,why:"Hoy ya has jugado",max:e}:e<10?{ok:!1,why:"Sin oro que apostar",max:e}:{ok:!0,max:e}}playDice(e){const t=this.canPlayDice();if(!t.ok)return null;e=Math.max(10,Math.min(t.max,Math.round(e)));const n=()=>1+Math.floor(Math.random()*6),s=[n(),n(),n()],a=[n(),n(),n()],r=s.reduce((d,u)=>d+u,0),o=a.reduce((d,u)=>d+u,0)+1,l=r>o?"win":r===o?"tie":"lose",c=l==="win"?Math.round(e*(2*this.s.perm.luckMul-1)):l==="lose"?-e:0;return this.s.money+=c,this.s.run.tavernDay=this.s.day,this.toast(l==="win"?`Dados: ${r} contra ${o}. Ganas ${c} monedas.`:l==="tie"?`Dados: ${r} contra ${o}. Empate, te devuelven la apuesta.`:`Dados: ${r} contra ${o}. Pierdes ${e} monedas.`,l==="win"?"good":l==="lose"?"bad":"info"),{player:s,house:a,result:l,delta:c}}canBuyLottery(){return this.s.run.lotteryDay===this.s.day?{ok:!1,why:"Un boleto al día"}:this.s.money<vo?{ok:!1,why:"Falta dinero"}:{ok:!0}}buyLottery(){if(!this.canBuyLottery().ok)return!1;const e=this.s,t=e.run;if(e.money-=vo,t.lotteryDay=e.day,Math.random()<Gf*e.perm.luckMul){const n=t.lotteryPot;e.money+=n,t.lotteryPot=_y,this.toast(`¡Lotería del puerto! Te llevas ${n} monedas.`,"level")}else t.lotteryPot+=My,this.toast(`Boleto sin premio. El bote sube a ${t.lotteryPot}.`);return!0}blindCargoPrice(){return Math.round(300+this.s.run.rep*60)}choose(e){const t=this.s,n=t.run,s=n.choice;if(!s||!s.options[e])return!1;const a=s.options[e];n.choice=null;const r=()=>Math.max(0,ji(t)-Ki(t)),o=l=>{const c=en.filter(h=>h.tier<=2&&(this.couldProduce(h.id)||h.tier===1)).map(h=>h.id);let d=l,u=[];for(let h=0;h<4&&d>0;h++){const f=c[Math.floor(Math.random()*c.length)],g=Math.min(r(),Math.max(1,Math.round(d/this.price(f)/(4-h))));if(g<=0)break;t.stock[f]+=g,d-=g*this.price(f),u.push(`${g} ${Ut[f].name.toLowerCase()}`),this.discover(f)}return u.join(", ")||"nada (almacén lleno)"};switch(a.effect){case"none":break;case"blind":{const l=this.blindCargoPrice();if(t.money<l){this.toast("No tienes para pagar el cargamento.","bad");break}t.money-=l;let c=Math.random(),d=1;for(const h of yy)if((c-=h.p)<0){d=h.mul;break}const u=o(l*d*t.perm.luckMul);this.toast(`Cargamento abierto: valía ×${d}. Dentro: ${u}.`,d>=2?"level":d<1?"bad":"good");break}case"castaways":n.extraPeople+=4,this.toast("Cuatro vecinos nuevos. Comen como todos.","good");break;case"rep03":this.addRep(.3,"Los náufragos cuentan tu hospitalidad");break;case"rep08":this.addRep(.8,"El capitán habla de tu puerto");break;case"pay250":t.money>=250?(t.money-=250,this.toast("Tributo pagado. Los piratas se van.")):(this.toast("No tienes 250 monedas: los piratas se cobran en carga.","bad"),this.pirateHit());break;case"pirate":Math.random()<.5?this.toast("Los piratas se lo piensan y se van.","good"):this.pirateHit();break;case"pilgrims":{let l=6;for(const c of["pan","conservas","pescado"]){const d=Math.min(l,t.stock[c]);t.stock[c]-=d,l-=d}l>0?this.toast("No había comida para los peregrinos.","bad"):this.addRep(.6,"Los peregrinos hablan bien de ti");break}case"buyplan":t.money>=400?(t.money-=400,n.pendingDrafts++,this.offerDraft()):this.toast("No tienes 400 monedas.","bad");break;case"dig":{if(t.money<150){this.toast("No tienes 150 monedas.","bad");break}t.money-=150;const l=Bi.filter(c=>!this.ownedRelics.includes(c.id)&&!n.relicsFound.includes(c.id));if(Math.random()<.5*t.perm.luckMul&&l.length){const c=l[Math.floor(Math.random()*l.length)];n.relicsFound.push(c.id),this.toast(`¡Reliquia! ${c.name}: ${c.desc}`,"level")}else this.toast("Conchas. Muchas conchas.","bad");break}case"party":t.money>=200?(t.money-=200,n.tempest=Math.max(0,n.tempest-.08),this.addRep(.5,"Fiesta del santo")):this.toast("No hay dinero para la fiesta.","bad");break;case"noparty":n.halfDay=t.day+1,this.toast("La gente trabajará a desgana mañana.","bad");break;case"loan":t.money+=600,n.loanShare=!0,this.toast("600 monedas. La mitad de la siguiente venta es del prestamista.");break;case"gift":{const l=en.filter(u=>u.tier<=2).map(u=>u.id),c=l[Math.floor(Math.random()*l.length)],d=Math.min(12,r());t.stock[c]+=d,this.discover(c),this.toast(`El capitán descarga ${d} de ${Ut[c].name.toLowerCase()}.`,"good");break}}return!0}pirateHit(){let e=0;for(const t of this.s.ships)if(t.state==="out")for(const[n,s]of Object.entries(t.cargo)){const a=Math.ceil(s/2);t.cargo[n]=s-a,e+=a}this.toast(e?`Los piratas abordan tus barcos: pierdes ${e} unidades.`:"Los piratas no encuentran barcos en el mar. Se van sin nada.",e?"bad":"good")}updateExtras(e){var s,a;const t=this.s,n=t.run;for(const r of Object.keys(n.cooldowns))n.cooldowns[r]=Math.max(0,n.cooldowns[r]-e);if(n.chest)n.chest.fetching>0&&(n.chest.fetching-=e,n.chest.fetching<=0&&(this.resolveChest(),n.chest=null,(s=this.onChest)==null||s.call(this,"gone")));else if(n.chestTimer-=e,n.chestTimer<=0&&n.phase==="playing"){n.chestTimer=(bl[0]+Math.random()*(bl[1]-bl[0]))*t.perm.chestMul;const r=Math.PI*.55+Math.random()*Math.PI*1.6,[o,l]=Hs(0,0,Math.cos(r),Math.sin(r),6,60);n.chest={x:o,z:l,fetching:0},this.toast("Un cofre del naufragio ha aparecido en la orilla. Haz clic para ir a por él.","level"),(a=this.onChest)==null||a.call(this,"spawn")}if(!n.choice&&n.phase==="playing"&&(n.choiceTimer-=e,n.choiceTimer<=0)){n.choiceTimer=wl[0]+Math.random()*(wl[1]-wl[0]);const r=by.filter(o=>(o.minRep??0)<=n.rep&&!(o.id==="pirata"&&!t.ships.some(l=>l.state==="out")));n.choice=r[Math.floor(Math.random()*r.length)]}if(t.perm.autoDeliver)for(const r of t.contracts)r.accepted&&t.stock[r.good]>=r.qty&&this.deliverContract(r.id);t.perm.autoLoad&&Math.floor(t.time)%5===0&&Math.floor(t.time-e)%5!==0&&this.autoLoad()}reserve(e){let t=0;for(const n of this.s.buildings){const s=dt[n.type].recipe;s&&s.inputs[e]&&(t+=(s.inputs[e]??0)*3)}Ut[e].food&&(t+=this.foodNeed()*2);for(const n of this.s.contracts)n.accepted&&n.good===e&&(t+=n.qty);return e==="madera"&&(t+=30),e==="piedra"&&(t+=20),t}autoLoad(){const e=this.s;for(const t of e.ships){if(t.state!=="moored")continue;const n=this.capacityOf(t.type),s=en.map(a=>({g:a.id,n:Math.max(0,e.stock[a.id]-this.reserve(a.id)),p:this.price(a.id)})).filter(a=>a.n>0).sort((a,r)=>r.p-a.p);for(const a of s){if(Xs(t.cargo)>=n)break;this.loadCargo(t,a.g,a.n)}Xs(t.cargo)>=n*.7&&this.depart(t,void 0,0,this.cargoValue(t.cargo)>600)}}couldProduce(e){return this.s.run.blueprints.some(t=>dt[t].recipe&&(dt[t].recipe.outputs[e]??0)>0)}produces(e){return this.s.buildings.some(t=>t.built>=1&&dt[t.type].recipe&&(dt[t.type].recipe.outputs[e]??0)>0)}workers(){return{used:By(this.s),total:Ir(this.s)}}storage(){return{used:Ki(this.s),cap:ji(this.s)}}foodNeed(){return Math.ceil(Ir(this.s)*ch*this.mods().foodMul)}foodStock(){return this.s.stock.pan+this.s.stock.conservas+this.s.stock.pescado}}const Xs=i=>Object.values(i).reduce((e,t)=>e+(t??0),0),yh=Xs,Vs=10,Jt=i=>!i.inHub&&!!i.state&&!!i.sim,Ur=i=>{var e;return((e=i.state)==null?void 0:e.run.rep)??0},Sh=i=>{var e;return((e=i.state)==null?void 0:e.run.tempest)??0},Dd=[{id:"intro",title:"Una botella en la playa",scope:"meta",when:i=>i.inHub&&i.meta.runs===0,text:"Capitán: soy Nácar, contrabandista retirado y el único que salió a flote cuando la Marea Grande se tragó nuestro puerto. Las islas siguen ahí. La Cofradía del Continente da una Carta de puerto a quien levante un puerto que aguante un temporal. Con diez Cartas podremos fundar Marea otra vez. Elige una isla de las tres y zarpa. Te iré dejando botellas."},{id:"llegada",title:"Tierra",scope:"meta",when:i=>Jt(i)&&i.state.buildings.length<=3&&i.runSeconds<600,text:"Primero madera: pon un aserradero donde no haya pendiente (barra de abajo, Extracción; clic en la tarjeta y clic en el suelo). Luego una pesquería en la orilla: la gente come pescado cada día. Arriba tienes el oro, los vecinos, la comida y el almacén."},{id:"barras",title:"La estrella y la nube",scope:"meta",when:i=>Jt(i)&&i.state.buildings.length>=4,text:"Las obras se levantan solas. Mientras, mira arriba: la estrella es tu reputación, y necesitas 10 para la Carta. La nube es el temporal: sube sola y, cuando se llena, hay que evacuar. Cada punto de reputación la frena un poco."},{id:"gente",title:"Bocas",scope:"meta",when:i=>Jt(i)&&i.sim.workers().used>i.sim.workers().total,text:"Te faltan brazos. Cada edificio necesita vecinos y las casas los traen (Pueblo). Cada vecino come un cuarto de ración al día: pescado, conservas o pan. Sin comida trabajan despacio y el temporal se acerca."},{id:"vender",title:"El oro viene del continente",scope:"meta",when:i=>Jt(i)&&i.state.stats.sold===0&&(i.state.stock.madera>=30||i.state.stock.pescado>=14)&&i.state.ships.some(e=>e.state==="moored"),text:"Aquí nadie compra. Pestaña Barcos: carga la barca con lo que sobre y zarpa; se vende al llegar y el barco vuelve con el oro. Vender mucho de golpe hunde el precio, así que mira el Mercado. Cada 1000 monedas vendidas te dan media reputación."},{id:"encargo",title:"Encargos",scope:"meta",when:i=>Jt(i)&&i.state.contracts.length>0,text:"Ha llegado un encargo (pestaña Encargos): un pedido con plazo. Paga más que el mercado y da reputación entera, que es lo que cuenta. Si lo aceptas y vence, el temporal se acerca. Acepta solo lo que puedas cumplir."},{id:"plano",title:"Un plano de tres",scope:"meta",when:i=>Jt(i)&&!!i.state.run.draft,text:"Primer punto de reputación, primer plano. Elige uno de tres; los otros se los lleva el mar en esta travesía. Piensa en cadenas: el trigo vale poco, el molino lo vuelve harina y la panadería lo vuelve pan, que vale seis veces más y además alimenta."},{id:"habilidades",title:"Tres cartas en la manga",scope:"meta",when:i=>Jt(i)&&i.runSeconds>90,text:"Abajo a la izquierda: Viento trae el barco más lejano ahora mismo, Jornada doble termina todos los ciclos y Regateo sube un 30 % la siguiente venta. Se recargan solas. Úsalas; guardarlas no sirve de nada."},{id:"ventaja",title:"Ventaja de travesía",scope:"meta",when:i=>Jt(i)&&!!i.state.run.perkDraft,text:"Reputación 2: una ventaja de travesía, elige una de tres. Dura hasta que zarpes. Las que duran para siempre se compran en el archipiélago con legado."},{id:"mejoras",title:"Crecer hacia arriba",scope:"meta",when:i=>Jt(i)&&Ur(i)>=2&&!i.state.run.perkDraft&&!i.state.run.draft,text:"Con reputación 2 puedes mejorar edificios (clic en uno, botón de mejora): ciclos más cortos, más vecinos o más almacén sin gastar terreno. Y ampliar el muelle para un segundo barco."},{id:"balandro",title:"Bodega grande",scope:"meta",when:i=>Jt(i)&&Ur(i)>=3,text:"Reputación 3: el balandro ya está en el astillero. Tres veces la bodega de la barca. Y recuerda el seguro: por un 6 % de la carga, la tormenta no se la lleva."},{id:"cofre",title:"Cosas del naufragio",scope:"meta",when:i=>Jt(i)&&!!i.state.run.chest,text:"Un cofre en la orilla, con el halo. Haz clic encima (o en el aviso de abajo a la izquierda) y una barca va a por él. Dentro: 60 % mercancías, 25 % oro, 12 % una ventaja, 3 % una reliquia. Las reliquias se quedan contigo para siempre."},{id:"eleccion",title:"Hay que decidir",scope:"meta",when:i=>Jt(i)&&!!i.state.run.choice,text:"A veces pasa algo y hay que elegir. Las probabilidades están escritas en cada opción y las tiradas son honestas. Lo que no está escrito es seguro."},{id:"taberna",title:"La Taberna del Pulpo",scope:"meta",when:i=>Jt(i)&&i.state.day>=2,text:"La taberna del puerto es mía. Dados contra la banda y lotería, oro del juego, probabilidades a la vista, una vez al día. Que luego no se come, capitán."},{id:"temporal30",title:"La nube sube",scope:"run",when:i=>Jt(i)&&Sh(i)>=.3&&Ur(i)<10,text:"Vas por un tercio del temporal. Lo aceleran el hambre, la gente descontenta y los encargos vencidos. Si ves que no llegas, el botón Rendirse de arriba te saca con el legado de lo hecho: nadie se queda en la isla, la gente embarca y se lleva lo aprendido."},{id:"temporal75",title:"Se acaba el tiempo",scope:"run",when:i=>Jt(i)&&Sh(i)>=.75&&Ur(i)<10,text:"Tres cuartos. Vende lo que tengas, cumple lo que puedas. Si no llegas a 10, evacúa antes de que llegue: el legado se cuenta igual, y cada punto de reputación son 100."},{id:"carta",title:"Carta de puerto",scope:"meta",when:i=>Jt(i)&&i.state.run.phase==="won",text:"Lo has hecho. La isla entra en tu archipiélago y la Cofradía lo apunta. Ahora puedes zarpar ya o quedarte a hacer oro hasta que llegue el temporal: cada 50 monedas son un punto de legado."},{id:"evacuar",title:"Nadie muere en Marea",scope:"meta",when:i=>Jt(i)&&i.state.run.phase==="lost",text:"El temporal. La gente sube a los barcos y se lleva lo aprendido: eso es el legado. En el archipiélago se convierte en ventajas para siempre. La siguiente isla empieza más fácil."},{id:"legado",title:"Esto es el legado",scope:"meta",when:i=>i.inHub&&i.meta.runs>=1,text:"Gástalo en ventajas permanentes (derecha): producción, comercio, oro inicial, calma. Cada travesía empiezas más fuerte, y cada nivel cuesta un 15 % más. Mira también a los capitanes: cada uno zarpa distinto."},{id:"nivel2",title:"Más arriba",scope:"meta",when:i=>i.inHub&&i.meta.offers.some(e=>e.level>=2),text:"Islas de nivel II: piratas que asaltan a los barcos sin seguro, pero legado doble. Cuanto más alto, más riesgo y más premio. Los biomas nuevos tienen mercancías propias que valen más."},{id:"reliquia",title:"Una reliquia",scope:"meta",when:i=>i.meta.relics.length>0||Jt(i)&&i.state.run.relicsFound.length>0,text:"Las reliquias se quedan contigo en todas las travesías. Hay doce. Salen de los cofres y de lo que brilla en la arena."},{id:"marea",title:"Marea baja",scope:"meta",when:i=>i.inHub&&i.meta.islands.length>=1&&i.meta.runs>=2,text:"Cada isla con Carta junta legado mientras no juegas, hasta ocho horas. Al volver, recógelo. Cuantas más islas, más junta."},{id:"fundar",title:"Marea renace",scope:"meta",when:i=>i.meta.wins>=Vs,text:"Diez Cartas. La Cofradía reconoce el puerto y Marea vuelve a estar en los mapas. Lo que venga ahora es por gusto: islas más altas, la colección entera, el nombre más arriba. Gracias, capitán. Las botellas las seguiré mandando."}],ky=Object.fromEntries(Dd.map(i=>[i.id,i]));function Vy(i){var n;const e=i.meta.bottles,t=((n=i.state)==null?void 0:n.run.bottles)??[];for(const s of Dd)if(!(s.scope==="meta"?e.includes(s.id):t.includes(s.id))&&s.when(i))return s;return null}const Al={l:"Legado total",w:"Cartas",p:"Tiempo jugado",hitos:"Hitos",b:"Mejor travesía"},Qf=i=>{let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)},Gy=i=>btoa(unescape(encodeURIComponent(i))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),Hy=i=>decodeURIComponent(escape(atob(i.replace(/-/g,"+").replace(/_/g,"/"))));function Wy(i,e){return{n:i.name||"Capitán",l:i.totalLegado,w:i.wins,p:Math.round(i.playSeconds),m:i.milestones.slice(),b:i.bestRun,h:Math.max(0,...i.islands.map(t=>t.level)),r:i.relics.length,c:e,t:Date.now()}}function $y(i){const e=JSON.stringify(i);return`MAREA-${Gy(e)}.${Qf(e+"sal-de-marea")}`}function Xy(i){const e=i.match(/MAREA-([A-Za-z0-9_-]+)\.([a-z0-9]+)/);if(!e)return null;try{const t=Hy(e[1]);if(Qf(t+"sal-de-marea")!==e[2])return null;const n=JSON.parse(t);return typeof n.n!="string"||typeof n.l!="number"?null:n}catch{return null}}const Cl=(i,e)=>e==="hitos"?i.m.length:i[e],ep=i=>{const e=Math.floor(i/3600),t=Math.floor(i%3600/60);return e?`${e} h ${t} min`:`${t} min`};function qy(i){return`🌊 Marea · récord de ${i.n}
Legado total ${i.l.toLocaleString("es-ES")} · ${i.w} Cartas · ${i.m.length}/${Oa.length} hitos · ${ep(i.p)} jugados
A ver si me superas. Pégalo en Marea (Récords → Añadir rival):
${$y(i)}`}const an={coin:'<svg class="svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.5-2.5 1.8-2.5.8-2.5 1.8 1 1.8 2.5 1.8 2.5-.8 2.5-1.8M12 6.5v11"/></svg>',sun:'<svg class="svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',moon:'<svg class="svg" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',people:'<svg class="svg" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6 0 5 1.8 5 4.6"/></svg>',box:'<svg class="svg" viewBox="0 0 24 24"><path d="M3.5 7.5 12 3.5l8.5 4v9l-8.5 4-8.5-4z"/><path d="M3.5 7.5 12 11.5l8.5-4M12 11.5v9"/></svg>',food:'<svg class="svg" viewBox="0 0 24 24"><path d="M4 13h16a8 8 0 0 1-16 0zM12 5v3M8 6l1 2M16 6l-1 2"/></svg>',clock:'<svg class="svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',star:'<svg class="svg" viewBox="0 0 24 24"><path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/></svg>',storm:'<svg class="svg" viewBox="0 0 24 24"><path d="M7 15a4 4 0 0 1 .6-7.95A5.5 5.5 0 0 1 18 8.5a3.5 3.5 0 0 1-.5 7H7z"/><path d="M12 12l-2 4h3l-2 4"/></svg>',anchor:'<svg class="svg" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path d="M12 7v13M5 12H3a9 9 0 0 0 18 0h-2M8 12H5M19 12h-3"/></svg>',check:'<svg class="svg" viewBox="0 0 24 24" style="width:12px;height:12px;stroke-width:3"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',bottle:'<svg class="svg" viewBox="0 0 24 24" style="width:22px;height:22px"><path d="M10 3h4v3l2 3v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3z"/><path d="M9 13h6M9 16h6"/></svg>'},ut=i=>Math.round(i).toLocaleString("es-ES");function Rl(){document.fullscreenElement?document.exitFullscreen().catch(()=>null):document.documentElement.requestFullscreen().catch(()=>null)}const Yr=i=>`${Math.floor(Math.max(0,i)/60)}:${String(Math.floor(Math.max(0,i)%60)).padStart(2,"0")}`;let xo=[];const Or=i=>(xo.push(i),`<span class="time" data-i="${xo.length-1}">${Yr(i)}</span>`),ts=i=>`<span class="sw" style="background:${Ut[i].color}"></span>`,Ji=(i,e="")=>Object.entries(i).filter(([,t])=>t).map(([t,n])=>`<span class="chip ${e}">${ts(t)}${n} ${Ut[t].name.toLowerCase()}</span>`).join(" "),bh=(i,e)=>`${ut(i)} ${an.coin}`+Object.entries(e).filter(([,t])=>t).map(([t,n])=>` <span class="m">${ts(t)}${n}</span>`).join(""),Fr=i=>["","I","II","III","IV","V"][i]??String(i);class Yy{constructor(e,t){pe(this,"tab","mercado");pe(this,"cat","extraccion");pe(this,"els",{});pe(this,"confirmDemolish",!1);pe(this,"confirmSell",0);pe(this,"importGood","trigo");pe(this,"importQty",0);pe(this,"insure",!1);pe(this,"menuOpen",!1);pe(this,"lastPanelKey","");pe(this,"cardKey","");pe(this,"modalKey","");pe(this,"hubShown",!1);pe(this,"bet",50);pe(this,"rollingUntil",0);pe(this,"dice",null);pe(this,"bottleShown",null);pe(this,"bottleNotBefore",0);pe(this,"askOk",null);pe(this,"recSort","l");pe(this,"recMsg","");pe(this,"inTitle",!1);this.root=e,this.api=t,e.innerHTML=`
      <div class="topbar panel">
        <div class="brand">Marea</div>
        <div class="stat money">${an.coin}<span data-el="money"></span></div>
        <div class="stat"><span data-el="dayIcon">${an.sun}</span><span data-el="day"></span></div>
        <div class="stat" data-el="peopleStat" data-tip="Trabajadores ocupados / vecinos">${an.people}<span data-el="people"></span></div>
        <div class="stat" data-el="foodStat">${an.food}<span data-el="food"></span></div>
        <div class="stat" data-el="storageStat" data-tip="Almacén">${an.box}<span data-el="storage"></span></div>
        <div class="gauge rep" data-tip="Reputación: con 10 consigues la Carta de puerto"><span class="lbl">${an.star}<b data-el="repN"></b></span><div class="bar"><i data-el="repBar"></i></div></div>
        <div class="gauge storm" data-tip="Temporal: cuando llega, se acaba la travesía"><span class="lbl">${an.storm}</span><div class="bar"><i data-el="stormBar"></i></div></div>
        <button class="btn sm sail" data-el="sailBtn" data-tip="Zarpar al archipiélago con el legado">${an.anchor} <span data-el="sailTxt">Zarpar</span></button>
        <div class="speed" data-el="speed"><button data-speed="0" data-tip="Pausa">II</button><button data-speed="1">1×</button><button data-speed="2">2×</button><button data-speed="4">4×</button></div>
        <button class="menu snd" data-el="sndBtn" data-tip="Sonido">♪</button>
        <button class="menu fs" data-el="fsBtn" data-tip="Pantalla completa (F11)">⛶</button>
        <button class="menu" data-el="menuBtn" data-tip="Menú">≡</button>
      </div>
      <div class="events" data-el="events"></div>
      <div class="dropdown panel" data-el="menu">
        <button data-act="save">Guardar ahora</button>
        <button data-act="hub">Abandonar la travesía</button>
        <button data-act="reset">Borrar todo el progreso</button>
        <button data-act="settings">Ajustes</button>
        <button data-act="report">Copiar informe para el desarrollador</button>
        <button data-act="title">Salir al menú principal</button>
        <div class="sep"></div>
        <div class="help muted">Marea beta ${t.version} · pruebas con amigos. Si algo falla, copia el informe y mándaselo a Javi.</div>
        <div class="help">Arrastra para mover la cámara, rueda para acercar. <b>R</b> gira el edificio al colocarlo, <b>Esc</b> cancela, <b>Espacio</b> pausa.</div>
        <div class="help diag" data-el="diag"></div>
      </div>
      <div class="toasts" data-el="toasts"></div>
      <div class="hint panel" data-el="hint"></div>
      <aside class="side panel">
        <div class="tabs" data-el="tabs"></div>
        <div class="content" data-el="content"></div>
      </aside>
      <footer class="buildbar panel">
        <div class="tabs" data-el="cats"></div>
        <div class="cards" data-el="cards"></div>
      </footer>
      <div class="tooltip panel" data-el="tooltip"></div>
      <div class="bottles" data-el="bottles"></div>
      <div class="tip" data-el="tip"></div>
      <div class="cinema" data-el="cinema"><div class="rain"></div><div class="flash" data-el="flash"></div><div class="bar top"></div><div class="bar bottom"><span data-el="cineTxt"></span></div></div>
      <div class="title" data-el="title"></div>
      <div class="skills" data-el="skills"></div>
      <div class="chestnote panel" data-el="chestnote"></div>
      <div class="modal" data-el="modal"></div>
      <div class="hub" data-el="hub"></div>`,e.querySelectorAll("[data-el]").forEach(n=>{this.els[n.dataset.el]=n}),this.bind(),this.fitToScreen(),setInterval(()=>this.fitToScreen(),1e3),window.addEventListener("resize",()=>this.fitToScreen()),this.renderCats()}bind(){const{api:e,root:t}=this;this.els.speed.addEventListener("click",n=>{const s=n.target.closest("button");s&&e.setSpeed(Number(s.dataset.speed))}),this.els.fsBtn.addEventListener("click",()=>Rl()),this.els.sndBtn.classList.toggle("off",e.audio.muted),this.els.sndBtn.addEventListener("click",()=>{e.audio.setMuted(!e.audio.muted),this.els.sndBtn.classList.toggle("off",e.audio.muted)}),t.addEventListener("click",n=>{const s=n.target.closest("button, .bcard, .offer");s&&!s.disabled&&e.audio.click()}),this.els.sailBtn.addEventListener("click",()=>{var n;((n=this.api.sim)==null?void 0:n.s.run.phase)==="won"?this.showEnd():this.confirmEnd()}),this.els.bottles.addEventListener("click",n=>{const s=n.target.closest("[data-bottle]");s&&this.closeBottle(s.dataset.bottle)}),this.els.menuBtn.addEventListener("click",()=>{this.menuOpen=!this.menuOpen,this.els.menu.classList.toggle("open",this.menuOpen)}),this.els.menu.addEventListener("click",n=>{var a;const s=n.target.closest("button");if(s&&(this.menuOpen=!1,this.els.menu.classList.remove("open"),s.dataset.act==="save"&&(e.saveNow(),this.toast({id:0,text:"Partida guardada.",kind:"info",t:0})),s.dataset.act==="hub"&&this.confirmEnd(),s.dataset.act==="reset"&&this.ask("¿Borrar todo?","<p>Se pierde el legado, las ventajas, las islas conquistadas y la travesía en marcha. No se puede deshacer.</p>","Borrar todo",()=>e.resetAll(),!0),s.dataset.act==="settings"&&this.showSettings(),s.dataset.act==="title"&&e.toTitle(),s.dataset.act==="report")){const r=e.report();(a=navigator.clipboard)==null||a.writeText(r).then(()=>this.toast({id:0,text:"Informe copiado. Pégalo en un mensaje a Javi.",kind:"good",t:0})).catch(()=>this.ask("Informe para Javi",`<p>Copia este texto y mándaselo:</p><textarea class="report" readonly>${r.replace(/</g,"&lt;")}</textarea>`,"Hecho",()=>null,!1,""))}}),this.els.cats.addEventListener("click",n=>{const s=n.target.closest("button");s&&(this.cat=s.dataset.cat,this.renderCats(),this.renderCards(!0))}),this.els.cards.addEventListener("click",n=>{const s=n.target.closest(".bcard");if(!s||!e.sim)return;const a=s.dataset.type;if(e.placing()===a){e.cancelPlacing();return}e.sim.canAfford(a).ok&&e.startPlacing(a),this.renderCards(!0)}),this.els.cards.addEventListener("mouseover",n=>{const s=n.target.closest(".bcard");s&&this.showTooltip(s)}),this.els.cards.addEventListener("mouseleave",()=>{this.els.tooltip.style.display="none"}),this.els.tabs.addEventListener("click",n=>{const s=n.target.closest("button");s&&(this.tab=s.dataset.tab,this.tab!=="edificio"&&e.select(null),this.renderTabs(),this.renderPanel(!0))}),this.els.content.addEventListener("click",n=>this.onPanelClick(n)),this.els.content.addEventListener("change",n=>{const s=n.target;s.dataset.act==="importGood"&&(this.importGood=s.value,this.renderPanel(!0)),s.dataset.act==="insure"&&(this.insure=s.checked,this.renderPanel(!0))}),this.els.modal.addEventListener("click",n=>this.onModalClick(n)),this.els.hub.addEventListener("click",n=>this.onHubClick(n)),this.els.skills.addEventListener("click",n=>{const s=n.target.closest("button");s&&s.dataset.skill&&(e.useSkill(s.dataset.skill),this.render(!0))}),this.els.chestnote.addEventListener("click",()=>{e.openChest(),this.render(!0)}),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("mouseover",n=>{const s=n.target.closest("[data-tip]"),a=this.els.tip;if(!s||!s.dataset.tip){a.style.display="none";return}a.textContent=s.dataset.tip,a.style.display="block";const r=s.getBoundingClientRect(),o=a.offsetWidth,l=a.offsetHeight,c=r.top<l+16;a.style.left=`${Math.max(8,Math.min(window.innerWidth-o-8,r.left+r.width/2-o/2))}px`,a.style.top=`${c?r.bottom+8:r.top-l-8}px`,a.classList.toggle("below",c)}),t.addEventListener("mouseout",n=>{const s=n.relatedTarget;(!s||!s.closest("[data-tip]"))&&(this.els.tip.style.display="none")}),t.addEventListener("mousedown",()=>{this.els.tip.style.display="none"}),this.els.modal.addEventListener("input",n=>{const s=n.target;if(s.dataset.act==="vmusic"){e.audio.setMusicVol(Number(s.value)/100),s.style.setProperty("--v",s.value+"%");const a=this.els.modal.querySelector('[data-el="vm"]');a&&(a.textContent=s.value)}if(s.dataset.act==="vsfx"){e.audio.setSfxVol(Number(s.value)/100),s.style.setProperty("--v",s.value+"%");const a=this.els.modal.querySelector('[data-el="vs"]');a&&(a.textContent=s.value)}}),this.els.modal.addEventListener("change",n=>{const s=n.target;s.dataset.act==="vsfx"&&e.audio.coin(),s.dataset.act==="pname"&&(e.meta.name=s.value.trim().slice(0,20),e.saveNow())}),this.els.title.addEventListener("click",n=>this.onTitleClick(n)),window.addEventListener("keydown",n=>{n.key==="Enter"&&this.bottleShown&&n.target.tagName!=="INPUT"&&this.closeBottle(this.bottleShown)}),this.els.hub.addEventListener("input",n=>{const s=n.target;if(s.dataset.act==="bet"){const a=this.els.hub.querySelector('[data-el="betN"]');a&&(a.textContent=s.value)}}),this.els.content.addEventListener("input",n=>{const s=n.target;if(s.dataset.act==="bet"){this.bet=Number(s.value);const a=this.els.content.querySelector('[data-el="betN"]');a&&(a.textContent=ut(this.bet))}})}fitToScreen(){const e=screen.availTop??0,t=window.outerHeight-window.innerHeight,n=document.fullscreenElement||t<0||t>160?0:Math.max(0,window.screenY+window.outerHeight-(e+screen.availHeight)),s=Math.max(0,Math.min(window.innerHeight*.3,n));this.root.style.bottom=`${Math.round(s)}px`,this.els.diag&&(this.els.diag.textContent=`Pantalla ${screen.width}×${screen.height} (útil ${screen.availHeight}), ventana ${window.outerWidth}×${window.outerHeight} en y=${window.screenY}, página ${window.innerWidth}×${window.innerHeight}, zoom ${Math.round(window.devicePixelRatio*100)} %${s?`, recogido ${Math.round(s)} px`:""}`)}isBlocking(){return this.els.modal.style.display==="flex"}renderBottles(){var n;const e={inHub:this.hubShown,state:((n=this.api.sim)==null?void 0:n.s)??null,meta:this.api.meta,sim:this.api.sim,runSeconds:this.api.runSeconds()};if(this.bottleShown||Date.now()<this.bottleNotBefore)return;const t=Vy(e);t&&(this.bottleShown=t.id,this.els.bottles.innerHTML=this.bottleHtml(t),this.api.audio.pop())}bottleHtml(e){return`<div class="bottle panel"><div class="bhead"><span class="bico">${an.bottle}</span><div><div class="btitle">${e.title}</div><div class="bfrom">Mensaje en una botella · Nácar</div></div></div><p>${e.text}</p><div class="row between"><span class="bsign">— N.</span><button class="btn sm" data-bottle="${e.id}">Entendido</button></div></div>`}closeBottle(e){var a;if(this.bottleShown!==e)return;const t=this.api.meta,n=(a=this.api.sim)==null?void 0:a.s;Zy[e]==="run"&&n?n.run.bottles.push(e):t.bottles.push(e),this.api.saveNow(),this.bottleShown=null,this.bottleNotBefore=Date.now()+3e3;const s=this.els.bottles.firstElementChild;s&&(s.classList.add("out"),setTimeout(()=>{this.bottleShown||(this.els.bottles.innerHTML="")},320)),setTimeout(()=>this.renderBottles(),3100)}confirmEnd(){const e=this.api.sim;if(!e)return;const t=e.s.run,n=Ed(t.rep,e.s.money,!1,t.level);this.modalKey="confirm",this.els.modal.innerHTML=`<div class="box panel"><h2>¿Evacuar la isla?</h2><p>Todavía no tienes la Carta de puerto. La gente embarca y te llevas <b>${ut(n.total)}</b> de legado (reputación ${t.rep.toFixed(1)} y ${ut(e.s.money)} monedas). Si te quedas, puedes seguir hasta que llegue el temporal.</p>
      <div class="row"><button class="btn danger" style="flex:1" data-act="evacuate">Evacuar con ${ut(n.total)} de legado</button><button class="btn ghost" data-act="stay">Seguir</button></div></div>`,this.els.modal.style.display="flex"}ask(e,t,n,s,a=!1,r="Cancelar"){this.modalKey="ask",this.askOk=s,this.els.modal.innerHTML=`<div class="box panel"><h2>${e}</h2><div class="asktext">${t}</div><div class="row">${n?`<button class="btn ${a?"danger":"gold"}" style="flex:1" data-act="askok">${n}</button>`:""}${r?`<button class="btn ghost" data-act="askno">${r}</button>`:""}</div></div>`,this.els.modal.style.display="flex"}closeModal(){this.els.modal.style.display="none",this.modalKey="",this.askOk=null}showSettings(){const e=this.api.audio,t=this.api.quality(),n=Math.round(e.vol.music*100),s=Math.round(e.vol.sfx*100),a=(r,o)=>`<button class="chip pick ${(r==="auto"?t.auto:!t.auto&&t.level===r)?"on":""}" data-act="quality" data-q="${r}">${o}</button>`;this.modalKey="settings",this.els.modal.innerHTML=`<div class="box panel settings"><h2>Ajustes</h2>
      <div class="setrow"><span>Nombre</span><input class="txt" data-act="pname" maxlength="20" value="${(this.api.meta.name||"").replace(/"/g,"")}" placeholder="Tu nombre de capitán"><span></span></div>
      <div class="setrow"><span>Música</span><input type="range" class="slider" data-act="vmusic" min="0" max="100" value="${n}" style="--v:${n}%"><b data-el="vm">${n}</b></div>
      <div class="setrow"><span>Efectos</span><input type="range" class="slider" data-act="vsfx" min="0" max="100" value="${s}" style="--v:${s}%"><b data-el="vs">${s}</b></div>
      <div class="setrow"><span>Gráficos</span><div class="row wrap">${a("auto","Automático")}${a(0,"Alta")}${a(1,"Media")}${a(2,"Baja")}${a(3,"Mínima")}</div></div>
      <div class="setrow"><span>Pantalla</span><button class="chip pick" data-act="fullscreen">${document.fullscreenElement?"Salir de pantalla completa":"Pantalla completa"}</button></div>
      <button class="btn gold block" data-act="askno" style="margin-top:14px">Listo</button></div>`,this.els.modal.style.display="flex"}myRecord(){const e=this.api.meta,t=Math.round(100*(e.goodsSeen.length/en.length+e.buildingsBuilt.length/Fi.length+e.relics.length/Bi.length+e.biomes.length/4+e.captains.length/ks.length)/5);return Wy(e,t)}showRecords(){const e=this.api.meta,n=[{...this.myRecord(),me:!0},...e.rivals.map(c=>({...c,me:!1}))],s=this.recSort;n.sort((c,d)=>Cl(d,s)-Cl(c,s));const a=(c,d)=>d==="p"?ep(c.p):d==="hitos"?`${c.m.length}/${Oa.length}`:ut(Cl(c,d)),r=c=>["🥇","🥈","🥉"][c]??`${c+1}.`,o=n.map((c,d)=>`<tr class="${c.me?"me":""}"><td class="pos">${r(d)}</td><td class="nm">${c.n}${c.me?' <span class="tag">tú</span>':""}</td>${["l","w","p","hitos","b"].map(u=>`<td class="num ${u===s?"sel":""}">${a(c,u)}</td>`).join("")}<td>${c.me?"":`<button class="btn xs ghost" data-act="recdel" data-n="${c.n}" data-tip="Quitar">✕</button>`}</td></tr>`).join(""),l=Oa.map(c=>{const d=n.filter(u=>u.m.includes(c.id));return`<div class="troph ${d.length?"":"none"}"><div><b>${c.name}</b><span class="muted"> +${c.reward}</span></div><div class="who">${d.map(u=>`<span class="chip ${u.me?"mechip":""}">${u.n}</span>`).join("")||'<span class="muted">nadie todavía</span>'}</div></div>`}).join("");this.modalKey="ask",this.els.modal.innerHTML=`<div class="box panel wide records"><div class="row between"><h2>Récords</h2><button class="btn ghost sm" data-act="askno">Cerrar</button></div>
      <p>Comparte tu código en el grupo y pega el de tus amigos para ver quién manda. Se actualiza cada vez que alguien manda un código nuevo.</p>
      <div class="row wrap">${Object.keys(Al).map(c=>`<button class="chip pick ${c===s?"on":""}" data-act="recsort" data-k="${c}">${Al[c]}</button>`).join("")}</div>
      <div class="rectable"><table><tr><td></td><td class="muted">Capitán</td>${["l","w","p","hitos","b"].map(c=>`<td class="num muted">${Al[c]}</td>`).join("")}<td></td></tr>${o}</table></div>
      <div class="recshare"><div><h4>Tu récord</h4><button class="btn gold" data-act="reccopy">Copiar mi récord para el grupo</button>${e.name?"":'<p class="muted">Pon tu nombre en Ajustes para que te reconozcan.</p>'}</div>
        <div><h4>Añadir rival</h4><textarea class="txt" data-el="recpaste" placeholder="Pega aquí el mensaje que te mandó tu amigo"></textarea><button class="btn sm" data-act="recadd">Añadir</button></div></div>
      ${this.recMsg?`<div class="status info">${this.recMsg}</div>`:""}
      <h4>Hitos: quién los tiene</h4><div class="trophies">${l}</div></div>`,this.recMsg="",this.els.modal.style.display="flex"}showTitle(){this.inTitle=!0,this.root.classList.add("inhub","intitle"),this.els.hub.style.display="none",this.bottleShown=null,this.els.bottles.innerHTML="";const e=this.api.hasProgress();this.els.title.innerHTML=`<div class="tbox">
      <div class="tlogo">Marea</div><div class="tsub">Un puerto en cada isla. Un temporal en cada horizonte.</div>
      <div class="tbtns">
        <button class="tbtn ${e?"":"primary"}" data-act="tnew">Nuevo juego</button>
        <button class="tbtn ${e?"primary":""}" data-act="tload" ${e?"":"disabled"}>Cargar partida</button>
        <button class="tbtn" data-act="trecords">Récords</button>
        <button class="tbtn" data-act="tsettings">Ajustes</button>
      </div>
      <div class="tfoot">beta ${this.api.version} · pruebas entre amigos</div></div>`,this.els.title.style.display="flex"}hideTitle(){this.inTitle=!1,this.root.classList.remove("intitle"),this.els.title.style.display="none"}onTitleClick(e){const t=e.target.closest("[data-act]");if(!t||t.disabled)return;const n=t.dataset.act;n==="tsettings"&&this.showSettings(),n==="trecords"&&this.showRecords(),n==="tload"&&(this.hideTitle(),this.api.loadGame()),n==="tnew"&&(this.api.hasProgress()?this.ask("¿Empezar de cero?","<p>Ya tienes una partida. Si empiezas una nueva se pierde todo: legado, ventajas e islas.</p>","Empezar de cero",()=>this.api.newGame(),!0):this.api.newGame())}showLetter(e){const t=ky.intro;this.modalKey="ask",this.askOk=e,this.els.modal.innerHTML=`<div class="letter"><div class="lseal">${an.bottle}</div><div class="lfrom">Mensaje en una botella</div><h2>${t.title}</h2><p>${t.text}</p>
      <p class="lhow"><b>Cómo se juega.</b> Eliges una isla, levantas un puerto y vendes en el continente. Con 10 de reputación (la estrella) consigues la Carta de puerto. Si antes llega el temporal (la nube), la isla se pierde, pero te llevas legado para empezar la siguiente más fuerte.</p>
      <div class="lsign">— Nácar</div><label class="lname"><span>¿Cómo te llamas, capitán?</span><input class="txt" data-el="lname" maxlength="20" placeholder="Tu nombre (sale en los récords)"></label><button class="btn gold block" data-act="askok">Ver las islas</button></div>`,this.askOk=()=>{var s;const n=(s=this.els.modal.querySelector('[data-el="lname"]'))==null?void 0:s.value.trim();n&&(this.api.meta.name=n.slice(0,20),this.api.saveNow()),e()},this.els.modal.style.display="flex",this.api.audio.pop()}cinema(e,t=""){this.root.classList.toggle("incinema",e),this.els.cinema.style.display=e?"block":"none",this.els.cineTxt.textContent=t,e&&(this.els.tip.style.display="none",this.els.modal.style.display="none")}flash(){const e=this.els.flash;e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}showHub(){this.hubShown=!0,this.root.classList.add("inhub"),this.renderHub(),this.els.hub.style.display="flex",this.els.modal.style.display="none",this.bottleShown=null,this.els.bottles.innerHTML="",this.renderBottles()}hideHub(){this.hubShown=!1,this.root.classList.remove("inhub"),this.els.hub.style.display="none"}renderHub(){const e=this.api.meta,t=e.offers.map((f,g)=>{const v=oi[f.biome],m=Mh(f.level).map(p=>`<span class="chip warn" data-tip="${p.desc}">${p.name}</span>`).join(" ");return`<div class="offer ${g===0?"first":""}" data-i="${g}">
        <img src="${this.api.preview(f.seed,f.biome)}" alt="">
        <div class="oname">${f.name}</div>
        <div class="ometa">${v.name} · nivel ${Fr(f.level)} · legado ×${Ic[f.level]}</div>
        <div class="orule">${v.rule}${m?`<div class="row wrap" style="margin-top:4px">${m}</div>`:""}</div>
        <div class="row"><button class="btn gold sm" data-act="sail" data-i="${g}">Zarpar</button><button class="btn ghost sm" data-act="view" data-i="${g}">Ver</button></div></div>`}).join(""),n=Uc.map(f=>{const g=Js(e,f.id),v=$f(e,f.id);return`<div class="perk"><div><div class="title">${f.name} <span class="muted">${g}/${f.max}</span></div><div class="meta">${f.desc(Math.max(1,g+(g<f.max?1:0)))}</div></div>
        <button class="btn sm ${v.ok?"gold":"ghost"}" data-act="perk" data-id="${f.id}" ${v.ok?"":"disabled"}>${g>=f.max?"Máx":ut(v.cost)}</button></div>`}).join(""),s=eM.map(f=>{const g=e.biomes.includes(f.id),v=Xf(e,f.id);return`<div class="perk"><div><div class="title">${f.name}${g?' <span class="tag">tuyo</span>':""}</div><div class="meta">${f.desc} ${f.rule}</div></div>
        ${g?"":`<button class="btn sm ${v.ok?"gold":"ghost"}" data-act="biome" data-id="${f.id}" ${v.ok?"":"disabled"}>${ut(Vf[f.id])}</button>`}</div>`}).join(""),a=e.islands.slice(-6).reverse().map(f=>`<span class="chip">${f.name} · ${oi[f.biome].name} ${Fr(f.level)}</span>`).join(" "),r=Zf(e),o=r.amount>0?`<div class="status ok row between"><span>Marea baja: ${r.hours.toFixed(1)} h fuera, tus ${e.islands.length} islas han juntado <b>${ut(r.amount)}</b> de legado.</span><button class="btn gold sm" data-act="offline">Recoger</button></div>`:e.islands.length?'<p class="muted">Marea baja: cada isla conquistada junta 12 de legado por hora mientras no juegas (hasta 8 h).</p>':"",l=ks.map(f=>{const g=e.captains.includes(f.id),v=e.captain===f.id,m=Yf(e,f.id);return`<div class="captain ${v?"sel":""} ${g?"":"locked"}" data-act="${g?"captain":"buycaptain"}" data-id="${f.id}"><span class="meeple" style="background:${f.color}"></span><div><div class="title">${f.name}${v?' <span class="tag">al timón</span>':""}</div><div class="meta">${f.desc}</div></div>${g?"":`<button class="btn sm ${m.ok?"gold":"ghost"}" ${m.ok?"":"disabled"}>${ut(f.cost)}</button>`}</div>`}).join(""),c=Bi.map(f=>`<span class="chip ${e.relics.includes(f.id)?"":"off"}" data-tip="${f.desc}">${f.name}</span>`).join(" "),d=Td.map(f=>{const g=e.cosmetics.includes(f.id),v=e.active[f.kind]===f.id;return`<button class="chip cos ${v?"on":""}" data-act="cosmetic" data-id="${f.id}" ${!g&&e.legado<f.cost?"disabled":""}><span class="sw" style="background:#${f.color.toString(16).padStart(6,"0")}"></span>${f.name}${g?v?" · puesto":"":` · ${f.cost}`}</button>`}).join(" "),u=Oa.map(f=>`<div class="g ${e.milestones.includes(f.id)?"done":""}"><span class="ck">${e.milestones.includes(f.id)?an.check:""}</span><span>${f.name}</span><span class="muted" style="margin-left:auto">+${f.reward}</span></div>`).join(""),h=Math.round(100*(e.goodsSeen.length/en.length+e.buildingsBuilt.length/Fi.length+e.relics.length/Bi.length+e.biomes.length/4+e.captains.length/ks.length)/5);this.els.hub.innerHTML=`<div class="hubwrap">
      <header class="hubhead panel"><div><h1>Archipiélago</h1><p>La Marea Grande se tragó tu puerto. Cada isla que aguante un temporal te da una Carta de puerto; con ${Vs} se funda Marea de nuevo.</p>
          <div class="cartas"><div class="bar"><i style="width:${Math.min(100,e.wins/Vs*100)}%"></i></div><span>${Math.min(e.wins,Vs)}/${Vs} Cartas${e.wins>=Vs?" · Marea fundada":""}</span></div></div>
        <div class="legado"><span class="muted">Legado</span><b>${ut(e.legado)}</b><span class="muted">${e.wins} cartas · ${e.runs} travesías</span></div>
        <div class="row"><button class="btn gold sm" data-act="records">🏆 Récords</button><button class="btn ghost sm" data-act="title">Menú</button><button class="menu" data-act="settings" data-tip="Ajustes">⚙</button><button class="menu snd ${this.api.audio.muted?"off":""}" data-act="snd" data-tip="Sonido">♪</button><button class="menu fs" data-act="fs" data-tip="Pantalla completa">⛶</button></div></header>
      <div class="hubcols">
        <section class="panel hubsec"><h3>Islas a la vista</h3>
          ${o}
          ${this.api.hasRun()?'<div class="status info row between"><span>Tienes una travesía a medias.</span><button class="btn gold sm" data-act="continue">Continuar</button></div>':""}
          <div class="offers">${t}</div>
          <div class="row between" style="margin-top:8px"><span class="muted">Nivel máximo ofrecido: ${Fr(Cd(e))}. Sube con cada dos cartas de puerto.</span><button class="btn ghost sm" data-act="reroll">Otras islas</button></div>
          <h4>Capitán</h4><div class="captains">${l}</div>
          ${a?`<h4>Conquistadas</h4><div class="row wrap">${a}</div>`:""}
          <h4>Colección · ${h} %</h4><p class="muted">Mercancías ${e.goodsSeen.length}/${en.length} · edificios ${e.buildingsBuilt.length}/${Fi.length} · reliquias ${e.relics.length}/${Bi.length} · biomas ${e.biomes.length}/4 · capitanes ${e.captains.length}/${ks.length}</p>
          <h4>Reliquias</h4><div class="row wrap">${c}</div>
          <h4>Hitos</h4><div class="goalsin">${u}</div>
        </section>
        <section class="panel hubsec"><h3>Ventajas permanentes</h3><p class="muted">Se compran con legado y se quedan para siempre. Cada nivel cuesta un 15 % más.</p>${n}
          <h3 style="margin-top:14px">Biomas</h3>${s}
          <h3 style="margin-top:14px">Cosméticos</h3><p class="muted">Solo aspecto. Clic para poner o quitar.</p><div class="row wrap">${d}</div>
          <h4>Cifras</h4><p class="muted">${ut(e.totalLegado)} de legado en total · ${ut(e.stats.earned)} monedas vendidas · ${ut(e.stats.produced)} unidades producidas · mejor reputación ${e.stats.bestRep.toFixed(1)}.</p>
        </section>
      </div></div>`}onHubClick(e){const t=e.target.closest("[data-act], .offer");if(!t)return;const n=t.dataset.act,s=this.api.meta;if(n==="sail"){this.api.startRun(s.offers[Number(t.dataset.i)]);return}if(n==="view"||!n&&t.classList.contains("offer")){this.api.showIsland(s.offers[Number(t.dataset.i)]),this.els.hub.querySelectorAll(".offer").forEach((a,r)=>a.classList.toggle("first",r===Number(t.dataset.i)));return}if(n==="continue"){this.api.continueRun();return}if(n==="reroll")this.api.rerollOffers();else if(n==="perk")this.api.buyPerk(t.dataset.id);else if(n==="biome")this.api.unlockBiome(t.dataset.id);else if(n==="captain")this.api.chooseCaptain(t.dataset.id);else if(n==="buycaptain")this.api.buyCaptain(t.dataset.id);else if(n==="cosmetic")this.api.buyCosmetic(t.dataset.id);else if(n==="offline")this.api.collectOffline();else if(n==="title"){this.api.toTitle();return}else if(n==="records"){this.showRecords();return}else if(n==="settings"){this.showSettings();return}else if(n==="snd")this.api.audio.setMuted(!this.api.audio.muted);else if(n==="fs"){Rl();return}this.renderHub()}renderModal(){const e=this.api.sim;if(!e)return;const t=e.s.run;let n="",s="";if(t.draft)s="draft"+t.draft.join(),n=`<div class="box panel wide"><h2>Plano nuevo</h2><p>Reputación ${Math.floor(t.rep)}: elige un edificio para esta travesía. Los otros no estarán disponibles.</p><div class="picks">${t.draft.map(a=>{const r=dt[a],o=r.recipe?`${Ji(r.recipe.inputs)||'<span class="chip">—</span>'} → ${Ji(r.recipe.outputs)}`:r.housing?`+${r.housing} vecinos`:r.storage?`+${r.storage} de almacén`:"+10 % de ánimo";return`<div class="pick" data-act="blueprint" data-id="${a}"><img src="${this.api.thumbs[a]??""}" alt=""><div class="title">${r.name}</div><div class="meta">${r.desc}</div><div class="rec">${o}</div><div class="meta">${ut(r.cost)} ${an.coin} · ${r.workers?`${r.workers} trabajadores`:"sin trabajadores"}${r.coast?" · costa":""}</div></div>`}).join("")}</div></div>`;else if(t.choice){s="choice"+t.choice.id;const a=t.choice;n=`<div class="box panel"><h2>${a.title}</h2><p>${a.text}</p><div class="choices">${a.options.map((r,o)=>`<button class="choice" data-act="choice" data-i="${o}"><b>${r.text}${r.effect==="blind"?` (${ut(e.blindCargoPrice())} monedas)`:""}</b>${r.odds?`<span>${r.odds}</span>`:""}</button>`).join("")}</div></div>`}else t.perkDraft&&(s="perk"+t.perkDraft.join(),n=`<div class="box panel wide"><h2>Ventaja de travesía</h2><p>Elige una. Dura hasta que zarpes.</p><div class="picks">${t.perkDraft.map(a=>`<div class="pick perkpick" data-act="perk" data-id="${a}"><div class="title">${$s[a].name}</div><div class="meta">${$s[a].desc}</div></div>`).join("")}</div></div>`);this.modalKey==="confirm"||this.modalKey==="end"||this.modalKey==="ask"||this.modalKey==="settings"||s!==this.modalKey&&(this.modalKey=s,this.els.modal.innerHTML=n,this.els.modal.style.display=n?"flex":"none")}showEnd(){const e=this.api.sim;if(!e)return;const t=this.api.finishRun();this.modalKey="end",this.els.modal.innerHTML=`<div class="box panel"><h2>${t.won?"Carta de puerto":"Evacuación"}</h2><p>${t.won?`${e.s.run.name} entra en tu archipiélago.`:"El temporal llegó antes que la Carta. Te llevas lo conseguido."}</p>
      <div class="tally">${t.parts.map(([n,s])=>`<div class="row between"><span>${n}</span><b>+${ut(s)}</b></div>`).join("")}<div class="row between total"><span>Legado</span><b>${ut(t.total)}</b></div></div>
      <button class="btn gold block" data-act="hub">Volver al archipiélago</button></div>`,this.els.modal.style.display="flex"}onModalClick(e){var s;const t=e.target.closest("[data-act]");if(!t)return;const n=t.dataset.act;if(n==="askok"){const a=this.askOk;this.closeModal(),a==null||a();return}if(n==="askno"){this.closeModal();return}if(n==="recsort"){this.recSort=t.dataset.k,this.showRecords();return}if(n==="reccopy"){const a=qy(this.myRecord());(s=navigator.clipboard)==null||s.writeText(a).then(()=>{this.recMsg="Copiado. Pégalo en el grupo de WhatsApp.",this.showRecords()}).catch(()=>this.ask("Tu récord",`<p>Copia este texto y mándalo al grupo:</p><textarea class="report" readonly>${a}</textarea>`,"Hecho",()=>this.showRecords(),!1,""));return}if(n==="recadd"){const a=this.els.modal.querySelector('[data-el="recpaste"]'),r=Xy((a==null?void 0:a.value)??"");if(!r)this.recMsg="Ese código no vale. Copia el mensaje entero que te mandó.";else if(r.n===this.api.meta.name&&r.t===this.myRecord().t)this.recMsg="Ese récord es el tuyo.";else{const o=this.api.meta;o.rivals=o.rivals.filter(l=>l.n.toLowerCase()!==r.n.toLowerCase()),o.rivals.push(r),this.api.saveNow(),this.recMsg=`${r.n} añadido a tus récords.`,this.api.audio.coin()}this.showRecords();return}if(n==="recdel"){const a=this.api.meta;a.rivals=a.rivals.filter(r=>r.n!==t.dataset.n),this.api.saveNow(),this.showRecords();return}if(n==="quality"){const a=t.dataset.q;this.api.setQuality(a==="auto"?"auto":Number(a)),this.showSettings();return}if(n==="fullscreen"){Rl(),setTimeout(()=>{this.modalKey==="settings"&&this.showSettings()},300);return}if(n==="hub"){this.closeModal(),this.api.backToHub(),this.showHub();return}if(this.api.sim){if(n==="evacuate"){this.els.modal.style.display="none",this.modalKey="",this.showEnd();return}if(n==="stay"){this.els.modal.style.display="none",this.modalKey="";return}if(n==="blueprint")this.api.sim.chooseBlueprint(t.dataset.id);else if(n==="perk")this.api.sim.choosePerk(t.dataset.id);else if(n==="choice")this.api.sim.choose(Number(t.dataset.i));else if(n==="hub"){this.els.modal.style.display="none",this.modalKey="",this.showHub();return}this.render(!0)}}toast(e){var s;const t=document.createElement("div");t.className=`toast ${e.kind}`,t.textContent=e.text,this.els.toasts.appendChild(t);const n=e.kind==="level"?7e3:e.kind==="bad"?5500:4200;for(setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),380)},n);this.els.toasts.children.length>4;)(s=this.els.toasts.firstElementChild)==null||s.remove()}setHint(e){this.els.hint.innerHTML=e??"",this.els.hint.classList.toggle("show",!!e)}render(e=!1){const t=this.api.sim;if(!t||this.hubShown)return;const n=t.s,s=n.run;this.els.money.textContent=ut(n.money);const a=n.dayFrac<.22||n.dayFrac>.84;this.els.dayIcon.innerHTML=a?an.moon:an.sun,this.els.day.textContent=`Día ${n.day}`;const r=t.workers();this.els.people.innerHTML=`${r.used}<small>/${r.total}</small>`,this.els.peopleStat.classList.toggle("warn",r.used>r.total);const o=t.foodNeed(),l=t.foodStock();this.els.food.innerHTML=`${l}<small> · ${o}/día</small>`,this.els.foodStat.classList.toggle("warn",l<o),this.els.foodStat.title=`Comida en el almacén (pan, conservas, pescado) / raciones que se comen cada día. Ánimo: ${Math.round(t.speedOf({type:"casa"})/n.perm.prodMul*100)} %`;const c=t.storage();this.els.storage.innerHTML=`${c.used}<small>/${c.cap}</small>`,this.els.storageStat.classList.toggle("warn",c.used>=c.cap),this.els.repN.textContent=`${s.rep.toFixed(1)}/${Ua}`,this.els.repBar.style.width=`${Math.min(100,s.rep/Ua*100)}%`,this.els.stormBar.style.width=`${Math.min(100,s.tempest*100)}%`,this.els.stormBar.parentElement.parentElement.classList.toggle("danger",s.tempest>.75),this.els.sailBtn.style.display="inline-flex",this.els.sailBtn.classList.toggle("gold",s.phase==="won"),this.els.sailBtn.classList.toggle("ghost",s.phase!=="won"),this.els.sailTxt.textContent=s.phase==="won"?"Zarpar":"Rendirse",this.renderBottles(),this.els.speed.querySelectorAll("button").forEach(h=>h.classList.toggle("on",Number(h.dataset.speed)===n.speed)),this.renderEvents(),this.renderSkills();const d=s.chest;this.els.chestnote.style.display=d&&d.fetching<=0?"block":"none",this.els.chestnote.innerHTML=d?"<b>Cofre en la orilla</b> · ir a por él":"",this.renderCards(e);const u=this.api.selected();u&&this.tab!=="edificio"&&(this.tab="edificio",e=!0),!u&&this.tab==="edificio"&&(this.tab="mercado",e=!0),this.renderTabs(),this.renderPanel(e),this.renderModal()}renderSkills(){const e=this.api.sim,t=e.s.run,n=Hf.map(s=>{const a=t.cooldowns[s.id],r=s.cooldown*e.s.perm.skillMul*(s.id==="viento"&&e.s.perm.vientoFast?.5:1),o=e.canUseSkill(s.id),l=a>0?Math.round(100*(1-a/r)):100;return`<button class="skill ${o.ok?"":"off"} ${a>0?"cooling":""}" data-skill="${s.id}" data-tip="${s.desc}${o.ok?"":` (${o.why})`}" style="--p:${l}%"><span class="ico">${s.icon}</span><span class="nm">${s.name}</span>${a>0?`<span class="cd">${Yr(a)}</span>`:""}</button>`}).join("");this.els.skills.innerHTML!==n&&(this.els.skills.innerHTML=n)}renderEvents(){const e=this.api.sim.s,t=e.events.map(n=>`<span class="ev ${n.id}">${Uf[n.id].name} · ${Yr(n.until-e.time)}</span>`).join("");this.els.events.innerHTML!==t&&(this.els.events.innerHTML=t)}renderCats(){const e=[["extraccion","Extracción"],["produccion","Producción"],["pueblo","Pueblo"]];this.els.cats.innerHTML=e.map(([t,n])=>`<button data-cat="${t}" class="${this.cat===t?"on":""}">${n}</button>`).join("")}renderCards(e=!1){const t=this.api.sim,n=t.s,s=Fi.filter(o=>o.cat===this.cat&&t.available(o.id)),a=s.map(o=>{const l=t.canAfford(o.id);return o.id+(l.ok?1:0)+(l.why??"")+t.buildCost(o.id).money+(this.api.placing()===o.id?"P":"")}).join("|")+n.run.blueprints.length;if(!e&&a===this.cardKey)return;this.cardKey=a;const r=Fi.filter(o=>o.cat===this.cat&&!t.available(o.id)).length;this.els.cards.innerHTML=s.map(o=>{const l=t.canAfford(o.id),c=t.buildCost(o.id),d=Object.entries(c.materials).map(([u,h])=>`<span class="m"><span class="sw" style="background:${Ut[u].color}"></span>${h}</span>`).join("");return`<div class="bcard ${l.ok?"":"no"} ${this.api.placing()===o.id?"on":""}" data-type="${o.id}"><img src="${this.api.thumbs[o.id]??""}" alt=""><div class="name">${o.name}</div><div class="cost">${ut(c.money)}${d}</div></div>`}).join("")+(r?`<div class="bcard ghostcard"><div class="name">${r} planos más</div><div class="cost">cada punto de reputación trae uno</div></div>`:"")}showTooltip(e){const t=this.api.sim,n=this.els.tooltip,s=dt[e.dataset.type];if(!s)return;const a=s.recipe?`${Ji(s.recipe.inputs)||'<span class="chip">—</span>'} → ${Ji(s.recipe.outputs)} · ${s.recipe.seconds} s`:s.housing?`+${s.housing} vecinos`:s.storage?`+${s.storage} de almacén`:s.happiness?"+10 % de producción":"",r=t.canAfford(s.id),o=t.countOf(s.id);n.innerHTML=`<div class="t">${s.name}</div><div class="d">${s.desc}</div><div class="r">${a}</div><div class="r" style="margin-top:4px;color:var(--ink-2)">${s.workers?`${s.workers} trabajadores · `:""}${s.coast?"en la costa · ":""}obra ${s.buildSeconds} s${o?` · ya tienes ${o} (cada uno más caro)`:""}</div>${r.ok?"":`<div class="why">${r.why}</div>`}`;const l=e.getBoundingClientRect();n.style.display="block",n.style.left=`${Math.max(8,Math.min(window.innerWidth-260,l.left+l.width/2-125))}px`,n.style.top=`${l.top-n.offsetHeight-10}px`}renderTabs(){const t=this.api.sim.s.contracts.filter(r=>!r.accepted).length,n=this.api.selected(),s=[];n&&s.push(["edificio",dt[n.type].name]),s.push(["mercado","Mercado"],["barcos","Barcos"],["contratos",`Encargos${t?'<span class="dot"></span>':""}`],["taberna","Taberna"],["ventajas","Ventajas"],["coleccion","Travesía"]);const a=s.map(([r,o])=>`<button data-tab="${r}" class="${this.tab===r?"on":""}">${o}</button>`).join("");this.els.tabs.innerHTML!==a&&(this.els.tabs.innerHTML=a)}renderPanel(e=!1){xo=[];const t=this.tab==="edificio"?this.panelBuilding():this.tab==="mercado"?this.panelMarket():this.tab==="barcos"?this.panelShips():this.tab==="contratos"?this.panelContracts():this.tab==="taberna"?this.panelTavern():this.tab==="ventajas"?this.panelPerks():this.panelRun(),n=t.replace(/>\d+:\d\d</g,">§<");if(!e&&n===this.lastPanelKey){const a=xo;this.els.content.querySelectorAll(".time[data-i]").forEach(r=>{const o=a[Number(r.dataset.i)];o!=null&&(r.textContent=Yr(o))});return}this.lastPanelKey=n;const s=this.els.content.scrollTop;this.els.content.innerHTML=t,this.els.content.scrollTop=s}panelBuilding(){const e=this.api.selected();if(!e)return"";const t=dt[e.type],n=this.api.sim,s=n.s;let a="";if(e.built<1)a=`<div class="status info">En obra · ${Math.round(e.built*100)} %<div class="bar"><i style="width:${e.built*100}%"></i></div></div>`;else if(e.upgrading>0)a=`<div class="status info">Mejorando a nivel ${e.level+1} · ${Or(e.upgrading)}</div>`;else if(t.recipe)if(e.paused)a='<div class="status warn">En pausa</div>';else if(e.working)a=`<div class="status ok">Produciendo · ${Math.round(e.progress*100)} % · ciclo ${Math.round(n.cycleSeconds(e)/Math.max(.01,n.speedOf(e)))} s<div class="bar"><i style="width:${e.progress*100}%"></i></div></div>`;else{const d=n.workers(),u=Object.entries(t.recipe.inputs).filter(([h,f])=>s.stock[h]<f);d.used>d.total?a='<div class="status bad">Sin trabajadores: construye o mejora casas</div>':u.length?a=`<div class="status bad">Falta: ${u.map(([h])=>Ut[h].name.toLowerCase()).join(", ")}</div>`:e.type==="salinas"&&n.eventActive("mareaalta")?a='<div class="status warn">Marea alta: esperando</div>':a='<div class="status bad">Almacén lleno</div>'}else t.housing?a=`<div class="status ok">${jf(e,s.run.perks.includes("escuela")?2:0)} vecinos viven aquí</div>`:t.storage?a=`<div class="status ok">+${Kf(e)} de capacidad</div>`:t.happiness&&(a='<div class="status ok">La gente trabaja un 10 % más rápido</div>');const r=t.recipe?`<h4>Receta</h4><div class="row wrap">${Ji(t.recipe.inputs)||'<span class="muted">nada</span>'} → ${Ji(n.outputsOf(e))} <span class="muted">· ${Math.round(n.cycleSeconds(e))} s</span></div>`:"",o=n.upgradeCost(e),l=n.canUpgrade(e),c=o?`<h4>Mejora a nivel ${e.level+1}</h4><p>${n.upgradeEffect(e)}.</p><div class="row wrap"><button class="btn gold sm" data-act="upgrade" ${l.ok?"":"disabled"}>${bh(o.money,o.materials)}</button>${l.ok?"":`<span class="muted">${l.why}</span>`}</div>`:'<h4>Mejora</h4><p class="muted">Nivel máximo.</p>';return`<h3>${t.name} <span class="lvl">nivel ${e.level}</span></h3><p>${t.desc}</p>${a}${r}
      ${t.workers?`<h4>Gente</h4><p>${Pd(e)} trabajadores</p>`:""}
      ${e.built>=1?c:""}
      <h4>Acciones</h4><div class="row wrap">
        ${t.recipe&&e.built>=1?`<button class="btn ghost sm" data-act="pause">${e.paused?"Reanudar":"Pausar"}</button>`:""}
        <button class="btn ghost sm" data-act="focus">Centrar</button>
        ${this.confirmDemolish?`<button class="btn danger sm" data-act="demolish2">¿Seguro? Recuperas ${Math.round(t.cost*.4)}</button>`:'<button class="btn danger sm" data-act="demolish">Derribar</button>'}
      </div>`}panelMarket(){const e=this.api.sim,t=e.s,n=en.filter(o=>e.couldProduce(o.id)||t.stock[o.id]>0).map(o=>{const l=e.trend(o.id),c=t.market[o.id];return`<tr><td>${ts(o.id)}${o.name}${c.event>1?'<span class="tag">demanda</span>':""}${o.food?'<span class="tag food">comida</span>':""}</td><td class="num">${t.stock[o.id]}</td><td class="num ${l>0?"up":l<0?"down":""}">${e.price(o.id)} ${l>0?"▲":l<0?"▼":""}</td></tr>`}).join(""),s=t.news.map(o=>`<div class="news">${o.text} (${Or(o.until-t.time)})</div>`).join(""),a=e.mods(),r=[a.priceMul!==1?`Precios ×${a.priceMul.toFixed(2)}`:"",a.noElasticity?"Vender no hunde el precio":""].filter(Boolean).join(" · ");return`<h3>Mercado del continente</h3><p>Vender mucho de golpe hunde el precio; se recupera despacio. Las noticias avisan de subidas. Cada 1000 monedas vendidas: +0,5 de reputación.</p>${s}${r?`<p class="muted">${r}</p>`:""}
      <table class="goods"><tr><td class="muted">Mercancía</td><td class="num muted">Stock</td><td class="num muted">Precio</td></tr>${n}</table>
      <p class="muted" style="margin-top:10px">Vendidas ${t.stats.sold} unidades por ${ut(t.stats.earned)} monedas en esta travesía.</p>`}panelShips(){const e=this.api.sim,t=e.s,n=t.ships.map(c=>this.shipCard(c)).join(""),s=e.maxShips(),a=e.nextDock(),r=e.canExpandDock(),o=a?`<div class="card"><div class="row between"><div><div class="title">Ampliar el muelle</div><div class="meta">Un amarre más (${t.docks} → ${t.docks+1}).${t.run.rep<a.rep?` Reputación ${a.rep}.`:""}</div></div><button class="btn gold sm" data-act="dock" ${r.ok?"":"disabled"}>${bh(a.cost,a.materials)}</button></div></div>`:"",l=yd.map(c=>{const d=t.run.rep>=c.rep&&t.money>=c.cost&&t.ships.length<s;return`<div class="card"><div class="row between"><div><div class="title">${c.name} <span class="muted">· ${e.capacityOf(c.id)} de carga · ${e.voyageSeconds(c.id)} s de viaje</span></div><div class="meta">${c.desc}${t.run.rep<c.rep?` · reputación ${c.rep}`:""}</div></div>
        <button class="btn gold sm" data-act="buyShip" data-ship="${c.id}" ${d?"":"disabled"}>${ut(c.cost)}</button></div></div>`}).join("");return`<h3>Barcos</h3><p>Carga mercancía, zarpa y se vende al llegar al continente. También puedes encargar que traiga algo.</p>${n}
      <h4>Astillero <span class="muted" style="text-transform:none;letter-spacing:0">(${t.ships.length}/${s} amarres)</span></h4>${t.ships.length>=s&&a?'<p class="muted">Muelle lleno: amplíalo o vende un barco.</p>':""}${o}${l}`}shipCard(e){const t=this.api.sim,n=t.s,s=es[e.type],a=Xs(e.cargo),r=t.capacityOf(e.type);let o="";e.state==="leaving"?o='<div class="status info">Zarpando…</div>':e.state==="out"?o=`<div class="status info">En el mar · vuelve en ${Or(e.timer+24)}${e.insured?" · asegurado":""}</div>`:e.state==="returning"&&(o='<div class="status info">Volviendo al puerto…</div>');const l=Ji(e.cargo)||'<span class="muted">bodega vacía</span>';if(e.state!=="moored")return`<div class="card"><div class="title">${s.name}</div>${o}<div class="row wrap" style="margin-top:6px">${l}</div></div>`;const d=en.filter(p=>n.stock[p.id]>0||(e.cargo[p.id]??0)>0).map(p=>`<div>${ts(p.id)}${p.name} <span class="muted">${n.stock[p.id]}</span></div><div class="q">${e.cargo[p.id]??0}</div>
      <div class="acts"><button class="btn xs ghost" data-act="unload" data-good="${p.id}" data-q="5">−5</button><button class="btn xs ghost" data-act="load" data-good="${p.id}" data-q="5">+5</button><button class="btn xs ghost" data-act="load" data-good="${p.id}" data-q="999">todo</button></div>`).join(""),u=en.filter(p=>p.tier===1),h=this.importQty*t.importPrice(this.importGood),f=`<h4>Traer del continente</h4><div class="row wrap">${u.map(p=>`<button class="chip pick ${p.id===this.importGood?"on":""}" data-act="impgood" data-g="${p.id}">${ts(p.id)}${p.name} · ${t.importPrice(p.id)}</button>`).join("")}</div>
      <div class="row" style="margin-top:6px"><span class="muted">Cantidad</span><span class="q">${this.importQty}</span><button class="btn xs ghost" data-act="imp" data-q="-10">−10</button><button class="btn xs ghost" data-act="imp" data-q="10">+10</button>
      ${this.importQty?`<span class="chip">${ut(h)} monedas</span>`:""}</div>`,g=t.cargoValue(e.cargo),v=t.insuranceCost(e),m=a?`<label class="row" style="margin-top:8px;font-size:12.5px"><input type="checkbox" class="check" data-act="insure" ${this.insure||t.mods().insuranceFree?"checked":""} ${t.mods().insuranceFree?"disabled":""}> Asegurar la carga (${v?ut(v)+" monedas":"gratis"}): una tormenta no se la lleva.</label>`:"";return`<div class="card"><div class="row between"><div class="title">${s.name}</div><span class="muted">${t.voyageSeconds(e.type)} s de viaje</span></div>
      <div class="capbar"><span>Bodega ${a}/${r}</span><div class="bar"><i style="width:${a/r*100}%"></i></div>${a?`<span>≈ ${ut(g)}</span>`:""}</div>
      <div class="cargo" data-ship="${e.id}">${d||'<div class="muted" style="grid-column:1/-1">No hay nada en el almacén.</div>'}</div>
      ${f}${m}
      <div class="row" style="margin-top:10px"><button class="btn gold" style="flex:1" data-act="depart" data-ship="${e.id}" ${a||this.importQty?"":"disabled"}>Zarpar${a?` y vender ${a}`:""}${this.importQty?` · traer ${this.importQty}`:""}</button>
        ${this.confirmSell===e.id?`<button class="btn danger sm" data-act="sellShip2" data-ship="${e.id}">¿Vender por ${ut(s.cost*Nf)}?</button>`:`<button class="btn ghost sm" data-act="sellShip" data-ship="${e.id}" data-tip="Vender el barco">Vender</button>`}</div>
      ${e.lastSale?`<p class="muted" style="margin-top:6px">Última venta: ${ut(e.lastSale)} monedas.</p>`:""}</div>`}panelContracts(){const e=this.api.sim,t=e.s,n=r=>{const o=t.stock[r.good]>=r.qty;return`<div class="card contract"><div class="row between"><div><span class="qty">${r.qty}</span> ${ts(r.good)}${Ut[r.good].name.toLowerCase()}<div class="meta">${an.clock} ${Or(r.deadline)} · <span class="reward">${ut(r.reward)} monedas</span> · +${r.rep} ${an.star}</div></div>
        <div class="row">${r.accepted?`<button class="btn sm ${o?"gold":"ghost"}" data-act="deliver" data-id="${r.id}" ${o?"":"disabled"}>Entregar ${Math.min(t.stock[r.good],r.qty)}/${r.qty}</button>`:`<button class="btn sm" data-act="accept" data-id="${r.id}">Aceptar</button><button class="btn sm ghost" data-act="reject" data-id="${r.id}">No</button>`}</div></div></div>`},s=t.contracts.filter(r=>r.accepted),a=t.contracts.filter(r=>!r.accepted);return`<h3>Encargos</h3><p>Pedidos con plazo. Pagan más que el mercado y dan reputación (+1, los grandes +2). Si vence uno aceptado, el temporal se acerca. Máximo dos a la vez.</p>
      <h4>En marcha</h4>${s.map(n).join("")||'<p class="muted">Ninguno.</p>'}
      <h4>Ofertas</h4>${a.map(n).join("")||'<p class="muted">Llegarán nuevas ofertas con el tiempo.</p>'}`}panelTavern(){const e=this.api.sim,t=e.s,n=t.run,s=e.canPlayDice(),a=Math.max(10,s.max);this.bet=Math.max(10,Math.min(a,this.bet||50));const r=this.bet,o=Date.now()<this.rollingUntil,l=h=>h.map(f=>`<span class="die ${o?"rolling":""}">${o?"?":f}</span>`).join(""),c=this.dice?`<div class="dice ${o?"rolling":this.dice.result}"><div class="drow"><span class="muted">Tú</span>${l(this.dice.player)}<b>${o?"":"= "+this.dice.player.reduce((h,f)=>h+f,0)}</b></div><div class="drow"><span class="muted">Banda</span>${l(this.dice.house)}<b>${o?"":"+1 = "+(this.dice.house.reduce((h,f)=>h+f,0)+1)}</b></div><div class="dres ${this.dice.result==="win"?"up":this.dice.result==="lose"?"down":""}">${o?"Ruedan…":this.dice.result==="win"?`Ganas ${ut(this.dice.delta)} monedas`:this.dice.result==="lose"?`Pierdes ${ut(-this.dice.delta)} monedas`:"Empate: te devuelven la apuesta"}</div></div>`:"",d=e.canBuyLottery(),u=[25,50,100,250].filter(h=>h<=a).map(h=>`<button class="chip pick ${r===h?"on":""}" data-act="betset" data-v="${h}" ${s.ok?"":"disabled"}>${h}</button>`).join("")+`<button class="chip pick ${r===a?"on":""}" data-act="betset" data-v="${a}" ${s.ok?"":"disabled"}>máx ${ut(a)}</button>`;return`<h3>Taberna del Pulpo</h3><p>Solo oro del juego. Las probabilidades están a la vista y las tiradas son honestas.</p>
      <h4>Dados</h4><p>Tres dados contra la banda, que suma +1. Ganas ×${(2*t.perm.luckMul).toFixed(2)} con ${Math.round(gy*100)} %, empate ${Math.round(vy*100)} %. Una vez al día, hasta el 20 % de tu oro.</p>
      <div class="betbox ${s.ok?"":"off"}"><div class="row between"><span class="muted">Apuesta</span><span class="betval"><button class="btn xs ghost" data-act="betadd" data-v="-10" ${s.ok?"":"disabled"}>−</button><b data-el="betN">${ut(r)}</b><button class="btn xs ghost" data-act="betadd" data-v="10" ${s.ok?"":"disabled"}>+</button></span></div>
        <input type="range" class="betrange" data-act="bet" min="10" max="${a}" step="10" value="${r}" ${s.ok?"":"disabled"}>
        <div class="row wrap">${u}</div>
        <button class="btn gold block" data-act="dice" ${s.ok&&!o?"":"disabled"}>${s.ok?`Tirar por ${ut(r)}`:s.why}</button></div>${c}
      <h4>Lotería del puerto</h4><p>Un boleto al día por ${vo} monedas. ${Math.round(Gf*t.perm.luckMul*100)} % de llevarte el bote; si nadie gana, el bote sube.</p>
      <div class="lotto"><div><span class="muted">Bote de hoy</span><b>${ut(n.lotteryPot)}</b></div><button class="btn gold sm" data-act="lottery" ${d.ok?"":"disabled"}>${d.ok?`Boleto · ${vo}`:n.lotteryDay===t.day?"Boleto de hoy comprado":d.why}</button></div>
      <h4>Cofres del naufragio</h4><p class="muted">Aparecen en la orilla de vez en cuando. Dentro: 60 % mercancías, 25 % oro, 12 % una ventaja, 3 % una reliquia (la suerte sube los raros).${n.chest?" <b>Hay uno ahora.</b>":""}</p>`}panelPerks(){const e=this.api.sim,t=e.s,n=this.api.meta,s=t.run.perks.map(c=>`<div class="card"><div class="title">${$s[c].name}</div><div class="meta">${$s[c].desc}</div></div>`).join("")||'<p class="muted">Todavía ninguna. Llegan con reputación 2, 5 y 8, y a veces en los cofres.</p>',a=[...n.relics,...t.run.relicsFound].map(c=>`<span class="chip">${Bi.find(d=>d.id===c).name}</span>`).join(" ")||'<span class="muted">Ninguna todavía.</span>',r=ks.find(c=>c.id===t.run.captain),o=Uc.filter(c=>Js(n,c.id)>0).map(c=>`<span class="chip">${c.name} ${Js(n,c.id)}</span>`).join(" ")||'<span class="muted">Ninguna. Se compran en el archipiélago con legado.</span>',l=oi[t.run.biome];return`<h3>Ventajas</h3><h4>Capitán</h4><p><b>${r.name}</b>: ${r.desc}</p><h4>De esta travesía</h4>${s}<h4>Permanentes</h4><div class="row wrap">${o}</div><h4>Reliquias</h4><div class="row wrap">${a}</div><h4>Isla</h4><p>${l.name}: ${l.rule}${Mh(t.run.level).map(c=>` ${c.name}: ${c.desc}`).join("")}</p>`}panelRun(){const e=this.api.sim,t=e.s,n=t.run,s=en.filter(r=>e.couldProduce(r.id)||t.discovered.includes(r.id)).map(r=>`<span class="chip ${t.discovered.includes(r.id)?"":"off"}">${ts(r.id)}${r.name}</span>`).join(" "),a=n.blueprints.map(r=>`<span class="chip">${dt[r].name}</span>`).join(" ");return`<h3>${n.name} <span class="lvl">nivel ${Fr(n.level)}</span></h3><p>${oi[n.biome].desc}</p>
      <h4>Cómo se gana reputación</h4><p class="muted">Encargos +1 (grandes +2) · mercancía nueva +0,3/+0,6/+1 según nivel · cada 1000 monedas vendidas +0,5 · día con la gente contenta (taberna y comida) +0,3.</p>
      <h4>Qué acelera el temporal</h4><p class="muted">Hambre, gente descontenta y encargos vencidos. Cada punto de reputación lo retrasa.</p>
      <h4>Planos de esta travesía</h4><div class="row wrap">${a}</div>
      <h4>Mercancías</h4><div class="row wrap">${s}</div>
      <h4>Cifras</h4><p class="muted">Día ${t.day} · ${t.stats.built} obras · ${t.stats.contracts} encargos · ${ut(t.stats.earned)} monedas vendidas · legado ahora mismo ≈ ${ut(100*n.rep+t.money/50)} (×${Ic[n.level]} por el nivel de la isla).</p>`}onPanelClick(e){const t=e.target.closest("button");if(!t)return;const n=t.dataset.act,s=this.api.sim,a=s.s,r=this.api.selected();if(n==="pause"&&r)s.togglePause(r.id);else if(n==="focus"&&r)this.api.focus(r.x,r.z);else if(n==="upgrade"&&r)s.upgrade(r.id);else if(n==="demolish")this.confirmDemolish=!0;else if(n==="demolish2"&&r)s.demolish(r.id),this.confirmDemolish=!1,this.api.select(null);else if(n==="buyShip")s.buyShip(t.dataset.ship);else if(n==="dock")s.expandDock();else if(n==="sellShip")this.confirmSell=Number(t.dataset.ship);else if(n==="sellShip2")s.sellShip(Number(t.dataset.ship)),this.confirmSell=0;else if(n==="load"||n==="unload"){const o=a.ships.find(l=>l.id===Number(t.closest(".cargo").dataset.ship));o&&(n==="load"?s.loadCargo(o,t.dataset.good,Number(t.dataset.q)):s.unloadCargo(o,t.dataset.good,Number(t.dataset.q)))}else if(n==="impgood")this.importGood=t.dataset.g;else if(n==="imp")this.importQty=Math.max(0,Math.min(140,this.importQty+Number(t.dataset.q)));else if(n==="depart"){const o=a.ships.find(l=>l.id===Number(t.dataset.ship));o&&s.depart(o,this.importQty?this.importGood:void 0,this.importQty,this.insure)&&(this.importQty=0,this.insure=!1,this.api.audio.horn())}else if(n==="accept")s.acceptContract(Number(t.dataset.id));else if(n==="reject")s.rejectContract(Number(t.dataset.id));else if(n==="deliver")s.deliverContract(Number(t.dataset.id));else if(n==="dice"){const o=s.playDice(this.bet||50);if(o){this.dice=o,this.rollingUntil=Date.now()+900;const l=setInterval(()=>{const c=this.els.content.querySelectorAll(".die.rolling");if(!c.length||Date.now()>=this.rollingUntil){clearInterval(l),this.render(!0),o.result==="win"?this.api.audio.airhorn():o.result==="lose"&&this.api.audio.sadTrombone();return}c.forEach(d=>{d.textContent=String(1+Math.floor(Math.random()*6))})},70)}}else if(n==="betset")this.bet=Number(t.dataset.v);else if(n==="betadd")this.bet=Math.max(10,this.bet+Number(t.dataset.v));else if(n==="lottery"){const o=a.money;s.buyLottery()&&(a.money>o?this.api.audio.airhorn():this.api.audio.error())}n!=="demolish"&&(this.confirmDemolish=!1),n!=="sellShip"&&(this.confirmSell=0),this.render(!0)}}const Zy=Object.fromEntries(Dd.map(i=>[i.id,i.scope])),jy="0.4.0",wh={version:jy},Eh=[0,2,4,7,9],Ta=[[0,4,7,11],[9,12,16,19],[5,9,12,16],[7,11,14,17]],Ky=220*Math.pow(2,3/12),Qi=i=>Ky*Math.pow(2,i/12);class Jy{constructor(){pe(this,"ctx",null);pe(this,"master");pe(this,"musicGain");pe(this,"sfxGain");pe(this,"reverb");pe(this,"seaGain");pe(this,"seaFilter");pe(this,"timer",null);pe(this,"nextBeat",0);pe(this,"beat",0);pe(this,"chord",0);pe(this,"night",0);pe(this,"muted",!1);pe(this,"started",!1);pe(this,"vol",{music:.7,sfx:.8});pe(this,"seaLfo",null);pe(this,"noiseBuf",null);pe(this,"ducked",!1);try{this.muted=localStorage.getItem("marea.mute")==="1";const e=JSON.parse(localStorage.getItem("marea.vol")??"null");e&&typeof e.music=="number"&&(this.vol={music:e.music,sfx:e.sfx})}catch{}}saveVol(){try{localStorage.setItem("marea.vol",JSON.stringify(this.vol))}catch{}}setMusicVol(e){if(this.vol.music=Math.max(0,Math.min(1,e)),this.saveVol(),!this.ctx)return;const t=this.ctx.currentTime;this.musicGain.gain.setTargetAtTime(.55*this.vol.music*(this.ducked?.25:1),t,.05),this.seaGain.gain.setTargetAtTime(.05*this.vol.music,t,.05),this.seaLfo&&this.seaLfo.gain.setTargetAtTime(.03*this.vol.music,t,.05)}setSfxVol(e){this.vol.sfx=Math.max(0,Math.min(1,e)),this.saveVol(),this.ctx&&this.sfxGain.gain.setTargetAtTime(.7*this.vol.sfx,this.ctx.currentTime,.05)}duck(e){this.ducked=e,this.ctx&&this.musicGain.gain.setTargetAtTime(.55*this.vol.music*(e?.25:1),this.ctx.currentTime,.4)}start(){if(this.started)return;this.started=!0;const e=new(window.AudioContext||window.webkitAudioContext);this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:1,this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.55*this.vol.music,this.sfxGain=e.createGain(),this.sfxGain.gain.value=.7*this.vol.sfx,this.sfxGain.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(2.8,2.2);const t=e.createGain();t.gain.value=.45,this.musicGain.connect(this.master),this.musicGain.connect(this.reverb),this.reverb.connect(t),t.connect(this.master);const n=e.createBufferSource();n.buffer=this.noise(4),n.loop=!0,this.seaFilter=e.createBiquadFilter(),this.seaFilter.type="lowpass",this.seaFilter.frequency.value=420,this.seaFilter.Q.value=.6,this.seaGain=e.createGain(),this.seaGain.gain.value=.05*this.vol.music,n.connect(this.seaFilter),this.seaFilter.connect(this.seaGain),this.seaGain.connect(this.master),n.start();const s=e.createOscillator();s.frequency.value=.08;const a=e.createGain();a.gain.value=.03*this.vol.music,this.seaLfo=a,s.connect(a),a.connect(this.seaGain.gain),s.start(),this.nextBeat=e.currentTime+.3,this.timer=window.setInterval(()=>this.schedule(),120),e.state==="suspended"&&e.resume().catch(()=>null)}stop(){var e;this.timer!=null&&(clearInterval(this.timer),this.timer=null),(e=this.ctx)==null||e.close().catch(()=>null),this.ctx=null,this.started=!1}setMuted(e){this.muted=e;try{localStorage.setItem("marea.mute",e?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(e?0:1,this.ctx.currentTime,.1)}setNight(e){this.night=e,this.ctx&&this.seaFilter.frequency.setTargetAtTime(420-180*e,this.ctx.currentTime,.5)}impulse(e,t){const n=this.ctx,s=n.sampleRate,a=Math.floor(s*e),r=n.createBuffer(2,a,s);for(let o=0;o<2;o++){const l=r.getChannelData(o);for(let c=0;c<a;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/a,t)}return r}noise(e){const t=this.ctx,n=t.sampleRate,s=Math.floor(n*e),a=t.createBuffer(1,s,n),r=a.getChannelData(0);let o=0,l=0,c=0;for(let d=0;d<s;d++){const u=Math.random()*2-1;o=.99765*o+u*.099,l=.963*l+u*.2965,c=.57*c+u*1.0526,r[d]=(o+l+c+u*.1848)*.08}return a}schedule(){const e=this.ctx,t=60/(72-14*this.night);for(;this.nextBeat<e.currentTime+.4;){const n=this.nextBeat,s=this.beat%16;s===0&&(this.chord=(this.chord+(Math.random()<.8?1:2))%Ta.length,this.pad(n,Ta[this.chord],t*16)),s%4===0&&this.bass(n,Ta[this.chord][0]-24,t*3.6);const a=Math.random()<.25+.3*(1-this.night)?2:Math.random()<.5?1:0;for(let r=0;r<a;r++){const o=Ta[this.chord][Math.floor(Math.random()*4)],l=Math.random()<.6?o+12:12+Eh[Math.floor(Math.random()*Eh.length)]+(Math.random()<.3?12:0);this.pluck(n+r*t/2+Math.random()*.02,l,.11+.05*Math.random())}s===8&&Math.random()<.35&&this.bell(n+t*.5,Ta[this.chord][2]+24),this.nextBeat+=t,this.beat++}}pad(e,t,n){const s=this.ctx;for(const a of t)for(const r of[-6,6]){const o=s.createOscillator();o.type="triangle",o.frequency.value=Qi(a-12),o.detune.value=r;const l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=700-250*this.night;const c=s.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(.035,e+2.5),c.gain.setValueAtTime(.035,e+n-3),c.gain.linearRampToValueAtTime(0,e+n+.5),o.connect(l),l.connect(c),c.connect(this.musicGain),o.start(e),o.stop(e+n+.6)}}bass(e,t,n){const s=this.ctx,a=s.createOscillator();a.type="sine",a.frequency.value=Qi(t);const r=s.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.12,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(r),r.connect(this.musicGain),a.start(e),a.stop(e+n+.1)}pluck(e,t,n){const s=this.ctx,a=s.createOscillator();a.type="sine",a.frequency.value=Qi(t);const r=s.createOscillator();r.type="triangle",r.frequency.value=Qi(t)*2.001;const o=s.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.012),o.gain.exponentialRampToValueAtTime(5e-4,e+1.4);const l=s.createGain();l.gain.value=.25,a.connect(o),r.connect(l),l.connect(o),o.connect(this.musicGain),a.start(e),r.start(e),a.stop(e+1.5),r.stop(e+1.5)}bell(e,t){const n=this.ctx;for(const[s,a,r]of[[1,.08,3.5],[2.76,.03,1.8],[5.4,.012,1]]){const o=n.createOscillator();o.type="sine",o.frequency.value=Qi(t)*s;const l=n.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(a,e+.01),l.gain.exponentialRampToValueAtTime(5e-4,e+r),o.connect(l),l.connect(this.musicGain),o.start(e),o.stop(e+r+.1)}}tone(e,t,n,s="sine",a=1){if(!this.ctx||this.muted)return;const r=this.ctx,o=r.currentTime,l=r.createOscillator();l.type=s,l.frequency.setValueAtTime(e,o),l.frequency.exponentialRampToValueAtTime(e*a,o+t);const c=r.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.008),c.gain.exponentialRampToValueAtTime(5e-4,o+t),l.connect(c),c.connect(this.sfxGain),l.start(o),l.stop(o+t+.05)}click(){this.tone(1800,.05,.05,"triangle",.8)}place(){this.tone(180,.18,.18,"triangle",.6),this.tone(900,.08,.04,"sine",1.2)}coin(){this.tone(1320,.12,.08,"sine",1),setTimeout(()=>this.tone(1760,.18,.08,"sine",1),70)}level(){[0,4,7,12].forEach((e,t)=>setTimeout(()=>this.tone(Qi(e+12),.5,.09,"triangle",1),t*110))}error(){this.tone(220,.16,.08,"square",.85)}whistle(){this.tone(880,.35,.05,"sine",1.25)}noiseShot(e,t,n,s=.01,a="lowpass",r){if(!this.ctx||this.muted)return;const o=this.ctx,l=o.currentTime;this.noiseBuf||(this.noiseBuf=this.noise(3));const c=o.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const d=o.createBiquadFilter();d.type=a,d.frequency.setValueAtTime(t,l),r&&d.frequency.exponentialRampToValueAtTime(r,l+e);const u=o.createGain();u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(n,l+s),u.gain.exponentialRampToValueAtTime(5e-4,l+e),c.connect(d),d.connect(u),u.connect(this.sfxGain),c.start(l,Math.random()*2),c.stop(l+e+.05)}seq(e,t,n){if(!this.ctx||this.muted)return;const s=this.ctx;let a=s.currentTime;for(const[r,o,l]of e){const c=s.createOscillator();c.type=t,c.frequency.setValueAtTime(r,a);const d=s.createGain();d.gain.setValueAtTime(0,a),d.gain.linearRampToValueAtTime(n,a+.01),d.gain.setValueAtTime(n,a+o*.8),d.gain.exponentialRampToValueAtTime(5e-4,a+o),c.connect(d),d.connect(this.sfxGain),c.start(a),c.stop(a+o+.02),a+=o+l}}pop(){this.tone(520,.07,.12,"sine",2.4),this.noiseShot(.08,3e3,.08,.002,"highpass")}build(){this.tone(150,.09,.22,"triangle",.6),setTimeout(()=>this.tone(170,.09,.2,"triangle",.6),130)}chest(){[0,4,7,11,14].forEach((e,t)=>setTimeout(()=>this.tone(Qi(e+24),.35,.06,"sine",1),t*60))}horn(){if(!this.ctx||this.muted)return;const e=this.ctx,t=e.currentTime;for(const n of[98,147]){const s=e.createOscillator();s.type="sawtooth",s.frequency.value=n;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=520;const r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.09,t+.08),r.gain.setValueAtTime(.09,t+.8),r.gain.exponentialRampToValueAtTime(5e-4,t+1.2),s.connect(a),a.connect(r),r.connect(this.sfxGain),s.start(t),s.stop(t+1.25)}}thunder(){this.noiseShot(.25,2500,.35,.003),this.noiseShot(2.6,420,.9,.02,"lowpass",90)}storm(e=6){this.noiseShot(e,260,.55,e*.6,"bandpass",1100),this.noiseShot(e,120,.6,e*.5,"lowpass",300)}wave(){this.noiseShot(2.4,300,.9,.4,"lowpass",1600)}sadTrombone(){if(!this.ctx||this.muted)return;const e=this.ctx;let t=e.currentTime+.05;[[196,.42],[185,.42],[174.6,.42],[164.8,1.5]].forEach(([s,a],r)=>{const o=e.createOscillator();if(o.type="sawtooth",o.frequency.setValueAtTime(s*1.03,t),o.frequency.exponentialRampToValueAtTime(s,t+.08),r===3){const d=e.createOscillator();d.frequency.value=6;const u=e.createGain();u.gain.value=5,d.connect(u),u.connect(o.frequency),d.start(t+.2),d.stop(t+a)}const l=e.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(400,t),l.frequency.linearRampToValueAtTime(1300,t+.12),l.frequency.linearRampToValueAtTime(600,t+a);const c=e.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(.16,t+.05),c.gain.setValueAtTime(.16,t+a*.75),c.gain.exponentialRampToValueAtTime(5e-4,t+a),o.connect(l),l.connect(c),c.connect(this.sfxGain),o.start(t),o.stop(t+a+.02),t+=a+.04})}airhorn(){const e=(t,n)=>[466,t,n];for(const t of[1,1.006,2.002])this.seq([e(.11,.05),e(.11,.05),e(.11,.05),e(.55,0)].map(([n,s,a])=>[n*t,s,a]),"sawtooth",t>1.5?.025:.05)}}const tp=new URLSearchParams(location.search),Pl=tp.get("t"),Qy=Number(tp.get("zoom")??1),Sn=new Sf({antialias:!0,preserveDrawingBuffer:!0});Sn.setPixelRatio(Math.min(2,window.devicePixelRatio*1.5));Sn.setSize(window.innerWidth,window.innerHeight);Sn.shadowMap.enabled=!0;Sn.shadowMap.type=is;Sn.toneMapping=qa;document.body.insertBefore(Sn.domElement,document.getElementById("hud"));const Pt=new Hh;Pt.fog=new sd(16777215,100,200);const np=new dM;Pt.background=np.texture;const jn=new pa(-1,1,1,-1,1,400),ip=new P(1,.78,1).normalize(),Ei=new SM(jn,ip,Sn.domElement,30/Qy);Ei.apply();const Lt=new hf(16777215,2);Lt.castShadow=!0;Lt.shadow.mapSize.set(4096,4096);Lt.shadow.camera.left=-38;Lt.shadow.camera.right=38;Lt.shadow.camera.top=38;Lt.shadow.camera.bottom=-38;Lt.shadow.camera.near=1;Lt.shadow.camera.far=140;Lt.shadow.bias=-2e-4;Lt.shadow.normalBias=.02;Lt.shadow.radius=5;Lt.shadow.blurSamples=16;Pt.add(Lt,Lt.target);const Zr=new cf(16777215,8947848,1);Pt.add(Zr);const _o=new ff(16777215,.2);Pt.add(_o);let Dn=Tf();Pt.add(Dn.mesh);const fs=new cM(Dn.heightTex,Dn.heightMin,Dn.heightSize);Pt.add(fs.mesh);let li=Ff(Zs);Pt.add(li.group);const Qs=new wM(520);Pt.add(Qs.group);const Ja=new LM(10);Pt.add(Ja.group);const sp=new DM(PM,[[6,16,3.5,6.5],[8.5,18,5,7.4],[4.5,19.5,2.5,8],[17,9,4,9],[-4,13,3,7.5],[14,20,6,8.5]]);Pt.add(sp.group);const St=new ny(Qs,li.nature,Ja,Dn.mesh);St.placeOnGround(Zs);Pt.add(St.group);const ea=new Map,tn=new Je;{const i=new se(new He(.9,.55,.6),L.maderaOscura);i.position.y=.28,i.castShadow=!0,tn.add(i);const e=new se(new He(.94,.18,.64),L.madera);e.position.y=.62,e.castShadow=!0,tn.add(e);for(const s of[-.3,.3]){const a=new se(new He(.1,.78,.66),L.cristal);a.position.set(s,.4,0),tn.add(a)}const t=new uf(16765562,2.5,6,2);t.position.y=.9,tn.add(t);const n=new se(new Ha(.9,1.1,32),new Gi({color:16765562,transparent:!0,opacity:.7,depthWrite:!1,side:Gt}));n.rotation.x=-Math.PI/2,n.position.y=.05,n.name="halo",n.layers.set(1),tn.add(n),tn.visible=!1,tn.userData.chest=!0}Pt.add(tn);function Lo(){const i=(me==null?void 0:me.run.chest)??null;if(!i||!pn){tn.visible=!1;return}tn.visible=!0,tn.position.set(i.x,Math.max(.05,Et(i.x,i.z))+.02,i.z),tn.getObjectByName("halo").visible=i.fetching<=0}function Do(){var t,n,s;const i=a=>Td.find(r=>r.id===Re.active[a]);L.vela.color.set(((t=i("vela"))==null?void 0:t.color)??16446692),L.bandera.color.set(((n=i("bandera"))==null?void 0:n.color)??14172986);const e=((s=i("farol"))==null?void 0:s.color)??16762740;L.farolCristal.emissive.set(e),L.ventana.emissive.set(e)}function ps(i,e,t=1){nM(i,e,t),Pt.remove(Dn.mesh),Dn.mesh.geometry.dispose(),Dn.heightTex.dispose(),Dn=Tf(),Pt.add(Dn.mesh),fs.setHeightMap(Dn.heightTex),fs.setTint(oi[e].water,oi.mediterranea.water),xM(e),Pt.remove(li.group),li=Ff(Zs),Pt.add(li.group),Ja.rebuild(),St.reset(li.nature,Dn.mesh);for(const s of ea.values())Pt.remove(s.group);ea.clear();const n=ca();Ei.moveTo(n.plaza[0]+2,n.plaza[1]+3,Math.max(0,Zs(n.plaza[0],n.plaza[1]))),Pt.remove(Br),Br.clear(),pn||(n.hamlet.forEach(([s,a,r],o)=>{const l=go("casa",1e3+o);l.position.set(s,Math.max(.15,Zs(s,a,1.3)),a),l.rotation.y=r,Br.add(l)}),Pt.add(Br))}const Br=new Je,eS=new sn(window.innerWidth,window.innerHeight,{samples:4,type:on}),mi=new W1(Sn,eS);mi.addPass(new $1(Pt,jn));const xs=new qn(Pt,jn,window.innerWidth,window.innerHeight);xs.output=qn.OUTPUT.Default;xs.updateGtaoMaterial({radius:.9,distanceExponent:1,thickness:1,scale:1.3,samples:16,distanceFallOff:1,screenSpaceRadius:!1});xs.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,radiusExponent:1,rings:2,samples:16});xs.blendIntensity=.85;class ap extends Hi{constructor(e,t,n){super(),this.cam=e,this.layer=t,this.on=n,this.needsSwap=!1}render(){this.on?this.cam.layers.enable(this.layer):this.cam.layers.disable(this.layer)}}jn.layers.enable(1);mi.addPass(new ap(jn,1,!1));mi.addPass(xs);mi.addPass(new ap(jn,1,!0));const ta=new la(new oe(window.innerWidth,window.innerHeight),.3,.5,.9);mi.addPass(ta);mi.addPass(new K1);const rp=new bf({uniforms:{tDiffuse:{value:null},uAmount:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){ vec4 c = texture2D(tDiffuse, vUv); vec2 d = vUv - 0.5; float v = 1.0 - smoothstep(0.35, 0.95, length(d) * 1.25) * uAmount; c.rgb *= v; c.rgb += (hash(vUv * 1731.0) - 0.5) * 0.012; gl_FragColor = c; }`});mi.addPass(rp);const tS=new P,nS=new P;function iS(i,e){Lt.target.position.copy(Ei.target),Lt.position.copy(Ei.target).add(nS.set(...i.sunPos)),Lt.color.set(i.sunColor),Lt.intensity=i.sunIntensity,Zr.color.set(i.hemiSky),Zr.groundColor.set(i.hemiGround),Zr.intensity=i.hemiIntensity,_o.color.set(i.ambient),_o.intensity=i.ambientIntensity;const t=Pt.fog;t.color.set(i.fog).lerp(op,.5),t.near=i.fogNear,t.far=i.fogFar,Sn.toneMappingExposure=i.exposure,ta.strength=i.bloom.strength,ta.threshold=i.bloom.threshold,ta.radius=i.bloom.radius,rp.uniforms.uAmount.value=i.vignette,fs.apply(i,tS.set(...i.sunPos),ip),yM(i,e)}const op=new Pe(13625072);window.addEventListener("resize",()=>{Sn.setSize(window.innerWidth,window.innerHeight),mi.setSize(window.innerWidth,window.innerHeight),xs.setSize(window.innerWidth,window.innerHeight),Ei.apply()});let da=null,Ll=0;const jr=7;function sS(){da||(da={t:0,done:!1},yn&&ki(),No(null),mt.cinema(!0,"Llega el temporal"),vt.duck(!0),vt.storm(jr),vt.thunder())}const Bs=new Map;function aS(i){const e=da;e.t+=i;const t=Math.min(1,e.t/jr);Sn.toneMappingExposure*=1-.55*Math.min(1,e.t/1.5);const n=Pt.fog;n.color.lerp(rS,Math.min(1,e.t/1.5)),n.near*=1-.5*t,n.far*=1-.45*t,Lt.intensity*=1-.8*Math.min(1,e.t/1.5),Math.random()<i*.9&&(mt.flash(),_o.intensity+=2.5,vt.thunder());const s=Math.max(0,(e.t-2)/(jr-2.5))**1.4*6.5;fs.setLift(s),e.t>2&&!Bs.has(St.group)&&(vt.wave(),Bs.set(St.group,[0,0]));for(const a of St.group.children){Bs.has(a)||Bs.set(a,[(Math.random()-.5)*.7,(Math.random()-.5)*.7]);const[r,o]=Bs.get(a),l=Math.max(0,s-.5)/6;a.rotation.x=r*l,a.rotation.z=o*l}Ja.group.visible=s<.8;for(const a of ea.values())a.group.rotation.z=Math.sin(Mn*3+a.shipId)*.4*t,a.group.position.y=s+Math.sin(Mn*2.4)*.4;if(Math.random()<i*30){const a=Math.random()*6.28,r=6+Math.random()*24;Qs.emit(new P(Math.cos(a)*r,s+.3,Math.sin(a)*r),{color:15266036,life:1.6,size0:.6,size1:2.6,rise:1.2,alpha:.5,drift:new P(2.5,0,1)})}jn.position.x+=(Math.random()-.5)*.35*t,jn.position.y+=(Math.random()-.5)*.35*t,e.t>=jr&&!e.done&&(e.done=!0,Bs.clear(),mt.cinema(!0,"La gente embarca. La isla queda atrás."),vt.sadTrombone(),setTimeout(()=>{mt.cinema(!1),mt.showEnd()},1800))}const rS=new Pe(2304563),ti={level:0,acc:0,n:0,since:0,auto:!0,apply(i){var e,t;this.level=i,Sn.setPixelRatio(i>=1?1:Math.min(2,window.devicePixelRatio*1.5)),xs.enabled=i<2,i>=3?(Lt.shadow.mapSize.set(2048,2048),(e=Lt.shadow.map)==null||e.dispose(),Lt.shadow.map=null,ta.enabled=!1):(Lt.shadow.mapSize.x!==4096&&(Lt.shadow.mapSize.set(4096,4096),(t=Lt.shadow.map)==null||t.dispose(),Lt.shadow.map=null),ta.enabled=!0),Sn.setSize(window.innerWidth,window.innerHeight),mi.setSize(window.innerWidth,window.innerHeight);try{localStorage.setItem("marea.quality",String(i))}catch{}},sample(i){if(this.acc+=i,this.n++,this.acc<2||!this.auto){this.auto||(this.acc=0,this.n=0);return}const e=this.n/this.acc;this.acc=0,this.n=0,this.since+=2,e<28&&this.level<3?(this.apply(this.level+1),this.since=0):e>56&&this.level>0&&this.since>20&&(this.apply(this.level-1),this.since=0)},fps:0};try{ti.auto=localStorage.getItem("marea.qauto")!=="0";const i=Number(localStorage.getItem("marea.quality")??0);i>0&&ti.apply(i)}catch{}const os=[];window.addEventListener("error",i=>{var e;os.push(`${i.message} @ ${(e=i.filename)==null?void 0:e.split("/").pop()}:${i.lineno}`),os.length>5&&os.shift()});window.addEventListener("unhandledrejection",i=>{os.push(String(i.reason).slice(0,160)),os.length>5&&os.shift()});const vt=new Jy,Re=Cy();let me=null,Ot=null,pn=!1;const oS=ly(),Dl=new Map;let yn=null,Oc=0,rn=null,ua=null,Mo=null,Kr=.45;const lp="<b>Clic</b> para colocar · <b>R</b> girar · <b>Esc</b> cancelar · mantén <b>Mayús</b> para colocar varios",cp=()=>!me||ua==null?null:me.buildings.find(i=>i.id===ua)??null;function lS(i){yn=i,St.setGhost(i),ua=null,St.select(null),mt.setHint(dt[i].coast?"<b>En la costa</b>: se orienta solo hacia el mar · <b>Esc</b> cancelar":lp)}function ki(){yn=null,St.setGhost(null),rn=null,mt.setHint(null),mt.render(!0)}function No(i){ua=i,St.select(cp()),mt.render(!0)}function cS(){const i=[];return Re.wins>=1&&i.push("jaboneria"),Re.wins>=2&&i.push("carpinteria"),i}function dp(i){i.metaBuildings=cS(),i.ownedRelics=Re.relics.slice(),i.onChest=()=>Lo(),i.onToast=e=>{mt.toast(e),/Carta de puerto/.test(e.text)?vt.airhorn():/terminado|mejorado a nivel/.test(e.text)?vt.build():/Dentro del cofre|Reliquia/.test(e.text)?vt.chest():e.kind==="level"?vt.level():e.kind==="bad"?vt.error():e.kind==="good"&&/vendid|Encargo cumplido|vuelve con/.test(e.text)&&vt.coin()},i.onRep=()=>{vt.level(),mt.render(!0)},i.onRunEnd=()=>{mt.render(!0),me&&me.run.tempest>=1&&sS()}}function up(i){vt.start(),pn=!0,ps(i.seed,i.biome,i.level),Do(),me=Fy(i,Re,ca().hamlet),Ot=new Jf(me),dp(Ot),St.sync(me),St.placeOnGround(),pn=!0,ua=null,ki(),mt.hideHub(),mt.render(!0),mt.toast({id:0,text:`${i.name}. Consigue 10 de reputación antes del temporal. Empieza por un aserradero.`,kind:"info",t:0}),$a(me)}function Fc(){const i=zy();i&&(vt.start(),pn=!0,ps(i.run.seed,i.run.biome,i.run.level),Do(),me=i,Ot=new Jf(i),dp(Ot),St.sync(i),St.placeOnGround(),pn=!0,ua=null,ki(),mt.hideHub(),mt.render(!0))}function hp(){if(!me||!Ot)return{parts:[],total:0,won:!1};const i=me.run.phase==="won"||me.run.rep>=10,e=Ot.finish(),t=Ed(me.run.rep,me.money,i,me.run.level);Re.legado+=e,Re.totalLegado+=e,Re.runs++,i&&(Re.wins++,Re.islands.push({seed:me.run.seed,biome:me.run.biome,level:me.run.level,name:me.run.name,rep:me.run.rep,day:me.day})),Re.stats.earned+=me.stats.earned,Re.stats.sold+=me.stats.sold,Re.stats.produced+=me.stats.produced,Re.stats.contracts+=me.stats.contracts,Re.stats.bestRep=Math.max(Re.stats.bestRep,me.run.rep),Re.stats.days+=me.day,Re.bestRun=Math.max(Re.bestRun,e);for(const s of me.run.relicsFound)Re.relics.includes(s)||Re.relics.push(s);for(const s of me.discovered)Re.goodsSeen.includes(s)||Re.goodsSeen.push(s);for(const s of me.buildings)Re.buildingsBuilt.includes(s.type)||Re.buildingsBuilt.push(s.type);const n=Uy(Re);for(const s of n)t.parts.push([`Hito: ${s.name}`,s.reward]);return qf(Re),Rn(Re),Ld(),pn=!1,tn.visible=!1,{parts:t.parts,total:e+n.reduce((s,a)=>s+a.reward,0),won:i}}function dS(i){ps(i.seed,i.biome,i.level)}let fp=!1;function pp(){fp=!0,Wf(),Ld(),location.reload()}const mt=new Yy(document.getElementById("hud"),{get sim(){return Ot},meta:Re,thumbs:oS,preview:(i,e)=>{const t=`${i}:${e}`;return Dl.has(t)||Dl.set(t,rM(i,e)),Dl.get(t)},startPlacing:lS,cancelPlacing:ki,placing:()=>yn,selected:cp,select:No,setSpeed:i=>{me&&(me.speed=i,mt.render(!0))},saveNow:()=>{me&&$a(me),Rn(Re)},runSeconds:()=>(me==null?void 0:me.time)??0,focus:(i,e)=>Ei.moveTo(i,e,Math.max(0,Zs(i,e,.6))),audio:vt,hasRun:Tl,startRun:up,continueRun:Fc,finishRun:hp,showIsland:dS,rerollOffers:()=>qf(Re),buyPerk:i=>{Ry(Re,i),vt.coin()},unlockBiome:i=>{Py(Re,i),vt.level()},resetAll:pp,useSkill:i=>{Ot!=null&&Ot.useSkill(i)?vt.whistle():vt.error()},openChest:()=>{Ot!=null&&Ot.openChest()&&(vt.click(),Lo())},buyCaptain:i=>{Dy(Re,i)&&vt.level()},chooseCaptain:i=>Ny(Re,i),buyCosmetic:i=>{Iy(Re,i)&&(vt.coin(),Do())},collectOffline:()=>{Oy(Re)>0&&vt.level()},version:wh.version,hasProgress:()=>Re.runs>0||Tl()||Re.legado>0,newGame:()=>{Wf(),Ld();for(const i of Object.keys(Re))delete Re[i];Object.assign(Re,qr()),Re.bottles.push("intro"),Rn(Re),vt.start(),mt.hideTitle(),ps(Re.offers[0].seed,Re.offers[0].biome,Re.offers[0].level),mt.showLetter(()=>mt.showHub())},loadGame:()=>{vt.start(),Tl()?Fc():mt.showHub()},toTitle:()=>{pn&&me&&$a(me),Re.lastSeen=Date.now(),Rn(Re),location.reload()},backToHub:()=>{da=null,fs.setLift(0),mt.cinema(!1),vt.duck(!1),Re.offers.length&&ps(Re.offers[0].seed,Re.offers[0].biome,Re.offers[0].level)},quality:()=>({level:ti.level,auto:ti.auto}),setQuality:i=>{i==="auto"?ti.auto=!0:(ti.auto=!1,ti.apply(i));try{localStorage.setItem("marea.qauto",ti.auto?"1":"0")}catch{}},report:()=>{const i=me==null?void 0:me.run;return[`Marea ${wh.version} · ${new Date().toISOString()}`,navigator.userAgent,`${window.innerWidth}×${window.innerHeight} dpr ${window.devicePixelRatio} calidad ${ti.level}`,`Archipiélago: legado ${Re.legado} (total ${Re.totalLegado}), ${Re.runs} travesías, ${Re.wins} cartas, capitán ${Re.captain}, ventajas ${JSON.stringify(Re.perks)}, biomas ${Re.biomes.join("/")}, reliquias ${Re.relics.join("/")||"ninguna"}`,i?`Travesía: ${i.name} ${i.biome} nivel ${i.level}, día ${me.day}, rep ${i.rep.toFixed(2)}, temporal ${Math.round(i.tempest*100)} %, oro ${Math.round(me.money)}, ${me.buildings.length} edificios, ${me.ships.length} barcos, planos ${i.blueprints.join("/")}, ventajas ${i.perks.join("/")||"ninguna"}, fase ${i.phase}`:"Sin travesía en marcha",`Errores: ${os.join(" | ")||"ninguno"}`].join(`
`)}});"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>null);Re.offers.length&&ps(Re.offers[0].seed,Re.offers[0].biome,Re.offers[0].level);Do();mt.showTitle();var Ah;(Ah=document.getElementById("boot"))==null||Ah.remove();window.addEventListener("pointerdown",()=>vt.start(),{once:!0});const ms=new G0;ms.layers.enableAll();const yo=new oe;let ns=null;const Xa=Sn.domElement;function Nd(i){yo.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),ms.setFromCamera(yo,jn)}function uS(i){Nd(i);const e=ms.intersectObject(Dn.mesh,!1)[0];return e?e.point:null}function mp(i){return Nd(i),St.pick(ms.intersectObjects(St.pickables(),!0))}function Bc(i){if(!yn||!me)return;const e=uS(i);rn=e?mo(yn,e.x,e.z,Oc,me.buildings):null,St.moveGhost(rn),rn&&!rn.ok?mt.setHint(`<span style="color:var(--danger)">${rn.why}</span> · <b>Esc</b> cancelar`):mt.setHint(dt[yn].coast?"<b>Clic</b> para colocar en la orilla · <b>Esc</b> cancelar":lp)}const Tn=document.createElement("div");Tn.className="hoverlabel panel";document.getElementById("hud").appendChild(Tn);function gp(i){const e=dt[i.type],t=Ot.workers();let n="";return i.built<1?n=`en obra ${Math.round(i.built*100)} %`:i.upgrading>0?n=`mejorando a nivel ${i.level+1}`:e.recipe?n=i.paused?"en pausa":i.working?`produciendo ${Math.round(i.progress*100)} %`:t.used>t.total?"sin trabajadores":"parado":e.housing&&(n=`${e.housing+(i.level-1)*2} vecinos`),`<b>${e.name}</b>${i.level>1?` <span class="lvl">nivel ${i.level}</span>`:""}${n?` · ${n}`:""}`}Xa.addEventListener("pointerdown",i=>{ns={x:i.clientX,y:i.clientY,t:performance.now()},Tn.style.display="none"});Xa.addEventListener("pointermove",i=>{if(!(!pn||!me))if(yn)Bc(i),Tn.style.display="none";else if(ns)Tn.style.display="none";else{const e=mp(i);e!==Mo&&(Mo=e,St.setHover(e==null?null:me.buildings.find(n=>n.id===e)??null),Xa.style.cursor=e!=null?"pointer":"grab");const t=e==null?null:me.buildings.find(n=>n.id===e);t?(Tn.innerHTML=gp(t),Tn.style.display="block",Tn.style.left=`${i.clientX+16}px`,Tn.style.top=`${i.clientY-10}px`):Tn.style.display="none"}});Xa.addEventListener("pointerup",i=>{const e=ns&&Math.hypot(i.clientX-ns.x,i.clientY-ns.y)<6&&performance.now()-ns.t<400;if(ns=null,!e||!pn||!me||!Ot)return;if(i.button===2){yn&&ki();return}if(yn){Bc(i),rn!=null&&rn.ok&&(Ot.place(yn,rn.x,rn.z,rn.rot)?(vt.place(),St.sync(me),St.placeOnGround(),i.shiftKey&&Ot.canAfford(yn).ok?Bc(i):ki(),mt.render(!0)):ki());return}if(tn.visible&&(Nd(i),ms.intersectObject(tn,!0)[0])){Ot.openChest()&&(vt.coin(),Lo()),mt.render(!0);return}const t=mp(i);t!=null&&vt.click(),No(t)});Xa.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("keydown",i=>{i.target.tagName==="SELECT"||!pn||!me||(i.key==="Escape"?(yn?ki():No(null),Tn.style.display="none"):i.key==="r"||i.key==="R"?(Oc+=Math.PI/4,yn&&rn&&(rn=mo(yn,rn.x,rn.z,Oc,me.buildings),St.moveGhost(rn))):i.key===" "?(me.speed=me.speed===0?1:0,mt.render(!0),i.preventDefault()):i.key==="1"?me.speed=1:i.key==="2"?me.speed=2:i.key==="4"&&(me.speed=4))});let Mn=0,Th=performance.now(),vp=0,Nl=0,Il=0,hS=0;const fS=new P;function xp(i){const e=Math.min(.1,(i-Th)/1e3);if(Th=i,Mn+=e,pn&&me&&Ot&&!mt.isBlocking()&&!da){let a=e*me.speed;for(;a>0;){const r=Math.min(.2,a);Ot.update(r),a-=r}St.sync(me),St.flushRepaint()}else Kr=(Kr+e/Sd)%1;const t=Pl&&Pl in ih?ih[Pl]:pn&&me?me.dayFrac:Kr,n=mM(t);op.set(ca().biome.fogTint),iS(n,Mn),vt.setNight(Math.min(1,n.windowEmissive/2.4)),hS++%20===0&&np.update(n);const s=vM(Mn);if(fs.update(Mn),li.update(Mn,e,s),Ja.update(e,Mn),sp.update(e,Mn),St.update(e*Math.max(1,(me==null?void 0:me.speed)??1),Mn),me)for(const a of me.ships){let r=ea.get(a.id);r||(r=new oy(a.id,a.type,li.spots[ea.size%li.spots.length],Qs),ea.set(a.id,r),Pt.add(r.group)),r.update(a,e,Mn)}tn.visible&&(tn.rotation.y=Math.sin(Mn*1.5)*.08,tn.getObjectByName("halo").scale.setScalar(1+Math.sin(Mn*3)*.08)),pn&&me&&Math.random()<e*2&&Lo();for(const a of li.fumaroles)Math.random()<e*3&&Qs.emit(fS.copy(a),{color:14275788,life:2.6,size0:.25,size1:1.3,rise:.7,alpha:.28,drift:new P(.2*s,0,.08*s)});if(Qs.update(e),Ei.update(e),mt.inTitle){const a=ca();Ei.moveTo(a.plaza[0]+2+Math.sin(Mn*.06)*8,a.plaza[1]+3+Math.cos(Mn*.045)*6,0)}if(da&&aS(e),mt.inTitle||(Re.playSeconds+=e,Ll+=e,Ll>30&&(Ll=0,Rn(Re))),mi.render(),vp++,ti.sample(e),pn&&me){if(Nl+=e,Nl>.25&&(Nl=0,mt.render(),Tn.style.display==="block"&&Mo!=null)){const a=me.buildings.find(r=>r.id===Mo);a?Tn.innerHTML=gp(a):Tn.style.display="none"}Il+=e,Il>10&&(Il=0,$a(me))}requestAnimationFrame(xp)}requestAnimationFrame(xp);window.addEventListener("beforeunload",()=>{fp||(pn&&me&&$a(me),Re.lastSeen=Date.now(),Rn(Re))});window.__marea={get state(){return me},get sim(){return Ot},meta:Re,setTime:i=>{me?me.dayFrac=i:Kr=i},frames:()=>vp,startRun:up,continueRun:Fc,finishRun:hp,loadIsland:ps,resetAll:pp,controls:Ei,scene:Pt,camera:jn,renderer:Sn,PRESETS:wn,DAY_SECONDS:Sd,town:St,current:ca,validate:(i,e,t,n=0)=>mo(i,e,t,n,(me==null?void 0:me.buildings)??[]),tryPlace:(i,e,t,n=0)=>{if(!me||!Ot)return"no run";const s=mo(i,e,t,n,me.buildings);if(!s.ok)return s.why;const a=Ot.place(i,s.x,s.z,s.rot);return St.sync(me),St.placeOnGround(),mt.render(!0),a?a.id:"sin recursos"},pickAt:(i,e)=>{yo.set(i/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),ms.setFromCamera(yo,jn);const t=ms.intersectObjects(St.pickables(),!0);return{n:t.length,id:St.pick(t)}}};
