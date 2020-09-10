'use strict'

console.log('java is loaded');

   
	var store = null

var hour = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
var myTable = document.getElementById("myTable");

function Store (city,minCust,maxCust,avgCookie) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.cookiesEveryHour = [];

    this.totalCookies = [];
}


    this.totalSales = [];
}//create another property for the constuctor..

Store.prototype.checkCustomers = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
}       

Store.prototype.calculatePerHour = function () {
    for ( var i = 0; i < hour.length; i++) {
        this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    }
}   
Store.prototype.calculateTotal = function (){
    for ( var i = 0; i < hour.length; i++) {
        this.totalCookies.push(calculatePerHour() * this.cookiesEveryHour);
        
    }
}  

Store.prototype.render = function(){
    var tableBody = document.getElementById('tablebody');
    var tableRow = document.createElement('tr');
    var tableCell = document.createElement('td');
    tableCell.textContent = this.city;
    tableRow.append(tableCell);
    tableBody.append(tableRow);
    for (var i = 0; i < hour.length; i++){
        var tableCell = document.createElement('td');
        tableCell.textContent = this.cookiesEveryHour[i];
        tableRow.append(tableCell);
    }
}

var Seattle = new Store ('Seattle', 23, 65, 6.3,[]);
var Tokyo = new Store ('Tokyo', 3, 24, 1.2,[]);
var Dubai = new Store ('Dubai', 11, 38, 3.7,[]);
var Paris = new Store ('Paris', 20, 38, 2.3,[]);
var Lima = new Store ('Lima', 2, 16, 4.6,[]);

Seattle.calculatePerHour();
Tokyo.calculatePerHour();
Dubai.calculatePerHour();
Paris.calculatePerHour();
Lima.calculatePerHour();


function createTableFooter(){
    var trElement = document.createElement('tr');
    myTable.append(trElement);

    var thElement = document.createElement('th');
    trElement.append(thElement);
    thElement.textContent = ('Totals');

    var grandTotal = 0;
    loop1: for (var i =0; i < hour.length; i++) {

        var hourlySum = 0;
         var tdElement = document.createElement('td');
         trElement.appendChild(tdElement);

         loop2: for (var j = 0; j < hour.length; j++) {
             hourlySum += store[j].totalCookies[i];
             grandTotal += store[j].totalCookies[i];
         }

         tdElement.textContent = hourlySum;
    }
    tdElement = document.createElement('td');
    trElement.append(tdElement);
    tdElement.textContent = grandTotal;
}

   createTableFooter();







function tableHead() {
    var head = document.getElementById('tablehead');
    var myRow = document.createElement('tr');
    var empty = document.createElement('td');
    myRow.append(empty)
    for (var i = 0; i < hour.length; i++) {
        var tableItem = document.createElement('th');
        tableItem.textContent = `${hour[i]}`;
        myRow.append(tableItem);
    }
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
createTable();

 

	 

	// // var seattle = {
	//     minCust: 23,
	//     maxCust:65,
    //     avgCookie:6.3,
    //     cookiesEveryHour: [],
	//         checkCustomers: function() {
	//             return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    //         },

    //         calculatePerHour: function () {
    //             for ( var i = 0; i < hour.length; i++) {
    //                 this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    //             }
    //             this.makeStore();
    //         },

    //         makeStore: function () {
    //             var root = document.getElementById('root');
                
    //             var list = document.createElement('ul');

    //             for (var i = 0; i < this.cookiesEveryHour.length; i++) {
    //                 var listItem = document.createElement('li');
    //                 listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
    //                 list.append(listItem);
    //                 console.log(listItem);
    //             }
    //             root.append(list);
    //         }

    // };  

    //     seattle.calculatePerHour();

	// var tokyo = {
	//     minCust: 3,
	//     maxCust: 24,
    //     avgCookie: 1.2,
    //     cookiesEveryHour:[],

	//     checkCustomers: function() {
	//         return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    //     },

    //     calculatePerHour: function () {
    //         for ( var i = 0; i < hour.length; i++) {
    //             this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    //         }
    //         this.makeStore();
    //     },

    //     makeStore: function () {
    //         var root = document.getElementById('root');
            
    //         var list = document.createElement('ul');

    //         for (var i = 0; i < this.cookiesEveryHour.length; i++) {
    //             var listItem = document.createElement('li');
    //             listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
    //             list.append(listItem);
    //             console.log(listItem);
    //         }
    //         root.append(list);
    //     }

    // };
    //     tokyo.calculatePerHour();

	// var dubai = {
	//     minCust: 11,
	//     maxCust: 38,
    //     avgCookie: 3.7,
    //     cookiesEveryHour:[],

	//     checkCustomers: function() {
	        
	//         return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
	

    //     },

    //     calculatePerHour: function () {
    //         for ( var i = 0; i < hour.length; i++) {
    //             this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    //         }
    //         this.makeStore();
    //     },

    //     makeStore: function () {
    //         var root = document.getElementById('root');
            
    //         var list = document.createElement('ul');

    //         for (var i = 0; i < this.cookiesEveryHour.length; i++) {
    //             var listItem = document.createElement('li');
    //             listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
    //             list.append(listItem);
    //             console.log(listItem);
    //         }
    //         root.append(list);
    //     }

    // };
    //     dubai.calculatePerHour();

	// var paris = {
	//     minCust:20,
	//     maxCust:38,
    //     avgCookie:2.3,
    //     cookiesEveryHour:[],
	    
	//     checkCustomers: function() {
	//         return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    //     },

    //     calculatePerHour: function () {
    //         for ( var i = 0; i < hour.length; i++) {
    //             this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    //         }
    //         this.makeStore();
    //     },

    //     makeStore: function () {
    //         var root = document.getElementById('root');
            
    //         var list = document.createElement('ul');

    //         for (var i = 0; i < this.cookiesEveryHour.length; i++) {
    //             var listItem = document.createElement('li');
    //             listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
    //             list.append(listItem);
    //             console.log(listItem);
    //         }
    //         root.append(list);
    //     }

    // };
    //     paris.calculatePerHour();

	// var lima = {
	//     minCust: 2,
	//     maxCust: 16,
    //     avgCookie: 4.6,
    //     cookiesEveryHour:[],

	//     checkCustomers: function() {
	//         return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    //     },
        
    //     calculatePerHour: function () {
    //         for ( var i = 0; i < hour.length; i++) {
    //             this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
    //         }
    //         this.makeStore();
    //     },

    //     makeStore: function () {
    //         var root = document.getElementById('root');
            
    //         var list = document.createElement('ul');

    //         for (var i = 0; i < this.cookiesEveryHour.length; i++) {
    //             var listItem = document.createElement('li');
    //             listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
    //             list.append(listItem);
    //             console.log(listItem);
    //         }
    //         root.append(list);
    //     }

    // };
    //  lima.calculatePerHour();
      	  

	

	    
	


