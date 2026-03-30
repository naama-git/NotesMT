import { Note } from '@/src/models/note';
import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '@/src/hooks/locationHook';
import { useRouter } from 'expo-router';
import { abstractStyleMobile } from './styles/map.styles';

interface MapViewProps {
  notes: Note[];
  loading: boolean;
}

const MapViewScene: React.FC<MapViewProps> = ({ notes, loading }) => {
  const { location } = useLocation();
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map View</Text>
      {Platform.OS === 'web' && (
        <Text style={{ color: 'red', marginBottom: 10 }}>
          Map view is not supported on web platform.
        </Text>
      )}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 32.0853,
          longitude: location ? location.coords.longitude : 34.7818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={abstractStyleMobile}
      >
        {notes.map((note) => (
          <Marker
            onPress={() => router.push(`/note/${note.id}`)}
            key={note.id}
            coordinate={{
              latitude: note.location.latitude,
              longitude: note.location.longitude,
            }}
            title={note.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapViewScene;
