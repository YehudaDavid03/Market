// Page View
const price = document.querySelector("h1");

// Stock Info
let stockPrice = 1;
let stockName = "Apple";

// Shares Info
let stockShares = 100;
let marketCap = 100 - stockShares;

// Percent Start Info
let allPastPrices = [];
let percentOfChange = 0;

// Function To Run Every Ex...
setInterval(function() {
  // Percent End Info
  let pastPricesIndex = allPastPrices.length - 1;
  let pastPriceResult = allPastPrices[pastPricesIndex];

  // Bot Info
  let randomQty = Math.floor(Math.random() * 9 + 1);
  let randomBool = [true, false];
  randomBool = randomBool[Math.floor(Math.random() * randomBool.length)];


  // Console Log Info
  if (randomBool === true) {
    console.log("Buy");
  } else {
    console.log("Sell");
  }


  // Bot In Action
  if (randomBool === true) {
    stockShares -=  randomQty;
    stockPrice += randomQty / stockShares;
    marketCap = 100 - stockShares;
  } else if (randomBool === false && marketCap > randomQty) {
    stockShares += randomQty;
    stockPrice -= randomQty / stockShares;
    marketCap = 100 + stockShares;
  }

  percentOfChange = (stockPrice - 1) / 1 * 100;
  allPastPrices.push(stockPrice);

  console.log("Past Prices :" + allPastPrices);
  console.log("Index:" + pastPricesIndex);
  console.log("Last Prices :" + pastPriceResult);
  console.log("%" + percentOfChange);
  console.log("------------------------------");

  console.log("Qty: " + randomQty);
  console.log("Stock Name: " + stockName);
  console.log("Stock Price: " + stockPrice);
  console.log("Stock Shares: " + stockShares);
  console.log("------------------------------");
  price.textContent = stockName + ": $" + stockPrice.toFixed(3) + ", %" + percentOfChange.toFixed(3);

  // H1 View Colors
  if (randomBool === true) {
    price.style.color = "green";
  } else if (randomBool === false) {
    price.style.color = "red";
  }

}, 100000000);
