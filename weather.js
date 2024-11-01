let weather = {
    "cnt": 3,
    "list": [
    {
        "coord": {
            "lon": 37.62,
            "lat": 55.75
        },
        "sys": {
            "type": 1,
            "id": 7323,
            "message": 0.0036,
            "country": "RU",
            "sunrise": 1485753940,
            "sunset": 1485784855
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": -10.5,
            "pressure": 1028,
            "humidity": 66,
            "temp_min": -11,
            "temp_max": -10
        },
        "visibility": 10000,
        "wind": {
            "speed": 5,
            "deg": 200
        },
        "clouds": {
            "all": 0
        },
        "dt": 1485793175,
        "id": 524901,
        "name": "Moscow"
    },
    {
        "coord": {
            "lon": 30.52,
            "lat": 50.45
        },
        "sys": {
            "type": 1,
            "id": 7358,
            "message": 0.0268,
            "country": "UA",
            "sunrise": 1485754480,
            "sunset": 1485787716
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": -11.04,     // i want the current temp
            "pressure": 1033,
            "humidity": 61,
            "temp_min": -15,
            "temp_max": -9
        },
        "visibility": 10000,
        "wind": {
            "speed": 3,     //i want the wind speed
            "deg": 150
        },
        "clouds": {
            "all": 0
        },
        "dt": 1485793175,
        "id": 703448,
        "name": "Kiev"
    },
    {
        "coord": {
            "lon": -0.13,
            "lat": 51.51
        },
        "sys": {
            "type": 1,
            "id": 5091,
            "message": 0.0034,
            "country": "GB",
            "sunrise": 1485762036,
            "sunset": 1485794875
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",      // description
                "icon": "50d"
            },
            {
                "id": 300,
                "main": "Drizzle",
                "description": "light intensity drizzle",   // description
                "icon": "09d"
            }
        ],
        "main": {
            "temp": 7,
            "pressure": 1012,
            "humidity": 81,
            "temp_min": 5,
            "temp_max": 8
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.6,
            "deg": 90
        },
        "clouds": {
            "all": 90
        },
        "dt": 1485793175,
        "id": 2643743,
        "name": "London"
    }]
}

// console.log(weather)

let weatherList = weather.list
console.log(weatherList)

let weatherInfo = weatherList[0]
console.log(weatherInfo)

let main = weatherInfo.main
console.log(main)

let wind = weatherInfo.wind
let speed = wind.speed
console.log('Current wind speed is ' + speed)

let currentTemp = main.temp
console.log(currentTemp)

let temp = weather.list[0].main.temp
console.log(temp)

let weatherDescriptionArray = weatherInfo.weather

let descriptions = []

weatherDescriptionArray.forEach(function (weatherDescription) {
   // console.log(weatherDescription.description)
    descriptions.push(weatherDescription.description)
})

let descriptionString = descriptions.join(', ')
console.log('The weather is ' + descriptionString)

