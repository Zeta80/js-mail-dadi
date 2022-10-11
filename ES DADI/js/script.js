
// Player name
let player1 = "Player 1";

// Function to change the player name

player1 = prompt("Change Player1 name");

document.querySelector("p.Player1").innerHTML = player1;


// Function to roll the dice
function rollTheDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src",
        "immagini/dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src",
        "immagini/dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "PAREGGIO!";
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML
            = ("CPU HA VINTO!");
    }

    else {
        document.querySelector("h1").innerHTML
            = (player1 + " HA VINTO!");
    }

}

