import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';

export async function cartCreate({input, storefront}) {
  const {cartCreate} = await storefront.mutate(CREATE_CART_MUTATION, {
    variables: {input},
  });
  return cartCreate;
}

export async function cartAdd({cartId, lines, storefront}) {
  const {cartLinesAdd} = await storefront.mutate(ADD_LINES_MUTATION, {
    variables: {cartId, lines},
  });
  return cartLinesAdd;
}

export async function action({request, context}) {
  const {session, storefront} = context;
  const headers = new Headers();
  const [formData, storedCartId, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('cartId'),
    session.get('customerAccessToken'),
  ]);
  let cartId = storedCartId;
  let status = 200;
  let result;

 
    const cartAction = formData.get('cartAction');
    const countryCode = formData.get('countryCode')
    ? formData.get('countryCode')
    : null;
    switch (cartAction) {
    case 'ADD_TO_CART':
    const lines = formData.get('lines')
      ? JSON.parse(String(formData.get('lines')))
      : [];
    if (!cartId) {
      result = await cartCreate({
        input: countryCode ? {lines, buyerIdentity: {countryCode}} : {lines},
        storefront,
      });
    } else {
      result = await cartAdd({
        cartId,
        lines,
        storefront,
      });
    }
    cartId = result.cart.id;
    break;

    case 'REMOVE_FROM_CART':
    const lineIds = formData.get('linesIds')
      ? JSON.parse(String(formData.get('linesIds')))
      : [];
    if (!lineIds.length) {
      throw new Error('No lines to remove');
    }
    result = await cartRemove({
      cartId,
      lineIds,
      storefront,
    });
    cartId = result.cart.id;
    break;
    default:
    throw new Error('Invalid cart action');
}
d
    session.set('cartId', cartId);
    headers.set('Set-Cookie', await session.commit());
    const {cart, errors} = result;
    return json({cart, errors}, {status, headers});

}
export default function Cart() {
  return (
<div id="container">

        <div className="container-header">

          <div className="icons">

            <span className='red'></span>
            <span className='yellow'></span>
            <span className='green'></span>


          </div>

          <div className="name">

            <p>Shopping Cart</p>

          </div>

        </div>

        <div id="container-wrapper">


        </div>

      </div>

  );
}

const USER_ERROR_FRAGMENT = `#graphql
  fragment ErrorFragment on CartUserError {
    message
    field
    code
  }
`;
const LINES_CART_FRAGMENT = `#graphql
  fragment CartLinesFragment on Cart {
    id
    totalQuantity
  }
`;
//! @see: https://shopify.dev/api/storefront/{api_version}/mutations/cartcreate
const CREATE_CART_MUTATION = `#graphql
  mutation ($input: CartInput!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;
const ADD_LINES_MUTATION = `#graphql
  mutation ($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode = ZZ, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartLinesFragment
      }
      errors: userErrors {
        ...ErrorFragment
      }
    }
  }
  ${LINES_CART_FRAGMENT}
  ${USER_ERROR_FRAGMENT}
`;
const REMOVE_LINE_ITEMS_MUTATION = `#graphql
  mutation ($cartId: ID!, $lineIds: [ID!]!, $language: LanguageCode, $country: CountryCode)
  @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        totalQuantity
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ...on ProductVariant {
                  id
                }
              }
            }
          }
        }
      }
      errors: userErrors {
        message
        field
        code
      }
    }
  }
`;