import { createCart, loadCart } from '$utils/shopify.js';

/**
 * @param {string} key
 */
export function getFromLocalStorage(key) {
  return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
}

export function saveInLocalStorage(key, value) {
  localStorage.setItem(key, value);
  }

  // return {
  //   subscribe,
  //   set,
  //   update
  // };

export async function createAndSaveCart() {
  const cartRes = await createCart();
  console.log("cartRes", cartRes)
  if (typeof window !== 'undefined') {
    saveInLocalStorage('cartCreatedAt', Date.now());
    console.log("hola", getFromLocalStorage('cartCreatedAt'))
    saveInLocalStorage('cartId', cartRes.body?.data?.cartCreate?.cart?.id);
    saveInLocalStorage(
      'cartUrl',
      cartRes.body?.data?.cartCreate?.cart?.checkoutUrl
    );
  }
}

// does this function have to be here? trouble access store within
export const getCartItems = async () => {
  let cartId = getFromLocalStorage("cartId")
  if (cartId === "undefined") {
   console.log(createAndSaveCart())
  }

  try {
    const shopifyResponse = await loadCart(cartId);

    let sum = 0;
    shopifyResponse.body?.data?.cart?.lines?.edges?.forEach((d) => {
      sum += d.node.quantity;
    });

    return shopifyResponse;

  } catch (error) {
    console.log(error);
  }
};