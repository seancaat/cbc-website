<script>
	import benji from '$lib/images/benji.jpg';
</script>

<svelte:head>
	<title>CBC Blog: In the Paint</title>
	<meta name="description" content="Chinatown Basketball Club Blog" />
</svelte:head>

<div class="text-column">
	<h1>
    <span>In the Paint</span>
    <br>
    <span>CBC's Community Showcase</span>
  </h1>
  <iframe src="https://player.vimeo.com/video/907294942?h=f9d5d36a74&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus risus, pulvinar sed feugiat nec, tempor in nibh. Quisque rutrum erat et enim tristique tincidunt. Phasellus faucibus orci sed sapien lobortis, sit amet pharetra mi commodo. Phasellus semper at leo in pellentesque. Nullam eget egestas velit. Mauris tincidunt viverra varius. Nulla non porta risus. Integer sodales tempus dolor, at blandit elit venenatis eget. Nulla blandit semper turpis, vulputate tincidunt erat cursus id. In varius urna a ex sollicitudin cursus. Maecenas tincidunt finibus sapien, auctor commodo risus facilisis sed. Fusce iaculis tellus a accumsan laoreet. Fusce a interdum risus, nec auctor quam.</p>
  <p>Morbi id lectus eu ante sodales tempor. Suspendisse potenti. Cras fermentum tristique pharetra. Duis aliquet leo risus, quis egestas mi laoreet quis. Aenean congue, ante et suscipit volutpat, lacus erat commodo elit, maximus tincidunt velit dui nec dolor. Suspendisse vel felis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet ipsum leo. Proin blandit, ante eget pellentesque cursus, neque lacus volutpat dui, sed aliquet metus mauris eget diam.</p>
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
