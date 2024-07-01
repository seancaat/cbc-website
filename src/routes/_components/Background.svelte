<script>
   import src from '$lib/images/dustin2.jpg';
</script>

<div class="image-wrapper">
  <img aria-hidden="true" class="topper-image" alt='' {src} />
</div>

<style>
  .image-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100lvh;
    z-index: 0;
    will-change: transform;
    transform: translateZ(0);
  }
  
  .topper-image {
    position: absolute;
    width: 100%;
    /* outline: 4px dashed red; */
    height: 100%;
    min-height: 100lvh;
    object-fit: cover;
    object-position: 50% 50%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    will-change: transform;
    transform: translateZ(0);
  }
</style>