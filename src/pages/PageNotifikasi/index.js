import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { NotifikasiPage } from '../../template';
import { colors } from '../../utils';

const PageNotifikasi = ({route}) => {
    const {id} = route.params;
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(true)
    const getData = async () => {
    const token = await AsyncStorage.getItem('userToken')
    const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/notifikasi/show/${id}`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setData([responseJson.notifikasi])
        }
        )
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=> {
        getData()
    }, [])
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
        <SafeAreaView>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data}
                  renderItem={({item}) => 
                  <NotifikasiPage
                    judul={item.headline}
                    isi={item.isi}
                  />
                  }
                  keyExtractor={item => item.id.toString()}
              />
          </SafeAreaView>
    )
}
const styles = {
    image : {
        height:hp('30'),
        width:wp('94'),
        margin: 10,
        justifyContent: 'center'
    },
    judul : {
        marginLeft: 10, 
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'700',
        fontSize: 16,
        textAlign: 'justify' 
    },
    text : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10
    }
}
export default PageNotifikasi;