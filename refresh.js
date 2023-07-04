// type npm init
// npm i prompt-sync to install packages

// deposit some money
// collect a bet amount
// no of lines they want to bet on
// spin the slot machine
// chk if the user won
// gift the players or take the money
// play again

// function deposit(){
//     return 1;
// }

// const x = deposit();
// or
const prompt = require("prompt-sync")();
// install the package so that we can ask user for amount


const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
// NaN = not a number
    if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
        console.log("Invalid input, try again.");
        balance = deposit();
        return deposit();
    }
    return numberDepositAmount;
};


const getNumberOfLines = () => {
    const Lines = prompt("Enter number of lines 1-3: ");
    const numberOfLines = parseFloat(Lines);

    if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines>3){
        console.log("Invalid no of lines, try again.");
        getNumberOfLines();
        return getNumberOfLines;
    
    }
    return numberOfLines;

};

const getBet = (balance, lines) =>{
    const bet = prompt("Enter total bet: ");
    const numberBet = parseFloat(bet);

    if((numberBet > balance / lines) || isNaN(numberBet) || numberBet<=0){
        console.log("Invalid bet, try again.");
        getBet(balance);

    }
};


const spin = () => {
    const symbols = []
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);   //we are creating an array of count and all the values to pick the symbols from
            // console.log(symbols)
        }
        
    }
    const reels = [];
    for (let j = 0; j < COLS; j++) {
        reels.push([]);  //push each column into the reels arrays hence creating 2D array
        const reelSymbols = [...symbols];  //... is a spread operator used to make shallow copies from one object to the other object
        for (let i = 0; i < ROWS; i++) {
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[j].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1) ;//to remove that symbol from reelsymbol
            
        }        
    }
    return reels;

}

const transpose = (reels) => {

}

const  = () =>{
    for (const row in reels){
        let rowstring = "";
        for(const [i, symbol] of row.entries)
    }



    }



let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
// console.log(depositAmount);
// console.log(numberOfLines);
// console.log(reels);
// to run type node refresh.js
