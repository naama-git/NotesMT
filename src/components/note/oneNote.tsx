import { Note } from '@/src/models/note';
import React from 'react';
import { Dimensions, View } from 'react-native';
import {
  Avatar,
  Card,
  Divider,
  useTheme,
  Text,
  IconButton,
} from 'react-native-paper';

interface OneNoteProps {
  note: Note;
  key: string | undefined;
}
const OneNote: React.FC<OneNoteProps> = ({ note, key }) => {
  const theme = useTheme();
  const { width: screenWidth } = Dimensions.get('window');
  return (
    <View>
      <Card
        style={{
          width: screenWidth * 0.92,
          borderRadius: 20,
          backgroundColor: theme.colors.surface,
        }}
        elevation={1}
      >
        <Card.Title
          title={note.title}
          titleStyle={{
            fontWeight: '700',
            fontSize: 18,
            color: theme.colors.primary,
          }}
          subtitle={new Date(note.createdAt).toLocaleDateString('he-IL')}
          subtitleStyle={{ color: theme.colors.onSurfaceVariant }}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="note-text-outline"
              size={40}
              style={{ backgroundColor: theme.colors.primaryContainer }}
              color={theme.colors.onPrimaryContainer}
            />
          )}
        />

        <Divider />

        <Card.Content style={{ marginTop: 12 }}>
          <Text
            variant="bodyMedium"
            numberOfLines={3}
            style={{
              lineHeight: 20,
              color: theme.colors.onSurface,
              marginBottom: 12,
            }}
          >
            {note.body}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme.colors.surfaceVariant,
              alignSelf: 'flex-start',
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
            }}
          >
            <IconButton
              icon="map-marker-radius"
              size={14}
              style={{ margin: 0, padding: 0 }}
            />
            <Text variant="labelSmall" style={{ fontWeight: '600' }}>
              {note.location.latitude.toFixed(4)},{' '}
              {note.location.longitude.toFixed(4)}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default OneNote;
