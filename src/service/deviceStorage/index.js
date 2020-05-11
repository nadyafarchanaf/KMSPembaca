import AsyncStorage from "@react-native-community/async-storage";


const deviceStorage =  {
        async saveItem(key, value) {
        try {
         await AsyncStorage.setItem(key, value)
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
      async getItem(key) {
        try {
          let userData = await AsyncStorage.getItem(key);
          let data = JSON.parse(userData);
          console.log(data);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
};

export default deviceStorage;