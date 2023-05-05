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
            media(first: 1) {
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
  return await context.storefront.query(PRODUCTS_QUERY)
}
