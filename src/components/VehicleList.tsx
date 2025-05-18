'use client';

import { useState, useEffect } from 'react';
import { getVehicles } from '../data/vehicles';
import VehicleForm from './VehicleForm';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  color: string;
  routes: Array<{
    timestamp: string;
    longitude: number;
    latitude: number;
    speed: number;
  }>;
}

interface VehicleListProps {
  selectedVehicleId?: number | null;
  onSelectVehicle: (id: number) => void;
}

const VehicleList = ({ selectedVehicleId, onSelectVehicle }: VehicleListProps) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Load vehicles from localStorage
    setVehicles(getVehicles());
  }, []);

  const handleAddVehicle = () => {
    setShowAddForm(true);
  };

  const handleVehicleAdded = () => {
    // Refresh the vehicle list
    setVehicles(getVehicles());
    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
  };

  if (showAddForm) {
    return <VehicleForm onVehicleAdded={handleVehicleAdded} onCancel={handleCancel} />
  }

  return (
    <div className="vehicle-list">
      <div className="header-with-button">
        <h3>Vehicles</h3>
        <button className="button" onClick={handleAddVehicle}>Add</button>
      </div>
      
      {vehicles.length === 0 ? (
        <p>No vehicles available. Add your first vehicle!</p>
      ) : (
        <ul>
          {vehicles.map(vehicle => (
            <li 
              key={vehicle.id}
              className={selectedVehicleId === vehicle.id ? 'selected' : ''}
              onClick={() => onSelectVehicle(vehicle.id)}
            >
              <span 
                className="vehicle-color-indicator" 
                style={{ backgroundColor: vehicle.color }}
              ></span>
              <div className="vehicle-info">
                <span className="vehicle-name">{vehicle.name}</span>
                <span className="vehicle-type">{vehicle.type}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VehicleList;