import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {ShopPayButton} from '@shopify/hydrogen-react';


export default function ProductOptions(){


    const {products, storeDomain} = useLoaderData();



    const [Index, setIndex]= useState(0);
    const [Quantity, setQuantity] = useState(0);

    const HandleVariantChange = (event) => {
      const IndexNumber = parseInt(event.target.selectedIndex, 10);
      setIndex(IndexNumber);


    };

    const HandleQuantityChange = (event) => {

      const QuantityNumber = parseInt(event.target.value, 10);
      setQuantity(QuantityNumber);

    };

    const variantId = products?.edges[2]?.node?.variants?.edges?.[Index]?.node?.id;
    const availableForSale = products?.edges[2]?.node?.variants?.edges[Index]?.node?.availableForSale;
    const check = availableForSale === false ? 'Sold out' : '';


    console.log(check);
    console.log(variantId);
    console.log(products?.edges?.[2]?.node?.variants?.edges?.[2]?.node?.quantityAvailable)
    console.log(products.edges[2].node.variants.edges[1].node);
    console.log(products.edges[2].node.options)



    return(

        <div className='products-options2'>
            
            <div className='size'>
                <p>Pick a Size</p>
                <select value={Index} onChange={HandleVariantChange}>
                {products.edges[2].node.options.map((option) => (
                    option.values.map((value, index) => (
                    <option key={option.name + value} value={index}>
                        {value}
                    </option>
                    ))
                ))}
                </select>
            </div>

            <div className='quantity'>
                <p>Quantity</p>
                <input id='quantity' className='quantity' type="number" min="0" max={products.edges[2].node.variants.edges[Index].node.quantityAvailable} value={Quantity} onChange={HandleQuantityChange}/>
            </div>

            <div className='paybtn'>
                <ShopPayButton 
                storeDomain={storeDomain} 
                variantIdsAndQuantities={[{id: variantId, quantity: Quantity}]}
                />
            </div>

        </div>
    );
}