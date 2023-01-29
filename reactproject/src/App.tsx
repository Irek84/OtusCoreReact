import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [forecastData, setForecastData] = useState([]);

  const handleCLick = async (e: any) => {
    e.preventDefault();
    let forecastApiData = await axios.get(
      "https://localhost:44323/WeatherForecast"
    );
    setForecastData(forecastApiData.data);
  };
  return (
    <div className="App">
      <button onClick={handleCLick}>Получить данные</button>
      {forecastData.length > 0 && (
        <table>
          <thead>
            <th>Дата</th>
            <th>Погода</th>
          </thead>
          <tbody>
            {forecastData.map((item: any) => (
              <tr>
                <td>{item.date}</td>
                <td>
                        {item.summary} ({item.temperatureC}&deg;C / {item.temperatureF}&deg;F)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
