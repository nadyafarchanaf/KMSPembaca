import React from 'react';
import { colors } from '../../../utils';
import { Konten } from '../../atoms';
import { Artikel, Video, Ebook } from '../../../assets';
import {View} from 'react-native';

const KontenFeature = () => {
    return (
        <View style={styles.wrapper}>
                <Konten title="Artikel" img={Artikel}/>
                <Konten title="Video/Audio" img={Video}/>
                <Konten title="E-Dokumen" img={Ebook}/>
        </View>
    )
}

const styles = {
    wrapper : {
        flex: 1, 
        justifyContent: 'space-around', 
        flexDirection: "row",
        marginHorizontal : 20,
    }
}
export default KontenFeature;