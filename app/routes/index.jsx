import { json } from "react-router";
import Desktop from "./components/desktop.jsx";

export const meta = () => {
  return {
    title: 'FortyFourWings',
    description: 'FortyFourWings',
  };
};

export default function Index() {

  return (
    
    <Desktop />

  );
}

export async function loader({context}) {
  const PRODUCTS_QUERY = `#graphql
  query products {
    products(first: 5) {
      edges {
        node {
          id
          title
          descriptionHtml
          options {
            name,
            values
          }
          variants(first: 1){
            edges{
              node{
                id
                title
                availableForSale
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                unitPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          media(first: 5) {
            nodes{
              ... on MediaImage {
                mediaContentType
                image {
                  id
                  url
                  altText
                  width
                  height
                }
              }
              ... on Model3d {
                id
                mediaContentType
                sources {
                  mimeType
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const {products} = await context.storefront.query(PRODUCTS_QUERY);
const storeDomain = context.storefront.getShopifyDomain();
  return json({
    products,
    storeDomain,
  });
}