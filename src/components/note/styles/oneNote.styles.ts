import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const getStyles = (theme: MD3Theme, screenWidth: number) =>
  StyleSheet.create({
    card: {
      width: screenWidth * 0.85,
      borderRadius: 20,
      backgroundColor: theme.colors.surface,
    },
    title: {
      fontWeight: '500',
      fontSize: 18,
      color: theme.colors.primary,
    },
    subtitle: {
      color: theme.colors.onSurfaceVariant,
    },
    avatarIcon: {
      backgroundColor: theme.colors.primaryContainer,
    },
    content: {
      marginTop: 12,
    },
    bodyText: {
      lineHeight: 20,
      color: theme.colors.onSurface,
      marginBottom: 12,
    },
    locationBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      alignSelf: 'flex-start',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    locationText: {
      fontWeight: '600',
    },
    locationIcon: {
      margin: 0,
      padding: 0,
    },
  });
