import{t as j,a as k}from"../chunks/DqQMvhQw.js";import{s as o,f as q,t as y,b as m,$ as z,d as t,r as e,e as s,g as p}from"../chunks/C4zvYtwk.js";import{e as A,s as i}from"../chunks/BXL8r_O2.js";var B=j('<p> </p> <div class="orientation svelte-1obmumg"><div class="label">alpha:</div> <div class="alpha"> </div> <div class="label">beta:</div> <div class="beta"> </div> <div class="label">gamma:</div> <div class="gamma"> </div></div>',1);function F(h){let n=o(0),u=o(0),c=o(0),x="9:43am";function r(a,_=0){return Math.round(a*Math.pow(10,_))/Math.pow(10,_)}var b=B();A("deviceorientation",z,a=>{setTimeout(()=>{m(n,r(a.alpha),!0),m(u,r(a.beta),!0),m(c,r(a.gamma),!0)},5e3)});var v=q(b),w=t(v);e(v);var f=s(v,2),d=s(t(f),2),M=t(d,!0);e(d);var l=s(d,4),$=t(l,!0);e(l);var g=s(l,4),T=t(g,!0);e(g),e(f),y(()=>{i(w,`updated: ${x}`),i(M,p(n)),i($,p(u)),i(T,p(c))}),k(h,b)}export{F as component};
