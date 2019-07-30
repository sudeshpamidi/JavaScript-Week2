//Discription : script to find the average score in array
//Author : Sudesh Pamidi

let lunches = [{
        item: "Steak Fajitas",
        price: 9.95
    },
    {
        item: "Chips And Guacomole",
        price: 5.25
    },
    {
        item: "Sweat Tea ",
        price: 2.79
    }
];

// Print the items
for (let lunch of lunches) {
    console.log(lunch.item);
}

let subTotal = 0;
for (let i = 0; i < lunches.length; i++) {
    subTotal = subTotal + lunches[i].price;
}

console.log("Sub Total " + subTotal.toFixed(2));
let tax = subTotal * 0.08;
console.log("Tax (8%) " + tax.toFixed(2));
let tip = (subTotal + tax) * 0.18
console.log("Tip (18%) " + tip.toFixed(2));
let total = subTotal + tax + tip;
console.log("Total : " + total.toFixed(2));