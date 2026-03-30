import { Note } from '@/src/models/note';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import OneNote from './oneNote';

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
      <ScrollView
        contentContainerStyle={{
          marginBottom: 20,
          width: '100%',
          marginTop: 20,
          flex: 1,
          alignItems: 'center',
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notes.map((note) => (
          <OneNote key={note.id} note={note} />
        ))}
      </ScrollView>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {renderContent()}
    </View>
  );
};

export default ListView;
