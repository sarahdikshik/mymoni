import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from './HomeScreen';
import { Signin } from './Signin';
import { About } from './About';
import { AddExpense } from './AddExpense';
import { AddIncome } from './AddIncome';
import { Quizes } from "./Quizes";

const Stack = createNativeStackNavigator();

export function StackNavigator(){
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Add Expense" component={AddExpense} options={{headerShown:true}}/>
            <Stack.Screen name="Add Income" component={AddIncome} options={{headerShown:true}}/>
            <Stack.Screen name="Quizes" component={Quizes} />
        </Stack.Navigator>
    )
}