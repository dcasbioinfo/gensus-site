import React, { useState } from 'react';
import { ResearchCenter } from '@/assets/projectData';

interface BrazilMapProps {
  centers: ResearchCenter[];
  title: string;
  onRemoveCenter?: (id: number) => void;
  editable?: boolean;
}

const BrazilMap: React.FC<BrazilMapProps> = ({ 
  centers, 
  title,
  onRemoveCenter,
  editable = false
}) => {
  const [selectedCenter, setSelectedCenter] = useState<ResearchCenter | null>(null);

  // SVG map dimensions and positioning
  const mapWidth = 600;
  const mapHeight = 600;
  const viewBox = "0 0 800 800";
  const mapScale = 0.8;
  const mapTranslateX = 120;
  const mapTranslateY = 30;

  // Handle marker click to show info
  const handleMarkerClick = (center: ResearchCenter) => {
    setSelectedCenter(center);
  };

  // Close info panel
  const handleCloseInfo = () => {
    setSelectedCenter(null);
  };

  // Handle remove center
  const handleRemoveCenter = (id: number) => {
    if (onRemoveCenter) {
      onRemoveCenter(id);
    }
    if (selectedCenter?.id === id) {
      setSelectedCenter(null);
    }
  };

  // Scale coordinates to SVG map
  const scaleCoordinates = (lat: number, lng: number) => {
    // Brazil spans from approx. -33 to 5 latitude and -74 to -35 longitude
    // Transform these ranges to fit within our SVG
    const x = ((lng + 74) / (74 - 35)) * mapWidth;
    const y = mapHeight - ((lat + 33) / (33 - 5)) * mapHeight;
    return { x, y };
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SVG Map */}
        <div className="relative flex-1 border bg-white rounded-lg shadow-md overflow-hidden">
          <svg 
            width="100%" 
            height="100%" 
            viewBox={viewBox} 
            style={{ minHeight: "400px" }}
          >
            <g transform={`translate(${mapTranslateX}, ${mapTranslateY}) scale(${mapScale})`}>
              {/* Brazil Map SVG Path */}
              <path
                d="M227.34,289.43 L216.64,287.59 L216.64,287.59 L212.47,295.02 L208.46,299.52 L198.98,299.52 L197.3,306.44 L191.38,308.45 L187.82,314.54 L185.29,323.81 L180.78,327.14 L175.37,326.99 L171.86,330.98 L168.52,331.48 L166.5,330.48 L162.99,332.99 L162.99,332.99 L164.66,338.08 L162.66,340.09 L162.66,345.17 L157.41,349.84 L157.41,349.84 L157.74,357.26 L155.73,359.78 L152.56,360.61 L152.06,361.95 L152.06,361.95 L146.05,368.62 L145.71,374.37 L149.89,379.62 L152.41,380.12 L153.74,382.14 L153.74,382.14 L157.08,382.14 L160.75,383.3 L164.25,382.47 L171.35,384.14 L175.04,382.8 L178.2,381.46 L183.62,381.3 L186.45,383.32 L187.45,387.31 L191.95,390.31 L193.12,389.31 L197.13,388.97 L198.47,390.81 L201.46,390.64 L204.79,387.31 L209.29,388.14 L211.47,390.81 L214.3,390.81 L218.63,387.14 L221.14,388.64 L221.14,390.81 L224.31,392.82"
                fill="#e9ecef"
                stroke="#6c757d"
                strokeWidth="2"
              />
              
              {/* Center Markers */}
              {centers.map((center) => {
                const { x, y } = scaleCoordinates(center.latitude, center.longitude);
                return (
                  <circle
                    key={center.id}
                    cx={x}
                    cy={y}
                    r={8}
                    fill="#4338ca"
                    stroke="#ffffff"
                    strokeWidth="2"
                    onClick={() => handleMarkerClick(center)}
                    className="cursor-pointer hover:fill-primary-dark transition-colors"
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Info Panel */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-4 shadow-md">
          {selectedCenter ? (
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold">{selectedCenter.name}</h4>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCloseInfo}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Localização:</span> {selectedCenter.city}, {selectedCenter.state}
                </div>
                
                <div>
                  <span className="font-medium">Coordenadas:</span> {selectedCenter.latitude.toFixed(4)}, {selectedCenter.longitude.toFixed(4)}
                </div>
                
                {selectedCenter.description && (
                  <div>
                    <span className="font-medium">Descrição:</span> {selectedCenter.description}
                  </div>
                )}
              </div>
              
              {editable && onRemoveCenter && (
                <button 
                  className="mt-4 px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm"
                  onClick={() => handleRemoveCenter(selectedCenter.id)}
                >
                  Remover Centro
                </button>
              )}
            </div>
          ) : (
            <div>
              <h4 className="text-lg font-semibold mb-3">Centros de Pesquisa</h4>
              <p className="text-gray-600 mb-4">
                Selecione um marcador no mapa para ver detalhes sobre o centro de pesquisa.
              </p>
              
              <h5 className="font-medium mb-2">Centros disponíveis:</h5>
              <ul className="space-y-1">
                {centers.map(center => (
                  <li 
                    key={center.id}
                    className="text-primary hover:text-primary-dark cursor-pointer"
                    onClick={() => handleMarkerClick(center)}
                  >
                    {center.name} ({center.city}/{center.state})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrazilMap;