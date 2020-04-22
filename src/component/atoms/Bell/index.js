import React from 'react';
import { View, Image } from 'react-native';
import { Bell } from '../../../assets';
import { colors } from '../../../utils';

const NotifBell = ({}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={Bell} style={styles.image}/>
        </View>
    )
};
const styles = {
    image :{
        height: 45,
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        margin:8
    },
    wrapper: {
        marginHorizontal: 15,
        marginVertical: 20,
        width: 65,
        height: 65,
        borderRadius: 65/2,
        backgroundColor: colors.white2,
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
export default NotifBell;