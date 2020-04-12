import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomePage1, WelcomePage2, WelcomePage3, Home} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="WelcomePage1" component={WelcomePage1}/>
            <Stack.Screen name="WelcomePage2" component={WelcomePage2}/>
            <Stack.Screen name="WelcomePage3" component={WelcomePage3}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
};
export default Router;