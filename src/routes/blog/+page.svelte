<script>
	import benji from '$lib/images/benji.jpg';
</script>

<svelte:head>
	<title>CBC Blog: In the Paint</title>
	<meta name="description" content="Chinatown Basketball Club Blog" />
</svelte:head>

<div class="text-column">
	<h1>
    <span>IN<br>THE<br>PAINT</span>
  </h1>
  <p>CBC Community Spotlight</p>

  <section class='entry'>
    <h2>GUAVABABA - GB Stories Vol. 1</h2>
    <span>Andrew Liu, Connor Sen Warnick, Benji Hsu</span>
    <iframe src="https://player.vimeo.com/video/907294942?h=f9d5d36a74&byline=0&portrait=0" width="500" height="281.25" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus risus, pulvinar sed feugiat nec, tempor in nibh. </p>
  </section>
  
</div>

<style>
  h1 {
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    line-height: 1;
    margin-bottom: 0;
  }

  h1 + p {
    margin-top: 0;
    text-transform: uppercase;
    text-align: center;
  }

  .entry {
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 2px solid white;
  }

	img {
		width: 100%;
		max-width: 100%;
	}

  iframe {
    display: block;
    margin: 2rem auto;
  }

	.text-column {
    margin: 10rem auto;
    position: relative;
    z-index: 2;
    max-width: calc(100% - 30px);
  }

  h2 {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    .text-column {
      max-width: 500px;
      margin: 10rem auto;
    }
  }
</style>
