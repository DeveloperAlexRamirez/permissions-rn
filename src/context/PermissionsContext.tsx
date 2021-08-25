import React, {createContext, useState} from 'react';
import {PermissionStatus, PERMISSIONS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitialState: PermissionsState = {
  locationStatus: 'granted',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionInitialState);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };
  const checkLocationPermission = () => {};

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
