import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { LoginInput, ActionButton } from '../../component/atoms';
import { LoginTemplate } from '../../template';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validasiLogin } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
import deviceStorage from '../../service/deviceStorage';

const Login = ({navigation}) => {
    const [form, setForm] = useState({
        email:'',
        password:''
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: validasiLogin(value),
        })
    }
    const sendData = screen => {
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/login`,
        {
            method:"POST",
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            deviceStorage.saveItem("access_token", responseJson.access_token)
        })
        .catch((error) => {
            console.error(error);
        });
        console.log('kirim data', form);
        navigation.replace(screen);
    };
    useEffect (() => {
        console.log (deviceStorage.getItem("access_token"))
    })
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
                <LoginTemplate/>
                <LoginInput placeholder="Email                                    " icon="email"
                    onChangeText={value=>onInputChange(value, 'email')}
                />
                <LoginInput placeholder="Password                                 " icon="lock" 
                    onChangeText={value=>onInputChange(value, 'password')}
                    secureTextEntry={true}/>
            </View>
            <ActionButton title="Masuk" onPress={() => sendData('NavigationBar')}/>
            <View style={styles.wrapper}>
                <Text>Belum memiliki akun?</Text>
                <Text style={styles.textbutton} onPress={() => handleGoTo('Register')}> Buat akun</Text>
            </View>
        </KeyboardAwareScrollView>
    );
};
const styles = {
    wrapper : {
        marginTop: 30,
        flexDirection:"row",
        justifyContent: 'center'
    },
    textbutton : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 14,
    }
}

export default Login;