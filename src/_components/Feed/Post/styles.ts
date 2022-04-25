import { StyleSheet } from "react-native";
import { colors } from "../../../../app.json";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        marginVertical: 16
    },
    containerUser: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        marginBottom: 20
    },
    userInfo: {
        alignItems: "center",
        flexDirection: "row"
    },
    imageUser: {
        width: 32,
        height: 32,
        borderRadius: 10
    },
    textUsername: {
        marginLeft: 8,
        fontFamily: "biennaleBold",
        fontSize: 12,
        color: colors.grayColor04
    },
    postImage: {
        height: height/2,
        width: width
    },
    containerLikeAndComment: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    textLike: {
        marginLeft: 12,
        fontSize: 12,
        color: colors.grayColor04
    },
    textLikeBold: {
        fontFamily: "biennaleBold"
    },
    icon: {
        marginLeft: 12
    },
    containerDescription: {
        marginTop: 10,
        flexDirection: "row"
    },
    textDescription: {
        fontSize: 12,
        fontFamily: "biennaleRegular",
        color: colors.grayColor04,
        marginHorizontal: 8,
    },
    containerMoreOrLess: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative"
    },
    textMoreOrLess: {
        color: colors.greenWaterColor,
        fontSize: 12,
        fontFamily: "biennaleRegular",
        position: "relative",
    }
})