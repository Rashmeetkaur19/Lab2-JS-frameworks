// utils.js

// 1. Function: Welcome message (no return, just prints text)
export function welcomeMessage(firstName, lastName, course) {
  console.log(`Welcome ${firstName} ${lastName} to ${course}!`);
}

// 2. Function: Convert Kilometers to Miles
export function kmToMiles(km) {
  return km * 0.621371; // 1 km = 0.621371 miles
}

// 3. Function: Calculate factorial (math operation)
export function factorial(n) {
  if (n < 0) return "Not defined for negatives";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 4. Function: Generate random password (advanced)
export function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
