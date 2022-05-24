import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome/index';
import SingIn from '../pages/SingIn/index';
import ListFlat from '../pages/List/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"            
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
               name="ListFlat"
               component={ListFlat}
               options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}