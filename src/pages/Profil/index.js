import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigasiBar } from '../../component/molecules';

const Profil = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return(
        <View>
            <ScrollView>
                <Text onPress={()=>handleGoTo('Login')}>Profil</Text>
            </ScrollView>
        </View>
    )
};
export default Profil;