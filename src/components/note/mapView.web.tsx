import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useLocation } from '@/src/hooks/locationHook';
import { Note } from '@/src/models/note';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import { abstractMapStyle } from './styles/map.styles';

interface MapViewSceneProps {
  notes: Note[];
  loading: boolean;
}
const MapViewScene: React.FC<MapViewSceneProps> = ({ notes, loading }) => {
  console.log('api', process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY);
  const googleMapsKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY || '';

  const { location } = useLocation();
  const router = useRouter();
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsKey,
  });

  if (loadError) {
    return (
      <View>
        <Text>Error loading map: {loadError.message}</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }}>
      {!isLoaded || loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={{
            lat: location ? location.coords.latitude : 32.0853,
            lng: location ? location.coords.longitude : 34.7818,
          }}
          zoom={12}
          options={{
            styles: abstractMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
            gestureHandling: 'greedy',
          }}
        >
          {notes.map((note) => (
            <Marker
              key={note.id}
              position={{
                lat: note.location.latitude,
                lng: note.location.longitude,
              }}
              onClick={() => router.push(`/note/${note.id}`)}
              title={note.title}
            />
          ))}
        </GoogleMap>
      )}
    </View>
  );
};

export default MapViewScene;
