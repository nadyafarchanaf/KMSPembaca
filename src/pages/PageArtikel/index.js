import React from 'react';
import { View, Text, Image } from 'react-native';
import { BookmarkButton } from '../../component/atoms';
import { Kelapa } from '../../assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const PageArtikel = ({judul, penulis, isi}) => {
    return (
        <View>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.judul}>a{judul}</Text>
                    <Text style={styles.text}>oleh {penulis}</Text>
                </View>
                <BookmarkButton/>
            </View>
            <Image style={styles.image} source={Kelapa}/>
            <Text>{isi}</Text>
        </View>
    )
}
const styles = {
    image : {
        height:hp('30'),
        width:wp('94'),
        margin: 10,
        justifyContent: 'center'
    },
    judul : {
        marginLeft: 10, 
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'700',
        fontSize: 16,
        textAlign: 'justify' 
    },
    text : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify',
        marginHorizontal: 10
    }
}
export default PageArtikel;