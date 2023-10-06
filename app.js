let guessGame = true;
let players = []
while (guessGame) {
    let rand = 50//Math.floor(Math.random() * 100) + 1;
    let playing = true;
    let guessArr = [];
    let name = prompt("What is your name?");
    let currentPlayer = null
    for (let i of players) {
        if (i.name === name) {
            currentPlayer = i
        }
        break;
     }
    if (currentPlayer === null) {
        let player = {name:name,previousScore:0}
        currentPlayer = player
        players.push(player)
    }
    while (playing) {
        let message = "";
        let guess = prompt("Guess a Number between 1-100:");
        guess = parseInt(guess);

        if (guess === NaN || guess > 100 || guess < 1) {
            message = `Invalid Guess ${name}! Please Guess Again!`;
        } else if (guess === rand) {
            guessArr.push(guess);
            if(currentPlayer.previousScore === 0) {  
                message = `Correct ${name}! It only took you ${guessArr.length} guesses! and your guesses were ${guessArr.join(", ")}!`;   
             }else if (currentPlayer.previousScore > guessArr.length) {
                message = `Correct ${name}! It only took you ${guessArr.length} guesses! and your guesses were ${guessArr.join(", ")}! you had${currentPlayer.previousScore - guessArr.length} more guesses than last time`;
             }else if (currentPlayer.previousScore < guessArr.length) {
                message = message = `Correct ${name}! It only took you ${guessArr.length} guesses! and your guesses were ${guessArr.join(", ")}! you had${guessArr.length - currentPlayer.previousScore} less guesses than last time`;
             }else{
                message = `Correct ${name}! It only took you ${guessArr.length} guesses you had the same amount of guesses as last time`;
             }
             currentPlayer.previousScore = guessArr.length;
        playing = false
          
        } else if (guess > rand) {
            guessArr.push(guess);
            message = `You need to guess lower ${name}.`;
        } else {
            guessArr.push(guess);
            message = `You need to guess higher ${name}.`;
        }

        alert(message);
    }
    let question = prompt("do you want to play again? Yes or No")
    if (question === "No") {
        alert("Thanks for playing!")
        guessGame = false;
    }
}