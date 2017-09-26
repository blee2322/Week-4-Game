//Crystal Buttons
$(document).ready(function() {

//Global Variables

  //Displays wins and losses
  var wins = 0
  var losses = 0
  $("#wins").html("Wins: " + wins);
  $("#losses").html("Losses: "+ losses);

  //This holds the cummulative value of crystals clicked
  var playerTotal = 0
  $("#results").html("Cumulative Value of Crystals: " + playerTotal);

//This is a number that game will randomly generate and show it in the rannum div
  var startNum = Math.floor(Math.random() * 102 + 19);
  $("#rannum").html(startNum);
  console.log(startNum);

  //These will assign the random numbers to each crystal
  var DiaCrystal = Math.floor(Math.random() * 11 + 1);
  var OpCrystal = Math.floor(Math.random() * 11 + 1);
  var RubCrystal = Math.floor(Math.random() * 11 + 1);
  var SapphCrystal = Math.floor(Math.random() * 11 + 1);
  console.log(DiaCrystal,OpCrystal,RubCrystal,SapphCrystal);

  //This function starts the game and restarts the game
  function resetGame() {
    startNum = Math.floor(Math.random() * 102 + 19);
    $("#rannum").html(startNum);
    DiaCrystal = Math.floor(Math.random() * 11 + 1);
    OpCrystal = Math.floor(Math.random() * 11 + 1);
    RubCrystal = Math.floor(Math.random() * 11 + 1);
    SapphCrystal = Math.floor(Math.random() * 11 + 1);
    playerTotal = 0
    console.log(DiaCrystal,OpCrystal,RubCrystal,SapphCrystal);  }

  function win() {
    wins++;
    alert("You won");
    $("#wins").html("Wins: " + wins);
    resetGame();
  }

  function lose() {
    losses++;
    alert("You Lost");
    $("#losses").html("Losses: "+ losses);
    resetGame();
  }

  //When a crystal is clicked 
  $("#opal").on("click", function() {
    playerTotal = playerTotal + OpCrystal;
    console.log(playerTotal);
    if(playerTotal === startNum) {
      win();
    }else if (playerTotal >= startNum) {
      lose();
    }
    $("#results").html("Cumulative Value of Crystals: " + playerTotal);
  })
  $("#ruby").on("click", function() {
    playerTotal = playerTotal + RubCrystal;
    console.log(playerTotal);
    if(playerTotal === startNum) {
      win();
    }else if (playerTotal >= startNum) {
      lose();
    }
    $("#results").html("Cumulative Value of Crystals: " + playerTotal);
  })
  $("#diamond").on("click", function() {
    playerTotal = playerTotal + DiaCrystal;
    console.log(playerTotal);
    if(playerTotal === startNum) {
      win();
    }else if (playerTotal >= startNum) {
      lose();
    }
    $("#results").html("Cumulative Value of Crystals: " + playerTotal);
  })
  $("#sapphire").on("click", function() {
    playerTotal = playerTotal + SapphCrystal;
    console.log(playerTotal);
    if(playerTotal === startNum) {
      win();
    }else if (playerTotal >= startNum) {
      lose();
    }
    $("#results").html("Cumulative Value of Crystals: " + playerTotal);
  })


});