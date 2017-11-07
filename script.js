

// wait for document to load
 $(document).ready(function() {

// create characters as variables
var char1 = {
	power: 6,
	health: 100
};

var char2 = {
	power: 8,
	health: 90
};

var char3 = {
	power: 9,
	health: 85
};

var char4 = {
	power: 10,
	health: 80
};

 var yourHealth;
 var opponentHealth;
 var yourCharacter = 0;
 var yourPower = 0;
 var opponentCharacter = 0;
 var opponentPower = 0;

 

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
        } 
        else if (yourCharacter == 2) {
        	$("#char2a").hide();
        	yourHealth = char2.health;
        	yourPower = char2.power;
        }
       else if (yourCharacter == 3) {
        	$("#char3a").hide();
        	yourHealth = char3.health;
        	yourPower = char3.power;
        }
       else if (yourCharacter == 4) {
        	$("#char4a").hide();
        	yourHealth = char4.health;
        	yourPower = char4.power;
        }

  
});

// Pick your first opponent

 $(".enemies").on("click", function() {
        $(".enemies").hide();
        $(this).show();
        opponentCharacter = this.value;
        $(".attack").show();
        if (opponentCharacter == 1) {
        	opponentHealth = char1.health;
        	opponentPower = char1.power;
        } 
        else if (opponentCharacter == 2) {
        	opponentHealth = char2.health;
        	opponentPower = char2.power;
        }
       else if (opponentCharacter == 3) {
        	opponentHealth = char3.health;
        	opponentPower = char3.power;
        }
       else if (opponentCharacter == 4) {
        	opponentHealth = char4.health;
        	opponentPower = char4.power;
        }
        
   
});


// Attack button

  
  $(".attack").on("click", function() {
       opponentHealth = opponentHealth - yourPower;
       yourHealth = yourHealth - opponentPower;
       $("#opponentHealth").text(opponentHealth);
       $("#yourHealth").text(yourHealth);
        // if you win
       if (opponentHealth <= 0) {
        alert("CHOOSE YOUR NEXT CONTENDOR!");
        yourHealth = yourHealth + 30;
        yourPower = yourPower + 5;
        opponentHealth = 0;
        $(".enemies").show();
        $("#opponentHealth").text(opponentHealth);
        $("#yourHealth").text(yourHealth);
        $(".attack").hide();

       }
        // if you lose
       if (yourHealth <= 0) {
       	alert("GAME OVER YOU LOSE!");
         $(".enemies").hide();
          $(".character").show();
          $(".attack").hide();
          opponentHealth = 0;
          yourHealth = 0;
          $("#opponentHealth").text(opponentHealth);
          $("#yourHealth").text(yourHealth);
          $(".attack").hide();




       } 

       
   
});





});
   