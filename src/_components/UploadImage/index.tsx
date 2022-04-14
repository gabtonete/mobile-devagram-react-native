import { Image, TouchableOpacity, View } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { styles } from "./styles"
import { IUploadImage } from "./types"

export const UploadImage = (props: IUploadImage) => {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            props.setImage(result);
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.containerAvatar} onPress={() => pickImage()}>
                {props.image ?
                    <Image style={[styles.image]} source={{uri: props.image.uri}}/>
   
                :   <Image source={require('../../_assets/images/Avatar_Foto.png')}/>
                }
            </TouchableOpacity>
        </View>
    )
} 