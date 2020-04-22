import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { icons, colortext } from '../../../utils';

const NavBar = ({icon, title}) => {
    return (
        <View style={styles.wrapper}>
            <Icon iconStyle={styles.icon} name={icon} size={33} color={icons.icon}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = {
    icon : {
        marginTop: 2,
        marginBottom: -5,
    },
    wrapper: {
    },
    text : {
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 11,
        textAlign: 'center',
        color: icons.icon,
    },
}
export default NavBar;