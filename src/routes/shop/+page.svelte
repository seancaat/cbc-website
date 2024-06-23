<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	let collections = data.props;
	$: console.log(collections);
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
							<h3>
								<a href={`/products/${product.handle}`}>
									{product.title}
								</a>
							</h3>
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
		gap: 0.25em;
		justify-content: space-between;
		align-content: center;
		margin-bottom: 2em;
		font-size: 20px;
	}

	.product-name h3 {
		margin-top: 0; 
		margin-bottom: 0;
		font-size: 20px;
		font-weight: 400;	
	}

	.product {
		margin-bottom: 4rem;
	}

	h1 {
		font-size: 48px;
		padding-bottom: 1rem;
		/* border-bottom: 2px solid rgba(255, 255, 255, 0.516); */
		text-align: center;
	}

	h2 {
		margin-top: 3em;
		font-size: 32px;
		text-transform: uppercase;
		font-weight: 100;
		/* font-style: italic; */
		letter-spacing: 0.05em;
		text-align: center;
	}

	span.spacer {
    flex-grow: 1;
    transform: translateY(-2px);
    border-bottom: 2px dotted white;
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
