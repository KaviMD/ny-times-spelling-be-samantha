import{S as d,i as k,s as F,e as C,t as $,k as w,c as S,a as q,h as y,d as l,m as h,g as u,J as I,L as j,M as U,j as H,K as R,N as J,v as V,O as Y}from"../chunks/vendor-1fe2299f.js";function Z(i){let s,p,o,a,r,n,f,v,_,z,E,m,O,L,c=W(i[0],i[1].toLowerCase(),i[2].toLowerCase())+"",P,G,K;return{c(){s=C("h1"),p=$("Welcome to SvelteKit"),o=w(),a=C("p"),r=$("Center Letter"),n=w(),f=C("input"),v=w(),_=C("p"),z=$("Other Letters"),E=w(),m=C("input"),O=w(),L=C("p"),P=$(c)},l(e){s=S(e,"H1",{});var t=q(s);p=y(t,"Welcome to SvelteKit"),t.forEach(l),o=h(e),a=S(e,"P",{});var M=q(a);r=y(M,"Center Letter"),M.forEach(l),n=h(e),f=S(e,"INPUT",{}),v=h(e),_=S(e,"P",{});var N=q(_);z=y(N,"Other Letters"),N.forEach(l),E=h(e),m=S(e,"INPUT",{}),O=h(e),L=S(e,"P",{});var T=q(L);P=y(T,c),T.forEach(l)},m(e,t){u(e,s,t),I(s,p),u(e,o,t),u(e,a,t),I(a,r),u(e,n,t),u(e,f,t),j(f,i[1]),u(e,v,t),u(e,_,t),I(_,z),u(e,E,t),u(e,m,t),j(m,i[2]),u(e,O,t),u(e,L,t),I(L,P),G||(K=[U(f,"input",i[3]),U(m,"input",i[4])],G=!0)},p(e,[t]){t&2&&f.value!==e[1]&&j(f,e[1]),t&4&&m.value!==e[2]&&j(m,e[2]),t&7&&c!==(c=W(e[0],e[1].toLowerCase(),e[2].toLowerCase())+"")&&H(P,c)},i:R,o:R,d(e){e&&l(s),e&&l(o),e&&l(a),e&&l(n),e&&l(f),e&&l(v),e&&l(_),e&&l(E),e&&l(m),e&&l(O),e&&l(L),G=!1,J(K)}}}const b="1say-tCGGSYSlpCry86fmwIS0T9UF-Gjz50o8Oat_ZOI",A="sample_1";function B(i){let s=i.toLowerCase().split(`
`).map(p=>p.split(",")).map(p=>p.map(o=>o.replace(/[^a-z0-9]/gi,"")));return s.shift(),[].concat.apply([],s)}function W(i,s,p){const o=i.filter(r=>r.includes(s)),a=RegExp(`^[${s}${p}]+$`,"g");return o.filter(r=>a.test(r))}function D(i,s,p){const o=`https://docs.google.com/spreadsheets/d/${b}/gviz/tq?tqx=out:csv&sheet=${A}`;let a=[],r="",n="";V(()=>{console.log(o),Y.exports.get(o,_=>{p(0,a=B(_))})});function f(){r=this.value,p(1,r)}function v(){n=this.value,p(2,n)}return[a,r,n,f,v]}class X extends d{constructor(s){super();k(this,s,D,Z,F,{})}}export{X as default};
