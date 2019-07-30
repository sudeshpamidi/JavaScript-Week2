//Discription: To define a couple of different JavaScript objects.
//Author: Sudesh Pamidi

let emp1 = {
    name: "Papa Jones",
    address: "123 Main Street",
    city: "Hartford"
};

function printContact(emp) {
    console.log("Name: " + emp.name);
    console.log("Address: " + emp.address);
    console.log("city: " + emp.city);
}

printContact(emp1);