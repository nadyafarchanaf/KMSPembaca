import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { LoginTemplate } from '../../template';
import { LoginInput, ActionButton  } from '../../component/atoms';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';
import { setForm } from '../../redux';

const Register = ({navigation}) => {
    const [form, setForm] = useState({
        fullName: '',
        email:'',
        password:''
    });
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }
    const sendData = () => {
        console.log('apa kaba?', form);
    };
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    const handleGoToNeverBack = screen => {
        navigation.replace(screen);
    };
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
                <LoginTemplate/>
                <LoginInput placeholder="Nama" icon="person"
                    value={form.fullName}
                    onChangeText={value=>onInputChange(value, 'fullName')}
                />
                <LoginInput placeholder="Email" icon="email"
                    value={form.email}
                    onChangeText={value=>onInputChange(value, 'email')}
                />
                <LoginInput placeholder="Password" icon="lock"
                    value={form.password}
                    onChangeText={value=>onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
            </View>
            <ActionButton title="Daftar" onPress={sendData}/>
            <View style={styles.wrapper}>
                <Text>Sudah memiliki akun?</Text>
                <Text style={styles.textbutton} onPress={() => handleGoToNeverBack('Login')}> Masuk</Text>
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
        marginBottom: 20
    }
}
export default Register;