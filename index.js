// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function compareHometown(driver, location) {
  return location == driver.hometown;
}
// log each driver name whose home matches location
function logDriversByHometown(drivers, location) {
  let filtered_drivers = drivers.filter(function(driver) {
    location == driver.hometown
    debugger;
  });
  filtered_drivers.forEach(function(driver){
    console.log(driver.name);
  })

}


// var lucky = numbers.filter(function(number) {
//   return number > 7;
// });
