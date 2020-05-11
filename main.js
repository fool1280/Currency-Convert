const exchangeRateVNDandUSD = 23208;

function vndToUsd(amountVnd) {
  return ((amountVnd / exchangeRateVNDandUSD).toFixed(2))
}

function usdToVnd(amountUsd) {
  return ((amountUsd * exchangeRateVNDandUSD))
}

function formatUSD(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: 'USD',
    style: "currency"
  });
  return formatter.format(value);
}

function formatVND(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: 'VND',
    style: "currency"
  });
  return formatter.format(value);
}

//let currency = prompt("Choose your currency VND, USD, or EUR?");

let currency = "VND"

//== is comparing type && value, === is comparing value
//NaN != NaN: this is true
if (currency === "VND") {
  let amountVND = 100000; //prompt("How much VND?");
  let check_number = parseInt(amountVND);
  if (Object.is(check_number, NaN)) {
    console.log("Please input a number!");
  } else {
    let res_vndToUsd = vndToUsd(check_number);
    console.log("From VND to USD:", formatUSD('en-IN',res_vndToUsd));  
  }
} else if (currency === "USD") {
  let amountUSD = 1; //prompt("How much USD?");
  let check_number = parseInt(amountUSD);
  if (Object.is(check_number, NaN)) {
    console.log("Please input a number!");
  } else {
    let res_usdToVnd = usdToVnd(check_number);
    console.log("From USD to VND:", formatVND('vi',res_usdToVnd));  
  }
}