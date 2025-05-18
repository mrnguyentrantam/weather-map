"use client";
import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import "@arcgis/core/assets/esri/themes/light/main.css";

import mockData from "../mockWeatherData.json";

export default function ArcGISMap() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    // Initialize the map
    const map = new Map({
      basemap: "streets-vector",
    });
    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [106.7009, 10.7769], // Ho Chi Minh City
      zoom: 5,
    });

    view.when(() => {
      const cities = mockData as Array<any>;
      cities.forEach((city) => {
        const latest = city.forecast[city.forecast.length - 1];
        const marker = {
          type: "simple-marker" as const,
          color: "#1976d2",
          size: 12,
          outline: { color: "white", width: 1 },
        };
        const point = {
          type: "point" as const,
          longitude: city.coord.lon,
          latitude: city.coord.lat,
        };
        const graphic = new Graphic({
          geometry: point,
          symbol: marker,
          attributes: {
            city: city.city,
            temp: latest.temp,
            weather: latest.weather,
            description: latest.description,
            icon: latest.icon,
            humidity: latest.humidity,
            wind: latest.wind,
            dt: latest.dt,
          },
        });
        view.graphics.add(graphic);
      });
    });

    // Cleanup on unmount
    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div
      style={{
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 2px 8px #0001",
        height: '100vh',
        width:'100vw'
      }}
      ref={mapDiv}
    />
  );
}
