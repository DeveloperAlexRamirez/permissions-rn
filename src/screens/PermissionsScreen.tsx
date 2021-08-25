import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello world from PermissionsScreen</Text>
      <Button title="Permissions" onPress={askLocationPermission} />

      <Text style={styles.texto}>{JSON.stringify(permissions, null, 5)}</Text>
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
    marginVertical: 6,
    marginBottom: 23,
  },
});

export default PermissionsScreen;
