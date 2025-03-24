<script>
  import { onMount } from "svelte";
  let hasDoe = $state(0),
      alpha = $state(0),  // around z
      beta = $state(0),   // around x - forward tilt
      gamma = $state(0),  // around y - side rotation
      acc_x = $state(0),
      acc_y = $state(0),
      acc_z = $state(0);
  
  // function deviceOrientationHandler(e) {
  //   alpha = e.alpha;
  //   beta = e.beta;
  //   gamma = e.gamma;
  // }
  
  // function deviceMotionHandler(e) {
  //   acc_x = e.acceleration.x;
  //   acc_y = e.acceleration.y;
  //   acc_z = e.acceleration.z;
  // }
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

  // onMount(() => {
  //   if (window && window.DeviceOrientationEvent) {
  //     window.addEventListener('deviceorientation', deviceOrientationHandler, false);
  //     hasDoe = true;
  //     // console.log("window", window);
  //   }
  //   if (window.DeviceMotionEvent) {
  //     window.addEventListener('devicemotion', deviceMotionHandler);
  //     setTimeout(stopJump, 3 * 1000);
  //   }
  // });
</script>

<svelte:window 
  ondeviceorientation={(e) => {
    acc_x = e.acceleration.x;
    acc_y = e.acceleration.y;
    acc_z = e.acceleration.z;
  }}
/>

<!-- <div class="notice" class:unsupported={!hasDoe}>
  DeviceOrientationEvent {hasDoe ? "supported" : "not supported"}
</div> -->

<div class="orientation">
  <div class="label">alpha:</div>
  <div class="alpha">{alpha}</div>
  <div class="label">beta:</div>
  <div class="beta">{beta}</div>
  <div class="label">gamma:</div>
  <div class="gamma">{gamma}</div>
</div>


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
</style>