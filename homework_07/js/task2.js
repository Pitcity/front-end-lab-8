var maxPrice1 = 10;
var maxPrice2 = 5;
var maxPrice3 = 2;

var price = 0;
var attempts = 0;
var currentMax = 0;
var range = 5;
var wasRegected = false;

function printInfo() {
    return "Enter a number from 0 to " + range + "\n" +
        "Attempts left: " + (3 - attempts + 1) + "\n" +
        "Total prize: " + price + "$\n" +
        "Possible prize on curent attempts: " + currentMax + "$";
}

function reset() {
    maxPrice1 = 10;
    maxPrice2 = 5;
    maxPrice3 = 2;

    price = 0;
    attempts = 0;
    currentMax = 0;
    range = 5;
    wasRegected = false;
}

if (confirm("Do you want to play a game?")) {
    do {
        reset();
        let f = Math.round(Math.random() * range);
        while (attempts < 3) {
            attempts++;
            if (attempts === 1) {
                currentMax = maxPrice1;
            } else if (attempts === 2) {
                currentMax = maxPrice2;
            } else if (attempts === 3) {
                currentMax = maxPrice3;
            }
            if (prompt(printInfo(), 0) == f) {
                console.log("won " + currentMax + "$");
                price += currentMax;
                if (confirm("want to continue?")) {
                    attempts = 0;
                    maxPrice1 *= 3;
                    maxPrice2 *= 3;
                    maxPrice3 *= 3;
                    range *= 2;
                    f = Math.round(Math.random() * range);
                } else {
                    attempts = 4;
                    wasRegected = true;
                }
            } else {
                console.log("you missed it. " + (3 - attempts) + " left");
            }
        }
        console.log("Thank you for a game. Your prize is: " + price);
    } while (!wasRegected && confirm("want to play again?"))
} else {
    console.log("You did not become a millionaire");
}

