import { theme } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerArea: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  mainTitle: {
    // fontWeight: '800',
    letterSpacing: -0.5,
    color: theme.colors.primary,
  },
  formCard: {
    padding: 24,
    borderRadius: 24,
  },
  inputBackground: {
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  submitBtn: {
    marginTop: 8,
    borderRadius: 12,
  },
  submitBtnContent: {
    height: 54,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  line: {
    flex: 1,
  },
  dividerText: {
    marginHorizontal: 16,
    opacity: 0.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
});
