import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { icons, colors } from '../../../utils';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';


function Item({ id }) {
    const [selected, setSelected] = useState(false);
    const add = async () => {
      const token = await AsyncStorage.getItem('userToken')
      const userToken = JSON.parse(token)          
          fetch(`http://117.53.47.76/kms_backend/public/api/pakar/bookmark/add/${id}`,
          {
              method:"POST",
              headers: new Headers ( {
                  Authorization : 'Bearer ' + userToken,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              })
          })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson)
              setSelected(true);
          }
          )
          .catch((error) => {
              console.error(error);
          });
      }
    const remove = async () => {
      const token = await AsyncStorage.getItem('userToken')
      const userToken = JSON.parse(token)          
          fetch(`http://117.53.47.76/kms_backend/public/api/pakar/bookmark/delete/${id}`,
          {
              method:"DELETE",
              headers: new Headers ( {
                  Authorization : 'Bearer ' + userToken,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              })
          })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson)
              setSelected(false)
          }
          )
          .catch((error) => {
              console.error(error);
          });
      }
    if (selected === true) {
      return(
        <Icon
        name='bookmark'
          onPress={() => remove(id)} 
          color= {colors.gray2 }
        />
      )
    } else {
      return(
        <Icon
        name='bookmark-border'
        onPress={() => add(id)} 
          color= { colors.gray2}
        />
      )
    }
}

export default function BookmarkButton({id}) {
 return (
    <View style={{
        marginTop: 10,
        marginRight: 15
        }}>
          <Item
            id={id}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
