var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties

var wins = 0;
var losses = 0;
var guesses = 10;

   


   
   document.onkeyup = function(event) {
    var userGuess = event.key;
 var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    

    if(userGuess === computerChoice){
        wins++;
        updateWins
    }else{
        guesses--;
        updateGuesses
    }

    if(guesses === 0){
        losses++
        guesses=10
        updateLosses
    }

    if(losses === 0 && guesses===1){
      var whatskeepingyou = prompt("What is Keeping you Here?")
    }
    if(losses===1 && guesses===5){
       alert("yOU kEeP Going iN CiClEs");
       alert(whatskeepingyou);

    }

    if (losses===2&& guesses===7){
        alert("JUST");
        alert("GIVE");
        alert("UP");
    }
    if (losses===2&& guesses===6){
        alert(whatskeepingyou);
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert("JUST");
        alert("GIVE");
        alert("UP");
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert(whatskeepingyou);
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert("yOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs jUST GIVE upyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEsyOU kEeP Going iN CiClEs");
        alert(whatskeepingyou);
        alert(whatskeepingyou);
        alert("JUST");
        alert("GIVE");
        alert("UP");
        alert("JUST");
        alert("GIVE");
        alert("UP");
    }
    if (losses>=2 && guesses<6){
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");
        alert("game over");

        
        
    }
  
    console.log("Your Choice " + userGuess)
    console.log("Computers Choice " + computerChoice)
    console.log ("Wins:" + wins)
    console.log("Losses: " + losses)
    console.log("Guesses: " + guesses)
} 

