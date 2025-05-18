'use client';

import { useEffect, useState } from 'react';
import { getVehicles } from '../data/vehicles';
import { useArcGIS } from '../hooks/useArcgis';

interface StatisticsProps {
  selectedVehicleId?: number | null;
}

const Statistics = ({ selectedVehicleId }: StatisticsProps) => {
  const [vehicle, setVehicle] = useState(null);
  const { getVehicleStatistics, isMapLoaded } = useArcGIS('mapDiv');
  const [stats, setStats] = useState({
    totalDistance: 0,
    avgSpeed: 0,
    maxSpeed: 0
  });

  useEffect(() => {
    if (selectedVehicleId) {
      const vehicles = getVehicles();
      const selectedVehicle = vehicles.find(v => v.id === selectedVehicleId);
      setVehicle(selectedVehicle);
      
      if (selectedVehicle && isMapLoaded) {
        const vehicleStats = getVehicleStatistics(selectedVehicle);
        setStats(vehicleStats);
      }
    } else {
      setVehicle(null);
      setStats({
        totalDistance: 0,
        avgSpeed: 0,
        maxSpeed: 0
      });
    }
  }, [selectedVehicleId, isMapLoaded, getVehicleStatistics]);

  if (!vehicle) {
    return (
      <div className="statistics">
        <h3>Statistics</h3>
        <p>Select a vehicle to see statistics</p>
      </div>
    );
  }

  return (
    <div className="statistics">
      <h3>Statistics for {vehicle.name}</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.totalDistance.toFixed(2)} km</div>
          <div className="stat-label">Total Distance</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.avgSpeed.toFixed(1)} km/h</div>
          <div className="stat-label">Average Speed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.maxSpeed} km/h</div>
          <div className="stat-label">Maximum Speed</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;