import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';

interface Props {
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const GreenButton = ({title = 'Permission', onPress, style = {}}: Props) => {
  const {askLocationPermission} = useContext(PermissionsContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{...(style as any), ...styles.greenButton}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greenButton: {
    backgroundColor: '#41b883',
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});

export default GreenButton;
