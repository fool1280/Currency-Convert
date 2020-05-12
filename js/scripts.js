function formatCurrency(type, curr, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: curr,
      style: "currency"
    });
    return formatter.format(value);
}

function convertCurrency() {
    let amount = amountInput.value; 
    let inp = inputCurrency.value;
    let out = outputCurrency.value;
    const currencyTable = {"usd": 1, "vnd": 23329.52, "eur": 0.92, "krw": 1224.22, "cny": 7.1}
    const currencyFormat = {"usd": "en-IN", "vnd": "vi", "eur": "eu", "krw": "kr", "cny": "zh-cn"}
    let result = (amount * (currencyTable[out] / currencyTable[inp])).toFixed(2);
    document.getElementById("result").innerHTML = `${formatCurrency(currencyFormat[inp], inp, amount)} = ${formatCurrency(currencyFormat[out], out, result)}`;
}

function swap() {
  var inp = document.getElementById("inputCurrency").value;
  var out = document.getElementById("outputCurrency").value;
  document.getElementById("inputCurrency").value = out;
  document.getElementById("outputCurrency").value = inp;
}

let amountInput = document.getElementById("amount");

let inputCurrency = document.getElementById("inputCurrency");
let outputCurrency = document.getElementById("outputCurrency");

let convertButton = document.getElementById('convertButton');
convertButton.addEventListener("click",convertCurrency);




