import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("City not found.");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Weather App
        </h1>

        {/* Search Form */}
        <form
          onSubmit={getWeather}
          className="rounded-xl bg-white p-5 shadow-md"
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && (
          <div className="mt-6 rounded-xl bg-white p-6 text-center shadow-md">
            <p className="text-gray-600">Loading weather...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-5 text-center">
            <p className="font-medium text-red-600">{error}</p>
          </div>
        )}

        {/* Weather */}
        {weather && !loading && !error && (
          <div className="mt-6 rounded-xl bg-white p-6 text-center shadow-md">
            {/* City */}
            <h2 className="text-2xl font-bold text-gray-800">
              {weather.name}
            </h2>

            <p className="mt-1 capitalize text-gray-500">
              {weather.weather[0].description}
            </p>

            {/* Temperature */}
            <p className="my-6 text-5xl font-bold text-blue-600">
              {Math.round(weather.main.temp)}°C
            </p>

            {/* Weather Details */}
            <div className="flex justify-between border-t border-gray-200 pt-5">
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {weather.main.humidity}%
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Wind</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {weather.wind.speed} m/s
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Feels Like</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {Math.round(weather.main.feels_like)}°C
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;