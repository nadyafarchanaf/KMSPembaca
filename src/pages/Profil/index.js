import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigasiBar } from '../../component/molecules';
import { ProfilBeranda, ActionButton } from '../../component/atoms';
import { PakarMale } from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';

const Profil = ({navigation}) => {
    const handleGoTo = async (screen) => {
        const data = await AsyncStorage.removeItem('userToken')
        fetch(`http://117.53.47.76/kms_backend/public/api/logout`,
        {
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            navigation.replace(screen)
        })
        
    };
    const [data, setData]=useState();
    const [loading, setLoading]=useState();
    const profil = async (screen) => {
        const token = await AsyncStorage.getItem('userToken')
        const userToken = JSON.parse(token)          
        fetch(`http://117.53.47.76/kms_backend/public/api/profil`,
        {
            method:"GET",
            headers: new Headers ( {
                Authorization : 'Bearer ' + userToken
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            setLoading(false)
            setData(responseJson.data)
        }
        )
        .catch((error) => {
            console.error(error);
        });
        useEffect={}
        
    };
    if (loading=== true) {
        return (
            <View style={{alignItems: 'center',
            flex: 1,
            justifyContent: 'center'}}>
                <ActivityIndicator size="large" color={colors.red}/>
            </View>
        )
    } 
    return(
        <View>
            <ScrollView>
                <View style={{marginTop:15}}>
                    <ProfilBeranda img={PakarMale} role={data.peran} fullName={data.nama} email={data.email}/>
                </View>
                <ActionButton onPress={()=> handleGoTo('WelcomePage1')} title="Keluar"/>
            </ScrollView>
        </View>
    )
};
export default Profil;