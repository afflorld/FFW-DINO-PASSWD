import { useEffect } from "react";

export default function Datum(){

    useEffect(() => {


        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

        const d = new Date;

        document.getElementById('day').innerHTML = d.getDate() + "th";
        document.getElementById('month').innerHTML = months[d.getMonth()];
        document.getElementById('year').innerHTML = d.getFullYear();


    });


    return(


        <div className="date-wrapper">

            <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/OptionWiFi.png?v=1681664859"></img>
            <p id="day"></p>
            <p id="month"></p>
            <p id="year"></p>

        </div>



    );



}