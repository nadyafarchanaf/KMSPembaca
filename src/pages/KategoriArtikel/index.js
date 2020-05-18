import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton } from '../../component/atoms';

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
    return (
        <SafeAreaView >
            <SearchBox/>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({item}) => <WhiteButton title={item.title} onPress={()=> handleGoTo(item.screenName)}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};
export default KategoriArtikel;
