'use strict';


//for 1st and pike location 
var storeUlEl = document.getElementById('store-container');

var CookiesForPikeLocation = {
   Location : '1st and pike',
   MinCust : 23,
  MaxCust : 65,
   AvgCookiesSales : 6.3,
   totalPerHour : [],
};

CookiesForPikeLocation.calculateCustomerPerOneHour = function(){
  var customers = math.floor(Math.random() * (this.MaxCust - this.MaxCust)) + this.MaxCust;
  return customers
};

CookiesForPikeLocation.calculateCustomerPerOneHour = function(){
  var customersInHour = this.calculateCustomerPerOneHour();
  var cookies = this.AvgCookiesSales * customersInHour;
  return Math.ceil(cookies);
};


CookiesForPikeLocation.calculateCustomerPerOneHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInPerHour = this.calculateCustomerPerOneHour();
    this.totalPerHour.push(totalInPerHour);
    total += totalInPerHour;
  }
  this.total = total;
  console.log(this.totalPerHour)
};

//outline li to the parent ul
CookiesForPikeLocation.makeList = function(){
  if(this.totalPerHour.length === 0) {
    this.calculateCustomerPerOneHour();
  }
  //2nd step
  var LocationLiEl = document.createElement(li);

  //3rd
  //2nd

  var h2El = document.createElement('h2');
  h2El.textContent = this.Location;
  LocationLiEl.appendchild(h2El);


  var ulEl = document.createElement('ul');

  for(var j = 0; j < this.totalPerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00';
    hour = hour.padstart(5, '0');
    hourLiEl.textContent = hour + this.totalPerHour[j] + 'cookies';
    ulEl.appendChild(hourLiEl);
  }


}

// for seaTac Aiport location

var storeUlEl = document.getElementById('store-container');

var CookiesForSeaTacLocation = {
   Location : 'Seatac Airport',
   MinCust : 3,
  MaxCust : 24,
   AvgCookiesSales : 1.3,
   totalPerHour : [],
};

CookiesForSeaTacLocation.calculateCustomerPerOneHour = function(){
  var customers = math.floor(Math.random() * (this.maxCust - this.MinCust)) + this.MinCust;
  return customers
};

CookiesForSeaTacLocation.calculateCustomerPerOneHour = function(){
  var customersInHour = this.calculateCustomerPerOneHour();
  var cookies = this.AvgCookiesSales * customersInHour;
  return Math.ceil(cookies);
};


CookiesForSeaTacLocation.calculateCustomerPerOneHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInPerHour = this.calculateCustomerPerOneHour();
    this.totalPerHour.push(totalInPerHour);
    total += totalInPerHour;
  }
  this.total = total;
  console.log(this.totalPerHour)
};

//outline li to the parent ul
CookiesForSeaTacLocation.makeList = function(){
  if(this.totalPerHour.length === 0) {
    this.calculateCustomerPerOneHour();
  }
  //2nd step
  var LocationLiEl = document.createElement(li);

  //3rd
  //2nd

  var h2El = document.createElement('h2');
  h2El.textContent = this.Location;
  LocationLiEl.appendchild(h2El);


  var ulEl = document.createElement('ul');

  for(var j = 0; j < this.totalPerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00';
    hour = hour.padstart(5, '0');
    hourLiEl.textContent = hour + this.totalPerHour[j] + 'cookies';
    ulEl.appendChild(hourLiEl);
  }


}

function makePage(){
  CookiesForPikeLocation.makeList();
  CookiesForSeaTacLocation.makeList();

}

makePage();







