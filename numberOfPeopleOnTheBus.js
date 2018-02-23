// with of iterater
var number = function(busStops){
  var total = 0;
  for (var person of busStops) {
    total += person[0];
    total -= person[1];
  }
  
  return total;
}

number([[10,0],[3,5],[5,8]]);


//with for loop
var number = function(busStops){
  var totalOn = 0;
  var totalOff = 0;
  for (var i = 0; i < busStops.length; i++) {
    var peopleOn = busStops[i][0];
    var peopleOff = busStops[i][1];
    // console.log('On: ' + peopleOn);
    // console.log('Off: ' + peopleOff);
    totalOn += peopleOn;
    totalOff += peopleOff;
    var result = totalOn - totalOff;
  }
  return result;
}

number([[10,0],[3,5],[5,8]]);


// with reduce method
var number = function(busStops){
  return busStops.reduce(function(sum, people) {
    // people[0] is people on, people[1] is people off
    // sum is initially 0 as stated in the 1 index of the first array.
    return sum + (people[0] - people[1]);
  }, 0);
};

number([[10,0],[3,5],[5,8]]);