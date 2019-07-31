//Description: This script is lab execises for sorting array of objects by pricem item name asc and desc.
//Author: Sudesh Pamidi
"use strict"

let menu = [
    [{
            item: "Sausage and Egg Biscuit",
            price: 3.49
        },
        {
            item: "Bacon, Egg and Cheese Sandwidch",
            price: 4.49
        },

        {
            item: "Pan Cake",
            price: 5.49
        }
    ],

    [{
            item: "Fish Fillet sandwidch ",
            price: 3.49
        },
        {
            item: "Grill Chicken Sandwidth",
            price: 4.49
        },

        {
            item: "Pasta with ",
            price: 5.49
        },
        {
            item: "Lunch 4",
            price: 5.49
        }
    ]
]

for (let i = 0; i < menu.length; i++) {
    switch (i) {
        case 0:
            console.log('.............. Breakfast Items ..............');
            break;
        case 1:
            console.log('............... Lunch Items .................');
            break;
    }
    for (let j = 0; j < menu[i].length; j++) {
        for (let key in menu[i][j]) {
            console.log(key + " : " + menu[i][j][key]);
        }
    }


}