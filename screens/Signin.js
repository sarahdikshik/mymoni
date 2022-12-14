import { SafeArea } from '../utilities/AreaView';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export function Signin ({navigation}){
    return (
        <SafeArea>
            <View>
                <Button mode='contained' onPress={() => navigation.navigate('Signup')}>Go to Sign up</Button>
            </View>
        </SafeArea>
    )
}