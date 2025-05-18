'use client';

import { useEffect, useRef, useState } from 'react';
import { isBrowser } from '../utils/browserPolyfills';
import { useArcGIS } from '../hooks/useArcgis';
import { getVehicles } from '../data/vehicles';

interface MapProps {
  selectedVehicleId?: number | null;
  onSelectVehicle?: (id: number) => void;
}

const Map = ({ selectedVehicleId, onSelectVehicle }: MapProps) => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const vehicles = getVehicles();
  
  // Check if we're in the browser environment
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { 
    isMapLoaded, 
    displayVehicles, 
    zoomToVehicle,
    currentTime 
  } = useArcGIS(isClient && mapDivRef.current ? 'mapDiv' : null);

  // Update map when vehicles or current time changes
  useEffect(() => {
    if (isMapLoaded) {
      displayVehicles(vehicles);
    }
  }, [isMapLoaded, displayVehicles, vehicles, currentTime]);

  // Zoom to selected vehicle
  useEffect(() => {
    if (isMapLoaded && selectedVehicleId) {
      zoomToVehicle(selectedVehicleId, vehicles);
    }
  }, [isMapLoaded, selectedVehicleId, zoomToVehicle, vehicles]);

  return (
    <div className="map-container">
      <div 
        id="mapDiv" 
        ref={mapDivRef} 
        style={{ width: '100%', height: '100%' }}
      ></div>
      <div id="timeSliderDiv" className="time-slider"></div>
    </div>
  );
};

export default Map;