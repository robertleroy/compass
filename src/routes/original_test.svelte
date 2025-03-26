<script>
  import { onMount } from "svelte";
  let alpha = $state(0),  // around z
      beta = $state(0),   // around x - forward tilt
      gamma = $state(0),  // around y - side rotation
      compassHeading = $state(0),
      acc_x = $state(0),
      acc_y = $state(0),
      acc_z = $state(0),
      updated = $state("10:35am"),
      error = $state(false);

  function round(num,d = 0) {
    return Math.round((num) * (Math.pow(10, d))) / (Math.pow(10, d));
  }

  function onDeviceOrientation(event) {

    // Check for iOS property
    if(event.webkitCompassHeading) {
      alpha = event.webkitCompassHeading;
    }
    // non iOS
    else {
      alpha = event.alpha;
      if(!window.chrome) {
        // Assume Android stock
        alpha = alpha-270;
      }
    }

    // alpha = round(360 - e.alpha);
    // beta = round(e.beta);
    // gamma = round(e.gamma);
    // compassHeading = round(e.webkitCompassHeading || "n/a");
  }
  
  function onDeviceMotion(e) {

  }


/* 
  Rotations:
  alpha {
    0: north pole,
    90: west,
    180: south,
    270: east
  }
  beta {
    0: parallel to ground,
    180: tipped towards from user,
    -180: tipped away from user
  }
  gamma {
    0: flat,
    90: on right side,
    -90: on left side
  }
  Earth Axis / Device Axis
  x = pos to east / right, neg to west / left
  y = pos to north / top, neg to south / bottom
  z = pos to up / above screen, neg to down / behind screen
*/

  onMount(() => {
    if (window && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', onDeviceOrientation, false);
    } else {
      error = true;
    }
    // if (window.DeviceMotionEvent) {
    //   window.addEventListener('devicemotion', onDeviceMotion);
    // } else {
    //   error = true;
    // }
  });
</script>

<!-- <svelte:window 
  ondeviceorientation={(e) => {
    clearTimeout(timeoutId = setTimeout(() => {
      alpha = round(e.alpha);
      beta = round(e.beta);
      gamma = round(e.gamma);
     }, 1000))

    setTimeout(() => {
      alpha = round(e.alpha);
      beta = round(e.beta);
      gamma = round(e.gamma);
    }, 5000)
  }}
/> -->

<!-- <div class="notice" class:unsupported={!hasDoe}>
  DeviceOrientationEvent {hasDoe ? "supported" : "not supported"}
</div> -->

<p>
  updated: {updated}

{#if error}
error
<!-- {:else} -->

{/if}
</p>

<div class="orientation">
  <div class="label">alpha:</div>
  <div class="alpha">{alpha}</div>
  <div class="label">beta:</div>
  <div class="beta">{beta}</div>
  <div class="label">gamma:</div>
  <div class="gamma">{gamma}</div> 
  <div class="label">compassHeading:</div>
  <div class="compassHeading">{compassHeading}</div>
</div>


<div class="links">
  <a href="https://mobiforge.com/design-development/html5-mobile-web-device-orientation-events">article</a>
  <a href="https://dev.to/orkhanjafarovr/real-compass-on-mobile-browsers-with-javascript-3emi">example</a>
  <a href="https://24ways.org/2016/taking-device-orientation-for-a-spin/">Possible Solution</a>

  
  <div>ask ai "find magnetic north in javascript"</div>
</div>

<!-- <div>
  <button 
    onclick={() => {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', (e) => {
                alpha = e.alpha;
                beta = e.beta;
                gamma = e.gamma;
              });
              permGranted = true;
            }
          })
          .catch(console.error);
      } else {
        permGranted = false;
      }
    }}
  >Permisson: {permGranted}</button>
</div> -->


<style>
  .orientation {
    display: inline-grid;
    grid-template-columns: repeat(2, max-content);
    gap: 0 1ch;
  }
  /* .notice {
    font-size: 1.25rem;
  }
  .unsupported {
    color: hsl(0 80 40);
  } */
   .links {
    display: grid;
   }
</style>