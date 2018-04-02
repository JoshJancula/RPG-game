// wait for document to load
$(document).ready(function() {


  var characters = [

    {
      name: "char1",
      power: function() {
        return Math.floor(Math.random() * 5) + 8;
      },
      health: 100,
      defense: 1,
      played: false,
      image: "images/char1.jpeg"

    },
    {
      name: "char2",
      power: function() {
        return Math.floor(Math.random() * 7) + 7;
      },
      health: 90,
      defense: 2,
      played: false,
      image: "images/char2.jpeg"

    },
    {
      name: "char3",
      power: function() {
        return Math.floor(Math.random() * 8) + 5;
      },
      health: 85,
      defense: 3,
      played: false,
      image: "images/char3.jpeg"

    },
    {
      name: "char4",
      power: function() {
        return Math.floor(Math.random() * 7) + 9;
      },
      health: 80,
      defense: 4,
      played: false,
      image: "images/char4.jpeg"

    },
    {
      name: "char5",
      power: function() {
        return Math.floor(Math.random() * 9) + 3;
      },
      health: 85,
      defense: 3,
      played: false,
      image: "images/char5.jpeg"


    },
    {
      name: "char6",
      power: function() {
        return Math.floor(Math.random() * 8) + 6;
      },
      health: 85,
      defense: 3,
      played: false,
      image: "images/char6.jpeg"

    },
  ];

  var yourHealth;
  var opponentHealth;
  var opponentDefense;
  var yourCharacter = 0;
  var yourPower = 0;
  var opponentCharacter = 0;
  var opponentPower = 0;
  var roundNumber = 1;
  var yourDefense;


  // get your initial character
  function getCharacters() {
    for (var i = 0; i < characters.length; i++) {
      if (characters[i].played == false) {
        // show it
        var panel = $("<div class='item character'>").append(
          "<img id=" + characters[i].name + " class='character'  value='" + [i] + "' src='" + characters[i].image + "'>");

      }
      $("#charactersArea").append(panel);
    }
  }


  function getEnemies() {
    for (var i = 0; i < characters.length; i++) {
      if (characters[i].played == false) {

        // show it
        var panel2 = $("<div class='item enemies'>").append(
          "<img id='" + characters[i].name + "' class='enemies'  value='" + [i] + "'img src='" + characters[i].image + "'>");

      }
      $("#enemyArea").append(panel2);
    }
  }


  getCharacters()
  $("#battleView").hide();
  $("#selectOpponent").hide();
  // $("#yourStats").hide();
  $(".attack").hide();
  $("#vs").hide();
  $("#stats").hide()
  $("#nextRound").hide()

  // Pick your character

  $(document).on("click", ".character", function() {

    yourCharacter = $(this).attr("value");
    $("#selectCharacter").hide();
    $("#selectOpponent").show();


    if (yourCharacter == 0) {
      $("#yourCharacter").html("<img src='images/char1.jpeg'>");
      yourHealth = characters[0].health;
      yourPower = characters[0].power;
      yourDefense = characters[0].defense;
      characters[0].played = true;
    }
    else if (yourCharacter == 1) {
      $("#yourCharacter").html("<img src='images/char2.jpeg'>");
      yourHealth = characters[1].health;
      yourPower = characters[1].power;
      yourDefense = characters[1].defense;
      characters[1].played = true;
    }
    else if (yourCharacter == 2) {
      $("#yourCharacter").html("<img src='images/char3.jpeg'>");
      yourHealth = characters[2].health;
      yourPower = characters[2].power;
      yourDefense = characters[2].defense;
      characters[2].played = true;
    }
    else if (yourCharacter == 3) {
      $("#yourCharacter").html("<img src='images/char4.jpeg'>");
      yourHealth = characters[3].health;
      yourPower = characters[3].power;
      yourDefense = characters[3].defense;
      characters[3].played = true;
    }
    else if (yourCharacter == 4) {
      $("#yourCharacter").html("<img src='images/char5.jpeg'>");
      yourHealth = characters[4].health;
      yourPower = characters[4].power;
      yourDefense = characters[4].defense;
      characters[4].played = true;
    }
    else if (yourCharacter == 5) {
      $("#yourCharacter").html("<img src='images/char6.jpeg'>");
      yourHealth = characters[5].health;
      yourPower = characters[5].power;
      yourDefense = characters[5].defense;
      characters[5].played = true;
    }

    $(".character").hide();
    // get enemies to pick from
    getEnemies();


  });

  // Pick your first opponent

  $(document).on("click", ".enemies", function() {
    $(".enemies").hide();
    // $(this).show();
    $("#selectOpponent").hide();
    $("#nextRound").hide()
    $("#battleView").show();

    $("#vs").show();
    opponentCharacter = $(this).attr("value");
    $(".attack").show();
    $("#round").text("Round " + roundNumber)
    $("#yourStats").show();
    if (opponentCharacter == 0) {
      $("#enemyCharacter").html("<img src='images/char1.jpeg'>");
      opponentHealth = characters[0].health;
      opponentPower = characters[0].power;
      opponentDefense = characters[0].defense;
      characters[0].played = true;
    }
    else if (opponentCharacter == 1) {
      $("#enemyCharacter").html("<img src='images/char2.jpeg'>");
      opponentHealth = characters[1].health;
      opponentPower = characters[1].power;
      opponentDefense = characters[1].defense;
      characters[1].played = true;
    }
    else if (opponentCharacter == 2) {
      $("#enemyCharacter").html("<img src='images/char3.jpeg'>");
      opponentHealth = characters[2].health;
      opponentPower = characters[2].power;
      opponentDefense = characters[2].defense;
      characters[2].played = true;
    }
    else if (opponentCharacter == 3) {
      $("#enemyCharacter").html("<img src='images/char4.jpeg'>");
      opponentHealth = characters[3].health;
      opponentPower = characters[3].power;
      opponentDefense = characters[3].defense;
      characters[3].played = true;
    }
    else if (opponentCharacter == 4) {
      $("#enemyCharacter").html("<img src='images/char5.jpeg'>");
      opponentHealth = characters[4].health;
      opponentPower = characters[4].power;
      opponentDefense = characters[4].defense;
      characters[4].played = true;
    }
    else if (opponentCharacter == 5) {
      $("#enemyCharacter").html("<img src='images/char6.jpeg'>");
      opponentHealth = characters[5].health;
      opponentPower = characters[5].power;
      opponentDefense = characters[5].defense;
      characters[5].played = true;
    }


  });


  // Attack button
  var newYourPower = 0;
  var newYourDefense = 0;
  var damageDone;
  var damageTaken;

  $(".attack").on("click", function() {
    $("#stats").show();
   
    // this calculates how much damage you took
    
    opponentHealth = ((opponentHealth + opponentDefense) - (yourPower() + newYourPower));
    yourHealth = ((yourHealth + yourDefense) - opponentPower());
    $("#round").text("Round " + roundNumber);
    $("#opponentHealth").text("Opponent Health: " + opponentHealth);
    $("#yourHealth").text("Your Health: " + yourHealth);
    // $("#damageTaken").text("You took " + opponentPower() + " damage");
    // $("#damageDone").text("You dealt " + (yourPower() + newYourPower) + " damage");
     // if you lose
    if (yourHealth <= 0) {
      // alert("GAME OVER YOU LOSE!");
      $('#youLose').modal('open');
      //refresh the page
      setTimeout(function() {
        location.reload(); //return to normal
      }, 3500)

    }
    // if you win
    else if (opponentHealth <= 0) {
       
      roundNumber += 1;
      if (roundNumber > 5) {
        $("#scoreArea").hide();
         $('#youWin').modal('open');
          setTimeout(function() {
        location.reload(); //return to normal
      }, 3500)
    }
      $("#battleView").hide();
      $("#Attack").hide();
      // set up the next round
      yourHealth = yourHealth + 60;
      newYourPower += 1;
      opponentHealth = 0;
      damageDone = 0;
      damageTaken = 0;
      // show remaining enemies
      getEnemies()
      $("#opponentHealth").text(opponentHealth)

      $("#round").text("Round " + roundNumber);
      $("#yourHealth").text("Your Health: " + yourHealth);
      $("#stats").hide();
      $("#nextRound").show();
      $("damageTaken").text("");
      $("damageDone").text("");

    }

   




  });


  $("#resetGame").on("click", function() {
    location.reload();
  });



});
