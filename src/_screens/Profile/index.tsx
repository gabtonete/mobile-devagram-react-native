import { Text, View } from 'react-native';
import { Container } from '../../_components/Container';

export const Profile = () => {
    return(
        <Container 
            footerProps={{currentTab: 'Profile'}}
        >
            <Text>Profile</Text>
        </Container>
    )
}