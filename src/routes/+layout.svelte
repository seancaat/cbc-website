<script>
// @ts-nocheck

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Nav from './_components/Nav.svelte';
	import Background from './_components/Background.svelte';
	import Footer from './_components/Footer.svelte'
	import ShoppingCart from './_components/ShoppingCart.svelte';
	import { onMount } from 'svelte';
	import { getCartItems } from '$lib/storage';
	import './styles.css';
	import { cartVersion } from '$lib/stores';

	/** @type {import('./$types').LayoutServerData} */
	export let data;
	let cartVersionValue;
	cartVersion.subscribe((value) => {
		cartVersionValue = value;
	});

	// $: if (browser && data?.analyticsId) {
	// 	webVitals({
	// 		path: $page.url.pathname,
	// 		params: $page.params,
	// 		analyticsId: data.analyticsId
	// 	});
	// }
</script>

<div class="app">
	{#key cartVersionValue}
	<Nav log={console.log("hi " + cartVersionValue)}/>
	{/key}
	

	<Background/>
	<main>
		<slot/>
	</main>

	<Footer {data} />
</div>

<style>
	.app {
		min-height: 100vh;
	}

	main {
		width: 100%;
		min-height: 100vh;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		z-index: 9;
	}
</style>
