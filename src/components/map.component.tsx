import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import {API, graphqlOperation} from 'aws-amplify';
// import {listCars} from '../../graphql/queries';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const response = await API.graphql(graphqlOperation(listCars));

  //       setCars(response.data.listCars.items);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchCars();
  // }, []);

  const getImage = type => {
    if (type === 'UberX') {
      return require('/Users/wianvanschalkwyk/Documents/GitHub/wian react native/transportApp/src/assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('/Users/wianvanschalkwyk/Documents/GitHub/wian react native/transportApp/src/assets/images/top-Comfort.png');
    }
    return require('/Users/wianvanschalkwyk/Documents/GitHub/wian react native/transportApp/src/assets/images/top-UberXL.png');
  };
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
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
