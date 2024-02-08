import React from "react";
import Cloud from "../Icons/Cloud";
import Sun from "../Icons/Sun";
import Rain from "../Icons/Rain";
import Storm from "../Icons/Storm";
import Snow from "../Icons/Snow";
import Cloudy from "../Icons/Cloudy";

const weatherIconMap = {
    "200": "storm", // Thunderstorm with light rain
    "201": "storm", // Thunderstorm with rain
    "202": "storm", // Thunderstorm with heavy rain
    "230": "storm", // Thunderstorm with light drizzle
    "231": "storm", // Thunderstorm with drizzle
    "232": "storm", // Thunderstorm with heavy drizzle
    "233": "storm", // Thunderstorm with Hail
    "300": "rain", // Light Drizzle
    "301": "rain", // Drizzle
    "302": "rain", // Heavy Drizzle
    "500": "rain", // Light Rain
    "501": "rain", // Moderate Rain
    "502": "rain", // Heavy Rain
    "511": "rain", // Freezing rain
    "520": "rain", // Light shower rain
    "521": "rain", // Shower rain
    "522": "rain", // Heavy shower rain
    "600": "snow", // Light snow
    "601": "snow", // Snow
    "602": "snow", // Heavy Snow
    "610": "snow", // Mix snow/rain
    "611": "snow", // Sleet
    "612": "snow", // Heavy sleet
    "621": "snow", // Snow shower
    "622": "snow", // Heavy snow shower
    "623": "snow", // Flurries
    "700": "cloudy", // Mist
    "711": "cloudy", // Smoke
    "721": "cloudy", // Haze
    "731": "cloudy", // Sand/dust
    "741": "cloudy", // Fog
    "751": "cloudy", // Freezing Fog
    "800": "sun", // Clear sky
    "801": "cloud", // Few clouds
    "802": "cloud", // Scattered clouds
    "803": "cloud", // Broken clouds
    "804": "cloud", // Overcast clouds
    "900": "cloud", // Unknown Precipitation
};

const iconComponents = {
    cloud: <Cloud />,
    sun: <Sun />,
    rain: <Rain />,
    storm: <Storm />,
    snow: <Snow />,
    cloudy: <Cloudy />,
};

Object.entries(weatherIconMap).forEach(([weatherCode, iconName]) => {
    iconComponents[weatherCode] = iconComponents[iconName];
});

const WeatherIcon = ({ iconName = "" }) => {
    const iconNameParsed = iconName.toLowerCase().trim();
    const iconComponent = iconComponents[iconNameParsed] || null;

    return iconComponent;
};

export default WeatherIcon;
