// Page View
const viewResult = document.querySelector("h1");

// Stock Info
let stockPrice = 1;
let stockName = "Apple";

// Shares Info
let stockShares = 100;
let marketCap = 100 - stockShares;

let allPastPrices = [];
let percentOfChange = 0;
let percentChangeLast = 0;

const botSet = function() {
  // Bot Info
  randomQty = Math.floor(Math.random() * 9 + 1);
  randomBool = [true, false];
  randomBool = randomBool[Math.floor(Math.random() * randomBool.length)];
}


const stockSet = function() {
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
}

const percentSet = function() {
  pastPricesIndex = allPastPrices.length - 1;
  pastPriceResult = allPastPrices[pastPricesIndex];

  percentOfChange = (stockPrice - 1) / 1 * 100;
  percentChangeLast = (stockPrice - pastPriceResult) / pastPriceResult * 100;
  allPastPrices.push(stockPrice);
}

const consoleSet = function() {
  console.log("Stock Name: " + stockName);
  console.log("Amount " + (randomBool === true ? "Bought: " : "Sold: ") + randomQty);
  // console.log("Stock Price: " + stockPrice);
  // console.log("Stock Shares: " + stockShares);
  // console.log("Market Cap: " + marketCap);
  console.log("Precent Change: %" + percentOfChange);
  console.log("Precent Change Last: %" + percentChangeLast);
  console.log("--------------------")
}

const pageView = function() {
  // H1 View Colors
  if (randomBool === true) {
    viewResult.style.color = "green";
  } else if (randomBool === false) {
    viewResult.style.color = "red";
  }

  viewResult.textContent = stockName + ": $" + stockPrice.toFixed(3) + ", (%" + percentOfChange.toFixed(3) + ")" + ", (%" + percentChangeLast.toFixed(3) + ")";
}

const stockLive = setInterval(function() {
  botSet();
  stockSet();
  percentSet();
  consoleSet();
  pageView();
}, 1000);