import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PermissionsScreen from '../screens/PermissionsScreen';
import MapScreen from '../screens/MapScreen';
import {useContext} from 'react';
import {PermissionsContext} from '../context/PermissionsContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);

  // console.log(permissions.locationStatus);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
