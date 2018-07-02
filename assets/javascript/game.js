//GLOBAL VARIABLES 

var wins = 0;
var losses = 0;
var computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var totalScore = 0;
var crystalNumber = 0;
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];




//FUNCTIONS 

//this prints the computer's number in the window 
$("#compNum").text(computerNumber);
$("#totalScore").text(totalScore);


function randomNumber() {
  crystalNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  return crystalNumber;
};

crystal1[0] = randomNumber();
crystal2[0] = randomNumber();
crystal3[0] = randomNumber();
crystal4[0] = randomNumber();


function reset() {
  totalScore = 0;
  $("#totalScore").text(totalScore);
  crystal1[0] = randomNumber();
  crystal2[0] = randomNumber();
  crystal3[0] = randomNumber();
  crystal4[0] = randomNumber();
  computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  $("#compNum").text(computerNumber);
}

function compareNum() {
  if (totalScore === computerNumber) {
    wins++;
    $("#wins").text(wins);
    reset();
  } else if (totalScore > computerNumber) {
    losses++;
    $("#losses").text(losses);
    reset();
  }
}


$("#crystal1").on("click", function () {
  totalScore = (crystal1[0]) + (totalScore);
  $("#totalScore").text(totalScore);
  compareNum();
});

$("#crystal2").on("click", function () {
  totalScore = (crystal2[0]) + (totalScore);
  $("#totalScore").text(totalScore);
  compareNum();
});

$("#crystal3").on("click", function () {
  totalScore = (crystal3[0]) + (totalScore);
  $("#totalScore").text(totalScore);
  compareNum();
});

$("#crystal4").on("click", function () {
  totalScore = (crystal4[0]) + (totalScore);
  $("#totalScore").text(totalScore);
  compareNum();
});




// function restart() {
//   $("#compNum").text(computerNumber);

//   function randomNumber() {
//     crystalNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
//     return crystalNumber;
//   };

//   crystal1[0] = randomNumber();
//   console.log(crystal1[0]);
//   crystal2[0] = randomNumber();
//   console.log(crystal2[0]);
//   crystal3[0] = randomNumber();
//   console.log(crystal3[0]);
//   crystal4[0] = randomNumber();
//   console.log(crystal4[0]);
// }




