import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
  return (
    <MapView
      style={{width: '100%', height: '50%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: -30.5595, // South Africa's latitude
        longitude: 22.9375, // South Africa's longitude
        latitudeDelta: 30, // Adjust this value to zoom level
        longitudeDelta: 30, // Adjust this value to zoom level
      }}
    />
  );
};

export default HomeMap;
