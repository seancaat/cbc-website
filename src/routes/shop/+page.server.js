import { getAllCollections } from '$lib/shopify.js';
// import { error } from '@sveltejs/kit';


// export async function load({ url }) {
//   const res = await getAllCollections();
//   if (res.status === 200) {
//     const products = res.body?.data?.collections?.edges;

//     if (products) {
//       return { products };
//     }
//     throw error(404);
//   } else {
//     throw error(res.status);
//   }
// }


import {
  createStorefrontApiClient,
  CustomFetchApi,
} from '@shopify/storefront-api-client';
import {fetch as nodeFetch} from 'node-fetch';
import { VITE_SHOPIFY_STORE_URL, VITE_SHOPIFY_API_ENDPOINT, VITE_SHOPIFY_STOREFRONT_API_TOKEN } from '$env/static/private';

const client = createStorefrontApiClient({
  storeDomain: VITE_SHOPIFY_STORE_URL,
  apiVersion: '2023-10',
  publicAccessToken: VITE_SHOPIFY_STOREFRONT_API_TOKEN,
});

const productQuery = `
  query ProductQuery($handle: String) {
    product(handle: $handle) {
      id
      handle
      availableForSale
      title
      description
      descriptionHtml 
    }
  }
`;

const {data, errors, extensions} = await client.request(productQuery, {
  variables: {
    handle: 'all-star-shorts',
  },
});

console.log(data);

