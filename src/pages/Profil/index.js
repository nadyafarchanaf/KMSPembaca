import React from 'react';
import { View, Text } from 'react-native';
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
    return(
        <View>
            <ScrollView>
                <View style={{marginTop:15}}>
                    <ProfilBeranda img={PakarMale} role="Pakar" fullName="Nadya Farchana Fidaroina"/>
                </View>
                <ActionButton onPress={()=> handleGoTo('WelcomePage1')} title="Keluar"/>
            </ScrollView>
        </View>
    )
};
export default Profil;