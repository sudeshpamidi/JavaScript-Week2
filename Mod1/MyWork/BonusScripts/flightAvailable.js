//Description: This script is the lab execises for filtering out the array of objects 
//Author: Sudesh Pamidi
"use strict"

let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
let flights = [{
        flightNumber: 123,
        departure: "BDL",
        arrival: "LAS",
        time: "8:00",
        price: 100.00,
        daysOfFly: "SUMOTUWE"
    },

    {
        flightNumber: 123,
        departure: "BDL",
        arrival: "NY",
        time: "9:00",
        price: 90.00,
        daysOfFly: "SU"
    },
    {
        flightNumber: 123,
        departure: "BDL",
        arrival: "NY",
        time: "9:00",
        price: 90.00,
        daysOfFly: "MOTUWE"
    },
    {
        flightNumber: 123,
        departure: "BDL",
        arrival: "NY",
        time: "9:00",
        price: 90.00,
        daysOfFly: "SUMOTUWETH"
    },

    { // orlando 
        flightNumber: 123,
        departure: "BDL",
        arrival: "MCO",
        time: "9:00",
        price: 90.00,
        daysOfFly: "SUMOTUWETHFRSA"
    }

];

//This function return the array of possible flight objects.
//@parem  departureCity(string) -- departure city
//@parem  arrivalCity(string) -- arrival city
//@parem  travelDate(date) -- date of travel
function findFlights(departureCity, arrivalCity, myDate) {

    let day = days[myDate.getDay()];
    let obj = flights.filter(o => o.departure == departureCity && o.arrival == arrivalCity && o.daysOfFly.indexOf(day) >= 0)
    return JSON.stringify(obj);
}

let myDate = new Date("2019-08-02");
console.log(myDate);
let availableFlight = findFlights("BDL", "NY", myDate);
console.log(availableFlight);


//This function return the array of possible flight objects.
//@parem  departureCity(string) -- departure city
//@parem  arrivalCity(string) -- arrival city
//@parem  travelDate(date) -- date of travel
function findFlightsAnonymous(departureCity, arrivalCity, travelDate) {
    //get the two charecter day from the array days
    let day = days[travelDate.getDay()];

    //Call the filer method with ananimous function
    let obj = flights.filter(function(o) {
        return o.departure == departureCity && o.arrival == arrivalCity && o.daysOfFly.indexOf(day) >= 0;
    });
    return JSON.stringify(obj);
}

myDate = new Date("2019-08-02");
console.log(myDate);
availableFlight = findFlightsAnonymous("BDL", "MCO", myDate);
console.log(availableFlight);