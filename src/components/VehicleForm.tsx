'use client';

import { useState } from 'react';
import { addVehicle, saveVehicles, getVehicles } from '../data/vehicles';

interface FormData {
  name: string;
  type: string;
  color: string;
  initialLatitude: string;
  initialLongitude: string;
}

interface VehicleFormProps {
  onVehicleAdded: () => void;
  onCancel: () => void;
}

const VehicleForm = ({ onVehicleAdded, onCancel }: VehicleFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'Sedan',
    color: '#1E88E5',
    initialLatitude: '10.8231',
    initialLongitude: '106.6297',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentTime = new Date();
    const newVehicle = {
      name: formData.name,
      type: formData.type,
      color: formData.color,
      routes: [
        {
          timestamp: currentTime.toISOString(),
          latitude: parseFloat(formData.initialLatitude),
          longitude: parseFloat(formData.initialLongitude),
          speed: 0
        }
      ]
    };
    
    addVehicle(newVehicle);
    onVehicleAdded();
  };

  return (
    <div className="form-container">
      <h3>Add New Vehicle</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Vehicle Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="type">Vehicle Type</label>
          <select
            id="type"
            name="type"
            className="form-control"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Delivery">Delivery</option>
            <option value="Service">Service</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            id="color"
            name="color"
            className="form-control"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="initialLatitude">Initial Latitude</label>
          <input
            type="text"
            id="initialLatitude"
            name="initialLatitude"
            className="form-control"
            value={formData.initialLatitude}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="initialLongitude">Initial Longitude</label>
          <input
            type="text"
            id="initialLongitude"
            name="initialLongitude"
            className="form-control"
            value={formData.initialLongitude}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="action-buttons">
          <button type="submit" className="button">Add Vehicle</button>
          <button type="button" className="button button-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;