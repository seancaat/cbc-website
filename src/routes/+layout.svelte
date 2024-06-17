<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Nav from './_components/Nav.svelte';
	import Background from './_components/Background.svelte';
	import Footer from './_components/Footer.svelte'
	import './styles.css';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	// $: if (browser && data?.analyticsId) {
	// 	webVitals({
	// 		path: $page.url.pathname,
	// 		params: $page.params,
	// 		analyticsId: data.analyticsId
	// 	});
	// }
</script>

<div class="app">
	<Nav />

	<Background/>
	<main>
		<slot />
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
