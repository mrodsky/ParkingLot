"use strict";

let Transaction = {
  Car           = null,
  timestamp     = Date.now(),
  pickUp        = false, 
  fname         = null,
  lname         = null,
  duration      = null, 
  cost          = (function(){
    if (this.duration = null)
    return 0;
    else if (this.duration = .5)
    return 10
    else if (this.duration = 1)
    return 20;    
  })
};

function ParkCar(patrush,Patrush_last,carCustomer,durationParked,amountPaid   ){
    let t = new Transaction();
    t.fname = patrush;
    t.lname = Patrush_last;
    t.timestamp = 
    t.duration = (function(durationParked){
      if (durationParked == .5)
      return durationParked;
      else if (durationParked == 1)
      return durationParked;
      else return 0}());
    t.Car = carCustomer;
    
    
    

  };

function PickUpCar(){
  return null;
}