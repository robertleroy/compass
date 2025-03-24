<script>
  import "./app.css";
  let title = $state("App"),
      { children } = $props();
</script>

<main>
  <div class="router">{@render children()}</div>
</main>

<style>
  main {
    padding: 2rem 4rem;
  }
</style>