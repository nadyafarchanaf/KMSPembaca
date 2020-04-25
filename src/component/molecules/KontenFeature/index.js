import React from 'react';
import { colors } from '../../../utils';
import { Konten } from '../../atoms';
import { Artikel, Video, Ebook } from '../../../assets';
import {View, Text} from 'react-native';

const KontenFeature = () => {
    return (
        <View>
        <Text style={styles.text}>Konten KMS</Text>
            <View style={styles.wrapper}>
                    <Konten title="Artikel" img={Artikel}/>
                    <Konten title="Video/Audio" img={Video}/>
                    <Konten title="E-Dokumen" img={Ebook}/>
            </View>
        </View>
    )
}

const styles = {
    wrapper : {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: "row",
        marginHorizontal : 10,
        marginBottom: 15
    },
    text:{
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        color: colors.red,
        marginLeft: 24,
        marginBottom:8
    }
}
export default KontenFeature;