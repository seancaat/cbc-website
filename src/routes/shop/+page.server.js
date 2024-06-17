// This gets one item

import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { VITE_SHOPIFY_STORE_URL, VITE_SHOPIFY_API_ENDPOINT, VITE_SHOPIFY_STOREFRONT_API_TOKEN } from '$env/static/private';

const client = createStorefrontApiClient({
  storeDomain: VITE_SHOPIFY_STORE_URL,
  apiVersion: '2023-10',
  publicAccessToken: VITE_SHOPIFY_STOREFRONT_API_TOKEN,
});

export async function load() {
  const collections = await getCollections();
  let products = await getAllProducts();
  let productsCleaned = products.map(e => { return {
      id: e.node.id,
      title: e.node.title,
      handle: e.node.handle
    } 
  });
  return {
    props: {
      products: productsCleaned,
    }
  }
}

async function getAllProducts() {
  const productQuery = `
    query {
    products(first:10) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
  `;

  const {data, errors, extensions} = await client.request(productQuery);

  return data.products.edges;
}

async function getCollections() {
  const collectionQuery = 
  `query getCollections {
    collections(first: 10) {
      edges {
        cursor
        node {
          id
          handle
          title
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }`

  const {data, errors, extensions} = await client.request(collectionQuery);
  return data.collections.edges;
}

async function getProductVariants(id) {
  const variantQuery = `
  {
    node(id: "{`+ id + `}") {
      id
      ... on Product {
        variants(first: 5) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }`


}



