

const Forecast = ({ forecast }) => {
  return (
    <div className="">
      <h2 className="text-white text-2xl font-bold mb-2">Forecast</h2>
      <div className="flex gap-4">
        {forecast.list.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md">
            <p className="text-gray-800 text-lg">{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <img
              className="w-full h-16"
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="weather icon"
            />
            <p className="text-gray-800">{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
