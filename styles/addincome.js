import { StyleSheet } from "react-native";
import { Theme } from '../themes/themes';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Theme.sizes[2]
    },
    header:{
        padding:Theme.sizes[3],
        borderWidth:1,
        borderColor:Theme.colors.green500,
        borderRadius:10,
        marginBottom:Theme.sizes[3]
    },
    headerText:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        color:Theme.colors.green900,
        fontWeight:'bold'
    }
})