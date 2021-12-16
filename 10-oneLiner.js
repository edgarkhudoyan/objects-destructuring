// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
'use strict';

let city = {
  name: 'Yerevan',
  pop: '1M',
  continent: 'Asia',
};

const showCityDetails = (obj) => Object.values(obj).toString();

console.log(showCityDetails(city));
