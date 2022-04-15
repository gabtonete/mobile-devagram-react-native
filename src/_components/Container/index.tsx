import { SafeAreaView } from "react-native-safe-area-context"
import { View } from 'react-native'
import { Footer } from "./Footer"
import { Header } from "./Header"
import { IContainer } from "./types"
import { styles } from "./styles";

export const Container = (props: IContainer) => {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                {props.children}

            </View>
            <Footer currentTab={props.footerProps.currentTab}/>
        </SafeAreaView>
    )
}