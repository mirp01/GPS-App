import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, ViewStyle } from 'react-native';

interface LocationData {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const MostrarMapa: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [showsTraffic, setShowsTraffic] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de localización negado');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location as LocationData);
    })();
  }, []);

  const defaultRegion: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const currentRegion: Region = {
    latitude: location?.coords.latitude || defaultRegion.latitude,
    longitude: location?.coords.longitude || defaultRegion.longitude,
    latitudeDelta: defaultRegion.latitudeDelta,
    longitudeDelta: defaultRegion.longitudeDelta,
  };

  const styles = StyleSheet.create({
    map: {
      flex: 1,
    } as ViewStyle,
  });

  return (
    <MapView
      style={styles.map}
      region={currentRegion}
      showsTraffic={showsTraffic} // Enable traffic visualization
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Mi ubicación"
        />
      )}
    </MapView>
  );
};

export default MostrarMapa;
