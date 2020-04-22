import React from 'react';
import {View, Text} from 'react-native';
import { NavigasiBar, Notifikasi } from '../../component/molecules';

const Home = () => {
    return (
        <View>
            <NavigasiBar/>
            <Notifikasi/>
        </View>
    );
};

export default Home;