import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Fab = ({iconName, onPress, style = {}}: Props) => {
  // Fab = Floting action button-
  return (
    <View style={{...(style as any)}}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.blackButton}>
        <Icon name={iconName} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blackButton: {
    zIndex: 9999,
    height: 50,
    width: 50,
    backgroundColor: '#1f1e1e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

export default Fab;
