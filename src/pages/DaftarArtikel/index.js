import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colors } from '../../utils';
const DaftarArtikel = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                ListHeaderComponent= {
                    <>
                    <SearchBox/>
                    </> }
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
export default DaftarArtikel;