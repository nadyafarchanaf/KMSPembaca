import React from 'react';
import {Text, Image, View}  from 'react-native';

const KontenFeature = ({title,img}) => {
    return (
        <View>
            <Image source={img}/>
            <Text> {title}</Text>
        </View>
    )
}
export default KontenFeature;