import AddButton from '@/src/components/note/addNoteButton';
import { CommonActions } from '@react-navigation/native';
import { Tabs } from 'expo-router';

import React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Icon, useTheme } from 'react-native-paper';

export default function TabLayout() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            activeIndicatorStyle={{
              backgroundColor: 'transparent',
              height: 50,
              padding: 8,
            }}
            style={{ height: 70, backgroundColor: 'white' }}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!event.defaultPrevented) {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({
                  focused: false,
                  color: theme.colors.primary,
                  size: 32,
                });
              }
              return null;
            }}
          />
        )}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'map',
            tabBarIcon: ({ color, size }) => (
              <Icon source="map" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="list"
          options={{
            title: 'list',
            tabBarIcon: ({ color, size }) => (
              <Icon source="format-list-bulleted" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* הכפתור הצף שלך נשאר במקומו המקורי */}
      <View style={{ position: 'absolute', right: 16, bottom: 85 }}>
        <AddButton />
      </View>
    </View>
  );
}
