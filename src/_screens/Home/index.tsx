import { Text, View } from 'react-native';
import { Container } from '../../_components/Container';

export const Home = () => {
    return(
        <Container 
            footerProps={{currentTab: 'Home'}}
        >
            <Text>Home</Text>
        </Container>
    )
}