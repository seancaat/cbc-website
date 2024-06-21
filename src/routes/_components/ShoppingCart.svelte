<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let loading = false;
  export let items = [];

  function addOneItem(item, i) {
    loading = true;
    dispatch('addProduct', {
      body: item.node.merchandise.id
    });
  }
  function removeOneItem(item, i) {
    loading = true;
    let quantity = item.node.quantity - 1;
    dispatch('removeProduct', {
      body: {
        variantId: item.node.merchandise.id,
        quantity: quantity,
        lineId: item.node.id
      }
    });
  }
  function removeEntireItem(item, i) {
    loading = true;
    dispatch('removeProduct', {
      body: {
        variantId: item.node.merchandise.id,
        quantity: 0,
        lineId: item.node.id
      }
    });
  }
  async function checkout() {
    loading = true;
    let checkoutUrl = localStorage.getItem('cartUrl');
    window.open(JSON.parse(checkoutUrl), '_blank');
    loading = false;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|self>
  <div>
    {#if loading}
      <div  />
    {/if}
    <div >
      <div>My Cart</div>
      <button on:click >close</button>
    </div>
    {#if items.length === 0}
      <div>
        <div>
          cart icon
        </div>
        <div>Your cart is empty.</div>
      </div>
    {/if}
    <div>
      {#each items as item, i (i)}
        <div class="mb-2 flex w-full">
          <img
            alt={item.node.merchandise.product.title}
            decoding="async"
            loading="lazy"
            src={item.node.merchandise.product.images.edges[0].node.originalSrc}
          />
          <div>
            <div>
              <di>
                <p >{item.node.merchandise.product.title}</p>
                <p class="text-sm">{item.node.merchandise.title}</p>
              </di>
              <p class="font-medium">${item.node.estimatedCost.totalAmount.amount}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            on:click={() => {
              removeEntireItem(item, i);
            }}
          >
            delete
          </button>
          <div>
            <div>
              {item.node.quantity}
            </div>
            <button
              on:click={() => {
                removeOneItem(item, i);
              }}
            >
              decremement
            </button>
            <button
              on:click={() => {
                addOneItem(item, i);
              }}
            >
              plus
            </button>
          </div>
        </div>
      {/each}
    </div>
    {#if items.length !== 0}
      <button
        on:click={checkout}
      >
        <span>Proceed to Checkout</span>
        {#if loading}
          <div class="lds-ring ml-4">
            <div />
            <div />
            <div />
            <div />
          </div>
        {/if}
      </button>
    {/if}
  </div>
</div>

<style>
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 2px solid #000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>