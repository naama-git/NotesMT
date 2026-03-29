import { Note, NoteInput } from '@/src/models/note';
import React, { useEffect, useState } from 'react';
import { styles } from './styles/form.styles';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button, Surface, useTheme, TextInput, Text } from 'react-native-paper';
import DeleteNote from './deleteNote';

interface NoteFormProps {
  onSubmit: (note: NoteInput) => Promise<void>;
  note: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, note }) => {
  const theme = useTheme();
  const [form, setForm] = useState<NoteInput>({
    title: note?.title ? note?.title : '',
    createdAt: note ? new Date(note.createdAt) : new Date(),
    body: note?.body ?? '',
  });

  useEffect(() => {
    setForm({
      title: note?.title ? note?.title : '',
      createdAt: note ? new Date(note.createdAt) : new Date(),
      body: note?.body ?? '',
    });
  }, [note]);

  const [dateText, setDateText] = useState(
    form.createdAt instanceof Date
      ? form.createdAt.toLocaleDateString('he-IL')
      : '',
  );

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
                value={dateText}
                onChangeText={(val) => {
                  setDateText(val);

                  if (val.length >= 9) {
                    const [day, month, year] = val.split('.').map(Number);
                    const newDate = new Date(year, month - 1, day);
                    if (!isNaN(newDate.getTime())) {
                      setForm({ ...form, createdAt: newDate });
                    } else {
                      setForm({ ...form, createdAt: new Date() });
                    }
                  }
                }}
                left={<TextInput.Icon icon="calendar-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
                placeholder="DD/MM/YYYY"
                maxLength={10}
                keyboardType="numeric"
              />
              <TextInput
                label="Content"
                mode="outlined"
                value={form.body}
                onChangeText={(val) => setForm({ ...form, body: val })}
                multiline
                numberOfLines={5}
                left={<TextInput.Icon icon="text-box-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={[styles.inputBackground, { minHeight: 120 }]}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <DeleteNote note={note} />
                <Button
                  mode="contained"
                  onPress={() => onSubmit(form)}
                  contentStyle={styles.submitBtnContent}
                  style={[styles.submitBtn, { marginTop: 8 }]}
                  labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                >
                  Save Note
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
