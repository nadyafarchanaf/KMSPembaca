import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, View, FlatList, ActivityIndicator}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { BoxKontenRiwayat } from '../../atoms';
import { Kelapa, Chart, Petani } from '../../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const BoxRiwayat = ({navigation, onPress, onPressLain}) => {
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
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.text}>Riwayat</Text>
            <Text style={styles.textlain} onPressLain={onPress}>Lainnya</Text>
        </View>
        <SafeAreaView style={styles.wrapper}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => 
                    <BoxKontenRiwayat 
                                kategori={item.tipe} 
                                title={item.judul}
                                isi={item.penulis.map(value=>value.nama)}
                                onPress={()=> navigation.navigate(item.tipe.toString(), {id:item.konten_id})}
                                />}
                    keyExtractor={item => item.id.toString()}
                    enableEmptySections={true}
                />
        </SafeAreaView>
        </View>
    
        
    )
}

const styles = {
    text:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginLeft: 12,
    },
    textlain:{
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginRight: 24,
        marginBottom:8,
    }
    
}
export default BoxRiwayat;