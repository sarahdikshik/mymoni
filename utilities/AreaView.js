import { Children } from "react";
import { SafeAreaView,platform,statusBar,StyleSheet } from "react-native";

export function SafeAreaView({Children}){
    return (
    <SafeAreaView styles={styles.container}>
            {Children}
    </SafeAreaView>)
}

const styles=StyleSheet.create({
    container:{

    }
})