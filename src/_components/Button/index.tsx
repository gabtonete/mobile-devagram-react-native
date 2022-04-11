import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { colors } from "../../../app.json";
import { styles } from "./styles";
import { IButton } from "./types"

export const Button = (props : IButton) => {
    return (
        <View style={styles.containerButton}>
            <TouchableOpacity 
                onPress={props.onPress}
                disabled={props.disabled}
                style={props.disabled ? [styles.button, props.style, styles.buttonDisabled] : [styles.button, props.style]}
            >
                {props.loading ?
                
                <ActivityIndicator
                    size={30}
                    color={colors.whiteColor}
                />
                :
                <Text style={styles.text}>Login</Text>
            }
            </TouchableOpacity>
        </View>
    )
}