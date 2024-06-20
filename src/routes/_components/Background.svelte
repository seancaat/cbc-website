<script>
   import src from '$lib/images/dustin.jpg';
</script>

<div class="image-wrapper">
  <img class="topper-image" alt='' {src} />
</div>

<style>
  .image-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100dvh;
    z-index: 0;
  }
  
  .topper-image {
    position: absolute;
    width: 100%;
    /* outline: 4px dashed red; */
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
</style>