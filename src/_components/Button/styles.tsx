import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json';

const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    containerButton: {
        marginTop: height/20
    },
    button: {
        width: width/1.3,
        height: height/15,
        backgroundColor: colors.primaryColor,
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: colors.whiteColor,
        fontFamily: "biennaleBold"
    },
    buttonDisabled: {
        backgroundColor: colors.grayColor02
    }
})