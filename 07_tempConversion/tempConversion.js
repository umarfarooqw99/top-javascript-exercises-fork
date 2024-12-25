const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (5/9) * (tempFahrenheit - 32);
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (9/5) * tempCelsius + 32;
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
