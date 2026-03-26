// import { useAuth } from '@/src/context/AuthContext';
import { Text, View } from 'react-native';

export default function Index() {
  // const { user } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Welcome</Text>
    </View>
  );
}
