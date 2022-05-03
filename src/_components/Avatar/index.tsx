import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./styles"

export const Avatar = (props: {image:string | null}) => {
    return (
            <TouchableOpacity>
                <Image
                source={props.image
                    ? { uri: props.image }
                    : require('../../_assets/images/Avatar_Foto.png')}
                style={styles.imageUser}
                />
            </TouchableOpacity>
    )
}

