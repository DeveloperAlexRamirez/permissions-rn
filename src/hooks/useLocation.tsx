import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../interfaces/AppInterfaces';

export const useLocation = () => {
  const [haslocation, setHasLocation] = useState(false);
  const [initialposition, setInitialPosition] = useState<Location>();

  // Para ver las coordenadas del dispositivo
  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitud: coords.longitude,
        });

        setHasLocation(true);
      },
      err => console.log({err}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return {
    initialposition,
    haslocation,
  };
};
