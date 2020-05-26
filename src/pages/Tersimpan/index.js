import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBox, WhiteButton, BoxKonten } from '../../component/atoms';
import { Kelapa } from '../../assets';
import { colors } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

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
    const [loading, setLoading]=useState(true)
    const [data, setData] = useState();
    const [arraydata, setArrayData]=useState([]);
    const getData = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/bookmark`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setData(responseJson.bookmark)
            setArrayData(responseJson.bookmark)
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getData()
    }, [])
    const [value, setValue] = useState()
    const searchFilterFunction = text => {
        
        setValue(text)
        const newData = arraydata.filter(item => {
          const itemData = `${item.kategori.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        setData (newData)
      };
    if (loading===true) {
            return (
                <View style={{alignItems: 'center',
                flex: 1,
                justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color={colors.red}/>
                </View>
            )
    }
    return (
        <SafeAreaView style={{backgroundColor:colors.white1, flex:1}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                ListHeaderComponent= {
                    <>
                    <SearchBox onChangeText={ text => searchFilterFunction(text)} value={value}/>
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