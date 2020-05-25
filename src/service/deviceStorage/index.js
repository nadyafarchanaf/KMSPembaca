import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";


const deviceStorage =  {
        async onSignIn(key, value) {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
      async isSignedIn(key) {
          try { 
            await AsyncStorage.getItem(key)
            
          }
            catch (error) { 
              console.log('AsyncStorage Error: ' + error.message);
            }
      },
      async onSignOut(key) {
        try {
          await AsyncStorage.removeItem(key);
        }
        catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
};

export default deviceStorage;