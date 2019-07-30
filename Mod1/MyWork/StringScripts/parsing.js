//Description: This script is lab execises for substring, substr and slice
//Author: Sudesh Pamidi
"use strict"



//This function displays first name, middle name and  last name for given fullname
//@param(string)    fullname 
function parseAndDisplayName(fullname) {

    let firstName = "",
        lastName = "",
        middleName = "";
    let pos = fullname.indexOf(" ");
    let pos2 = fullname.lastIndexOf(" ");

    if (pos != -1) {
        firstName = fullname.substring(0, pos);
        if (pos != pos2) {
            middleName = fullname.substring(pos + 1, pos2);
            lastName = fullname.substring(pos2 + 1);
        } else {

            lastName = fullname.substring(pos + 1);
        }

    } else {
        firstName = fullname;
        lastName = "";
    }
    console.log("First Name: " + firstName);

    if (middleName != "")
        console.log("Middle Name: " + middleName);
    if (lastName != "")
        console.log("Last Name: " + lastName);
};

parseAndDisplayName("Cher");
parseAndDisplayName("Lan Auston");
parseAndDisplayName("Siddalee Lynn Grace");