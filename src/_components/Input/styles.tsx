import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json';

const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    containerInput: {
        width: width/1.3,
        height: height/25,
        borderBottomColor: colors.primaryColor,
        borderBottomWidth: 1,
        marginTop: height/20
    },
    input: {
        width: width/1.4,
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'biennaleRegular',
        color: colors.grayColor02
    },
    row: {
        flexDirection: 'row'
    }
})