import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/_routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    'biennaleBold': require('./assets/fonts/BiennaleBold.otf'),
    'biennaleRegular': require('./assets/fonts/BiennaleRegular.otf'),
    'biennaleLight': require('./assets/fonts/BiennaleLight.otf')
  });

  return (
    fontsLoaded ?
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

      : <AppLoading />
  );
}