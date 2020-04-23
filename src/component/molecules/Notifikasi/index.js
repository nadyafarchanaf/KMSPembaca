import React from 'react';
import { View , Text} from 'react-native';
import { colors, colortext } from '../../../utils';
import { NotifBell } from '../../atoms';

const Notifikasi = ({jumlah,notif}) => {
    // const handleGoTo = screen => {
    //     navigation.navigate('screen')
    // };
    return (
        <View style={styles.wrapper}>
            <NotifBell/>
            <View style={{flexDirection:"column", flex:1}}>
                <View style={styles.button}>
                <View>
                    <Text style={styles.text}>{jumlah} Notifikasi baru</Text>
                </View>
                <View>
                    <Text style={styles.lihat}>Lihat</Text>
                </View>
            </View>
            <View style={{marginBottom:10}}>
                <Text style={{ color: colortext.white,}}>{notif}blablablabla</Text>
                <Text style={{ color: colortext.white,}}>{notif}blablablabla</Text>
                <Text style={{ color: colortext.white,}}>{notif}blablablabla</Text>
            </View>
            </View>
        </View>
    )
};
const styles = {
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text :{
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 15,
        marginTop: 10,
    },
    lihat :{
        marginRight:14,
        color: colortext.white,
        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: 15,
        marginTop: 10,
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