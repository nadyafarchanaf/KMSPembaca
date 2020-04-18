import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

const LoginInput =() => {
    return (
        <TextInput style={styles.box} onChangeText={text => setText(text)}/>
    )
}

const styles = {
    box : {
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
}

export default LoginInput;