import Desktop from "./components/desktop.jsx";

export const meta = () => {
  return {
    title: 'FortyFourWings',
    description: 'FortyFourWings',
  };
};

import {useLoaderData} from '@remix-run/react';

export async function loader({context}) {
  const PRODUCTS_QUERY = `#graphql
    query products {
      products(first: 2) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `;
  return await context.storefront.query(PRODUCTS_QUERY)
}

export default function Index() {


  const {products} = useLoaderData();
  console.log(products);

  return (
 
    <Desktop />

  );
}
