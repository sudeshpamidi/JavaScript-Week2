//Description: This script is lab execises for substring, substr and slice
//Author: Sudesh Pamidi
"use strict"

let code = "DI:12345678-L";

function getSupplier(code) {
    var suplCode = code.slice(0, code.indexOf(":"))
    return suplCode;
}


function getproductNumber(code) {
    var prodNum = code.slice(code.indexOf(":") + 1, code.indexOf("-"))
    return prodNum;
}

function getSize(code) {
    let size = code.slice(code.indexOf("-") + 1)
    return size;
}

console.log("Suppier Number: " + getSupplier(code));
console.log("Product Number: " + getproductNumber(code));
console.log("Size: " + getSize(code));