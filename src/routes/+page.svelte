<script>
  import { onMount } from "svelte";

  let doe = "Hello World";

  onMount(() => {
    if (window && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler, false);
      // doe = 'Supported!';
      console.log(window);
    }
  });
</script>

<h2 class="">
  {doe}
</h2>

<style>

</style>