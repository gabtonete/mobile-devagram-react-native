import { Text, View } from 'react-native';
import { Container } from '../../_components/Container';

export const Post = () => {
    return(
        <Container 
            footerProps={{currentTab: 'Post'}}
        >
            <Text>Post</Text>
        </Container>
    )
}