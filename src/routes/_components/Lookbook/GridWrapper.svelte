<script>
  export let margin = "1rem";
</script>

<div class="grid-wrapper" style="--margin: {margin}">
  <slot></slot>
</div>

<style>
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr); 
    margin: 0.5rem auto;
    position: relative;
    z-index: 2;
    max-width: calc(100% - 30px);
  }

  @media screen and (min-width: 1024px) {
    .grid-wrapper {
      max-width: 960px;
      margin: var(--margin) auto;
      /* grid-template-columns: repeat(18, 1fr);  */
    }
  }


</style>