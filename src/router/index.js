import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomePage1, WelcomePage2, WelcomePage3, Home} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:'false'}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:'false'}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:'false'}}/>
            <Stack.Screen name="WelcomePage1" component={WelcomePage1} options={{headerShown:'false'}}/>
            <Stack.Screen name="WelcomePage2" component={WelcomePage2} options={{headerShown:'false'}}/>
            <Stack.Screen name="WelcomePage3" component={WelcomePage3} options={{headerShown:'false'}}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
};
export default Router;