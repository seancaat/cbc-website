<script>
	import benji from '$lib/images/benji.jpg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Chinatown Basketball Club</h1>
	<figure>
		<img src={benji} alt=''/>
		<figcaption>
			<a target="_blank" href="https://www.instagram.com/benjyhsu/">Benji Hsu 2023</a>
		</figcaption>
	</figure>
	<p>
		CBC was created by artist Lu Zhang and curator Herb Tam in 2019 with a core group of artists, musicians and designers of Asian descent. As Asian American cultural producers and basketball fanatics we always felt like outcasts, never quite fitting in with jocks or artists. We grew up obsessed with the Slam Dunk manga and anime series, lived and died on every success and missed shot by Yao Ming and Jeremy Lin, and styled ourselves after our heroes and anti-heroes. We held these obsessions close to us until we found a community of like-minded hoop devotees. CBC was a safe space to express who we really are, and to fight off the years-old rust and commit to the game we always dreamt of with others who felt marginalized in similar ways. 
	</p>
	<p>
		Through annual tournaments, monthly themed runs, weekly pick-up hoop gatherings, fundamentals Sunday School workshops, and things we dream up and make, Chinatown Basketball Club lives out a hoops ethics of openness, competitiveness, friendship and, creativity and belonging. For us, the basketball court is a home, a studio, a workshop, and a place of belonging.  
	</p>
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

	figure {
		margin-left: 0;
		margin-right: 0;
	}

	figcaption {
		font-size: 12px;
		font-weight: 700;
	}


  @media screen and (min-width: 1024px) {
    .text-column {
      max-width: 500px;
    }
  }
</style>
