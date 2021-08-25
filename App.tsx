import React from 'react';
import Navigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionsProvider} from './src/context/PermissionsContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export default App;
