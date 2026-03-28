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
    if (notes.length === 0)
      return (
        <View>
          <Text>No notes found.</Text>
        </View>
      );
    return <View>my Notes</View>;
  };
  return <View>{renderContent()}</View>;
};

export default ListView;
