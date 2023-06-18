import Game from "./game";
import Countdown from "./countdown";
import Datum from "./date";
import Gallery from "./products";
import Cart from "./cart";
import { useEffect } from "react";


export default function Desktop(){


    useEffect(() => {

    var shop = document.getElementById("shop");
    dragElement(shop);

    var files = document.getElementById("files");
    dragElement(files);

    var tiktok = document.getElementById("tiktok");
    dragElement(tiktok)

    var instagram = document.getElementById("instagram");
    dragElement(instagram);



    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var startingZIndex = parseInt(elmnt.style.zIndex) || 1;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

        elmnt.style.zIndex = startingZIndex + 1;
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

        elmnt.style.zIndex = 1;

        
    }
    }



    })


return (


    <div className="main">

        <div className="stvorky">

            <div className="text-wrapper">

                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/44ky.gif?v=1677352291"></img>

            </div>

        </div>

        <div className="date">

                <Datum />

        </div>

        <div className="countdown">


            <Countdown />


        </div>   

        <div className="apps">

            <div id="shop">

                <div className="center">

                    <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/com.apple.Passbook.png?v=1681664860"></img>

                    <p>SHOPPING CART</p>

                </div>
        
            </div>

            <div id="files">

                <div className="center">

                    <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/com.apple.DocumentsApp.png?v=1681664860"></img>

                    <p>FILES</p>

                </div>

            </div>

        </div>

        <div className="apps">

        </div>

        <div className="apps">

            <a onDoubleClick={() => window.open("https://www.instagram.com/fortyfourwings", "blank")}>

                <div id="instagram">

                    <div className="center">

                        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/Instagram-Logo.png?v=1681664860"></img>
                        <p>INSTAGRAM</p>

                    </div>
                </div>

            </a>

            <a onDoubleClick={() => window.open("https://www.tiktok.com/@fortyfourwings", "blank")}>

                <div id="tiktok">

                    <div className="center">

                        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/tiktok_logo.png?v=1681664860"></img>
                        <p>TIKTOK</p>
                    </div>

                </div>

            </a>
            
         <div className="bg-text">

            <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/Stvorky.png?v=1687093637"/>

        </div>

        </div>
        
        <div className="Dekstop">
 
         </div>

        <footer>

            <div className="footer-img-1">

                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/1_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/2_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/3_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_MAY_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_1_MAY_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_2_MAY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_3_MAY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/5_JUNE_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/6_JULY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/7_JULY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/8_JULY_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/9_CT_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/10_NOV_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/11_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/12_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/13_NOV_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/14_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/15_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/16_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/17_DEC_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/18_APRIL_2023.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/19_ERROR_444.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/20.png?v=1681664755"></img>
            
            </div>

            <div className="footer-img-2">

                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/1_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/2_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/3_NOV_2021.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_MAY_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_1_MAY_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_2_MAY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/4_3_MAY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/5_JUNE_2022.png?v=1681664659"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/6_JULY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/7_JULY_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/8_JULY_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/9_CT_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/10_NOV_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/11_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/12_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/13_NOV_2022.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/14_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/15_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/16_NOV_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/17_DEC_2022.png?v=1681664660"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/18_APRIL_2023.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/19_ERROR_444.png?v=1681664661"></img>
                <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/20.png?v=1681664755"></img>
            
            </div>

        </footer>

    </div>


);
}
