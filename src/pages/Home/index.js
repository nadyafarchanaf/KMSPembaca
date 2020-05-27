import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import { NavigasiBar, Notifikasi, KontenFeature, BoxRiwayat } from '../../component/molecules';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfilBeranda, BoxKonten, HeaderBar } from '../../component/atoms';
import { colors } from '../../utils';
import { PakarFemale } from '../../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
            <FlatList  showsVerticalScrollIndicator={false}
                ListHeaderComponent= {
                    <>
                    <Notifikasi onPress={()=>handleGoTo('Notifikasi')} jumlah="3" notif="pada hari minggu" notif="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
                    <KontenFeature 
                    onPressArtikel={()=>handleGoTo('Kategori Artikel')} 
                    onPressVideo={()=>handleGoTo('Daftar Video')} 
                    onPressDokumen={()=>handleGoTo('Daftar E-Dokumen')}/>
                    <BoxRiwayat onPress={()=>handleGoTo('Riwayat')}/>
                    </>
                }
            />
        </View>
    );
};

const styles = {
    wrapper:{
        flex:1,
    }
};

export default Home;