var wins = 0;
var losses = 0;
var compScore = 0;
var userScore = 0;
var crystalNumber = 0;
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];


function startGame() {

  userScore = 0;

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  compScore = randomNumber(19, 120);
  crystal1[0] = randomNumber(1, 12);
  crystal2[0] = randomNumber(1, 12);
  crystal3[0] = randomNumber(1, 12);
  crystal4[0] = randomNumber(1, 12);


  $("#compScore").text(compScore);
  $("#userScore").text(userScore);
};

startGame();

function compareScore() {
  if (userScore === compScore) {
    wins++;
    $("#wins").text(wins);
    startGame();
  } else if (userScore > compScore) {
    losses++;
    $("#losses").text(losses);
    startGame();
  }
}

function add(userScore) {
  $("#userScore").text(userScore);
}

$("#crystal1").on("click", function () {
  userScore = (crystal1[0]) + (userScore);
  add(userScore);
  compareScore();
});

$("#crystal2").on("click", function () {
  userScore = (crystal2[0]) + (userScore);
  add(userScore);
  compareScore();
});

$("#crystal3").on("click", function () {
  userScore = (crystal3[0]) + (userScore);
  add(userScore);
  compareScore();
});

$("#crystal4").on("click", function () {
  userScore = (crystal4[0]) + (userScore);
  add(userScore);
  compareScore();
});
