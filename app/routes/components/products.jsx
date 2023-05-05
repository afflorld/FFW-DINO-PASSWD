import { MediaFile } from '@shopify/hydrogen-react';
import {useLoaderData} from '@remix-run/react';
import {useEffect} from 'react';

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
    <div>
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
          <div
            key={data.id || data.image.id}
          >
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

                      <span className='red'></span>
                      <span className='yellow'></span>
                      <span className='green'></span>


                  </div>

                  <div className="name">

                      <p>
                          {products.edges[2].node.title}
                      </p>

                  </div>

              </div>

              <div id="container-wrapper">

                  <ProductGallery media={products.edges[2].node.media.nodes}/>


              </div>

          </div>

            <div id="container3">

              <div className="container-header">

                  <div className="icons">

                      <span className='red'></span>
                      <span className='yellow'></span>
                      <span className='green'></span>


                  </div>

                  <div className="name">

                      <p>
                          {products.edges[1].node.title}
                      </p>

                  </div>

              </div>

              <div id="container-wrapper">

                  <ProductGallery media={products.edges[1].node.media.nodes}/>


              </div>

          </div>
        </div>

    );
}