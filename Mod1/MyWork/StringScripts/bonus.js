//Description: This script is lab execises for substring, substr and slice
//Author: Sudesh Pamidi
"use strict"

let largeName = "Mrs.   Sudesh Pamidi   ,    Phd";
let prefixStrings = "Mrs.|Mrs,|Mrs|Mr.|Mr,|Mr|Miss.|Miss,|Miss|Dr.|Dr,|Dr";

var arrayPrefix = prefixStrings.split("|");

function getPrefix(largeName) {

    for (let i = 0; i < arrayPrefix.length; i++) {
        //Check the begining(prifix) is matching any of the element.
        if (largeName.indexOf(arrayPrefix[i]) == 0) {
            let prefix = largeName.substring(0, arrayPrefix[i].length);
            return prefix;
        }
    }
    return "";
}

//extract the sufix from the name
function getSufix(largeName) {
    let pos = largeName.lastIndexOf(",");
    let sufix = (pos != -1 ? largeName.substring(pos, largeName.length) : "");
    return sufix;
}

//
function getFullNameBetweenPrefixSufix(largeName, prefix, sufix) {
    let pos1 = (prefix == "" ? 0 : prefix.length); //prefix position
    let pos2 = (sufix == "" ? largeName.length : largeName.lastIndexOf(sufix));

    console.log("pos1 : " + pos1 + ", pos2 :" + pos2);
    let fullname = largeName.slice(pos1, pos2);
    return fullname;
}


//This function displays first name, middle name and  last name for given fullname
//@param(string)    fullname 
function parseAndDisplayName(fullname, prefix, sufix) {

    let firstName = "",
        lastName = "",
        middleName = "";

    //Trim the fullname to eliminate spaces at the begining and end.
    fullname = fullname.trim();

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

    console.log("Prefix :" + prefix);
    console.log("Sufix :" + sufix.substring(1).trim());

};
//parseAndDisplayName(fullName1);
//console.log(getPrefix(largeName));
//console.log(getSufix(largeName));

let prefix = getPrefix(largeName);
let sufix = getSufix(largeName);
let fullname = getFullNameBetweenPrefixSufix(largeName, prefix, sufix)

parseAndDisplayName(fullname, prefix, sufix);