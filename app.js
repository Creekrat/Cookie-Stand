'use strict';

console.log('java is loaded');

var tableBody = document.getElementById('tablebody');
var head = document.getElementById('tablehead');
var store = [];
var foot = document.getElementById('foot');

var hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var myTable = document.getElementById('myTable');

function Store (city,minCust,maxCust,avgCookie) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesEveryHour = [];
  this.totalCookies = [];
  store.push(this);
}





Store.prototype.checkCustomers = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
};

Store.prototype.calculatePerHour = function () {

  for ( var i = 0; i < hour.length; i++) {
    this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
  }
};
Store.prototype.calculateTotal = function (){
  for ( var i = 0; i < hour.length; i++) {
    this.totalCookies.push(this.calculatePerHour() * this.cookiesEveryHour);

  }
};


Store.prototype.render = function(){
  console.log('here');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');
  tableCell.textContent = this.city;
  tableRow.append(tableCell);
  tableBody.append(tableRow);
  var runningTotal = 0;
  for (var i = 0; i < hour.length; i++){
    var tableCell2 = document.createElement('td');
    tableCell2.textContent = this.cookiesEveryHour[i];
    tableRow.append(tableCell2);
    runningTotal += this.cookiesEveryHour[i];
  }
  var tableCell3 = document.createElement('td');
  tableCell3.textContent = runningTotal;
  tableRow.append(tableCell3);
};

var Seattle = new Store ('Seattle', 23, 65, 6.3);
var Tokyo = new Store ('Tokyo', 3, 24, 1.2);
var Dubai = new Store ('Dubai', 11, 38, 3.7);
var Paris = new Store ('Paris', 20, 38, 2.3);
var Lima = new Store ('Lima', 2, 16, 4.6);

Seattle.calculatePerHour();
Tokyo.calculatePerHour();
Dubai.calculatePerHour();
Paris.calculatePerHour();
Lima.calculatePerHour();



function createTableFooter(){
  var trElement = document.createElement('tr');
  foot.append(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = ('Totals');
  trElement.append(thElement);

  var grandTotal = 0;
  for (var i = 0; i < hour.length; i++) {

    var hourlySum = 0;
    var tdElement = document.createElement('td');
    trElement.appendChild(tdElement);

    for (var j = 0; j < store.length; j++) {
      // console.log('store',store[j]);
      hourlySum += store[j].cookiesEveryHour[i];
      console.log(store[j],store[j].cookiesEveryHour[i]);
      grandTotal += store[j].cookiesEveryHour[i];
    }

    tdElement.textContent = hourlySum;
  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.append(tdElement);
}

createTableFooter();








function tableHead() {
  console.log(head);
  var myRow = document.createElement('tr');
  var empty = document.createElement('td');
  myRow.append(empty);
  for (var i = 0; i < hour.length; i++) {
    var tableItem = document.createElement('th');
    tableItem.textContent = `${hour[i]}`;
    myRow.append(tableItem);
  }
  var thElement = document.createElement('th');
  thElement.textContent = 'Total';
  myRow.append(thElement);

  head.append(myRow);
}

function createTable(){
  tableHead();
  Seattle.render();
  Tokyo.render();
  Dubai.render();
  Paris.render();
  Lima.render();

}
store = [Seattle,Tokyo,Dubai,Paris,Lima];
createTable();



function makeNewStore(event) {
  console.log(store);
  event.preventDefault();
  var city = event.target.city.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookie = parseInt(event.target.avgCookie.value);
  var newStore = new Store(city,minCust,maxCust,avgCookie,[]);


  newStore.calculateTotal();
  console.log(city,minCust,maxCust,typeof avgCookie);
  tableBody.innerHTML= '';

  foot.innerHTML = '';


  // refreshTable();

  
  for (var i = 0; i < store.length; i++){
    store[i].render();
    console.log(store);
  }

  createTableFooter();
}
var formElement = document.getElementById('store-form');
formElement.addEventListener('submit',makeNewStore);

