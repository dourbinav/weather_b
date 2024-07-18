import { useEffect, useState } from "react";
import { fetchWeatherByCity, fetchForecastByCity, fetchweatherUsercity, fetchHistoricalByCity } from "../Api";
import Weather from "./Weather";
import Forecast from "./forecast"

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [Add,setadd] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const data = await fetchweatherUsercity(lat, lon);
          setWeather(data);
          setCity(data.name);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    };

    const Debounce = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(Debounce);
  }, [city]);

  useEffect(() => {
    if (weather && weather.name) {
      const fetchForecast = async () => {
        const data = await fetchForecastByCity(weather.name);
        setForecast(data);
      };

      const forecastTimeout = setTimeout(() => {
        fetchForecast();
      }, 6000);

      return () => clearTimeout(forecastTimeout);
    }
  }, [weather]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  function handleFav() {
  setadd(!Add)
  }

  async function gethistory(city) {
      const data=await fetchHistoricalByCity(city)
      setForecast(data)
    }

  return (
    <div className="flex flex-col md:space-y-0 lg:space-y-0 bg-blue-500 h-screen">
      <div className="max-h-fit w-full md:w-1/2 p-2 text-center flex items-center flex-col">
        <div className="w-full space-x-2 flex">
          <input
            className="w-full p-3 rounded-md"
            value={city}
            onChange={handleChange}
            onKeyDown={handleKeydown}
            placeholder="Search city"
          />
          {weather && weather.name && (<div className="gap-2 flex"><button className="text-blue-500 bg-white rounded-md p-2" onClick={handleFav}>
          {Add ?"Remove":"favourite"}
          </button>
          <button onClick={gethistory(weather.name)} className="text-blue-500 bg-white rounded-md p-2">Historical weather</button>
          </div>)}
        </div>
      </div>
      
        <div className="flex h-1/2 my-4 p-2 ">
         {weather && weather.main ? (
          <><div className="w-1/3 flex justify-center items-center">
            <div className="text-7xl text-white font-bold">{weather.name}
            </div>
          </div>
          <div className="w-2/3 h-full">
            <Weather weather={weather} /> 
          </div>
        </>):<span  className="w-10 aspect-square text-white transition-all ">Loading</span>}
        </div>
     
      
        <div className=" p-8 my-2">
        {forecast && forecast.list ? (  <Forecast forecast={forecast} />):<img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg" className="w-10 animate-spin "></img>}
        </div>
      
    </div>
  );
}
