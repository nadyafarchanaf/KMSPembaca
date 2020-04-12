import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
    useEffect (()=> {
        setTimeout(() => {
                navigation.replace('WelcomePage1');
        }, 2000);
    });
    return (
        <View>
            <Text style={{color:'black'}}>Splash Screen</Text>
        </View>
    );
};

export default Splash;