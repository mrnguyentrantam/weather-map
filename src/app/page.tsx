'use client';

import { useEffect, useState } from 'react';
import Map from '../components/Map';
import VehicleList from '../components/VehicleList';
import Statistics from '../components/Statistics';
import { initializeLocalStorage } from '../data/vehicles';

export default function Home() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);

  // Initialize local storage with sample data on component mount
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <main className="app-container">
      <header className="header">
        <h1>Vehicle Tracking System</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <VehicleList 
            selectedVehicleId={selectedVehicleId}
            onSelectVehicle={setSelectedVehicleId}
          />
          {/* <Statistics selectedVehicleId={selectedVehicleId} /> */}
        </aside>

        <section className="map-section">
          <Map 
            selectedVehicleId={selectedVehicleId}
            onSelectVehicle={setSelectedVehicleId}
          />
        </section>
      </div>
    </main>
  );
}