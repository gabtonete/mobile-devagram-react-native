import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../app.json';

const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    textError: {
        fontFamily: 'biennaleBold',
        fontSize: 14,
        fontWeight: '400',
        color: colors.primaryColor,
        lineHeight: 21,
        marginBottom: height* 0.02
    }
});
