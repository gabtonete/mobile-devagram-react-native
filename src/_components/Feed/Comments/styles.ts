import { StyleSheet } from "react-native";
import { colors } from "../../../../app.json";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    containerComments: {
        marginRight: 16,
        marginTop: 4
    },
    comment: {
        marginTop: 4,
        flexDirection: "row"
    },
    usernameComment: {
        marginLeft: 8,
        fontFamily: "biennaleBold",
        fontSize: 12,
        color: colors.grayColor04
    },
    textComment: {
        fontSize: 12,
        fontFamily: "biennaleRegular",
        color: colors.grayColor04,
        marginLeft: 8,
    },
    containerInputComment: {
        flexDirection: "row",
        alignItems: "center",
        margin: 8
    },
    inputComment: {
        color: colors.grayColor02,
        width: width / 1.7,
        height: height/ 22,
        paddingHorizontal: 8,
        fontFamily: "biennaleRegular",
        fontSize: 12
    }
})