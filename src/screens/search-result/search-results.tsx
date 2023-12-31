import React, {useState} from 'react';
import {View, Dimensions, Alert, TouchableOpacity, Text} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import RouteMap from '../../components/route-map/route-map.component';
import UberTypes from '../../components/uber-types/uber-types';
import {createOrder} from '../../graphql/mutations';

import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './search-result.style';
import {MainStackParamList} from '../../../types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

const SearchResults = props => {
  const typeState = useState(null);

  const route = useRoute();

  const {originPlace, destinationPlace} = route.params;
  console.log(originPlace.location);
  // const onSubmit = async () => {
  //   const [type] = typeState;
  //   if (!type) {
  //     return;
  //   }

  //   // submit to server
  //   try {
  //     const userInfo = await Auth.currentAuthenticatedUser();

  //     const date = new Date();
  //     const input = {
  //       createdAt: date.toISOString(),
  //       type,
  //       originLatitude: originPlace.details.geometry.location.lat,
  //       oreiginLongitude: originPlace.details.geometry.location.lng,

  //       destLatitude: destinationPlace.details.geometry.location.lat,
  //       destLongitude: destinationPlace.details.geometry.location.lng,

  //       userId: userInfo.attributes.sub,
  //       carId: '1',
  //       status: 'NEW',
  //     };

  //     const response = await API.graphql(
  //       graphqlOperation(createOrder, {
  //         input: input,
  //       }),
  //     );

  //     console.log(response);

  //     navigation.navigate('OrderPage', {id: response.data.createOrder.id});
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const navigation =
    useNavigation<StackNavigationProp<MainStackParamList, 'NavApp'>>();

  const goBack = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          height: Dimensions.get('window').height - 200,
          position: 'relative',
        }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      {/* <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View> */}
    </View>
  );
};

export default SearchResults;
