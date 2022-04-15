import { ImageSourcePropType, StyleSheet } from "react-native";

export interface IInput {
    icon?: ImageSourcePropType,
    placeholder: string,
    style?: any,
    secureTextEntry?: boolean,
    value: string,
    failIcon?: any,
    onChangeText: (e: string) => void
}