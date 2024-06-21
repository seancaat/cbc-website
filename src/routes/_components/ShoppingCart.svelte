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

<style>
</style>