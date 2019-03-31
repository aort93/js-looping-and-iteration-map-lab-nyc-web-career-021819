// Code your solution in this file.
function lowerCaseDrivers(obj) {
  return obj.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(obj) {
  return obj.map(function(driver) {
    name = driver.split(' ')
    const first = name[0];
    const last = name[1];

    return { firstName: first, lastName: last};
  });
}

function attributesToPhrase(obj) {
  return obj.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}


const drivers = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];

console.log(nameToAttributes(drivers));
