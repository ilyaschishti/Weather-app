import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Where are you? Check weather..."
      value={weather.searchCity || ''} // Use empty string as fallback
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
