var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

// Print the first high temperature to the console.
console.log(highTemperatures[0])
// Print the last low temperature to the console.
console.log(lowTemperatures[5])
// What is the average high temperature from the data set?
console.log([55 + 57 + 53 + 47 + 26 + 50]/highTemperatures.length)
// What is the average low temperature from the data set?
console.log([33 + 30 + 29 + 35 + 31 + 32]/lowTemperatures.length)

let todaysWeather = {
    temperature: {
        high: 52,
        low: 30
    },
    conditions: "sunny and mostly clear",
    astronomy: {
        sunrise: "7:35AM",
        sunset: "5:09PM"
    }
}

// Log today's high temperature to the console.
console.log(todaysWeather.temperature.high) //should read 52
// Log today's low temperature to the console.
console.log(todaysWeather.temperature.low) //should read 30
// Log today's conditions to the console.
console.log(todaysWeather.conditions) //should read sunny and clear
// Log today's sunrise time to the console.
console.log(todaysWeather.astronomy.sunrise) //should read 7:35
// Use string template literals to create a more detailed description of today's weather.
console.log(`Today's weather forecast is ${todaysWeather.conditions}. The high expected is ${todaysWeather.temperature.high} with a low of ${todaysWeather.temperature.low}`)

