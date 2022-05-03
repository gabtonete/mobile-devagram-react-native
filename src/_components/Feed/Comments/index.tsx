import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import { IUser } from "../../../_services/UserService/types"
import { Avatar } from "../../Avatar"
import { styles } from "./styles"
import { IComments } from "./types"

export const Comments = (props: { comments: IComments[], commentIsActive: boolean, userLogged: IUser }) => {
    const [comment, setComment] = useState<string>('');

    const onComment = async () => {

    } 
    
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

                {props.commentIsActive &&
                    <View style={styles.containerInputComment}>
                        <View>
                            <Avatar image={props.userLogged.avatar}/>
                        </View>
                        <TextInput
                            placeholder="Adicione um comentário"
                            value={comment}
                            onChangeText={value => setComment(value)}
                            onSubmitEditing={onComment}
                            autoCapitalize='none'
                            style={styles.inputComment}
                        >
                            
                        </TextInput>

                    </View>
                }
            </View>
        </View>
    )
}