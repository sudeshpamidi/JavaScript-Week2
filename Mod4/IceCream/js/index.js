window.onload = function() {

    const noOdScoops = document.getElementById("noOfScoops");
    const hotFudge = document.getElementById("hotFudge");
    const sprinkle = document.getElementById("sprinkle");
    const whipCream = document.getElementById("whipCream");
    //const price = document.getElementById("price");
    const reset = document.getElementById("reset");

    //price.onclick = displayPrice;
    noOdScoops.onchange = displayPrice;
    hotFudge.onclick = displayPrice;
    sprinkle.onclick = displayPrice;
    whipCream.onclick = displayPrice;
    reset.onclick = clearResults;

    function displayPrice() {
        let totalPrice = calculatePrice();
        results.style.display = "block";
        results.innerHTML = "<strong>Total Cost:</strong> $" + totalPrice.toFixed(2);

    }
    //Calculate the price
    function calculatePrice() {
        let topping = 0.0;

        if (hotFudge.checked) {
            topping += 1.25; //hotFudge.value;
        }

        if (sprinkle.checked) {
            topping += 0.25; //sprinkle.value;
        }

        if (whipCream.checked) {
            topping += 0.75; //whipCream.value;
        }

        let totoal = parseFloat(noOdScoops.value) + topping;
        return totoal;
    }
    //Clear the results
    function clearResults() {
        document.getElementById("results").style.display = "none";
        results.innerHTML = "";
    };


}