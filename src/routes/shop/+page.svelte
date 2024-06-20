<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	let products = data.props.products;
	let collections = data.props.collections;

	$: console.log(products[0].variants.edges);

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
				<h2>
					<a href={`shop/products/${product.handle}`}>
						{#each product.images.edges as { node: image }}
							<img src={image.originalSrc} alt={image.altText} width="200" />
						{/each}
					</a>
					<p class="product-name">
						<a href={`shop/products/${product.handle}`}>
							{product.title}
						</a>
						<span class="spacer"></span>
						<span>
							${product.priceRange.maxVariantPrice.amount}0
						</span>
					</p>
				</h2>
				
			</div>
		{/each}
	</div>
</div>

<style>
	img {
		width: 100%;
		max-width: 100%;
	}

	.product-name {
		margin-top: 0.25em;
		display: flex;
		justify-content: space-between;
		margin-bottom: 2em;
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
