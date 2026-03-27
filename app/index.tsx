import Logout from '@/src/components/auth/logout';
import Welcome from '@/src/components/home/Welcome';
import { View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Logout></Logout>
      <Welcome></Welcome>
    </View>
  );
}
