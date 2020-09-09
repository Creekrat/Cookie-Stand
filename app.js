'use strict'

   
	

	var hour = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
	

	var seattle = {
	    minCust: 23,
	    maxCust:65,
        avgCookie:6.3,
        cookiesEveryHour: [],
	        checkCustomers: function() {
	            return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            },

            calculatePerHour: function () {
                for ( var i = 0; i < hour.length; i++) {
                    this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
                }
                this.makeStore();
            },

            makeStore: function () {
                var root = document.getElementById('root');
                
                var list = document.createElement('ul');

                for (var i = 0; i < this.cookiesEveryHour.length; i++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
                    list.append(listItem);
                    console.log(listItem);
                }
                root.append(list);
            }

    };  

        seattle.calculatePerHour();

	var tokyo = {
	    minCust: 3,
	    maxCust: 24,
        avgCookie: 1.2,
        cookiesEveryHour:[],

	    checkCustomers: function() {
	        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
        },

        calculatePerHour: function () {
            for ( var i = 0; i < hour.length; i++) {
                this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
            }
            this.makeStore();
        },

        makeStore: function () {
            var root = document.getElementById('root');
            
            var list = document.createElement('ul');

            for (var i = 0; i < this.cookiesEveryHour.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
                list.append(listItem);
                console.log(listItem);
            }
            root.append(list);
        }

    };
        tokyo.calculatePerHour();

	var dubai = {
	    minCust: 11,
	    maxCust: 38,
        avgCookie: 3.7,
        cookiesEveryHour:[],

	    checkCustomers: function() {
	        
	        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
	

        },

        calculatePerHour: function () {
            for ( var i = 0; i < hour.length; i++) {
                this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
            }
            this.makeStore();
        },

        makeStore: function () {
            var root = document.getElementById('root');
            
            var list = document.createElement('ul');

            for (var i = 0; i < this.cookiesEveryHour.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
                list.append(listItem);
                console.log(listItem);
            }
            root.append(list);
        }

    };
        dubai.calculatePerHour();

	var paris = {
	    minCust:20,
	    maxCust:38,
        avgCookie:2.3,
        cookiesEveryHour:[],
	    
	    checkCustomers: function() {
	        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
        },

        calculatePerHour: function () {
            for ( var i = 0; i < hour.length; i++) {
                this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
            }
            this.makeStore();
        },

        makeStore: function () {
            var root = document.getElementById('root');
            
            var list = document.createElement('ul');

            for (var i = 0; i < this.cookiesEveryHour.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
                list.append(listItem);
                console.log(listItem);
            }
            root.append(list);
        }

    };
        paris.calculatePerHour();

	var lima = {
	    minCust: 2,
	    maxCust: 16,
        avgCookie: 4.6,
        cookiesEveryHour:[],

	    checkCustomers: function() {
	        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
        },
        
        calculatePerHour: function () {
            for ( var i = 0; i < hour.length; i++) {
                this.cookiesEveryHour.push(Math.floor(this.checkCustomers() * this.avgCookie));
            }
            this.makeStore();
        },

        makeStore: function () {
            var root = document.getElementById('root');
            
            var list = document.createElement('ul');

            for (var i = 0; i < this.cookiesEveryHour.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = `${hour[i]}: ${this.cookiesEveryHour[i]}`;
                list.append(listItem);
                console.log(listItem);
            }
            root.append(list);
        }

    };
     lima.calculatePerHour();
	  

	

	    
	


