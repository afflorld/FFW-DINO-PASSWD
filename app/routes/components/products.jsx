import { MediaFile } from '@shopify/hydrogen-react';
import {useLoaderData} from '@remix-run/react';
import {useEffect} from 'react';
import ProductOptions from './pruductOptions';

function ProductGallery({media}) {

  
  if (!media.length) {
    return null;
  }
  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };
  return (
    <div className="row-flex">
      {media.map((med, i) => {
        let extraProps = {};
        if (med.mediaContentType === 'MODEL_3D') {
          extraProps = {
            interactionPromptThreshold: '0',
            ar: true,
            loading: 'eager',
            disableZoom: true
          };
        }
        const data = {
          ...med,
          __typename: typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        };
        return (
          <div key={data.id || data.image.id} className="effect">
            <MediaFile
              tabIndex="0"
              data={data}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}



export default function Gallery(){
   
    const {products} = useLoaderData();
    

    function Open(hide, show, container){
        
      const rem = document.querySelector("." + hide);

        rem.style.display = "none";

      const add = document.querySelector("." + show);

        add.style.display = "flex";

      const location = document.querySelector("#" + container);

        location.style.top = '3%';
        location.style.left = '3%';

        location.style.zIndex = '30';
      }



    function Close(hide, show, container){

        const rem = document.querySelector("." + hide);

          rem.style.display = "none";

        const add = document.querySelector("." + show);

          add.style.display = "block";

        const location = document.querySelector("#" + container);

          location.style.zIndex = '10';

    }


    useEffect(() => {

      var container1 = document.getElementById("container2");
      dragElement(container1);

      var container2 = document.getElementById("container3");
      dragElement(container2);

      function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var header = elmnt.querySelector(".container-header");

        if (header) {
          header.onmousedown = dragMouseDown;
        } else {
          elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }

});
  
    return(

        <div>
          <div id="container2">

              <div className="container-header">

                  <div className="icons">

                      <span className='red' onClick={() =>Close('container-back2', 'container-front2', 'container2')}></span>
                      <span className='yellow'></span>
                      <span className='green' onClick={() =>Open('container-front2','container-back2','container2')}></span>


                  </div>

                  <div className="name">

                      <p>
                          {products.edges[2].node.title}
                      </p>

                  </div>

              </div>

              <div id="container-wrapper">
              
                <div className='container-front2'>

                  <ProductGallery media={[products.edges[2].node.media.nodes[0]]}/>
                  <p onClick={() =>Open('container-front2', 'container-back2', 'container2')}>BUY NOW</p>

                </div>

                <div className='container-back2'>

                  <div className='products-showoff2'>

                    <ProductGallery media={products.edges[2].node.media.nodes}/>

                  </div>

                  <div className='products-info'> 

                    <div className='products-top-info'>
                      <h1 className='products-title'>{products.edges[2].node.title}</h1>
                      <p className='products-price'>€{products.edges[2].node.variants.edges[0].node.price.amount}</p>
                    </div>

                    <ProductOptions 
                    
                    
                    />

                    <div className='products-description'>

                      <pre>
                        {products.edges[2].node.descriptionHtml}
                      </pre>

                    </div>
                  </div>

                </div>

              </div>

          </div>

          <div id="container3" className='container'>

              <div className="container-header">

                  <div className="icons">

                      <span className='red' onClick={() =>Close('container-back3','container-front3','container3')}></span>
                      <span className='yellow'></span>
                      <span className='green' onClick={() => Open('container-front3','container-back3','container3')}></span>


                  </div>

                  <div className="name">

                      <p>
                          {products.edges[3].node.title}
                      </p>

                  </div>

              </div>

              <div id="container-wrapper">
              
                <div className='container-front3'>

                  <ProductGallery media={[products.edges[3].node.media.nodes[0]]}/>
                  <p onClick={() => Open('container-front3', 'container-back3', 'container3')}>BUY NOW</p>

                </div>

                <div className='container-back3'>

                  <div className='products-showoff3'>

                    <ProductGallery media={products.edges[3].node.media.nodes}/>

                  </div>

                  <div className='products-info'> 

                    <div className='products-top-info'>
                      <p className='products-title'>{products.edges[3].node.title}</p>
                      <p className='products-price'>€{products.edges[3].node.variants.edges[0].node.price.amount}</p>
                      <p className='products-status'>{products.edges[3].node.variants.edges[0].node.availbeForSale ? "" : "Sold Out"}</p>

                    </div>

                    <ProductOptions />

                    <div className='products-description'>

                      <pre>
                        {products.edges[3].node.descriptionHtml}
                      </pre>

                    </div>
                  </div>

                </div>

              </div>

          </div>
                        
        </div>

            
    );
}