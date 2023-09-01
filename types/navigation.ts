import type {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  NavApp: undefined;
  Home: undefined;
  Details: {title: string};
  Settings: undefined;
  DestinationSearch: undefined;
  SearchResults: {originPlace: string; destinationPlace: string};
};

// Define the types for your navigation parameters in RootStackParamList
export type RootStackParamList = {
  originPlace: undefined; // Replace with the actual type of originPlace
  destinationPlace: undefined; // Replace with the actual type of destinationPlace
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'Details'>;
