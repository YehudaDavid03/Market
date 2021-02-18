// Page View
const viewResult = document.querySelector("h1");

// Stock Info
let stockPrice = .10;
let stockName = "Apple";

// Shares Info
let stockShares = 100;
let marketCap = 100 - stockShares;

let allPastPrices = [];
let percentOfChange = 0;

const stockSet = function() {

}

const botSet = function() {
  // Bot Info
  randomQty = Math.floor(Math.random() * 9 + 1);
  randomBool = [true, false];
  randomBool = randomBool[Math.floor(Math.random() * randomBool.length)];

  pastPricesIndex = allPastPrices.length - 1;
  pastPriceResult = allPastPrices[pastPricesIndex];

  // Bot In Action
  if (randomBool === true) { // Buy
    stockShares -=  randomQty;
    stockPrice += randomQty / stockShares;
    marketCap = 100 - stockShares;
  } else if (randomBool === false && marketCap > randomQty) { // Sell
    stockShares += randomQty;
    stockPrice -= randomQty / stockShares;
    marketCap = 100 + stockShares;
  } else { // Nether

  }

  allPastPrices.push(stockPrice);
}

const percentSet = function() {
  
}

const consoleSet = function() {
  console.log("Stock Name: " + stockName);
  console.log("Amount " + (randomBool === true ? "Bought: " : "Sold: ") + randomQty);
  console.log("Stock Price: " + stockPrice);
  console.log("Stock Shares: " + stockShares);
  console.log("Market Cap: " + marketCap);
  console.log("Past Price Result: " + pastPriceResult);
  console.log("--------------------")
}

const pageView = function() {
  // H1 View Colors
  if (randomBool === true) {
    viewResult.style.color = "green";
  } else if (randomBool === false) {
    viewResult.style.color = "red";
  }

  viewResult.textContent = stockName + ": $" + stockPrice.toFixed(3) + ", %" + percentOfChange.toFixed(3);
}

const stockLive = setInterval(function() {
  botSet();
  stockSet();
  percentSet();
  consoleSet();
  pageView();
// }, 1000);