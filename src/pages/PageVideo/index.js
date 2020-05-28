import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import YouTube from 'react-native-youtube';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { colors, icons, colortext } from '../../utils';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { BookmarkButton } from '../../component/atoms';
function PageVideo  ({videoId, title, route})  {
  const [isReady, setIsReady]= useState(false);
  const [status, setStatus]= useState();
  const [quality, setQuality] = useState();
  const [error, setError] = useState();
  const {itemVideo, itemSumber, itemJudul} = route.params;
    return (
      <View style={styles.container}>
        <YouTube
        apiKey="AIzaSyBa_gh3C-qpXu3IwK1c503-2vvFtPeKsvM"
        videoId={itemVideo.toString()} // The YouTube video ID
        play // control playback of video with true/false
        fullscreen={false} // video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        onReady={e => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={styles.youtube}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>{itemJudul}</Text>        
          <BookmarkButton/>
        </View>
        <Text style={styles.sumber}>Sumber video channel youtube : {itemSumber}</Text>
      </View>
      
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    youtube: {
    alignSelf: 'stretch',
    height: hp('31.25') 
    },
    title : {
      fontFamily: 'Nunito',
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'justify',
      textTransform: 'capitalize',
      marginLeft: 10,
      marginTop: 10,
      width:wp(85)
    },
    sumber : {
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontSize: 14,
      textAlign: 'justify',
      marginHorizontal: 10,
      color:colortext.gray
    }
});
export default PageVideo;