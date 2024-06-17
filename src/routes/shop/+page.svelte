<script>
	import { onMount } from 'svelte';

	export let data;
	let products = data.props.products;
	$: console.log(products);

</script>

<svelte:head>
	<title>Shop</title>
	<meta name="description" content="About this app" />
	<script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
</svelte:head>

<div class="text-column">
	<h1>Shop</h1>
	<div>
		{#each products as product }
			<div class="product">
				<h2>{product.title}</h2>
				<!-- <div>{@html node.descriptionHtml}</div> -->
				<!-- {#each node.images.edges as { node: image }} -->
					<!-- <img src={image.originalSrc} alt={image.altText} width="200" /> -->
				<!-- {/each} -->
			</div>
		{/each}
	</div>
</div>

<style>
	img {
		width: 100%;
		max-width: 100%;
	}

	.text-column {
    margin: 6rem auto;
    position: relative;
    z-index: 2;
    max-width: calc(100% - 30px);
  }

  @media screen and (min-width: 1024px) {
    .text-column {
      max-width: 500px;
    }
  }
</style>
