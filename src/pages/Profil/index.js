import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigasiBar } from '../../component/molecules';
import { ProfilBeranda, ActionButton } from '../../component/atoms';
import { PakarMale } from '../../assets';
import deviceStorage from '../../service/deviceStorage';

const Profil = ({navigation}) => {
    const handleGoTo = screen => {
        fetch(`http://117.53.47.76/kms_backend/public/api/logout`,
        {
            method:"POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          deviceStorage.onSignOut('userToken')
        })
        .catch((error) => {
          console.error(error);
        });
        navigation.replace(screen);
    };
    return(
        <View>
            <ScrollView>
                <View style={{marginTop:15}}>
                    <ProfilBeranda img={PakarMale} role="Pakar" fullName="Nadya Farchana Fidaroina"/>
                </View>
                <ActionButton onPress={()=> handleGoTo('Login')} title="Keluar"/>
            </ScrollView>
        </View>
    )
};
export default Profil;