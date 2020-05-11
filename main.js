const exchangeRateVNDandUSD = 23208;
const exchangeRateVNDandEUR = 25330.88;
const exchangeRateUSDandEUR = 0.92;

function vndToUsd(amountVnd) {
  return ((amountVnd / exchangeRateVNDandUSD).toFixed(2))
}

function vndToEur(amountVnd) {
  return (amountVnd / exchangeRateVNDandEUR)
}

function usdToVnd(amountUsd) {
  return (amountUsd * exchangeRateVNDandUSD)
}

function usdToEur(amountUsd) {
  return (amountUsd * exchangeRateUSDandEUR)
}

function eurToVnd(amountEur) {
  return (amountEur * exchangeRateVNDandEUR)
}

function eurToUsd(amountEur) {
  return (amountEur * exchangeRateUSDandEUR)
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

function formatEUR(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: 'EUR',
    style: "currency"
  });
  return formatter.format(value);
}

let currency = prompt("Choose your input currency VND, USD, or EUR?");

//== is comparing type && value, === is comparing value
//NaN != NaN: this is true
if (currency === "VND") {
  let amountVND = prompt("How much VND?");
  let check_number = parseInt(amountVND);
  if (Object.is(check_number, NaN)) {
    console.log("Please input a number!");
  } else {
    let currency = prompt("Choose your output currency USD or EUR?");
    if (currency === "USD") {
      let res_vndToUsd = vndToUsd(check_number);
      console.log("From VND to USD:", formatUSD('en-IN',res_vndToUsd));  
    }
    else if (currency === "EUR") {
      let res_vndToEur = vndToEur(check_number);
      console.log("From VND to EUR:", formatEUR('eu', res_vndToEur));
    }
  }
} else if (currency === "USD") {
  let amountUSD = prompt("How much USD?");
  let check_number = parseInt(amountUSD);
  if (Object.is(check_number, NaN)) {
    console.log("Please input a number!");
  } else {
    let currency = prompt("Choose your output currency VND or EUR?");
    if (currency === "VND") {
      let res_usdToVnd = usdToVnd(check_number);
      console.log("From USD to VND:", formatVND('vi',res_usdToVnd)); 
    }
    else if (currency === "EUR") {
      let res_usdToEur = usdToEur(check_number);
      console.log("From USD to EUR:", formatEUR('eu', res_usdToEur));
    }
  }
} else if (currency === "EUR") {
  let amountEUR = prompt("How much EUR?");
  let check_number = parseInt(amountEUR);
  if (Object.is(check_number, NaN)) {
    console.log("Please input a number!");
  } else {
    let currency = prompt("Choose your output currency VND or USD?");
    if (currency === "VND") {
      let res_eurToVnd = eurToVnd(check_number);
      console.log("From EUR to VND:", formatVND('vi',res_eurToVnd)); 
    }
    else if (currency === "USD") {
      let res_eurToUsd = eurToUsd(check_number);
      console.log("From EUR to USD:", formatEUR('eu', res_eurToUsd));
    }
  }
} 