import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

const LocationIcon = () => {
  return (
    <svg className="w-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  )
}

const Location = ({ region, city }) => {
  return (
    <div className="flex justify-center items-center">
      <LocationIcon />
      <h1 className="text-white text-xl mx-1 font-semibold"> {region}, </h1>
      <h1 className="text-white text-xl font-semibold"> {city} </h1>
    </div>
  )
}

const Condition = ({ text, icon }) => {
  return (
    <div className="flex justify-center items-center">
      <img src={icon} alt="weather condition symbol" />
      <h1 className="text-xl text-white font-semibold"> {text} </h1>
    </div>
  )
}

const Temp = ({ tempC, tempF }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-white text-xl mr-4 font-semibold"> {tempC} °C</h1>
      <h1 className="text-white text-xl font-semibold"> {tempF} °F</h1>
    </div>
  )
}

const Weather = ({ text, icon, tempC, tempF, region, city }) => {

  return (
    <div className="flex flex-col">
      <Location region={region} city={city} />
      <Condition text={text} icon={icon} />
      <Temp tempC={tempC} tempF={tempF} />
    </div>
  )
}

export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});

  const getLocation = () => {
    const geoLocation = navigator.geolocation;
    geoLocation
      ? geoLocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
      },
        error => {
          return error;
        })
      : setError("Not supported");
  }


  const fetchWeather = async (latitude, longitude) => {
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=be51cfb446f146dda14170431200106&q=${latitude},${longitude}`);
      const result = await res.json();
      const current = result.current;
      const condition = current.condition;
      const location = result.location;
      setCurrent(current);
      setWeather(condition);
      setLocation(location);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getLocation();
    fetchWeather(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <Layout>
      <section className="flex flex-col justify-center p-4">
        {
          latitude === "" && longitude === ""
            ? <h1 className="text-xl text-white text-center font-semibold">Waiting for the permission...</h1>
            : isLoaded
              ? <Weather
                text={weather.text}
                icon={weather.icon}
                tempC={current.temp_c}
                tempF={current.temp_f}
                region={location.name}
                city={location.region}
              />
              : error === null
                ? <h1>Fetching the weather data...</h1>
                : <h1> {error} </h1>
        }
      </section>
    </Layout>
  )
}
