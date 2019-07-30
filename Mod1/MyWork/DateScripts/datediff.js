let milliSec = Date.parse("May 1, 2019");


var bootcampStarts = new Date('July 22, 2019');
var bootcampEnds = new Date('September 6, 2019');

let msecPerDay = 1000 * 60 * 60 * 24;

let elapsedMilliSec = bootcampEnds.getTime() - bootcampStarts.getTime();
let dayDiff = elapsedMilliSec / msecPerDay;
let numDays = Math.round(dayDiff);

console.log(numDays);