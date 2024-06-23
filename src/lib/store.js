import { writable } from 'svelte/store';
import { loadCart } from '$utils/shopify.js';

export const cartQuantity = writable('');
export const cart = writable([]);
export const search = writable('');

export function localStorageStore(key, initial) {
  const storedValue = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
  const initialValue = storedValue !== null ? JSON.parse(storedValue) : initial;

  const { subscribe, set, update } = writable(initialValue);

  if (typeof localStorage !== 'undefined') {
    subscribe(value => {
        localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return {
    subscribe,
    set,
    update
  };
}

// does this function have to be here? trouble access store within
export const getCartItems = async () => {
  // let cartId = JSON.parse($cartIdStore);
  let cartId = JSON.parse(localStorage.getItem('cartId'));

  try {
    const shopifyResponse = await loadCart(cartId);

    let sum = 0;
    shopifyResponse.body?.data?.cart?.lines?.edges?.forEach((d) => {
      sum += d.node.quantity;
    });
    cartQuantity.set(sum);

    return shopifyResponse;

  } catch (error) {
    console.log(error);
  }
};