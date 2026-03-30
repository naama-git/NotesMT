import 'dotenv/config';

console.log('ENV TEST:', process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY);
export default {
  expo: {
    name: 'NotesMT',
    slug: 'NotesMT',
    version: '1.0.0',
    orientation: 'portrait',
    scheme: 'notesmt',
    userInterfaceStyle: 'automatic',
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_MOBILE_KEY,
      },
      bundleIdentifier: 'com.notesmt.app',
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_MOBILE_KEY,
        },
      },
      package: 'com.notesmt.app',
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: 'static',
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY,
        },
      },
    },
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            usesCleartextTraffic: true,
          },
        },
      ],
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      '@react-native-community/datetimepicker',
      'expo-asset',
      [
        'expo-font',
        {
          fonts: ['./assets/fonts/Fredoka-VariableFont_wdth.ttf'],
        },
      ],
      'expo-build-properties',
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      googleMapsApiKeyWeb: process.env.EXPO_PUBLIC_GOOGLE_MAPS_WEB_KEY,
    },
  },
};
