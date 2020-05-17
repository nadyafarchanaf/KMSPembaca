import React from 'react';
import { View, Image, Text} from 'react-native';
import DownloadLButton from '../../component/atoms/DownloadButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { Kelapa } from '../../assets';
const PageDokumen = ({img, judul, penerbit, penulis, isbn, bahasa, halaman, tahun}) => {
      return (
          <View>
            <View style={{flexDirection:'row'}}>
                <Image source={Kelapa} style={styles.image}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.judul}>{judul}</Text>
                    <Text style={styles.isi}>{penulis}</Text>
                    <Text style={styles.isi}>{tahun}</Text>
                    <Text style={styles.isi}>{penerbit}</Text>
                    <Text style={styles.isi}>{isbn}</Text>
                    <Text style={styles.isi}>{bahasa}</Text>
                    <Text style={styles.isi}>{halaman}</Text>
                </View>
            </View>
            <DownloadLButton url="https://google.com"/>
            <Text style={styles.Ringkasan}>Ringkasan</Text>
          </View>
      )
}
const styles = {
    image : {
        height:hp('24'),
        width:wp('29'),
        margin: 15,
    },
    judul : {
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'700',
        fontSize: 16,
        textAlign: 'justify'
    },
    isi : {
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 14,
        textAlign: 'justify'
    },
    Ringkasan : {
        marginTop: 10,
        fontFamily: 'Nunito',
        fontWeight:'300',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft : 15
    }
}
export default PageDokumen;