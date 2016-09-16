/**
 * Created by Sony on 9/16/2016.
 */

var choice = 'userChoice';
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.33 && computerChoice > 0) {
    computerChoice = 'rock' ;
}
else if (computerChoice < 0.66 && computerChoice > 0.34) {
    computerChoice = 'paper';
}
else  {
    computerChoice = 'scissors';
}console.log("Computer: " + computerChoice);

choice1 = computerChoice;
choice2 = userChoice;
var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie";
    }
    else if(choice1 === "rock") {

        if(choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }

    }
    else if(choice1 === "paper") {

        if(choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }

    else if(choice1 === "scissors") {

        if(choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }

};
console.log(compare(choice1, choice2));