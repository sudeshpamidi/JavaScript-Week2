//Discription : script to find the average score in array
//Author : Sudesh Pamidi

let scores = [293, 295, 293, 292, 291, 294, 291];
let total = 0;


scores = scores.sort()
for (let i = 0; i < scores.length; i++) {
    console.log("Score : " + scores[i]);
    total = Number(total) + Number(scores[i]);
}

let avgTotal = total / scores.length;

console.log('Total: ' + total);
console.log('length: ' + scores.length);
console.log('Average Total: ' + avgTotal.toFixed(2));

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = Number(total) + Number(scores[i]);
    }
    let avgTotal = total / scores.length;
    return avgTotal;
}

function getMedian(scores) {
    scores = scores.sort();
    if ((scores.length) % 2 == 0) {
        let average = (scores[Math.round(scores.length / 2)] + scores[Math.round(scores.length / 2) - 1]) / 2

        console.log(average);

    } else {
        console.log(scores[Math.floor(scores.length / 2)]);
    }

}

console.log('Average score through function calling: ' + getAverage(scores).toFixed(2));

getMedian(scores);