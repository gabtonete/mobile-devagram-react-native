import { Text, View } from "react-native"
import { styles } from "./styles"
import { IComments } from "./types"

export const Comments = (props: { comments: IComments[] }) => {
    return (
        <View>
            <View style={styles.containerComments}>
                {props.comments?.length > 0 && props.comments.map((comment: IComments, index: number) => (
                    <View style={styles.comment} key={index}>
                        <Text style={styles.textComment}>
                            <Text style={styles.usernameComment}>
                                {comment.name}
                            </Text>
                            {" "}{comment.message}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}