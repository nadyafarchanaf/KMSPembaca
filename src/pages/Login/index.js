import React from 'react';
import {View, Text} from 'react-native';
import { LoginInput, ActionButton } from '../../component/atoms';
import { LoginTemplate } from '../../template';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <KeyboardAwareScrollView>
            <View>
                <LoginTemplate/>
                <LoginInput placeholder="Email" icon="email"/>
                <LoginInput placeholder="Password" icon="lock"/>
            </View>
            <ActionButton title="Masuk"/>
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