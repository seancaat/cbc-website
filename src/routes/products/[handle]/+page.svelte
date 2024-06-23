<script>
  import { cart, getCartItems, localStorageStore } from '$lib/store.js';

  export let data;

  // change this to a subscribe
  const cartIdStore = localStorageStore('cartId', 'asfasf');

  // console.log($cartIdStore);

  let title = data.product.title;
  let images = data.product.images.edges;
  let description = data.product.descriptionHtml;

  let selectedOptions = {};
  let cartLoading = false;

  async function addToCart() {
    cartLoading = true;

    let variantId;
    let cartId;

    if (typeof window !== 'undefined') {
      cartId = JSON.parse($cartIdStore);
    }

    data.product.variants.edges.forEach((variant) => {
      let result = variant.node.selectedOptions.every((option) => {
        return selectedOptions[option.name] === option.value;
      });
      if (result) {
        variantId = variant.node.id;
      }
    });

    await fetch('/cart.json', {
      method: 'PATCH',
      body: JSON.stringify({ cartId: cartId, variantId: variantId })
    });
    // Wait for the API to finish before updating cart items
    await getCartItems();

    cartLoading = false;
  }
</script>

<svelte:head>
	<title>CBC Shop | {title}</title>
	<meta name="description" content="About this app" />
</svelte:head>

  <section class="product">
    <main>
      <h1>{title}</h1>
      <p>{@html description}</p>
      <button on:click={ addToCart }>Add to cart</button>
    </main>
    
    <aside>
      {#each images as { node }}
        <div class="image-wrapper">
              <img src={node.originalSrc} alt={node.altText}>
        </div>
      {/each}
    </aside>
  </section>

<style>
  .product {
    display: flex;
    max-width: calc(100% - 40px);
    margin: 6rem auto;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 3rem;
  }

  main {
    max-width: 500px;
    position: sticky;
    top: 6rem;
    height: min-content;
  }

  h1 {
    font-size: 48px;
  }

  img {
    width: 100%;
    max-width: 500px;
    /* opacity: 0; */
    transition: cubic-bezier(0.215, 0.610, 0.355, 1) opacity 0.3s;
  }

  .image-wrapper {
    max-width: 100%;
  }



  aside {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  button {
    padding: 0.5em 1.5em;
    border-radius: 999px;
    display: inline-block;
    outline: none;
    border: none;
    font-family: 'AliasMedium';
    background: white;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    .product {
      flex-direction: column-reverse;
    }

    main {
      position: relative;
    }

    aside {
      flex-direction: row;
      gap: 0;
      max-width: 100vw;
      overflow-x: scroll;
    }

    .image-wrapper {
      flex-shrink: 0;
    }    
  }
</style>