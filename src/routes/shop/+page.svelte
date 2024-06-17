<script>
	import { onMount } from 'svelte';

	export let data;
	let products = data.props.products;
	let collections = data.props.collections;

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
				
				<!-- <div>{@html product.descriptionHtml}</div> -->
				{#each product.images.edges as { node: image }}
					<img src={image.originalSrc} alt={image.altText} width="200" />
				{/each}
				<h2>{product.title}</h2>
				<p>${product.priceRange.maxVariantPrice.amount}0</p>
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
