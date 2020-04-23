import React from 'react';
import {View, Text} from 'react-native';
import { NavigasiBar, Notifikasi } from '../../component/molecules';

const Home = () => {
    return (
        <View>
            <NavigasiBar/>
            <Notifikasi jumlah="3" notif="pada hari minggu"/>
        </View>
    );
};

export default Home;