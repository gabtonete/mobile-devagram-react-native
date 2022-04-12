import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { IUploadImage } from "./types"

export const UploadImage = (props: IUploadImage) => {

    const pickImage = () => {
        console.log("Foto Galeria")
    }

    return (
        <View>
            <TouchableOpacity style={styles.containerAvatar} onPress={() => pickImage}>
                <Image source={require('../../_assets/images/Avatar_Foto.png')}/>
            </TouchableOpacity>
        </View>
    )
}