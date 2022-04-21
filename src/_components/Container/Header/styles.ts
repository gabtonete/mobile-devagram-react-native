import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../../app.json';

const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        borderBottomColor: colors.grayColor01,
        borderWidth: 1
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        paddingVertical: 10
    },
    icon: {
        marginLeft: 9
    },
    containerInputSearch: {
        flexDirection: 'row',
        width: width / 1.8,
        height: 40,
        backgroundColor: colors.lightBlueColor,
        alignItems: 'center',
        borderRadius: 4,
        borderColor: "transparent",
        borderWidth: 1
    },
    input: {
        width: width / 2.1,
        paddingHorizontal: 12,
        fontFamily: 'biennaleRegular',
        color: colors.grayColor04,
    },
    inputActive: {
        width: width / 2.1,
        paddingHorizontal: 12,
        fontFamily: 'biennaleRegular',
        color: colors.primaryColor

    },
})