import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans'

import theme from './src/theme';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });


  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />

      {fontsLoaded ? <Routes /> : <Loading />}

    </ThemeProvider>
  );
}

