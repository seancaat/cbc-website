<script>
	/** @type {import('./$types').PageData} */
	import Top from './_components/Top.svelte'
	import Lookbook from './_components/Lookbook/index.svelte';
	export let data;
	

	let manifesto = data.props.manifesto.find(e => e.role === 'intro').value;
	let forecast = data.props.sunday_weather;
</script>

<svelte:head>
	<title>Chinatown Basketball Club</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Top {manifesto} {forecast} />
<Lookbook />

<style>
</style>
