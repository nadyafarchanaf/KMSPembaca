import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigasiBar } from '../../component/molecules';
import { ProfilBeranda, ActionButton } from '../../component/atoms';
import { PakarMale } from '../../assets';

const Profil = ({navigation}) => {
    const handleGoTo = screen => {
        fetch(`http://117.53.47.76/kms_backend/public/api/petani/logout`,
        {
            method:"POST"
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
        navigation.navigate(screen);
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