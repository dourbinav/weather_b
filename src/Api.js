export const fetchweatherUsercity = async (lat,lon) => {
    
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2ea47d029dfdef0b562e5b15f0bdf20&units=metric`, {
        headers: { accept: "application/json" }
      });
      
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  export const fetchWeatherByCity = async(data)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=a2ea47d029dfdef0b562e5b15f0bdf20&units=metric`, {
            headers: { accept: "application/json" }
          });
          const weather=response.json();
          return weather   ;
    }
    catch(error){
        console.error('Error fetching City weather data:', error);
    }
  }
  export const fetchForecastByCity = async(data)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=a2ea47d029dfdef0b562e5b15f0bdf20&cnt=7&units=metric`, {
            headers: { accept: "application/json" }
          });
          const weather=response.json();
          return weather   ;
    }
    catch(error){
        console.error('Error fetching City weather data:', error);
    }
  }
  export const fetchHistoricalByCity = async(data)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=a2ea47d029dfdef0b562e5b15f0bdf20`, {
            headers: { accept: "application/json" }
          });
          const weather=response.json();
          return weather   ;
    }
    catch(error){
        console.error('Error fetching City weather data:', error);
    }
  }