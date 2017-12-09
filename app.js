// This is to hold a value for todays temperature in Kelvin
const kelvin = prompt('What is the kelvin temperature today?');
// Converting kelvin to celsius
const celsius = kelvin -273;
// Converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Using string interpolation to print to the console the temp in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
