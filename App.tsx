import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { Button } from './src/_components/Button';
import { Input } from './src/_components/Input';
import { useState } from 'react'

export default function App() {
  const [fontsLoaded] = useFonts({
    'biennaleBold': require('./assets/fonts/BiennaleBold.otf'),
    'biennaleRegular': require('./assets/fonts/BiennaleRegular.otf'),
    'biennaleLight': require('./assets/fonts/BiennaleLight.otf')
  });

  const [email, setEmail] = useState<string>("");

  return (
    fontsLoaded ?
      <View style={styles.container}>
        <Button onPress={() => console.log("Lul")} placeholder="Clique aqui" loading={false} disabled={false} />
        <Input onChangeText={(e: string) => setEmail(e)} placeholder={"Digite seu email"} value={email}/>
      </View>
    :
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
