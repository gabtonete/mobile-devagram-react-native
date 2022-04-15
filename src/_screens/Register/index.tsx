import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../_components/Button';
import { Input } from '../../_components/Input';
import { useEffect, useState } from 'react'
import { UploadImage } from '../../_components/UploadImage';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../_routes/RootStackParams';
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from '../../_utils/validators';
import * as userService from '../../_services/UserService';
import { ErroMessage } from '../../_components/ErroMessage';

export const Register = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
    const navigation = useNavigation<navigationTypes>();

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordValidation, setPasswordValidation] = useState<string>("");
    const [image, setImage] = useState<any>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string>("");

    const formIsValid = () => {
        const nameIsValid = validateName(name);
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);
        const passwordValidationIsValid = validateConfirmPassword(password, passwordValidation);

        return nameIsValid && emailIsValid && passwordIsValid && passwordValidationIsValid
    }

    const onRegister = async () => {
        try {
            setErro("");
            setLoading(true);
            const body = new FormData();
            body.append("nome", name);
            body.append("email", email);
            body.append("senha", password);

            if(image) {
                const file: any = {
                    uri: image.uri,
                    type: `image/${image.uri.split('/').pop().split('.').pop()}`,
                    name: `image/${image.uri.split('/').pop()}`
                }

                body.append("file", file);
            }

            await userService.register(body);
            await userService.login({ login: email, senha: password});
            setLoading(false);
            navigation.navigate('Home');
        } catch (e: any) {
            console.log("Erro:", e.response.data.erro);
            setErro(e.response.data.erro);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (formIsValid()) {
            setIsDisabled(false)
        }
    }, [name, email, password, passwordValidation])

    return (
        <View style={styles.container}>
            <UploadImage
                setImage={setImage} image={image}
            />
            <Input
                icon={require('../../_assets/images/user.png')}
                onChangeText={(e: string) => setName(e)}
                placeholder={"Nome completo"}
                value={name}
                failIcon={name === '' ? null
                    : validateName(name)
                        ? require('../../_assets/icons/correctsignal.png')
                        : require('../../_assets/icons/errorsignal.png')
                }
            />
            <Input
                icon={require('../../_assets/images/envelope.png')}
                onChangeText={(e: string) => setEmail(e)}
                placeholder={"example@example.com"}
                value={email}
                style={erro ? failStyle.failStyle : null}
                failIcon={email === '' ? null
                    : validateEmail(email)
                        ? require('../../_assets/icons/correctsignal.png')
                        : require('../../_assets/icons/errorsignal.png')
                }
            />
            <Input
                icon={require('../../_assets/images/key.png')}
                onChangeText={(e: string) => setPassword(e)}
                placeholder={"Digite sua senha"}
                value={password}
                secureTextEntry={true}
                failIcon={password === '' ? null
                    : validatePassword(password)
                        ? require('../../_assets/icons/correctsignal.png')
                        : require('../../_assets/icons/errorsignal.png')
                }
            />
            <Input
                icon={require('../../_assets/images/key.png')}
                onChangeText={(e: string) => setPasswordValidation(e)}
                placeholder={"Digite sua senha"}
                value={passwordValidation}
                secureTextEntry={true}
                failIcon={passwordValidation === '' ? null
                    : validatePassword(password) && validateConfirmPassword(password, passwordValidation)
                        ? require('../../_assets/icons/correctsignal.png')
                        : require('../../_assets/icons/errorsignal.png')
                }
            />
            {erro !== "" &&
                <ErroMessage text={erro}/>
            }
            <Button
                onPress={() => onRegister()}
                placeholder="Cadastrar" loading={isLoading}
                disabled={isDisabled}
            />
            <View style={styles.containerWithAccount}>
                <Text>Já possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signIn}>Faça seu login agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const failStyle = StyleSheet.create({
    failStyle: {
        borderBottomColor: "red"
    }
})