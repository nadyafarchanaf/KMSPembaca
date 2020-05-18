import React from 'react';
import { View , Text, SafeAreaView, FlatList} from 'react-native';
import { BoxNotifikasi } from '../../component/molecules';
import { PakarFemale } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        id: '1',
        img:PakarFemale,
        name:'Nadya Farchana',
        role:'Pakar Sawit',
        isi:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
]
const DaftarNotifikasi = ({jumlah,notif}) => {
    return (
        <SafeAreaView showsVerticalScrollIndicator={false} style={styles.wrapper}>
           <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({item}) => 
                    <BoxNotifikasi  img={item.img} 
                                    name={item.name} 
                                    role={item.role} 
                                    isi={item.isi}
                                    />  
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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