import{t as d,a as l}from"../chunks/umD_IZwW.js";import{p,a as c}from"../chunks/boJweBAG.js";import{o as m}from"../chunks/BBh9n64u.js";var u=d('<main class="svelte-1ddj7kv"><h2>Compass</h2> <div class="shell svelte-1ddj7kv"><div class="compass">🡩</div></div></main>');function O(n,r){p(r,!0),m(()=>{if("AbsoluteOrientationSensor"in window)try{const t=new AbsoluteOrientationSensor({frequency:60});t.addEventListener("reading",()=>{const o=t.quaternion,e=new DOMMatrixReadOnly([1-2*(o[1]**2+o[2]**2),2*(o[0]*o[1]-o[2]*o[3]),2*(o[0]*o[2]+o[1]*o[3]),0,2*(o[0]*o[1]+o[2]*o[3]),1-2*(o[0]**2+o[2]**2),2*(o[1]*o[2]-o[0]*o[3]),0,2*(o[0]*o[2]-o[1]*o[3]),2*(o[1]*o[2]+o[0]*o[3]),1-2*(o[0]**2+o[1]**2),0,0,0,0,1]).transformPoint({x:0,y:0,z:-1}),a=Math.atan2(e.x,e.z)*(180/Math.PI),i=document.getElementById("compass");i.style.transform=`rotate(${a}deg)`}),t.addEventListener("error",o=>{console.error("Sensor error:",o)}),t.start()}catch(t){console.error("Failed to initialize AbsoluteOrientationSensor:",t),alert("AbsoluteOrientationSensor is not supported or permission denied.")}else alert("AbsoluteOrientationSensor is not supported on this device.")});var s=u();l(n,s),c()}export{O as component};
