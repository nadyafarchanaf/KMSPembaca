import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton,  BoxKontenVideo } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colors } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

const DATA = [
    {
        id: '1',
        kategori:"Artikel",
        title:"Artikel",
        img:Kelapa,
        screenName: 'Video',
        isi:'Aku ingin mencintaimu dengan sederahana dengan kat ayang Aku ingin mencintaimu dengan sederahana dengan kat ayang tak sempat disampaikan kayu kepada api yang menjadikannya abu'
    }
]
const DaftarVideo = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    const [data, setData] = useState();
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)
        console.log(userToken)           
        fetch(`http://117.53.47.76/kms_backend/public/api/konten/video_audio `,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
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
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}}>
            <SearchBox/>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => 
                <BoxKontenVideo  kategori={item.tipe} 
                            title={item.judul} 
                            img={item.img} 
                            isi={item.konten.isi}
                            onPress={()=> handleGoTo(item.screenName)}
                            />}
                keyExtractor={item => item.id}
                enableEmptySections={true}
            />
        </SafeAreaView>
    )
};
export default DaftarVideo;