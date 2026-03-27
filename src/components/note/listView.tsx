import { Note } from '@/src/models/note';
import React from 'react';
import { View } from 'react-native';

interface ListViewProps {
  notes: Note[];
  loading: boolean;
}
const listView: React.FC<ListViewProps> = ({ notes, loading }) => {
  return <View></View>;
};

export default listView;
