var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties

var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = alphabet[Math.random(Math.floor() * alphabet.length)];

    console.log(computerChoice)



   
   document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        w++;
    }else{
        g--;
    }

    if(guesses === 0){
        l++
        g=10
    }

 
    console.log (wins)
    console.log(losses)
    console.log(guesses)
} 
wins.createElement('h1')
losses.createElement('h1')
guesses.createElement('h1')