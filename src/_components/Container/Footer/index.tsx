import { Image, Text, TouchableOpacity, View } from "react-native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../_routes/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import { IFooter } from "./types";

export const Footer = (props: IFooter) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>();

    const menu = [
        {
            title: 'Home',
            onPress: () => {navigation.navigate("Home")},
            icon: require('../../../_assets/images/homeInativo.png'),
            iconActivated: require('../../../_assets/images/homeAtivo.png')
        },
        {
            title: 'Post',
            onPress: () => {navigation.navigate("Post")},
            icon: require('../../../_assets/images/publicacaoInativo.png'),
            iconActivated: require('../../../_assets/images/publicacaoAtivo.png')
        },
        {
            title: 'Profile',
            onPress: () => {navigation.navigate("Profile")},
            icon: require('../../../_assets/images/usuarioInativo.png'),
            iconActivated: require('../../../_assets/images/usuarioAtivo.png')
        }
    ]

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                {menu.map((botao, index) => (
                    <TouchableOpacity onPress={botao.onPress} key={index}>
                        <Image 
                            source={props.currentTab === botao.title ? botao.iconActivated : botao.icon}
                        />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}