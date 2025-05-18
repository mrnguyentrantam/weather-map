import React from "react";
import mockData from "../mockWeatherData.json";

// Helper to convert Kelvin to Celsius
function kelvinToC(temp: number) {
  return (temp - 273.15).toFixed(1);
}

export default function WeatherSummary() {
  // @ts-ignore: JSON import
  const cities = mockData as Array<any>;
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", marginBottom: 24 }}>
      <h2 className="text-xl font-bold mb-2">Vietnam Weather Summary</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">City</th>
            <th className="border px-2 py-1">Time</th>
            <th className="border px-2 py-1">Weather</th>
            <th className="border px-2 py-1">Temp (°C)</th>
            <th className="border px-2 py-1">Humidity (%)</th>
            <th className="border px-2 py-1">Wind (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) =>
            city.forecast.map((f: any, idx: number) => (
              <tr key={`${city.city}-${f.dt}`}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-2 py-1">{city.city}</td>
                <td className="border px-2 py-1">{f.dt}</td>
                <td className="border px-2 py-1 flex items-center gap-2">
                  <img src={`https://openweathermap.org/img/wn/${f.icon}.png`} alt={f.weather} width={24} height={24} />
                  <span>{f.weather} ({f.description})</span>
                </td>
                <td className="border px-2 py-1">{kelvinToC(f.temp)}</td>
                <td className="border px-2 py-1">{f.humidity}</td>
                <td className="border px-2 py-1">{f.wind}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
