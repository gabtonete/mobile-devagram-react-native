import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json';


const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    textError: {
        fontFamily: 'biennaleBold',
        color: "red",
        marginTop: height * 0.04
    }
})