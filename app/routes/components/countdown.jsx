import { useEffect } from "react";

export default function Countdown(){

    useEffect(() => {

            
        const countDownDate = new Date("June 30, 2023 04:44:00").getTime();

        const interval = setInterval(() => {

        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("Countdown-top").innerHTML = days + " :";
        document.getElementById("Countdown-top-half").innerHTML = hours + " :";
        document.getElementById("Countdown-bottom-half").innerHTML = minutes + " :";
        document.getElementById("Countdown-bottom").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("Countdown-top").innerHTML = "DROP";
            document.getElementById("Countdown-top-half").innerHTML = "";
            document.getElementById("Countdown-middle").innerHTML = "IS";
            document.getElementById("Countdown-bottom-half").innerHTML = "";
            document.getElementById("Countdown-bottom").innerHTML = "HERE!";
        }
        }, 1000);


        return () => clearInterval(interval);
 
    });


    return(


        <div className="countdown-wrapper">

            <p id="Countdown-top"></p>

            <p id="Countdown-top-half"></p>

            <p id="Countdown-middle"></p>

            <p id="Countdown-bottom-half"></p>

            <p id="Countdown-bottom"></p>

        </div>


    );


}