import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(''); // Initialize with an empty string

  const fetchData = async () => {
    if (searchCity) {
      const response = await getWeatherDataForCity(searchCity);
      setData(response);
    }
  };

  const fetchCurrentUserLocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherDataForLocation(latitude, longitude).then((data) => setData(data));
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to retrieve your location. Please enable location services and try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
