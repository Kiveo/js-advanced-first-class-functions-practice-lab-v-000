// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function compareHometown(location) {
  return this.hometown == location
}
// log each driver name whose home matches location
function logDriversByHometown(drivers, location) {
  new_array = drivers.filter(compareHometown);
  debugger;
  return new_array.map(this.name)
}
