import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Hello world form HomeScreen</Text>
      <Icon name="list" size={30} />
    </View>
  );
};

export default HomeScreen;
