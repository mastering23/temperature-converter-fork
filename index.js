// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  // TODO
  let celsiusTemp = (f - 32) * (5/9);
  return Math.floor(celsiusTemp);
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  // TODO
  const celsiusValue = convertToCelsius(f);
  let message = ``;
  if (celsiusValue < 32) {
    message = `Today Temperature is ${celsiusValue} a very cold day!`;
  } else if (celsiusValue < 64) {
    message = `Today Temperature is ${celsiusValue} a cold day!`;
  } else if (celsiusValue < 86) {
    message = `Today Temperature is ${celsiusValue} a warm day!`;
  } else if (celsiusValue < 100) {
    message = `Today Temperature is ${celsiusValue} a hot day!`;
  } else if (celsiusValue >= 100) {
    message = `Today Temperature is ${celsiusValue} a very hot day!`;
  } else {
    alert("Check inputs something went wrong!");
  }
  return message;
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  // TODO
  
  const randomFahrenheitValue = Math.random() * 300;

  return   Math.floor(randomFahrenheitValue);

}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
