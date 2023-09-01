import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './uber-types.style';
import UberTypeRow from '../uber-type-row/uber-type-row';

import typesData from '../../assets/data/types';

interface UberTypesProps {
  typeState: [string, React.Dispatch<React.SetStateAction<string>>];
  onSubmit: () => void;
}

const UberTypes: React.FC<UberTypesProps> = ({typeState, onSubmit}) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
