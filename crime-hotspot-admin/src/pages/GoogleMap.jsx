import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      // Load Google Maps script dynamically
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      // Initialize the map centered on the first location or default coords
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 8,
        center: locations.length > 0 ? { lat: locations[0].lat, lng: locations[0].lng } : { lat: 0, lng: 0 },
      });

      // Add markers for all locations
      locations.forEach(({ lat, lng, name }) => {
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
          title: name,
        });
      });
    }
  }, [locations]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default GoogleMap;
