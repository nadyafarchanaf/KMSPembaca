import React from 'react';
import {Text, Image, View}  from 'react-native';
import { Avatar } from '../../../assets';

const KontenFeature = ({title,img}) => {
    return (
        <View>
            <Image source={Avatar}/>
            <Text> {title}</Text>
        </View>
    )
}
export default KontenFeature;