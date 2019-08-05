//Description:  This  script validate the postal codes
//Author: 
"use strict"
var codes = ["K1A 0B1", "ABC 123", "B3K 5X5", "76126", "K7H 1A6", "B0J 1N0"];
let canadianPostal = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;

codes.forEach(regMatch);

function regMatch(key, item) {
    if (canadianPostal.test(key) == true)
        console.log(item + ") " + key + " Matches");
    else
        console.log(item + ") " + key + " Doesn't Matches");
};