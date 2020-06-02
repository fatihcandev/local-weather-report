import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

const Weather = ({ weather }) => {

  return (
    <div className="flex items-center">
      <h1 className="text-xl"> {weather.text} </h1>
    </div>
  )
}

export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);

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
          setError(error.message);
        })
      : console.log("Not supported!");
  }

  const fetchWeather = async (latitude, longitude) => {
    try {
      const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=be51cfb446f146dda14170431200106&q=${latitude},${longitude}`);
      const result = await res.json();
      const weather = result.current.condition;
      setWeather(weather);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
      setIsLoaded(true);
      setError(error.message);
    }
  }

  useEffect(() => {
    getLocation();
    fetchWeather(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <Layout>
      <section className="min-h-screen flex flex-col justify-center items-center">
        {
          isLoaded
            ? <Weather weather={weather} />
            : error === null
              ? <h1>Fetching...</h1>
              : <h1> {error} </h1>
        }
      </section>
    </Layout>
  )
}
