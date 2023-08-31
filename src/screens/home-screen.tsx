import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../types/navigation';
import HomeMap from '../../components/map.component';
import HomeSearch from '../../components/home-search/home-search';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <View style={{height: Dimensions.get('window').height - 200}}>
      <HomeMap />
      <HomeSearch />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
