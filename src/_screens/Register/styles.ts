import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json';

const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerWithAccount: {
        marginTop: height * 0.04,
        alignItems: "center"
    },
    signIn: {
        fontSize: 14,
        color: colors.primaryColor,
        textDecorationLine: "underline",
        fontFamily: "biennaleBold"
    }
});
