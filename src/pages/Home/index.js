import React from 'react';
import {View, Text} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda } from '../../component/atoms';
import { colors } from '../../utils';

const Home = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper}>
            <ScrollView >
                <View style={styles.wrapper}>
                    <ProfilBeranda fullName="Nadya Farchana" role="Pakar"/>
                    <Notifikasi jumlah="3" notif="pada hari minggu"/>
                    <KontenFeature/>
                </View>
            </ScrollView>
            {/* <NavigasiBar 
                onPressBeranda={()=>handleGoTo('Home')}
                onPressTersimpan={()=>handleGoTo('Tersimpan')}
                onPressProfil={()=>handleGoTo('Profil')}
            /> */}
        </View>
    );
};

const styles = {
    wrapper:{
        flex:1,
    }
};

export default Home;