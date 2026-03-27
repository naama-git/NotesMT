import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  useTheme,
  Surface,
  HelperText,
  Divider,
} from 'react-native-paper';
import { styles } from './styles/login.styles';
import { useRouter } from 'expo-router';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const onSignUpPress = () => {
    router.push('/signup');
  };

  // const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerArea}>
            <Surface
              style={[
                styles.logoCircle,
                { backgroundColor: theme.colors.primaryContainer },
              ]}
              elevation={2}
            >
              <Text
                style={{ fontSize: 12, color: theme.colors.onPrimaryContainer }}
              >
                logo
              </Text>
            </Surface>
            <Text variant="headlineMedium" style={styles.mainTitle}>
              Welcome Back
            </Text>
            <Text
              variant="bodyMedium"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              Enter your details to access your account
            </Text>
          </View>

          <Surface
            style={[styles.formCard, { backgroundColor: theme.colors.surface }]}
            elevation={1}
          >
            <View style={{ gap: 12 }}>
              <View>
                <TextInput
                  label="Email"
                  mode="outlined"
                  value={form.email}
                  onChangeText={(val) => setForm({ ...form, email: val })}
                  left={<TextInput.Icon icon="email-outline" />}
                  outlineStyle={{ borderRadius: 12 }}
                  style={styles.inputBackground}
                />
                {form.email.length > 0 && !form.email.includes('@') && (
                  <HelperText type="error">Invalid email address</HelperText>
                )}
              </View>

              <View>
                <TextInput
                  label="Password"
                  mode="outlined"
                  secureTextEntry={!showPassword}
                  value={form.password}
                  onChangeText={(val) => setForm({ ...form, password: val })}
                  left={<TextInput.Icon icon="lock-outline" />}
                  right={
                    <TextInput.Icon
                      icon={showPassword ? 'eye-off' : 'eye'}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                  outlineStyle={{ borderRadius: 12 }}
                  style={styles.inputBackground}
                />
              </View>

              <Pressable style={{ alignSelf: 'flex-end' }}>
                <Text
                  variant="labelLarge"
                  style={{ color: theme.colors.primary, fontWeight: '700' }}
                >
                  Forgot Password?
                </Text>
              </Pressable>

              <Button
                mode="contained"
                onPress={() => onSubmit(form.email, form.password)}
                // loading={loading}
                contentStyle={styles.submitBtnContent}
                style={styles.submitBtn}
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              >
                Sign In
              </Button>
            </View>
          </Surface>

          <View style={styles.dividerContainer}>
            <Divider style={styles.line} />
            <Text variant="bodySmall" style={styles.dividerText}>
              OR
            </Text>
            <Divider style={styles.line} />
          </View>

          <View style={styles.footer}>
            <Text variant="bodyMedium">Don&apos;t have an account?</Text>
            <Pressable onPress={onSignUpPress}>
              <Text
                variant="bodyMedium"
                style={{
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginForm;
