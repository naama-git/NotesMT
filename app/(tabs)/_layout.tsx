import { Tabs } from 'expo-router';

import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'map' }}></Tabs.Screen>
        <Tabs.Screen name="list" options={{ title: 'list' }}></Tabs.Screen>
      </Tabs>
    </View>
  );
}
