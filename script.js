

// wait for document to load
 $(document).ready(function() {


var characters = [

 {
  name: char1,
	power: function() {
    return Math.floor(Math.random()*5)+8;
  },
	health: 100,
  defense: 2,
  played: false,
  image: "/images/char1.jpeg"

},
{
  name: char2,
	power: function() {
    return Math.floor(Math.random()*7)+7;
  },
	health: 90,
  defense: 4,
  played: false,
  image: "/images/char2.jpeg"

},
{
  name: char3,
	power: function() {
    return Math.floor(Math.random()*8)+5;
  },
	health: 85,
  defense: 5,
  played: false,
  image: "/images/char3.jpeg"

},
{
  name: char4,
	power: function() {
    return Math.floor(Math.random()*7)+10;
  },
	health: 80,
  defense: 6,
  played: false,
  image: "/images/char4.jpeg"

},
{
  name: char5,
  power: function() {
    return Math.floor(Math.random()*9)+3;
  },
  health: 85,
  defense: 5,
  played: false,
  image: "/images/char5.jpeg"


},
{
  name: char6,
  power: function() {
    return Math.floor(Math.random()*8)+6;
  },
  health: 85,
  defense: 5,
  played: false,
  image: "/images/char1.jpeg"

},
];

 var yourHealth;
 var opponentHealth;
 var yourCharacter = 0;
 var yourPower = 0;
 var opponentCharacter = 0;
 var opponentPower = 0;
 var roundNumber = 1;
 

  function getCharacters() {
for(var i = 0; i < characters.length; i++) {
  if (characters[i].played == true) {
    // hide the character
    console.log("already played")
  }
  else {
    // show it
   var div = $("<div>").append(
    "<button id=" + characters[i].name + " class='btn btn-primary character'  value='" + [i] + "''><img src=" + characters[i].image + "'</button>" );
    $("#charactersArea").append(div);
  }
}
}
 getCharacters()
$("#scoreArea").hide();
$(".enemies").hide();
$(".attack").hide();

// Pick your character

   $(".character").on("click", function() {
   		yourCharacter = this.value;
        $(".character").hide();
        $(this).show();
        $(".enemies").show();
        if (yourCharacter == 1) {
        	$("#char1a").hide();
        	yourHealth = char1.health;
        	yourPower = char1.power;
          yourDefense = charl.defense;
          char1.played = true;
        } 
        else if (yourCharacter == 2) {
        	$("#char2a").hide();
        	yourHealth = char2.health;
        	yourPower = char2.power;
          yourDefense = char2.defense;
          char2.played = true;
        }
       else if (yourCharacter == 3) {
        	$("#char3a").hide();
        	yourHealth = char3.health;
        	yourPower = char3.power;
          yourDefense = char3.defense;
          char3.played = true;
        }
       else if (yourCharacter == 4) {
        	$("#char4a").hide();
        	yourHealth = char4.health;
        	yourPower = char4.power;
          yourDefense = char4.defense;
          char4.played = true;
        }
        else if (yourCharacter == 5) {
          $("#char5a").hide();
          yourHealth = char5.health;
          yourPower = char5.power;
          yourDefense = char6.defense;
          char5.played = true;
        }
        else if (yourCharacter == 6) {
          $("#char6a").hide();
          yourHealth = char6.health;
          yourPower = char6.power;
          yourDefense = char6.defense;
          char6.played = true;
        }

  
});

// Pick your first opponent

 $(".enemies").on("click", function() {
        $(".enemies").hide();
        $(this).show();
        opponentCharacter = this.value;
        $(".attack").show();
         $("#round").text("Round " + roundNumber)
        $("#scoreArea").show();
        if (opponentCharacter == 1) {
        	opponentHealth = char1.health;
        	opponentPower = char1.power;
          opponentDefense = charl.defense;
        } 
        else if (opponentCharacter == 2) {
        	opponentHealth = char2.health;
        	opponentPower = char2.power;
          opponentDefense = char2.defense;
        }
       else if (opponentCharacter == 3) {
        	opponentHealth = char3.health;
        	opponentPower = char3.power;
           opponentDefense = char3.defense;
        }
       else if (opponentCharacter == 4) {
        	opponentHealth = char4.health;
        	opponentPower = char4.power;
          opponentDefense = char4.defense;
        }
        else if (opponentCharacter == 5) {
          opponentHealth = char5.health;
          opponentPower = char5.power;
          opponentDefense = char5.defense;
        }
        else if (opponentCharacter == 6) {
          opponentHealth = char6.health;
          opponentPower = char6.power;
          opponentDefense = char6.defense;
        }
        
   
});


// Attack button
var newYourPower = 0;
var newYourDefense = 0;
  
  $(".attack").on("click", function() {
       opponentHealth = opponentHealth - (yourPower()+newYourPower);
       yourHealth = yourHealth - opponentPower();
       $("#round").text("Round " + roundNumber)
       $("#opponentHealth").text("Opponent Health: " + opponentHealth);
       $("#yourHealth").text("Your Health: " + yourHealth);
       $("#damageTaken").text("You took " + opponentPower() + " damage");
       $("#damageDone").text("You dealt " + (yourPower()+newYourPower) + " damage");
         // if you win
       if (opponentHealth <= 0) {
        roundNumber += 1;
        alert("CHOOSE YOUR NEXT CONTENDOR!");
        yourHealth = yourHealth + 60;
        newYourPower += 1;
        opponentHealth = 0;
        damageDone = 0;
        damageTaken = 0;
        // $(".enemies").show();
        getCharacters()
        $("#opponentHealth").text(opponentHealth);
        $("#yourHealth").text(yourHealth);
        $("damageTaken").text("");
        $("damageDone").text("");
        $(".attack").hide();
        $("#scoreArea").hide();


       }

        // if you lose
       if (yourHealth <= 0) {
       	alert("GAME OVER YOU LOSE!");
         $(".enemies").hide();
          $(".character").show();
          $(".attack").hide();
          opponentHealth = 0;
          yourHealth = 0;
          damageTaken = 0;
          damageDone = 0;
          $("#opponentHealth").text(opponentHealth);
          $("#yourHealth").text(yourHealth);
          $("damageTaken").text(damageTaken);
        $("damageDone").text(damageDone);
          $(".attack").hide();
          $("#scoreArea").hide();

       } 




  });

 });
   