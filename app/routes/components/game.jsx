import {useEffect } from 'react';


export default function Game(){

  //Start function of game very lazy

      function Start() {

      const start = document.querySelector(".game-start");

        start.style.display = "none";


      const game = document.querySelector(".game");

        game.style.display = "block";

      const resize = document.querySelector("#container-wrapper-dino");

        resize.style.width = '94vw';

        resize.style.height = '90vh';

      const location = document.querySelector("#container");

        location.style.top = '3%';
        location.style.left = '3%';
    }

    function Stop(){


    const start = document.querySelector(".game-start");

      start.style.display = "grid";


    const game = document.querySelector(".game");

      game.style.display = "none";

    const resize = document.querySelector("#container-wrapper-dino");

      resize.style.width = '20vw';

      resize.style.height = '24vh';

  }


useEffect(() => {

  //Game 

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
        score.innerHTML = `Score <p>${playerScore}</p>`;
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
                dino.classList.remove("dinoActive");blockLeft
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

  //Movable container

      var container = document.getElementById("container");
      dragElement(container);

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


  return (

      <div id="container">

        <div className="container-header">

          <div className="icons">

            <span className='red' onClick={Stop}></span>
            <span className='yellow'></span>
            <span className='green' onClick={Start}></span>


          </div>

          <div className="name">

            <p>FFW Dino Game</p>

          </div>

        </div>

        <div id="container-wrapper-dino">

          <div className='game-start'>

            <p>
                Press Green Button to play
            </p>


          </div>

          <div className='game'>

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

              <p>Score</p>

              <p>00</p>

            </div>

            <div id="gameOver">

              <p>Game over</p>

            </div>

          </div>

        </div>

      </div>

  );

}