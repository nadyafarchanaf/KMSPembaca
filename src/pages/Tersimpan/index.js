import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colors } from '../../utils';

const DATA = [
    {
      id: '1',
      kategori:"Artikel",
      title:"Artikel",
      img:Kelapa,
      screenName: 'Artikel',
      isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
     
    },
    {
      id: '2',
      kategori:"Artikel",
      title:"Artikel",
      img:Kelapa,
      screenName: '',
      isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
    
    },
    {
      id: '3',
      kategori:"Artikel",
      title:"Artikel",
      img:Kelapa,
      screenName: '',
      isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
    
    },
    {
        id: '4',
        kategori:"Artikel",
        title:"Artikel",
        img:Kelapa,
        screenName: '',
        isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
      
    },
    {
        id: '5',
        kategori:"Artikel",
        title:"Artikel",
        img:Kelapa,
        screenName: '',
        isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
      
    },
    {
        id: '6',
        kategori:"Artikel",
        title:"Artikel",
        img:Kelapa,
        screenName: 'Artikel',
        isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
      
    },
    {
        id: '7',
        kategori:"Artikel",
        title:"Artikel",
        img:Kelapa,
        screenName: 'Artikel',
        isi:'Budidaya Kelapa Sawit oleh Antara Darma 13 Mei 2020 Cara tanam kelapa sawit yang benar akan mempengaruhi kualitas tanaman sawit dan mempengaruhi buah yang akan dihasilkan. Mungkin beberapa petani sawit masih ada yang menanam kelapa sawit secara sembarangan dan tidak begitu memperhatikan teknik menanam yang baik dan benar. Sehingga terkadang hal itulah yang menjadi penyebab kenapa pohon kelapa sawit yang sedang ditanam tidak '
      
    },
  ];
const Tersimpan = () => {
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
export default Tersimpan;