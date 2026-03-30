import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useLocation } from '@/src/hooks/locationHook';
import { Note } from '@/src/models/note';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';

interface MapViewSceneProps {
  notes: Note[];
  loading: boolean;
}
const MapViewScene: React.FC<MapViewSceneProps> = ({ notes, loading }) => {
  console.log('api', process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY);

  const { location } = useLocation();
  const router = useRouter();
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY || '',
  });

  if (loadError) {
    return (
      <View>
        <Text>שגיאה בטעינת המפה: {loadError.message}</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      {isLoaded || loading ? (
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
          zoom={10}
        >
          {notes.map((note) => (
            <Marker
              onClick={() => router.push(`/note/${note.id}`)}
              key={note.id}
              position={{
                lat: note.location.latitude,
                lng: note.location.longitude,
              }}
              title={note.title}
            />
          ))}
        </GoogleMap>
      )}
    </View>
  );
};

export default MapViewScene;
