import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ResearchCenter } from '@/assets/projectData';

interface GoogleMapComponentProps {
  centers: ResearchCenter[];
  title: string;
  onRemoveCenter?: (id: number) => void;
  editable?: boolean;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ 
  centers, 
  title, 
  onRemoveCenter, 
  editable = false 
}) => {
  const [selectedCenter, setSelectedCenter] = React.useState<ResearchCenter | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const defaultCenter = {
    lat: -15.7801,
    lng: -47.9292 // Brasília como centro padrão
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: true,
  };

  const handleMarkerClick = (center: ResearchCenter) => {
    setSelectedCenter(center);
  };

  return (
    <div className="w-full h-[500px] relative">
      <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={4}
          options={mapOptions}
        >
          {centers.map((center) => (
            <Marker
              key={center.id}
              position={{
                lat: center.latitude,
                lng: center.longitude
              }}
              onClick={() => handleMarkerClick(center)}
            />
          ))}

          {selectedCenter && (
            <InfoWindow
              position={{
                lat: selectedCenter.latitude,
                lng: selectedCenter.longitude
              }}
              onCloseClick={() => setSelectedCenter(null)}
            >
              <div className="bg-white p-2 rounded shadow">
                <h3 className="font-semibold text-gray-800">{selectedCenter.name}</h3>
                <p className="text-sm text-gray-600">{selectedCenter.city}, {selectedCenter.state}</p>
                {selectedCenter.description && (
                  <p className="text-xs mt-1 text-gray-700">{selectedCenter.description}</p>
                )}
                {editable && onRemoveCenter && (
                  <button 
                    onClick={() => {
                      onRemoveCenter(selectedCenter.id);
                      setSelectedCenter(null);
                    }}
                    className="text-xs text-red-600 mt-2 hover:text-red-800"
                  >
                    Remover Centro
                  </button>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;