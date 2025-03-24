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

<div class="notice" class:unsupported={!hasDoe}>
  DeviceOrientationEvent {hasDoe ? "supported" : "not supported"}
</div>

<style>
  .notice {
    font-size: 1.25rem;
    /* font-style: italic; */
  }
  .unsupported {
    color: hsl(0 80 40);
  }
</style>