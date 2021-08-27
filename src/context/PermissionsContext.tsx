import React, {createContext, useState} from 'react';
import {
  PermissionStatus,
  PERMISSIONS,
  request,
  check,
  openSettings,
} from 'react-native-permissions';
import {Platform} from 'react-native';
import {useEffect} from 'react';
import {AppState} from 'react-native';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitialState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setPermissions] = useState(permissionInitialState);
  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return;

      // Escucha los cambios de los permisos (si es que los cambia manualmente)
      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    if (permissionStatus === 'blocked') {
      openSettings();
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

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
