//This is script to find out the 90 days end date of given start date
//Author: Sudesh Pamidi

let startDate = new Date('July 30, 2019')

const milliSecPerDay = 1000 * 60 * 60 * 24;

let endMilliSec = startDate.getTime() + milliSecPerDay * 90;

let endDate = new Date(endMilliSec);

console.log("Start Date : " + startDate.toLocaleDateString());
console.log("End Date : " + endDate.toLocaleDateString());