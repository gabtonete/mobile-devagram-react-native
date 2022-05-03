import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { getCurrentUser } from "../../../_services/UserService";
import { IUser } from "../../../_services/UserService/types";
import { Avatar } from "../../Avatar";
import { Comments } from "../Comments";
import { styles } from "./styles";
import { IPost } from "./types";
import * as feedService from "../../../_services/FeedService";

export const Post = (props: { post: IPost }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [commented, setCommented] = useState<boolean>(false);
    const [commentInputActive, setCommentInputActive] = useState<boolean>(false);
    const [userLogged, setUserLogged] = useState<IUser>();
    const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2);
    const [likesLength, setLikesLength] = useState<number>(props.post.likes.length);

    useEffect(() => {
        verifyLiked()
    }, []);

    const toggleLike = async () => {
        setLiked(!liked);
        try {
            const result = await feedService.toggleLike(props.post.id);
            console.log("result: ", result.data.msg)
            if(result.data?.msg === "Publicacao curtida com sucesso") {
                setLikesLength(likesLength + 1)
            } else if (result.data.msg === "Publicacao descurtida com sucesso") {
                setLikesLength(likesLength - 1)

            } else {
                null
            }

        } catch (e: any) {
            return null;
        }
    }

    const verifyLiked = async () => {
        const user = await getCurrentUser();
        setUserLogged(user);

        if (user.id) {
            setLiked(props.post.likes.includes(user.id))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <TouchableOpacity style={styles.userInfo}>
                    <Avatar image={props.post.user.avatar}/>
                    <Text style={styles.textUsername}>{props.post.user.name}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    source={{ uri: props.post.image }}
                    style={styles.postImage}
                />
            </View>
            <View style={styles.containerLikeAndComment}>
                <TouchableOpacity onPress={() => toggleLike()}>
                    <Image
                        style={styles.icon}
                        source={liked
                            ? require('../../../_assets/icons/liked.png')
                            : require('../../../_assets/icons/notLiked.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCommentInputActive(!commentInputActive)}>
                    <Image
                        style={styles.icon}
                        source={commented || commentInputActive
                            ? require('../../../_assets/icons/commented.png')
                            : require('../../../_assets/icons/notCommented.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.textLike}>
                    Curtido por
                    <Text style={[styles.textLike, styles.textLikeBold]}>
                        {' '}{likesLength} pessoas
                    </Text>
                </Text>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>
                    <Text style={styles.textUsername}>
                        {props.post.user.name}
                    </Text>
                    {' ' + props.post.description}
                </Text>
            </View>
            {
                userLogged &&
                <Comments comments={props.post.comments} commentIsActive={commentInputActive} userLogged={userLogged}/>
            }
        </View>
    )
}