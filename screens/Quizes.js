import { SafeArea } from '../utilities/AreaView';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export function Quizes ({navigation,route}){
    const {username,email} = route.params;
    console.log(username,email)

    return (
        <SafeArea>
            <View>
                
            </View>
        </SafeArea>
    )
}