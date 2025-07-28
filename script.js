const rollButton = document.querySelector(".rollButton");
const mainImage = document.querySelector(".mainImage");
const currentPointOne = document.querySelector(".currentPointOne");
const leftDiv = document.querySelector(".leftDiv")
const rightDiv  = document.querySelector(".rightDiv")
const holdButton = document.querySelector(".holdButton")
const playerOnePoint = document.querySelector(".playerOnePoint")

let x = 0;
let player  = 1;


function ChangePlayer(){
  if(player === 1){
    player = 2;
  }else if ( player === 2 ) {
    player = 1;
  }


}


function ChangeColor() {
  if (player === 1){
  leftDiv.style.backgroundColor = " rgba(255, 255, 255, 0.5)"
  rightDiv.style.backgroundColor = " rgba(255, 255, 255, 0.2) "
} else if ( player === 2){ 
  rightDiv.style.backgroundColor = "  rgba(255, 255, 255, 0.5) "
  leftDiv.style.backgroundColor = " rgba(255, 255, 255, 0.2)"
}


}





rollButton.addEventListener(
  "click",

  function () {
    const random = Math.floor(Math.random() * 6) + 1;
    
    

      


    if (random === 1) {
      mainImage.src = "./dice-1.png";
      x = 0 ;
      currentPointOne.textContent = x;
      if(player === 1){
        player = 2
      }
      ChangeColor();
    } else if (random === 2) {
      mainImage.src = "./dice-2.png";
      x = x + 2 
      currentPointOne.textContent = x;
      if( player === 2) {
        player = 1
      }
      ChangeColor();
    } else if (random === 3) {
      mainImage.src = "./dice-3.png";
      x = x + 3; 
      currentPointOne.textContent = x;
    } else if (random === 4) {
      mainImage.src = "./dice-4.png";
      x = x + 4;
      currentPointOne.textContent = x;
    } else if (random === 5) {
      mainImage.src = "./dice-5.png";
      x = x + 5;
      currentPointOne.textContent = x;
    } else {
      mainImage.src = "./dice-6.png";
      x = x + 6; 
      currentPointOne.textContent = x;
    }
  }
);
holdButton.addEventListener (
  `click`,
  function() {
    
    playerOnePoint.textContent ="1"
    ChangePlayer
  }
);