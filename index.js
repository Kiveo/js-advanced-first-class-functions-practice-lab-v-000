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
  let filtered_drivers = drivers.filter(driver => {
    driver.hometown == location);
  }
  return filtered_drivers.forEach(function(driver){
    console.log(driver.name));
  }
}

function compareHometown(driver, location) {
    return location == driver;
}