export default function Weather({ weather }) {
    return (
      <div className="h-full" >
        {weather && weather.main && (
          <div className="    flex flex-wrap items-center  p-2">
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="wind" src="https://cdn-icons-png.flaticon.com/128/14041/14041844.png" />
              <p className="text-white text-xl">Temperature: {weather.main.temp} C</p>
            </div>    
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="wind" src="https://cdn-icons-png.flaticon.com/128/5223/5223040.png" />
              <p className="text-white text-xl">Wind Speed: {weather.wind.speed} m/s</p>
            </div>
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="cloud" src="https://cdn-icons-png.flaticon.com/128/414/414825.png" />
              <p className="text-white text-xl">Clouds: {weather.clouds.all}%</p>
            </div>
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="humidity" src="https://cdn-icons-png.flaticon.com/128/6631/6631820.png" />
              <p className="text-white text-xl">Humidity: {weather.main.humidity}%</p>
            </div>
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="rain" src="https://cdn-icons-png.flaticon.com/128/12276/12276422.png" />
              <p className="text-white text-xl">Max temp: {weather.main.temp_max}°C</p>
            </div>
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="sea level" src="https://cdn-icons-png.flaticon.com/128/8740/8740155.png" />
              <p className="text-white text-xl">Sea Level: {weather.main.sea_level} hPa</p>
            </div>
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="wind" src="https://cdn-icons-png.flaticon.com/128/3236/3236899.png" />
              <p className="text-white text-xl">Sunset: {weather.sys.sunset} </p>
            </div>  
            <div className="p-2 w-1/4">
              <img className=" aspect-square" alt="wind" src="https://cdn-icons-png.flaticon.com/128/2584/2584049.png" />
              <p className="text-white text-xl">SunRise: {weather.sys.sunrise} </p>
            </div> 
          </div>
        )}

      </div>
    )
  }
  
 