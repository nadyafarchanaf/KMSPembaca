import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten } from '../../component/atoms';
import { Kelapa } from '../../assets';

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
    return (
        <SafeAreaView>
            <SearchBox/>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({item}) => 
                <BoxKonten  kategori={item.kategori} 
                            konten={item.konten} 
                            title={item.title} 
                            img={item.img} 
                            isi={item.isi}
                            onPress={()=> handleGoTo(item.screenName)}
                            />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};
export default DaftarVideo;