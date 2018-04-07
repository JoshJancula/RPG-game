// wait for document to load
$(document).ready(function() {


  var characters = [

    {
      name: "char1",
      power: function() {
        return Math.floor(Math.random() * 5) + 8;
      },
      health: 100,
      defense: 4,
      played: false,
      image: "images/char1.jpeg"

    },
    {
      name: "char2",
      power: function() {
        return Math.floor(Math.random() * 7) + 8;
      },
      health: 100,
      defense: 3,
      played: false,
      image: "images/char2.jpeg"

    },
    {
      name: "char3",
      power: function() {
        return Math.floor(Math.random() * 8) + 8;
      },
      health: 100,
      defense: 2,
      played: false,
      image: "images/char3.jpeg"

    },
    {
      name: "char4",
      power: function() {
        return Math.floor(Math.random() * 7) + 8;
      },
      health: 100,
      defense: 3,
      played: false,
      image: "images/char4.jpeg"

    },
    {
      name: "char5",
      power: function() {
        return Math.floor(Math.random() * 9) + 8;
      },
      health: 100,
      defense: 1,
      played: false,
      image: "images/char5.jpeg"


    },
    {
      name: "char6",
      power: function() {
        return Math.floor(Math.random() * 8) + 8;
      },
      health: 100,
      defense: 2,
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
  var newYourPower = 0;



  // get your initial character
  function getCharacters() {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].played == false) {
        // show it
        var panel = $("<div class='item'>").append(
          "<img id=" + characters[i].name + " class='character' value='" + [i] + "' src='" + characters[i].image + "'>");

      }
      $("#charactersArea").append(panel);
    }
  }


  function getEnemies() {
    for (let i = 0; i < characters.length; i++) {
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

    $("#charactersArea").hide();
    // get enemies to pick from
    getEnemies();
   
  });

  // Pick your first opponent

  $(document).on("click", ".enemies", function() {
    $("#enemyArea").hide();
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


  $(".attack").on("click", function() {
    $("#stats").show();
    
    $("#battleView").shake({
            interval: 100,
            distance: 20,
            times: 5
        });
        
       
    // this calculates how much damage you took

    opponentHealth = ((opponentHealth) - ((yourPower() + newYourPower) - opponentDefense));
    yourHealth = ((yourHealth) - (opponentPower() - yourDefense));
    $("#round").text("Round " + roundNumber);
    $("#opponentHealth").text("Opponent Health: " + opponentHealth);
    $("#yourHealth").text("Your Health: " + yourHealth);
    // if you lose
    if (yourHealth <= 0) {
      $('#youLose').modal('open');
      //refresh the page
      setTimeout(function() {
        location.reload(); 
      }, 3500)

    }
    // if you win
    else if (opponentHealth <= 0) {
      $("#enemyArea").empty()
      $("#enemyArea").show();
      roundNumber += 1;
      if (roundNumber > 5) {
        $("#scoreArea").hide();
        $('#youWin').modal('open');
        setTimeout(function() {
          location.reload();
        }, 3500)
      }
      $("#battleView").hide();
      $("#Attack").hide();
      // set up the next round
     if (roundNumber <= 2) {
       yourHealth += 80;
     } else {
       yourHealth += 50;
     }
     console.log(yourHealth)
      yourDefense += 1;
      newYourPower += 1;
      opponentHealth = 0;
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



(function($){
    $.fn.shake = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ left:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ left: 0}, settings.interval, settings.complete);  
    }; 
    $.fn.bounce = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ top:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ top: 0}, settings.interval, settings.complete);  
    };
})(jQuery);
        

   


});
