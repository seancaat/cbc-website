<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Header from './Header.svelte';
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
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		Sundays at 10AM
	</footer>
</div>

<style>
	.app {
		/* min-height: 100vh; */
		display: flex;
		flex-direction: column;
	}

	main {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		outline: 1px solid red;
		position: absolute;
		bottom: 0px;
		z-index: 2;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
