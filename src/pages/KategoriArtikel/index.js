import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton } from '../../component/atoms';

const KategoriArtikel = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBox/>
            <WhiteButton title="Pendahuluan terkait Kelapa Sawit"/>
        </ScrollView>
    )
};
export default KategoriArtikel;