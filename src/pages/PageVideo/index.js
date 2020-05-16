import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import YouTube from 'react-native-youtube';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import { colors, icons } from '../../utils';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { BookmarkButton } from '../../component/atoms';
const PageVideo = ({videoId, title}) => {
  const [isReady, setIsReady]= useState(false);
  const [status, setStatus]= useState();
  const [quality, setQuality] = useState();
  const [error, setError] = useState();
  const [icon, setIcon] = useState(0);
    return (
      <View style={styles.container}>
        <YouTube
        apiKey="AIzaSyBa_gh3C-qpXu3IwK1c503-2vvFtPeKsvM"
        videoId="DjuuWiuQh4k" // The YouTube video ID
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
          <Text style={styles.title}>Judul dummy gitu ceritanya{title}</Text>        
          <BookmarkButton/>
        </View>
        <Text> oleh Admin</Text>
        <Text>Detail</Text>
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
      marginHorizontal: 15,
      marginTop: 10
    }
});
export default PageVideo;