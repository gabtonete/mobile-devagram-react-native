import { Text, View } from 'react-native';
import { Container } from '../../_components/Container';

export const Post = () => {
    return(
        <Container
            headerProps={{default: true}}
            footerProps={{currentTab: 'Post'}}
        >
            <Text>Post</Text>
        </Container>
    )
}