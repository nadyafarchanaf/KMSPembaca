import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature, BoxRiwayat } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda, BoxKonten, HeaderBar, BoxKontenRiwayat } from '../../component/atoms';
import { colors } from '../../utils';
import { PakarFemale } from '../../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
    const [data, setData] = useState();
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/pakar/riwayat`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson.bookmark)
            console.log(responseJson.bookmark)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
       getData()
    }, [])
    
    return (
        <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
            <FlatList  showsVerticalScrollIndicator={false}
                ListHeaderComponent= {
                    <>
                    <Notifikasi onPress={()=>navigation.navigate('Notifikasi')} jumlah="3" notif="pada hari minggu" notif="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                    <KontenFeature 
                    onPressArtikel={()=>navigation.navigate('Kategori Artikel')} 
                    onPressVideo={()=>navigation.navigate('Daftar Video')} 
                    onPressDokumen={()=>navigation.navigate('Daftar E-Dokumen')}/>
                    <BoxRiwayat />
                    </>
                }
                data={data}
                    renderItem={({item}) => 
                    <BoxKontenRiwayat 
                        kategori={item.tipe} 
                        title={item.judul}
                        isi={item.penulis.map(value=>value.nama)}
                        onPressKonten={()=> navigation.navigate(item.tipe.toString(), {id:item.konten_id})}
                                />}
                        keyExtractor={(item) => item.id.toString()}
                        enableEmptySections={true}
            />
        </View>
    );
};

const styles = {
    wrapper:{
        flex:1,
    }
};

export default Home;