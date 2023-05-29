let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let rockBtn = document.querySelector(".rock");
let game = document.querySelector(".game");
let main = document.getElementById("main");
let steps = document.querySelector(".step2");
let resetBtn = document.querySelector(".result-btn");
let userImage = document.getElementById("user-image");
let userDiv = document.querySelector(".user-div");
let users = document.querySelectorAll(".user");
let houseImage = document.getElementById("house-image");
let houseDiv = document.querySelector(".house-div");

handOptions = {
  rock: "images/icon-rock.svg",
  paper: "images/icon-paper.svg",
  scissors: "images/icon-scissors.svg",
};

divOptions = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

const userChoice = (hand) => {
  game.style.display = "none";
  steps.style.display = "flex";
  userImage.src = handOptions[hand];
  userDiv.classList.add(divOptions[hand]);
  ComputerChoice();
};

paperBtn.addEventListener("click", () => userChoice("paper"));
scissorsBtn.addEventListener("click", () => userChoice("scissors"));
rockBtn.addEventListener("click", () => userChoice("rock"));

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

const ComputerChoice = () => {
  let game = ["rock", "paper", "scissors"];
  let randomNumber = game[Math.floor(Math.random() * game.length)];

  console.log("randomNumber", randomNumber);

  houseImage.src = handOptions[randomNumber];
  houseDiv.classList.add(divOptions[randomNumber]);
};
