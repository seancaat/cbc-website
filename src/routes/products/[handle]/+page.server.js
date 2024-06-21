import { env } from '$env/dynamic/private';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: env.VITE_SHOPIFY_STORE_URL,
  apiVersion: '2023-10',
  publicAccessToken: env.VITE_SHOPIFY_STOREFRONT_API_TOKEN,
});

export async function load({ params }) {
  let product = await getProduct(params.handle);
  return product;
}

async function getProduct(handle) {
  const query = 
  `query getProductByHandle {
    product(handle: "` + handle + `") {
      id
      title
      descriptionHtml
      variants(first: 5) {
        edges {
          cursor
          node {
            id
            title
            quantityAvailable
            price {
              amount
              currencyCode
            }
          }
        }
      }
      images(first: 10) {
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        edges {
            node {
              originalSrc
              altText
              width
              height
            }
        }
      }
    }
  }`

  const {data, errors, extensions} = await client.request(query);
  return data;
}

async function getAllProducts() {
  const productQuery = `
    query {
    products(first:10) {
    edges{
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
                priceRange {
                    maxVariantPrice {
                        amount
                        currencyCode
                    }
                    minVariantPrice {
                        amount
                        currencyCode
                    }
                }
                variants(first: 4) {
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                    }
                    edges {
                        node {
                            id
                            title
                            sku
                            availableForSale
                            requiresShipping
                            selectedOptions {
                                name
                                value
                            }
                            priceV2 {
                                amount
                                currencyCode
                            }
                            compareAtPriceV2 {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
                images(first: 1) {
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                    }
                    edges {
                        node {
                        originalSrc
                        altText
                        width
                        height
                        }
                    }
                }
            }
        }
      }
    }`;

  const {data, errors, extensions} = await client.request(productQuery);
  return data.products.edges;
}