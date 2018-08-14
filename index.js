// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function compareHometown(driver) {
  return location == driver.hometown;
}
// log each driver name whose home matches location
function logDriversByHometown(drivers, location) {
  let filtered_drivers = drivers.filter(function(driver) {
    return location == driver.hometown
  });
  filtered_drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function driversByRevenue(drivers) {
  drivers.sort(function(a, b){return a - b});
}
