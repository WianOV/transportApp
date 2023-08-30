import type {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  NavApp: undefined;
  Home: undefined;
  Details: {title: string};
  Settings: undefined;
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'Details'>;
