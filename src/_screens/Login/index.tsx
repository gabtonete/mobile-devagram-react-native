import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../_components/Button';
import { Input } from '../../_components/Input';
import { useCallback, useEffect, useState } from 'react'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_routes/RootStackParams';
import * as userService from '../../_services/UserService';
import { ErroMessage } from '../../_components/ErroMessage';


export const Login = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        verifyLogged();
    }, [])

    const onLogin = async () => {
        try {
            setErro("")
            setLoading(true);
            await userService.login({ login: email, senha: password });
            setLoading(false);
            navigation.navigate('Home');
        } catch (e: any) {
            console.log("Erro:", e.response.data.erro);
            setErro(e.response.data.erro);
            setLoading(false);
        }
    }

    const verifyLogged = useCallback(async () => {
        const user = await userService.getCurrentUser();
        if(user?.token) {
            navigation.navigate('Home')
        }
    }, [])

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
                onPress={() => onLogin()} 
                placeholder="Login" loading={loading} 
                disabled={email && password ? false : true} 
            />
            {erro !== "" &&
                <ErroMessage text={erro}/>
            }

            <View style={styles.containerWithAccount}>
                <Text>Não possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signUp}>Faça seu cadastro agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}