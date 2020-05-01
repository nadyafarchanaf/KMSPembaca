import React from 'react';
import { View , Text} from 'react-native';
import { BoxNotifikasi } from '../../component/molecules';
import { PakarFemale } from '../../assets';

const DaftarNotifikasi = ({jumlah,notif}) => {
    return (
        <View style={styles.wrapper}>
           <BoxNotifikasi img={PakarFemale} name='Nadya Farchana' role='Pakar Sawit' isi='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'/>
           <BoxNotifikasi img={PakarFemale} name='Nadya Farchana' role='Pakar Sawit' isi='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'/>
        </View>
    )
};
const styles = {
    button: {
        flex: 1, 
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 14,
    },
    text :{
    //    / color: colortext.white,
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
        flexDirection: 'column',
    },
}
export default DaftarNotifikasi;