//Discription:
//Author: Sudesh Pamidi

let d = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Satday"];
const months = ["january", "February", "March", "April", "May", "June", "July", "Auguest", "September", "November", "December"];

console.log(d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear() + "(" + days[d.getDay()] + ")");