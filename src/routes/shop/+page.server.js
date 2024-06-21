// This gets one item
import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { env } from '$env/dynamic/private';
// import { VITE_SHOPIFY_STORE_URL, VITE_SHOPIFY_API_ENDPOINT, VITE_SHOPIFY_STOREFRONT_API_TOKEN } from '$env/dynamic/private';

const client = createStorefrontApiClient({
  storeDomain: env.VITE_SHOPIFY_STORE_URL,
  apiVersion: '2023-10',
  publicAccessToken: env.VITE_SHOPIFY_STOREFRONT_API_TOKEN,
});

export async function load() {
  const collections = await getCollections();
  let handles = collections.map(e => e.node.handle);
  let data = {};

  let products2023 = cleanProducts(await getProductsInCollection(handles[0]));
  let products2024 = cleanProducts(await getProductsInCollection(handles[1]));

  return {
    props: [products2024, products2023],
  }
}

// async function getAllProducts() {
//   const productQuery = `
//     query {
//     products(first:10) {
//       edges{
//             node {
//                 id
//                 handle
//                 availableForSale
//                 title
//                 description
//                 descriptionHtml
//                 options {
//                     id
//                     name
//                     values
//                 }
//                 priceRange {
//                     maxVariantPrice {
//                         amount
//                         currencyCode
//                     }
//                     minVariantPrice {
//                         amount
//                         currencyCode
//                     }
//                 }
//                 variants(first: 4) {
//                     pageInfo {
//                         hasNextPage
//                         hasPreviousPage
//                     }
//                     edges {
//                         node {
//                             id
//                             title
//                             sku
//                             availableForSale
//                             requiresShipping
//                             selectedOptions {
//                                 name
//                                 value
//                             }
//                             priceV2 {
//                                 amount
//                                 currencyCode
//                             }
//                             compareAtPriceV2 {
//                                 amount
//                                 currencyCode
//                             }
//                         }
//                     }
//                 }
//                 images(first: 1) {
//                     pageInfo {
//                         hasNextPage
//                         hasPreviousPage
//                     }
//                     edges {
//                         node {
//                         originalSrc
//                         altText
//                         width
//                         height
//                         }
//                     }
//                 }
//             }
//         }
//       }
//     }`;

//   const {data, errors, extensions} = await client.request(productQuery);

//   // console.log(data.products.edges);
//   return data.products.edges;
// }

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

async function getProductsInCollection(handle) {
  const query = `
    query getProductsInCollection {
    collection(handle: "` + handle + `") {
      id
      title
      products(first: 50, sortKey: BEST_SELLING) {
        edges {
          node {
            id
            handle
            availableForSale
            title
            description
            descriptionHtml
            options {
              id
              name
              values
            }
            images(first: 1) {
              edges {
                node {
                  id
                  url
                  width
                  height
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }`

  const {data, errors, extensions} = await client.request(query);

  return data.collection;
}


function cleanProducts(collection) {
  let title = collection.title;
  let productsCleaned = collection.products.edges.map(e => { return {
    id: e.node.id,
    title: e.node.title,
    handle: e.node.handle,
    descriptionHtml: e.node.descriptionHtml,
    options: e.node.options,
    priceRange: e.node.priceRange,
    images: e.node.images,
  }});

  return {
    title: title,
    products: productsCleaned,
  };
}