import { ActivityIndicator, FlatList, View } from "react-native";
import { IUserData } from "../../_services/UserService/types";
import * as feedService from "../../_services/FeedService";
import { useEffect, useState } from 'react';
import { IPost } from "./Post/types";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_routes/RootStackParams';
import { colors } from '../../../app.json';
import { Post } from "./Post";

export const Feed = (props: { isProfileFeed?: boolean, profile?: IUserData }) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>();
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        loadPosts();
        navigation.addListener('focus', () => {
            loadPosts()
        })
    }, [props])

    const loadPosts = async () => {
        if((props.isProfileFeed && props.profile?.id) || !props.isProfileFeed){
            try{
                setIsLoading(true);
                const { data } = await feedService.getPosts(props.profile?.id);
                const postsFormated: IPost[] = data.map((post:any) => {
                    const postFormated: IPost = {
                        id: post._id,
                        image: post.foto,
                        description: post.descricao,
                        user: {
                            avatar: post.usuario.avatar,
                            name: post.usuario.nome,
                            id: '',
                            email: '',
                            token: ''
                        },
                        comments: post.comentarios.map((c: any) => {
                            return {
                                name: c.nome,
                                message: c.comentario,
                                userId: c.usuarioId
                            }
                        }),
                        likes: post.likes
                    }   

                    return postFormated
                })

                setPosts(postsFormated)
                setIsLoading(false);
            }catch (e: any){
                setIsLoading(false);
            }
        }
    }

    return (
        <View>
            <FlatList
                    data={posts}
                    keyExtractor={item => item.id?.toString()}
                    renderItem={({item}) => (<Post post={item}/>)}
                    onEndReachedThreshold={0.1} 
                    ListFooterComponent={() => (
                        isLoading ? (
                            <View>
                                <ActivityIndicator size={30} color={colors.primaryColor} />
                            </View>)
                            : null
                    )}
                />
        </View>
    )
}