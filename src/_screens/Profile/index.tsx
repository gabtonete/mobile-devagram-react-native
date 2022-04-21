import { Text, View } from 'react-native';
import { Container } from '../../_components/Container';

export const Profile = () => {
    return(
        <Container 
            headerProps={{ default: true}}
            footerProps={{currentTab: 'Profile'}}
        >
            <Text>Profile</Text>
        </Container>
    )
}