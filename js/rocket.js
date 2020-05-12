function coinChange() {
    let amountInput = document.getElementById("amount");
    let amount = amountInput.value; 
    let coins = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let text = "";
    for (i = 0; i < coins.length; i++) {
        while (amount>=coins[i]) {
            res[i] += 1;
            amount = amount - coins[i];
        }
        text += res[i] + "x " + coins[i] + "k<br>";
    }
    document.getElementById("result").innerHTML = `${text}`;
}

let amountInput = document.getElementById("amount");

let convertButton = document.getElementById('convertButton');
convertButton.addEventListener("click",coinChange);

