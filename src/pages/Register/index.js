import React from 'react';
import {View, Text} from 'react-native';
import { LoginTemplate } from '../../template';
import { LoginInput } from '../../component/atoms';

const Register = () => {
    return (
        <View>
            <LoginTemplate/>
            <LoginInput placeholder="Email" icon="email"/>
        </View>
    );
};

export default Register;