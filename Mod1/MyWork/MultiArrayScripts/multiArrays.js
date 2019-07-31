//Description: This script is lab execises for sorting array of objects by pricem item name asc and desc.
//Author: Sudesh Pamidi
"use strict"

let arrayObjects = [
    [{
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
    ],

    [1, 4, 6, 7, 90, 56],
    ["Harry", "Sally", "Mark"]
];



for (let i = 0; i < arrayObjects.length; i++) {
    console.log("Objects ---------" + i);
    for (let key in arrayObjects[i]) {

        if (typeof(arrayObjects[i][key]) == 'object') {
            console.log('Product ID:' + arrayObjects[i][key].productId);
            console.log('item:' + arrayObjects[i][key].item);
            console.log('Price:' + arrayObjects[i][key].price);

        } else { console.log(key + ": " + arrayObjects[i][key]); }
    }

}



//console.log(objects);