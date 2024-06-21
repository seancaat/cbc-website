<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	let collections = data.props;

</script>

<svelte:head>
	<title>Shop CBC Merch</title>
	<meta name="description" content="About this app" />
	<script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
</svelte:head>

<div class="text-column">
	<h1>Shop</h1>
	<div>
		{#each collections as collection}
			<h2>{collection.title}</h2>
			{#each collection.products as product }
				<div class="product">
						<a href={`/products/${product.handle}`}>
							{#each product.images.edges as {node} }
								<img src={node.url} alt={node.altText} width="200" />
							{/each}
						</a>
						<div class="product-name">
							<h2>
								<a href={`/products/${product.handle}`}>
									{product.title}
								</a>
							</h2>
							<span class="spacer"></span>
							<span>
								${product.priceRange.maxVariantPrice.amount}0
							</span>
						</div>
				</div>
			{/each}
		{/each}
	</div>
	<!-- <div>
		
	</div> -->
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
		align-content: center;
		margin-bottom: 2em;
	}

	h2 {
		margin-top: 0; 
		margin-bottom: 0;
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
