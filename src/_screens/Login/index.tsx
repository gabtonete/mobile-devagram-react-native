import { Image, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { Button } from '../../_components/Button';
import { Input } from '../../_components/Input';
import { useState } from 'react'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_routes/RootStackParams';


export const Login = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");



    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../_assets/images/Logo.png')}
            />
            <Input
                icon={require('../../_assets/images/envelope.png')}
                onChangeText={(e: string) => setEmail(e)}
                placeholder={"Digite seu email"}
                value={email}
            />
            <Input 
                icon={require('../../_assets/images/key.png')} 
                onChangeText={(e: string) => setPassword(e)} 
                placeholder={"Digite sua senha"} 
                value={password} 
                secureTextEntry={true} 
            />
            <Button 
                onPress={() => console.log("Lul")} 
                placeholder="Login" loading={false} 
                disabled={false} 
            />
            <View style={styles.containerWithAccount}>
                <Text>Não possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signUp}>Faça seu cadastro agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}