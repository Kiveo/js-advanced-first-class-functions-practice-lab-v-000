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
  return drivers.slice(0).sort(function(driver_a, driver_b){return driver_a.revenue - driver_b.revenue});
}

function driversByName(drivers) {
  let driver_names = drivers.map(function (driver) {
    return driver.name;
  });
  console.log(driver_names + "hahaha");
  driver_names.sort((a,b) => a.localeCompare(b, 'en', {ignorePunctuation: true}) );

}

// var items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
// items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
