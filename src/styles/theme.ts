import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0056B3',
    onPrimary: '#FFFFFF',
    primaryContainer: '#E7F1FF',
    onPrimaryContainer: '#001D3D',

    secondary: '#4A90E2',

    background: '#F8F9FA',
    surface: '#FFFFFF',

    onSurfaceVariant: '#6C757D',
    outline: '#CED4DA',
    surfaceVariant: '#E9ECEF',
  },
  fonts: {
    ...DefaultTheme.fonts,
    bodyLarge: {
      fontFamily: 'Assistant-Regular',
      fontSize: 16,
    },
    labelLarge: {
      fontFamily: 'Assistant-Regular',
      fontSize: 14,
    },
  },
};
