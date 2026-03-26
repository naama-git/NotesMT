import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2D6A4F', // ירוק דומיננטי
    onPrimary: '#FFFFFF', // טקסט על הירוק הדומיננטי
    primaryContainer: '#D8F3DC', // רקע ירוק בהיר לרכיבים
    onPrimaryContainer: '#081C15',

    secondary: '#74C69D', // ירוק רך יותר

    background: '#F8F9FA', // רקע אפליקציה אפרפר-נקי
    surface: '#FFFFFF', // רקע כרטיסים

    // רכיבים "אנמיים" ופחות בולטים:
    onSurfaceVariant: '#6C757D', // טקסט אפור עדין
    outline: '#CED4DA', // גבולות דקים ואפורים
    surfaceVariant: '#E9ECEF', // רקע אפור לרכיבים משניים (כמו Input)
  },
};
