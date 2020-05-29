import React, { useCallback, useState } from 'react';
import { View , Text, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import { BoxNotifikasi } from '../../component/molecules';
import { PakarFemale } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const DaftarNotifikasi = ({jumlah,notif}) => {
    const [refreshing,setRefreshing]= useState(false)
    const onRefresh = useCallback( async ()=> {
        setRefreshing(true);
        try {
            getData();
            setRefreshing(false)
        }  
        catch {
            console.error();
        }             

      }, [refreshing])
    return (
        <SafeAreaView showsVerticalScrollIndicator={false} style={styles.wrapper}>
           <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
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