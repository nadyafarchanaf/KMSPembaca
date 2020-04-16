import React from 'react';
import {View, Text, ActivityIndicatorBase} from 'react-native';
import { OrangeButton} from '../../component';
import { colortext } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import ActionButton from '../../component/atoms/ActionButton';
import KontenFeature from '../../component/molecules/KontenFeature'

const WelcomePage1 = () => {
    return (
        <View>
            <Text style={colortext.black}>Welcome Page 1</Text>
            <OrangeButton title="masuk"/>
            <RedButton title="Lama banget sih"/>
            <ActionButton title="Login"/>
            <KontenFeature title="Rumah" img="{require('./src/assets/icon/video.png')}"/>
        </View>
    );
};

export default WelcomePage1;