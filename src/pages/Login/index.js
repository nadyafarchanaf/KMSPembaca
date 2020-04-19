import React from 'react';
import {View, Text} from 'react-native';
import { LoginInput } from '../../component/atoms';
import { LoginTemplate } from '../../template';

const Login = () => {
    return (
        <View>
        <LoginTemplate/>
           <LoginInput placeholder="Email" icon="email"/>
           <LoginInput placeholder="Email"/>
        </View>
    );
};

export default Login;