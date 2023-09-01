import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
  return (
    <MapView
      style={{width: '100%', height: '50%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: -33.9249, // Cape Town's latitude
        longitude: 18.4241, // Cape Town's longitude
        latitudeDelta: 0.1, // Adjust this value to zoom level
        longitudeDelta: 0.1, // Adjust this value to zoom level
      }}
    />
  );
};

export default HomeMap;
