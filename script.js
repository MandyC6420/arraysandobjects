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



let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

//    Log today's weather conditions to the console.
console.log(weatherForecast.day.conditions)
// Log Saturday's high temperature to the console.
// Log Saturday's sunrise time to the console.
// Log Sunday's conditions to the console.
// Log Sunday's sunset time to the console.
// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

