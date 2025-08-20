import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapSection = () => {
  const position = [8.5517917, 76.8772723]; // Asiatic Business Center, Kazhakkoottam, Kerala

  return (
    <section className="relative py-10 md:pt-8 md:pb-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 mt-[-20px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Visit Us
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Find your next adventure with us. Visit our office 
            at Asiatic Business Center, Kazhakkoottam, Thiruvananthapuram, Kerala.
          </p>
        </div>
        <div className="h-[500px] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
          <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%', backgroundColor: '#1a1a1a' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-center">
                  <strong>Explore Wings</strong><br />
                  Asiatic Business Center<br />
                  Kazhakkoottam, Thiruvananthapuram<br />
                  Kerala 695582<br />
                  <br />
                  <a href="https://www.google.com/maps/dir/Asiatic+Business+Center,+Kazhakkoottam,+Kerala/HV2G%2BPW6,+Kazhakkoottam,+Thiruvananthapuram,+Kerala+695582/@8.5517895,76.8360724,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3b05bef6c5743823:0xdc4f0e600b1f1dc2!2m2!1d76.8772723!2d8.5517917!1m5!1m1!1s0x3b05bef6c5743823:0xdc4f0e600b1f1dc2!2m2!1d76.8772723!2d8.5517917?entry=ttu" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:text-blue-600 underline">
                    Get Directions
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 