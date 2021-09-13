import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';

import GreenButton from '../components/GreenButton';

const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GPS is required to use this application</Text>
      <GreenButton onPress={askLocationPermission} />
      <Text style={{...styles.texto, marginTop: 20}}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontSize: 20,
    marginVertical: 6,
    marginBottom: 23,
  },
});

export default PermissionsScreen;
