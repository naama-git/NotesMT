import { Note } from '@/src/models/note';
import React, { useState } from 'react';
import { styles } from './styles/form.styles';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button, Surface, useTheme, TextInput, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

interface NoteFormProps {
  onSubmit: (note: Note) => Promise<void>;
  note: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, note }) => {
  const theme = useTheme();
  const [form, setForm] = useState({
    title: '',
    date: new Date().toLocaleDateString('he-IL'),
    body: '',
  });
  const router = useRouter();
  const createNoteDetails = () => {};
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerArea}>
            <Text variant="headlineMedium" style={styles.mainTitle}>
              My Note
            </Text>
            <Text
              variant="bodyMedium"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              Capture your thoughts and ideas
            </Text>
          </View>

          <Surface
            style={[styles.formCard, { backgroundColor: theme.colors.surface }]}
            elevation={1}
          >
            <View style={{ gap: 16 }}>
              <TextInput
                label="Title"
                mode="outlined"
                value={form.title}
                onChangeText={(val) => setForm({ ...form, title: val })}
                left={<TextInput.Icon icon="format-title" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
              />
              <TextInput
                label="Date"
                mode="outlined"
                value={form.date}
                onChangeText={(val) => setForm({ ...form, date: val })}
                left={<TextInput.Icon icon="calendar-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
                placeholder="DD/MM/YYYY"
              />
              <TextInput
                label="Content"
                mode="outlined"
                value={form.body}
                onChangeText={(val) => setForm({ ...form, body: val })}
                multiline
                numberOfLines={5}
                left={<TextInput.Icon icon="text-subject" />}
                outlineStyle={{ borderRadius: 12 }}
                style={[styles.inputBackground, { minHeight: 120 }]}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 16,
                }}
              >
                <Button
                  mode="contained"
                  //   onPress={() => onSubmit(form)}
                  // loading={loading}
                  // disabled={loading || !form.title || !form.body}
                  contentStyle={styles.submitBtnContent}
                  style={[styles.submitBtn, { marginTop: 8 }]}
                  labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                >
                  Save Note
                </Button>
                <Button
                  mode="contained"
                  onPress={() => router.back()}
                  // loading={loading}
                  // disabled={loading || !form.title || !form.body}
                  contentStyle={styles.submitBtnContent}
                  style={[styles.submitBtn, { marginTop: 8 }]}
                  labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                >
                  Cancel
                </Button>
              </View>
            </View>
          </Surface>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default NoteForm;
