import { Text, View } from 'react-native';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'


export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <View>
      <Text>Daily diet</Text>
    </View>
  );
}

