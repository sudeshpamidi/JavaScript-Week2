//Description: This script is lab execises for substring, substr and slice
//Author: Sudesh Pamidi
"use strict"

let objects = [{
        productId: 2,
        item: "Notepads",
        price: 12.29
    },
    {
        productId: 22,
        item: "Black Pens",
        price: 13.29
    },
    {
        productId: 29,
        item: "Sharpies",
        price: 9.99
    }
];

function compareByPriceAsc(a, b) {
    return (a.price - b.price);
}

function compareByPriceDsc(a, b) {
    return (b.price - a.price);
}

function compareByItemNameAsc(a, b) {
    if (a.item < b.item) {
        return -1;
    }
    return 1;
}

function compareByItemNameDesc(a, b) {
    if (a.item > b.item) {
        return -1;
    }
    return 1;
}



console.log("---------- Sorting the objects in ascending ----------");
objects.sort(compareByPriceAsc);
console.log(objects);


console.log("---------- Sorting the objects in Descending ----------");
objects.sort(compareByPriceDsc);
console.log(objects);

console.log("---------- Sorting the objects in Ascending ----------");
objects.sort(compareByItemNameAsc);
console.log(objects);


console.log("----------Sorting the objects in Descending ----------");
objects.sort(compareByItemNameDesc);
console.log(objects);