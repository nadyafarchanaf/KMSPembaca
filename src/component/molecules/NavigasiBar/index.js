import React from 'react';
import { View, Text } from 'react-native';
import { NavBar } from '../../atoms';
import { colors } from '../../../utils';

const NavigasiBar = () => {
    return (
        <View style={styles.wrapper}>
          <NavBar icon="home" title="Beranda"/>
          <NavBar icon="bookmark" title="Tersimpan"/>
          <NavBar icon="person" title="Profil"/>
        </View>
    )
};

const styles = {
    wrapper: {
        backgroundColor: colors.white1,
        height: 50,
        justifyContent: 'space-around', 
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20
    },
}
export default NavigasiBar;