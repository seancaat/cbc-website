<script>
  import as_img_1 from '$lib/images/lookbook/All Star Shorts 10 (Yulin).jpg';
  import as_img_2 from '$lib/images/lookbook/All Star Shorts 11(Will).jpg';
  import as_img_3 from '$lib/images/lookbook/All Star Shorts 8(Smiley).jpg';

  import turbo_socks from '$lib/images/lookbook/s67 2024-06-17 013758.580.jpg';

  import jersey_img from '$lib/images/lookbook/CBC Jersey(Dan Guo, Herb Tam) 1.jpg';

  import netbag_img_1 from '$lib/images/lookbook/Net Bag 2.jpg';
  import netbag_img_2 from '$lib/images/lookbook/Net Bag 4 (Marble Purple).jpg';

  import tt_hat_img_1 from '$lib/images/lookbook/Triple Threat Hat Ruby_Fire(Sean Catangui).jpg';
  import tt_hat_img_2 from '$lib/images/lookbook/Triple Threat Hat earth_sky( David Cho).jpg';

  import backpack_1 from '$lib/images/lookbook/s67 2023-10-07 182037.645.jpg';
  import backpack_2 from '$lib/images/lookbook/s67 2023-10-07 182103.996.jpg';

  import manifestoT from '$lib/images/lookbook/The Manifesto Tee(Caren Wenqing Ye).jpg';

	import { each } from 'svelte/internal';

  import GridWrapper from './GridWrapper.svelte';
  import Menu from './Menu.svelte';

  let images2023 = [
    {
      src: jersey_img,
      gridStart: 1,
      gridEnd: 7
    }, 
    {
      src: tt_hat_img_1,
      gridStart: 5,
      gridEnd: 10
    }, 
    {
      src: tt_hat_img_2,
      gridStart: 2,
      gridEnd: 8
    },
    {
      src: manifestoT,
      gridStart: 3,
      gridEnd: 8
    },
    {
      src: backpack_1,
      gridStart: 1,
      gridEnd: 6
    },
    {
      src: backpack_2,
      gridStart: 2,
      gridEnd: 7
    }
  ];
  let merch2023 = [
    {
      name:"2023 Autumn Classic Jersey",
      price: "$60",
    },
    {
      name:"The Triple Threat Hat",
      price: "$38",
    },
    {
      name:"The Manifesto Tee",
      price: "$48",
    },
    {
      name: "Chameleon Drawstring Backpack",
      price: "$15",
    }
  ];


  let images2024 = [
    {
      src: netbag_img_2,
      gridStart: 1,
      gridEnd: 7
    }, 
    {
      src: netbag_img_1,
      gridStart: 4,
      gridEnd: 8
    }, 
    {
      src: turbo_socks,
      gridStart: 2,
      gridEnd: 7
    },
    {
      src: as_img_3,
      gridStart: 4,
      gridEnd: 10
    },
    {
      src: as_img_2,
      gridStart: 3,
      gridEnd: 8
    },
    {
      src: as_img_1,
      gridStart: 1,
      gridEnd: 6
    },
 
  ];
  let merch2024 = [
    {
      name:"Net Bag",
      price: "$90",
    },
    {
      name:"All Star Shorts",
      price: "$48",
    },
    {
      name:"Turbo Socks",
      price: "$16",
    }
  ];

</script>

<section class="lookbook">
  <div class="2024">
    <!-- <GridWrapper>
      <h2>2024 Collection</h2>
    </GridWrapper> -->
    {#each images2024 as item}
      <GridWrapper>
        <div class="item" style="grid-column: {item.gridStart} / {item.gridEnd} ;">
          <img 
            class="lookbook-img"  
            src={item.src}
            alt='' />
        </div>
      </GridWrapper>
    {/each}
    <GridWrapper>
      <ul class="menu">
        {#each merch2024 as item}
          <li>
            <a href="#">
              <span>{item.name}</span>
            </a>
            <span class="spacer"></span>
            <span>{item.price}</span>
          </li>
        {/each}
      </ul>
      <div class="button-wrap">
        <a class="shop" href="#">SHOP 2024 COLLECTION</a>
      </div>
    </GridWrapper>
  </div>
  <div class="2023">
    <!-- <GridWrapper>
      <h2>2023 Collection</h2>
    </GridWrapper> -->
    {#each images2023 as item}
      <GridWrapper>
        <div class="item" style="grid-column: {item.gridStart} / {item.gridEnd} ;">
          <img 
            class="lookbook-img"  
            src={item.src}
            alt='' />
        </div>
      </GridWrapper>
    {/each}

    <GridWrapper>
      <ul class="menu">
        {#each merch2023 as item}
          <li>
            <a href="#">
              <span>{item.name}</span>
            </a>
            <span class="spacer"></span>
            <span>{item.price}</span>
          </li>
        {/each}
      </ul>
      <div class="button-wrap">
        <a class="shop" href="#">SHOP 2023 COLLECTION</a>
      </div>
    </GridWrapper>
  </div>
</section>

<style>

  h2 {
    font-size: 36px;
    border-bottom: 2px solid white;
    padding-bottom: 0.25em;
  }

  .lookbook {
    position: relative;
    z-index: 2;
    font-size: 18px;
  }
  
  img.lookbook-img {
    width: 100%;
  }

  ul.menu {
    font-size: 16px;
    list-style-type: none;
    padding: 0;
    grid-column: 1 / -1;
  }

  h2, .button-wrap {
    grid-column: 1 / -1;
  }
  
  li {
    display: flex;
    /* align-items: center; */
    gap: 0.25em;
    margin-bottom: 0.5em;
  }

  a.shop {
    outline: 2px solid white;
    padding: 0.25em 1em;
    text-decoration: none;
    border-radius: 999px;
    display: inline-block;
    margin-bottom: 4rem;
  }

  span.spacer {
    flex-grow: 1;
    border-bottom: 2px dotted white;
  }

  @media screen and (min-width: 1024px) {
    ul.menu, h2, .button-wrap {
      grid-column: 2/9;
      font-size: 20px;
    }
  }

</style>