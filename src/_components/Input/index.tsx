import { View, Image, TextInput } from "react-native";
import { IInput } from "./types";
import { styles } from "./styles";

export const Input = (props: IInput) => {
    return (
        <View>
            <View style={[styles.containerInput, props.style]}>
                <View style={styles.row}>
                    {props.icon &&
                        <Image source={props.icon} />
                    }
                    <TextInput
                        placeholder={props.placeholder}
                        style={[styles.input]}
                        secureTextEntry={props.secureTextEntry}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        autoCapitalize="none"
                    ></TextInput>
                    {props.failIcon &&
                        <Image style={styles.failIcon} source={props.failIcon} />
                    }
                </View>
            </View>
        </View>
    )
}