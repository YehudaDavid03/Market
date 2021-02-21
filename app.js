// const viewResult = document.querySelector(".main-first-div-one-h1");

// let stockBuyPower = 9;
// let stockPrice = 1.693;
// let stockName = "Apple";

// let stockShares = 100;
// let marketCap = 100 - stockShares;

// let allPastPrices = [];
// let percentOfChange = 0;
// let percentChangeLast = 0;

// const botSet = function() {
//   randomQty = Math.floor(Math.random() * stockBuyPower + 1);
//   randomBool = [true, false];
//   randomBool = randomBool[Math.floor(Math.random() * randomBool.length)];
// };


// const stockSet = function() {
//   if (randomBool === true) {
//     stockShares -=  randomQty;
//     stockPrice += randomQty / stockShares;
//     marketCap = 100 - stockShares;
//   } else if (randomBool === false && marketCap > randomQty) {
//     stockShares += randomQty;
//     stockPrice -= randomQty / stockShares;
//     marketCap = 100 + stockShares;
//   } else {

//   }
// };

// const percentSet = function() {
//   pastPricesIndex = allPastPrices.length - 1;
//   pastPriceResult = allPastPrices[pastPricesIndex];

//   percentOfChange = (stockPrice - allPastPrices[0]) / allPastPrices[0] * 100;
//   percentChangeLast = (stockPrice - pastPriceResult) / pastPriceResult * 100;
//   allPastPrices.push(stockPrice);
// };

// const candleSet = function() {

// };

// const consoleSet = function() {
//   console.log("Stock Name: " + stockName);
//   console.log("Amount " + (randomBool === true ? "Bought: " : "Sold: ") + randomQty);
//   // console.log("Stock Price: " + stockPrice);
//   // console.log("Stock Shares: " + stockShares);
//   // console.log("Market Cap: " + marketCap);
//   console.log("Percent Change: %" + percentOfChange);
//   console.log("Percent Change Last: %" + percentChangeLast);
//   console.log("--------------------")
// };

// const pageView = function() {
//   if (randomBool === true) {
//     viewResult.style.color = "green";
//   } else if (randomBool === false) {
//     viewResult.style.color = "red";
//   }

//   viewResult.textContent = stockName + ": $" + stockPrice.toFixed(3) + ", (%" + percentOfChange.toFixed(3) + ")" + ", (%" + percentChangeLast.toFixed(3) + ")" + "";
// };

// const stockLive = setInterval(function() {
//   botSet();
//   stockSet();
//   percentSet();
//   consoleSet();
//   pageView();
// }, 1000000);

// let array = [30, 40, 30, 200, 200];
// let ratio = 2;
// for (let i = 0; i < 5; i++) {
//   if (array[i] >= 100) {
//     ratio = ratio * 2;
//     console.log("True: " + array[i]);
//   } else {
//     ratio = 2;
//     console.log("False");
//   }
// };

// console.log(ratio);