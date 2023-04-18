import {inventory} from /main.js;

//Tip_: when we want to reduce multiple values from an array to one number or one string, just use here
//an old trusted for-loop for!


//* **Assignment 2b:** Make sure that this number is shown _in green_ on the page.
//* **Command Write a script that calculates this. Log the result in the
//console.
//* **Assignment 2d:** Make sure that this number is shown _in blue_ on the page.
//* **Assignment 2e:** Indicate _in red_ how many TVs still have to be sold.
//=================================================================================
// 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
//* **Assignment 2a:** How many TVs have already been sold? Write a script that calculates this. Log the outcome in the console.
let totalSold = 0;

inventory.forEach(tv => {
    totalSold += tv.sold;
});

console.log(`Totaal aantal verkochte tv's: ${totalSold}`);




