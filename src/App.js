import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import {store} from './redux';
import { colors } from './utils';
import { WelcomePage1, NavigationBar } from './pages';
import deviceStorage from './service/deviceStorage';

const App = () => {
  const [signedIn, setSignedIn]=useState(false);
  useEffect(() => {
    deviceStorage.isSignedIn('userToken')
      .then(res => {setSignedIn(res !== null) })
      .catch(err => alert("An error occurred"));
  })
  if (signedIn) {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
    );
  } else {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white1,
  },
});

export default App;
