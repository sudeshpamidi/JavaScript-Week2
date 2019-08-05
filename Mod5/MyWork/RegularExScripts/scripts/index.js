"use strict"

window.onload = function() {

    let canadianPostal = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;
    var postalCodeField = document.getElementById("postalCode");
    var resultDiv = document.getElementById("results");
    var resetBtn = document.getElementById("reset");

    var validateBtn = document.getElementById("validate");

    resultDiv.innerHTML = "";

    postalCodeField.onkeyup = function() {
        resultDiv.innerHTML = "";
    };
    resetBtn.onclick = function() {
        resultDiv.innerHTML = "";
    };

    validateBtn.onclick = function() {
        if (canadianPostal.test(postalCodeField.value) == true) {
            resultDiv.innerHTML = "Valid";
        } else {
            resultDiv.innerHTML = "Not Valid";
        }
    }

}