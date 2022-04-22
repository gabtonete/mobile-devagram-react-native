import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { getCurrentUser } from "../../../_services/UserService";
import { IUser } from "../../../_services/UserService/types";
import { styles } from "./styles"
import { IPost } from "./types"

export const Post = (props: { post: IPost }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [commented, setCommented] = useState<boolean>(false);
    const [userLogged, setUserLogged] = useState<IUser>();

    useEffect(() => {
        verifyLiked()
    }, [])
    const toggleLike = async () => {
        setLiked(!liked)
    }

    const verifyLiked = async () => {
        const user = await getCurrentUser();
        setUserLogged(user);

        if(user.id) {
            setLiked(props.post.likes.includes(user.id))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <TouchableOpacity style={styles.userInfo}>
                    <Image
                        source={props.post.user.avatar
                            ? { uri: props.post.user.avatar }
                            : require('../../../_assets/images/Avatar_Foto.png')}
                        style={styles.imageUser}
                    />
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
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={commented
                            ? require('../../../_assets/icons/commented.png')
                            : require('../../../_assets/icons/notCommented.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.textLike}>Curtido por <Text style={[styles.textLike, styles.textLikeBold]}>{props.post.likes.length} pessoas</Text></Text>
            </View>
        </View>
    )
}