import { UserModel } from '@/src/models/user';
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

interface SignUPFormProps {
  onSubmit: (user: UserModel, password: string) => Promise<void>;
}

const SignUPForm: React.FC<SignUPFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const [form, setForm] = useState<UserModel>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const updateField = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const router = useRouter();
  const onLoginPress = () => {
    router.replace('./login');
  };

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
              Create Account
            </Text>
            <Text
              variant="bodyMedium"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              Fill in your details to get started
            </Text>
          </View>

          <Surface
            style={[styles.formCard, { backgroundColor: theme.colors.surface }]}
            elevation={1}
          >
            <View style={{ gap: 12 }}>
              {/* First Name */}
              <TextInput
                label="First Name"
                mode="outlined"
                value={form.firstName}
                onChangeText={(val) => updateField('firstName', val)}
                left={<TextInput.Icon icon="account-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
              />

              {/* Last Name */}
              <TextInput
                label="Last Name"
                mode="outlined"
                value={form.lastName}
                onChangeText={(val) => updateField('lastName', val)}
                left={<TextInput.Icon icon="account-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
              />

              {/* Email */}
              <View>
                <TextInput
                  label="Email"
                  mode="outlined"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={form.email}
                  onChangeText={(val) => updateField('email', val)}
                  left={<TextInput.Icon icon="email-outline" />}
                  outlineStyle={{ borderRadius: 12 }}
                  style={styles.inputBackground}
                />
                {form.email.length > 0 && !form.email.includes('@') && (
                  <HelperText type="error">Invalid email address</HelperText>
                )}
              </View>

              {/* Phone */}
              <TextInput
                label="Phone Number"
                mode="outlined"
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={(val) => updateField('phone', val)}
                left={<TextInput.Icon icon="phone-outline" />}
                outlineStyle={{ borderRadius: 12 }}
                style={styles.inputBackground}
              />

              {/* Password */}
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(val) => setPassword(val)}
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

              <Button
                mode="contained"
                onPress={() => onSubmit(form, password)}
                contentStyle={styles.submitBtnContent}
                style={[styles.submitBtn, { marginTop: 10 }]}
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              >
                Sign Up
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
            <Text variant="bodyMedium">Already have an account?</Text>
            <Pressable onPress={onLoginPress}>
              <Text
                variant="bodyMedium"
                style={{
                  color: theme.colors.primary,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}
              >
                Log In
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUPForm;
