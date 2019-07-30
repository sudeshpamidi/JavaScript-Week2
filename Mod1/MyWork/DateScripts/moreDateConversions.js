//Author : Sudesh Pamidi
let d1 = new Date("1986-06-24");
let d2 = new Date("Jun 21 1982");
let d3 = new Date("1982, 06, 21");



console.log("------------------")
console.log(d1.toLocaleDateString());
console.log(d1.toLocaleString());
console.log(d1.toDateString());
console.log("------------------")


console.log(d2.toLocaleDateString());
console.log(d2.toLocaleString());
console.log(d2.toDateString());
console.log("------------------")


console.log(d3.toLocaleDateString());
console.log(d3.toLocaleString());
console.log(d3.toDateString());
console.log("------------------")