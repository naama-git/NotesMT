import { Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '../src/context/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { theme } from '@/src/styles/theme';
import CustomHeader from '@/src/components/home/CustomHeader';

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = (segments[0] as string) === '(auth)';

    if (!user && !inAuthGroup) {
      router.replace('/login');
    } else if (user && inAuthGroup) {
      router.replace('/(tabs)');
    }
  }, [user, loading, segments, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: () => <CustomHeader />,
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          header: () => <CustomHeader />,
        }}
      />

      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <RootLayoutNav />
      </PaperProvider>
    </AuthProvider>
  );
}
