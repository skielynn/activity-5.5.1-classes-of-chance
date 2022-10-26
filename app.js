class Casino {
    constructor(name) {
        this.name = name
        this.timesPlayed = 0
    }

 playGame(betAmount) {
   this.timesPlayed++
    if(Math.random() <= 0.75 ) {
        this.console.log(this.name + ' wins!')
    } else {
        console.log('Player wins' + betAmount * (this.timesPlayed + 1))
    }
}
};

// TESTS
const myCasino = new Casino("UNLV Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
