import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    containerAvatar: {
        marginBottom: height/35
    }
})