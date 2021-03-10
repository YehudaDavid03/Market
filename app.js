const viewResult = document.querySelector(".main-first-div-one-h1");

let stockBuyPower = 9;
let stockPrice = .50;
let stockName = "DGS";

let stockShares = 100;
let marketCap = 100 - stockShares;

let allPastPrices = [];
let percentOfChange = 0;
let percentChangeLast = 0;

const botSet = function() {
  randomQty = Math.floor(Math.random() * stockBuyPower + 1);
  randomBool = [true, false, false];
  randomBool = randomBool[Math.floor(Math.random() * randomBool.length)];
};


const stockSet = function() {
  if (randomBool === true) {
    stockShares -=  randomQty;
    stockPrice += randomQty / stockShares;
    marketCap = 100 - stockShares;
  } else if (randomBool === false && marketCap > randomQty) {
    stockShares += randomQty;
    stockPrice -= randomQty / stockShares;
    marketCap = 100 + stockShares;
  } else {

  }
};

const percentSet = function() {
  pastPricesIndex = allPastPrices.length - 1;
  pastPriceResult = allPastPrices[pastPricesIndex];

  percentOfChange = (stockPrice - allPastPrices[0]) / allPastPrices[0] * 100;
  percentChangeLast = (stockPrice - pastPriceResult) / pastPriceResult * 100;
  allPastPrices.push(stockPrice);
};

const candleSet = function() {
  let candleHeight = 5 + percentOfChange + "%";

  let redCandle = document.createElement("div");
  redCandle.style.backgroundColor = "red";
  redCandle.style.height = candleHeight;
  redCandle.style.marginLeft = "1%";
  redCandle.style.width = "1.75%";

  let greenCandle = document.createElement("div");
  greenCandle.style.backgroundColor = "green";
  greenCandle.style.height = candleHeight;
  greenCandle.style.marginLeft = "1%";
  greenCandle.style.width = "1.75%";

  let candle = null;

  if (randomBool === true) {
    candle = greenCandle;
    console.log(candleHeight);
  } else {
    candle = redCandle;
    console.log(candleHeight);
  }

  let v = document.getElementById("main-first-div-two");

  if (v.childNodes.length > 20) {
    document.getElementById("main-first-div-two").appendChild(candle);
    v.removeChild(v.childNodes[0]);
  } else {
    document.getElementById("main-first-div-two").appendChild(candle);
  }
}

const consoleSet = function() {
  console.log("Stock Name: " + stockName);
  console.log("Amount " + (randomBool === true ? "Bought: " : "Sold: ") + randomQty);
  console.log("Percent Change: %" + percentOfChange);
  console.log("Percent Change Last: %" + percentChangeLast);
  console.log("--------------------")
};

const pageView = function() {
  if (randomBool === true) {
    viewResult.style.color = "green";
  } else if (randomBool === false) {
    viewResult.style.color = "red";
  }

  viewResult.textContent = stockName + ": $" + stockPrice.toFixed(3) + ", (%" + percentOfChange.toFixed(3) + ")" + ", (%" + percentChangeLast.toFixed(3) + ")" + "";
};

const stockLive = setInterval(function() {
  botSet();
  stockSet();
  percentSet();
  candleSet();
  consoleSet();
  pageView();
}, 1000);
