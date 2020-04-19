import React from 'react';
import {Text, Image, View}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Konten = ({title,img}) => {
    return (
    <View style={styles.wrapper}>
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7}>
            <Image source={img} style={styles.image}/>
            <Text style={styles.text}> {title}</Text>
        </TouchableOpacity>
    </View>
        
    )
}

const styles = {
    wrapper : {
        backgroundColor : colors.green4,
        height: 92,
        width: 97,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    },
    image : {
        height: 65,
        marginHorizontal : 10,
        marginTop : 3,
        resizeMode: "cover",
        alignSelf: "center",
    },
    text : {
        color:colortext.white, 
        marginTop:-2,
        fontSize: 14, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textTransform:'capitalize',
        textAlign: 'center',
    }

}
export default Konten;