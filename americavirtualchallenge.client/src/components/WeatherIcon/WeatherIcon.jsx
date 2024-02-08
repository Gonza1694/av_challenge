import React from "react";
import Cloud from "../Icons/Cloud";
import Sun from "../Icons/Sun";
import Rain from "../Icons/Rain";
import Storm from "../Icons/Storm";
import Snow from "../Icons/Snow";
import Cloudy from "../Icons/Cloudy";

const iconComponents = {
  cloud: <Cloud />,
  sun: <Sun />,
  rain: <Rain />,
  storm: <Storm />,
  snow: <Snow />,
  cloudy: <Cloudy />,
};

const WeatherIcon = ({ iconName = "" }) => {
  const iconNameParsed = iconName.toLowerCase().trim();
  const iconComponent = iconComponents[iconNameParsed] || null;

  return iconComponent;
};

export default WeatherIcon;
