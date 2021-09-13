import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

interface Props {
  markers?: Marker[];
}

const Map = ({markers}: Props) => {
  const {initialposition, haslocation} = useLocation();

  if (!haslocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialposition!.latitude,
          longitude: initialposition!.longitud,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* Para añadir un marcador */}
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Esto es un titulo"
          description="Descripcion del marcador"
        /> */}
      </MapView>

      <Fab
        iconName="pencil"
        onPress={() => console.log('Hola')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};

export default Map;
