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
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 28px;
      max-width: unset;
    }
  }

  
</style>