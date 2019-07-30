//Discription :
//Author : Sudesh

let product = {
    productId: "1234",
    productName: "Computer",
    unitPrice: 1234.50,
    quantity: 2
};

console.log("--------- Product Object -----------")
console.log("Product ID: " + product["productId"] +
    " product Name: " + product["productName"] +
    " Unit Price : " + product["unitPrice"] +
    " Quantity : " + product["quantity"]
);

var strProduct = JSON.stringify(product);

console.log("--------- Product JSON -----------");
console.log(strProduct);



var obj = JSON.parse(strProduct);

console.log("--------- Parsing back to object -----------");

console.log("Product ID: " + obj["productId"] +
    " product Name: " + obj["productName"] +
    " Unit Price : " + obj["unitPrice"] +
    " Quantity : " + obj["quantity"]
);