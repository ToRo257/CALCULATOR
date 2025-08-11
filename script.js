const rollButton = document.querySelector(".rollButton");
const mainImage = document.querySelector(".mainImage");
const currentPointOne = document.querySelector(".currentPointOne");
const currentPointTwo = document.querySelector(".currentPointTwo");
const leftDiv = document.querySelector(".leftDiv");
const rightDiv = document.querySelector(".rightDiv");
const holdButton = document.querySelector(".holdButton");
const playerOnePoint = document.querySelector(".playerOnePoint");
const playerTwoPoint = document.querySelector(".playerTwoPoint");

let current = 0;
let player = 1;

rollButton.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 6) + 1;

  if (random === 1) {
    mainImage.src = "dice-1.png";
    CurrentSum(0);
    ClearCurrent();
    ChangePlayer();
  } else if (random === 2) {
    mainImage.src = "dice-2.png";
    CurrentSum(random);
  } else if (random === 3) {
    mainImage.src = "dice-3.png";
    CurrentSum(random);
  } else if (random === 4) {
    mainImage.src = "dice-4.png";
    CurrentSum(random);
  } else if (random === 5) {
    mainImage.src = "dice-5.png";
    CurrentSum(random);
  } else if (random === 6) {
    mainImage.src = "dice-6.png";
    CurrentSum(random);
  }
});

holdButton.addEventListener(
  "click",

  function () {
    UpdatePlayer();
    ChangePlayer();
    Winner();
  }
);

function ChangePlayer() {
  if (player === 1) {
    player = 2;
  } else if (player === 2) {
    player = 1;
  }

  if (player === 1) {
    leftDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    rightDiv.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  } else if (player === 2) {
    leftDiv.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    rightDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }
}

function CurrentSum(value) {
  if (player === 1) {
    current = current + value;
    currentPointOne.textContent = current;
  } else if (player === 2) {
    current = current + value;
    currentPointTwo.textContent = current;
  }
}

function UpdatePlayer() {
  if (player === 1) {
    playerOnePoint.textContent = Number(playerOnePoint.textContent) + current;
    current = 0;
    currentPointOne.textContent = current;
  } else if (player === 2) {
    playerTwoPoint.textContent = Number(playerTwoPoint.textContent) + current;
    current = 0;
    currentPointTwo.textContent = current;
  }
}


function ClearCurrent() {
  current = 0;
  if(player === 1) {
    currentPointOne.textContent = current;
  } else {
    currentPointTwo.textContent = current;
  }

  
}
function Winner() {
  if (Number(playerOnePoint.textContent) >= 10) {
    alert("Winner Player One !");
  }

  if (Number(playerTwoPoint.textContent) >= 10) {
    alert("Winner Player Two !");
  }
}
