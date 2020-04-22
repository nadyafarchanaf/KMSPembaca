import React from 'react';
import { View , Text} from 'react-native';
import { colors, colortext } from '../../../utils';
import { NotifBell } from '../../atoms';

const Notifikasi = ({jumlah}) => {
    return (
        <View style={styles.wrapper}>
            <NotifBell/>
            <View style={styles.button}>
                <Text style={styles.text}>{jumlah} Notifikasi baru</Text>
                <Text style={styles.text}>Lihat</Text>
            </View>
        </View>
    )
};
const styles = {
    button: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text :{
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    image :{
        height: 45,
        resizeMode: "contain",
        justifyContent: 'center',
        alignSelf: "center",
        margin:8
    },
    wrapper: {
        position: 'relative',
        flexDirection: 'row',
        margin: 14,
        height:105,
        borderRadius: 20,
        backgroundColor: colors.orange,
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
export default Notifikasi;