import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../_components/Button';
import { Input } from '../../_components/Input';
import { useEffect, useState } from 'react'
import { UploadImage } from '../../_components/UploadImage';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../_routes/RootStackParams';
import * as commonStyles from '../../commonStyles';
import { validateConfirmPassword, validateEmail, validateName, validatePassword } from '../../_utils/validators';


export const Register = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
    const navigation = useNavigation<navigationTypes>();

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordValidation, setPasswordValidation] = useState<string>("");
    const [image, setImage] = useState<any>(null);
    const [erro, setErro] = useState<string>("Insira suas informações!");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    
    const formIsValid = () => {
        const nameIsValid = validateName(name);
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);
        const passwordValidationIsValid = validateConfirmPassword(password, passwordValidation);

        return nameIsValid && emailIsValid && passwordIsValid && passwordValidationIsValid
    }

    useEffect(() => {
        if(formIsValid()) {
            setIsDisabled(false)
        }
    }, [name, email, password, passwordValidation])

    return (
        <View style={styles.container}>
            <UploadImage
                setImage={setImage} image={image}
            />

            {(erro != "" || !erro) && <Text style={commonStyles.styles.textError}>{erro}</Text>}
            <Input
                icon={require('../../_assets/images/user.png')}
                onChangeText={(e: string) => setName(e)}
                placeholder={"Nome completo"}
                value={name}
            />
            <Input
                icon={require('../../_assets/images/envelope.png')}
                onChangeText={(e: string) => setEmail(e)}
                placeholder={"example@example.com"}
                value={email}
            />
            <Input
                icon={require('../../_assets/images/key.png')}
                onChangeText={(e: string) => setPassword(e)}
                placeholder={"Digite sua senha"}
                value={password}
                secureTextEntry={true}
            />
            <Input
                icon={require('../../_assets/images/key.png')}
                onChangeText={(e: string) => setPasswordValidation(e)}
                placeholder={"Digite sua senha"}
                value={passwordValidation}
                secureTextEntry={true}
            />
            <Button
                onPress={() => formIsValid()}
                placeholder="Cadastrar" loading={false}
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