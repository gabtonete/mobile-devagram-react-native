import { View, Image, TextInput } from "react-native";
import { IInput } from "./types";
import { styles } from "./styles";

export const Input = (props: IInput) => {
    return (
        <View>
            <View style={styles.containerInput}>
                <View style={styles.row}>
                    {props.icon &&
                        <Image source={props.icon} />
                    }

                    <TextInput
                        placeholder={props.placeholder}
                        style={[styles.input, props.style]}
                        secureTextEntry={props.secureTextEntry}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        autoCapitalize="none"
                    ></TextInput>

                </View>
            </View>
        </View>
    )
}