// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    debugger;
    console.log(driver.name);
  })
}

function compareHometown(location) {
  self.hometown == location
}
// log each driver name whose home matches location
function logDriversByHometown(drivers, location) {
  return drivers.filter(compareHometown(location))
}
