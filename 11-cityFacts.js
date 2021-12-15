// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
'use strict';

function cityFacts(city) {
  let { name, population, continent } = city;
  return `${name} has a population of ${population} and is situated in ${continent}`;
}

console.log(
  cityFacts({
    name: 'Paris',
    population: '2,140,526',
    continent: 'Europe',
  })
);
