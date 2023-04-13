import { useEffect } from "react";

export const meta = () => {
  return {
    title: 'FortyFourWings',
    description: 'FortyFourWings',
  };
};



export default function Index() {

 useEffect(() => {


    let container = document.querySelector("#container");
    let dino = document.querySelector("#dino");
    let block = document.querySelector("#block");
    let road = document.querySelector("#road");
    let cloud = document.querySelector("#cloud");
    let score = document.querySelector("#score");
    let gameOver = document.querySelector("#gameOver");

    let interval = null;
    let playerScore = 0;


    let scoreCounter = () => {
        playerScore++;
        score.innerHTML = `Score <b>${playerScore}</b>`;
    }


    window.addEventListener("keydown", (start) => {
        if (start.code == "Space") {
            gameOver.style.display = "none";
            block.classList.add("blockActive");
            road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
            cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

            let playerScore = 0;
            interval = setInterval(scoreCounter, 200);
        }
    });


    window.addEventListener("keydown", (e) => {

    if (e.key == "ArrowUp")
            if (dino.classList != "dinoActive") {
                dino.classList.add("dinoActive");

                //                remove class after 0.5 seconds
                setTimeout(() => {
                    dino.classList.remove("dinoActive");
                }, 500);
            }
    });

    window.addEventListener("touchstart", (start) => {
      gameOver.style.display = "none";
      block.classList.add("blockActive");
      road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
      cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

      let playerScore = 0;
      interval = setInterval(scoreCounter, 200);
  });

    window.addEventListener("touchstart", (e) => {
        //    console.log(e);
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
    });


        let result = setInterval(() => {
        let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
        let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));


        if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
            gameOver.style.display = "block";
            block.classList.remove("blockActive");
            road.firstElementChild.style.animation = "none";
            cloud.firstElementChild.style.animation = "none";
            clearInterval(interval);
            playerScore = 0;
        }
    }, 10);



 });


  return (
    
    <div id="container">

      <div id="dino">

        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/dino.png?v=1681307617"></img>

      </div>

      <div id="block">

        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/file.png?v=1681311349"></img>

      </div>

      <div id="road">

        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/road.png?v=1681307617"></img>

      </div>

      <div id="cloud">

        <img src="https://cdn.shopify.com/s/files/1/0671/7338/4483/files/cloud.jpg?v=1681307617"></img>

      </div>

      <div id="score">

        Score
        
        <b>00</b>

      </div>

      <div id="gameOver">

        Game Over

      </div>

    </div>


  );
}