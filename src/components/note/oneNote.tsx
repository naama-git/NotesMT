import { Note } from '@/src/models/note';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import {
  Avatar,
  Card,
  Divider,
  useTheme,
  Text,
  IconButton,
} from 'react-native-paper';
import { getStyles } from '@/src/components/note/styles/oneNote.styles'; // וודא שהנתיב נכון

interface OneNoteProps {
  note: Note;
}

const OneNote: React.FC<OneNoteProps> = ({ note }) => {
  const theme = useTheme();
  const { width: screenWidth } = Dimensions.get('window');
  const router = useRouter();

  const styles = useMemo(
    () => getStyles(theme, screenWidth),
    [theme, screenWidth],
  );

  return (
    <View>
      <Card
        onPress={() => {
          router.push(`/note/${note.id}`);
        }}
        style={styles.card}
        elevation={3}
      >
        <Card.Title
          title={note.title}
          titleStyle={styles.title}
          subtitle={new Date(note.createdAt).toLocaleDateString('he-IL')}
          subtitleStyle={styles.subtitle}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="note-text-outline"
              size={40}
              style={styles.avatarIcon}
              color={theme.colors.onPrimaryContainer}
            />
          )}
        />

        <Divider />

        <Card.Content style={styles.content}>
          <Text variant="bodyMedium" numberOfLines={3} style={styles.bodyText}>
            {note.body}
          </Text>
          <View style={styles.locationBadge}>
            <IconButton
              icon="map-marker-radius"
              size={14}
              style={styles.locationIcon}
            />
            <Text variant="labelSmall" style={styles.locationText}>
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
