

// wait for document to load
 $(document).ready(function() {

// create characters as variables
var char1 = {
	power: function() {
    return Math.floor(Math.random()*5)+8;
  },
	health: 100
};

var char2 = {
	power: function() {
    return Math.floor(Math.random()*7)+7;
  },
	health: 90
};

var char3 = {
	power: function() {
    return Math.floor(Math.random()*8)+5;
  },
	health: 85
};

var char4 = {
	power: function() {
    return Math.floor(Math.random()*7)+10;
  },
	health: 80
};

var char5 = {
  power: function() {
    return Math.floor(Math.random()*9)+5;
  },
  health: 85
};

var char6 = {
  power: function() {
    return Math.floor(Math.random()*8)+6;
  },
  health: 85
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
        else if (yourCharacter == 5) {
          $("#char5a").hide();
          yourHealth = char5.health;
          yourPower = char5.power;
        }
        else if (yourCharacter == 6) {
          $("#char6a").hide();
          yourHealth = char6.health;
          yourPower = char6.power;
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
        else if (opponentCharacter == 5) {
          opponentHealth = char5.health;
          opponentPower = char5.power;
        }
        else if (opponentCharacter == 6) {
          opponentHealth = char6.health;
          opponentPower = char6.power;
        }
        
   
});


// Attack button
var newYourPower=0;
  
  $(".attack").on("click", function() {
       opponentHealth = opponentHealth - (yourPower()+newYourPower);
       yourHealth = yourHealth - opponentPower();
       $("#opponentHealth").text(opponentHealth);
       $("#yourHealth").text(yourHealth);
         
         // if you win
       if (opponentHealth <= 0) {
        alert("CHOOSE YOUR NEXT CONTENDOR!");
        yourHealth = yourHealth + 50;
        newYourPower += 5;
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
   