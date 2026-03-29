import { Note } from '@/src/models/note';
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

interface ListViewProps {
  notes: Note[];
  loading: boolean;
}

const ListView: React.FC<ListViewProps> = ({ notes, loading }) => {
  const renderContent = () => {
    if (loading) return <ActivityIndicator />;
    if (notes.length === 0 || !notes.length)
      return (
        <View>
          <Text>You don&apos;t have any notes yet.</Text>
        </View>
      );
    return (
      <View>
        my Notes
        {notes.map((note) => (
          <View key={note.id}>
            <Text>{note.title}</Text>
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {renderContent()}
    </View>
  );
};

export default ListView;
