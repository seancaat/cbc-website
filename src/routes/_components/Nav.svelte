<script>
	import { onMount } from 'svelte';
	import { createCart } from '$utils/shopify';
	import { getCartItems, localStorageStore } from '$lib/store';

	import ShoppingCart from './ShoppingCart.svelte';

	let cartId;
  let checkoutUrl;
  let cartCreatedAt;
  let cartItems = [];

  // initialize stores
  const cartIdStore = localStorageStore('cartId');
  const cartCreatedAtStore = localStorageStore('cartCreatedAt');
  const checkoutUrlStore = localStorageStore('cartCreatedAt');

	onMount(async () => {
    if (typeof window !== 'undefined') {

      cartId = JSON.parse($cartIdStore);
      cartCreatedAt = JSON.parse($cartCreatedAtStore);
      checkoutUrl = JSON.parse($checkoutUrlStore);

      let currentDate = Date.now();
      let difference = currentDate - cartCreatedAt;
      let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
      let cartIdExpired = totalDays > 6;

      if (cartId === 'undefined' || cartId === 'null' || cartIdExpired) {
        await callCreateCart();
			}
      await loadCart();
    }
  });

	async function callCreateCart() {
    const cartRes = await createCart();

    if (typeof window !== 'undefined') {
      localStorageStore('cartCreatedAt', Date.now());
      localStorageStore('cartId', JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.id));
      localStorageStore(
        'cartUrl',
        JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.checkoutUrl)
      );
    }
  }

  async function loadCart() {
    const res = await getCartItems();
    console.log(res);
    cartItems = res?.body?.data?.cart?.lines?.edges;
  }

  let showCart = false;
  let loading = false;

  async function openCart() {
    await loadCart();
    showCart = true;
  }
  function hideCart() {
    showCart = false;
  }

  function getCheckoutUrl() {
    window.open(checkoutUrl, '_blank');
    loading = false;
  }

  async function addToCart(event) {
    await fetch('/cart.json', {
      method: 'PATCH',
      body: JSON.stringify({ cartId: cartId, variantId: event.detail.body })
    });
    // Wait for the API to finish before updating cart items
    await loadCart();
    loading = false;
  }

  async function removeProduct(event) {
    if (typeof window !== 'undefined') {
      cartId = JSON.parse(localStorage.getItem('cartId'));
    }
    await fetch('/cart.json', {
      method: 'PUT',
      body: JSON.stringify({
        cartId,
        lineId: event.detail.body.lineId,
        quantity: event.detail.body.quantity,
        variantId: event.detail.body.variantId
      })
    });
    await loadCart();
    loading = false;
  }

</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/shop">Shop</a>
			</li>
			<li>
				<a href="/blog">"In the Paint"</a>
			</li>
		</ul>
	</nav>

	<!-- <div class="shopping-cart-wrap">
		<ShoppingCart
			items={cartItems}
      on:click={hideCart}
      on:removeProduct={removeProduct}
      on:addProduct={addToCart}
      on:getCheckoutUrl={getCheckoutUrl}
      bind:loading
		/>
	</div> -->
	
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}

	ul {
		display: flex;
		list-style-type: none;
		gap: 1em;
		padding: 0;
	}

	li {
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
	}

	li a {
		text-decoration: none;
	}

  .shopping-cart-wrap {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 9999;
	}
	
</style>
