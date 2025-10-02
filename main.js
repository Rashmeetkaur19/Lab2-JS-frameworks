// main.js
import { welcomeMessage, kmToMiles, factorial, generatePassword } from './utils.js';

// 1. Welcome message
welcomeMessage("Rashmeet", "Kaur", "Georgian College");

// 2. Convert KM to Miles
let km = 10;
console.log(`${km} kilometers = ${kmToMiles(km).toFixed(2)} miles`);

// 3. Factorial
let num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);

// 4. Generate random password
let pwd = generatePassword(8);
console.log(`Generated Password: ${pwd}`);

