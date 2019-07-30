//Discription: This script to define a object and printing the object elements by passing array of part code
//Author: Sudesh Pamidi

function parsepartCode(partCode) {

    let part = {
        supplierCode: "",
        productNumber: "",
        size: ""
    };

    let pos1 = partCode.indexOf(":");
    let pos2 = partCode.indexOf("-");

    part.supplierCode = partCode.substring(0, pos1);
    part.productNumber = partCode.slice(pos1 + 1, pos2);
    part.size = partCode.substring(pos2 + 1);

    return part;

}

var partCodeArray = ["XYZ:1234-L", "ABL:234325-S", "ACB:2345-XL", "ABC:1234567-M"];

for (let i = 0; i < partCodeArray.length - 1; i++) {
    let part1 = parsepartCode(partCodeArray[i]);

    console.log("Supplier : " + part1.supplierCode +
        " Product Number  : " + part1.productNumber +
        " Size : " + part1.size);
    console.log("-------------------------");
}