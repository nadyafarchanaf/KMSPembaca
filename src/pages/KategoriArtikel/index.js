import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton } from '../../component/atoms';
import { colors } from '../../utils';
import deviceStorage from '../../service/deviceStorage';
import AsyncStorage from '@react-native-community/async-storage';

const DATA = [
    {
        id: '1',
        title: "Pendahuluan terkait Kelapa Sawit",
        screenName: 'Daftar Artikel'
    },
    {
        id: '2',
        title: "Pendahuluan terkait Kelapa Sawit",
        screenName: 'Daftar Artikel'
    },
    {
        id: '3',
        title: "Pendahuluan terkait Kelapa Sawit",
        screenName: 'Daftar Artikel'
    },
    {
        id: '4',
        title: "Pendahuluan terkait Kelapa Sawit",
        screenName: 'Daftar Artikel'
    }
];
const KategoriArtikel = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    const [data, setData] = useState();
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/konten/artikel`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson.konten)
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
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}} >
            <SearchBox/>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => 
                    <WhiteButton title={item.kategori} />}
                keyExtractor={item=> item.id}
                enableEmptySections={true}
            />
        </SafeAreaView>
    )
};
export default KategoriArtikel;
