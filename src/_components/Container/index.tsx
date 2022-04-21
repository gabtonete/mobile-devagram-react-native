import { SafeAreaView } from "react-native-safe-area-context"
import { View } from 'react-native'
import { Footer } from "./Footer"
import { Header } from "./Header"
import { IContainer } from "./types"
import { styles } from "./styles";
import { useState } from "react"
import { Search } from "./Header/Search"

export const Container = (props: IContainer) => {
    const [filter, setFilter] = useState<string>('');

    return(
        <SafeAreaView style={styles.container}>
            <Header 
                default={props.headerProps.default}
                headerPost={props.headerProps.headerPost}
                searchBar={{
                    value: filter,
                    onChange: (value: string) => setFilter(value)
                }
                }
            />
            <Search filter={filter}/>
            <View style={styles.content}>
                {props.children}

            </View>
            <Footer currentTab={props.footerProps.currentTab}/>
        </SafeAreaView>
    )
}