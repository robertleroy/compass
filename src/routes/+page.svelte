<script>
  import { onMount } from "svelte";
  let hasDoe = $state(false);

  onMount(() => {
    if (window && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler, false);
      hasDoe = true;
      // console.log("window", window);
    }
  });
</script>

<h2 class="" class:unsupported={!hasDoe}>
  DeviceOrientationEvent {hasDoe ? "supported" : "not supported"}
</h2>

<style>
  .unsupported {
    color: red;
  }
</style>