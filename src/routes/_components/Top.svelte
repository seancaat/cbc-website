<script>
	import Logo from '$lib/icons/Logo.svelte';
  import src from '$lib/images/dustin.jpg';

  export let manifesto = ""
  let splitManifesto = ["", ""];

	const openingTag = '<strong>';
	const closingTag = '</strong>';

	const openingTagIndex = manifesto.indexOf(openingTag);
	const closingTagIndex = manifesto.indexOf(closingTag);

	if (openingTagIndex !== -1 && closingTagIndex !== -1) {
	    splitManifesto[0] = manifesto.slice(0, openingTagIndex);
	    splitManifesto[1] = manifesto.slice(closingTagIndex + closingTag.length);
	}

</script>

<section>
  <div class="image-wrapper">
    <img class="topper-image" alt='' {src} />
  </div>
  <div class="text-wrapper">
  	<h1>
  		<span>
  			{splitManifesto[0]}
  			<Logo fill={"white"} />
  			{splitManifesto[1]}
  		</span>
  	</h1>
  </div>
	<button>
		Read More
	</button>
</section>

<style>
  section {
    color: white;
    outline: 1px solid red;
    height: 70vh;
  }

  .image-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .topper-image {
    position: absolute;
    width: 100%;
    outline: 4px dashed red;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  .text-wrapper {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: calc(100% - 30px);
    margin: 0 auto;
  }

  h1 {
    position: relative;
    font-size: 48px;
    max-width: 20em;
    z-index: 1;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 24px;
    }
  }

  
</style>