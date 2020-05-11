import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { LoginTemplate } from '../../template';
import { LoginInput, ActionButton  } from '../../component/atoms';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

const Register = ({navigation}) => {
    const [form, setForm] = useState({
        nama: '',
        email:'',
        password:'',
        password_confirmation:'',
    });
    // const insertForm = (form) => {
    //     axios.post(`17.53.47.76/kms_backend/public/petani/register`,
    //     {
    //         form: {
    //             nama: nama,
    //             email:email,
    //             password:password,
    //         }
    //     },)
    //     .then((response) => {
    //          // Handle the JWT response here
    //          deviceStorage.saveKey("access_token", response.access_token)
    //     })
    //     .catch((error)=> {
    //         // Handle returned errors here
    //     })
    // }
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        })
    }
    const sendData = screen => {
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/register`,
        {
            method:"POST",
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
        console.log('kirim data', form);
        navigation.replace(screen);
    };
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
                <LoginTemplate/>
                <LoginInput placeholder="Nama                                   " icon="person"
                    value={form.fullName}
                    onChangeText={value=>onInputChange(value, 'nama')}
                />
                <LoginInput placeholder="Email                                  " icon="email"
                    value={form.email}
                    onChangeText={value=>onInputChange(value, 'email')}
                />
                <LoginInput placeholder="Password                               " icon="lock"
                    value={form.password}
                    onChangeText={value=>onInputChange(value, 'password')}
                    secureTextEntry={true}
                />
            </View>
            <ActionButton title="Daftar" onPress={() => sendData('NavigationBar')}/>
            <View style={styles.wrapper}>
                <Text>Sudah memiliki akun?</Text>
                <Text style={styles.textbutton} onPress={() => handleGoTo('Login')}> Masuk</Text>
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