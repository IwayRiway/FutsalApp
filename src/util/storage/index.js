/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable semi */
/* eslint-disable eol-last */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
   try {
     await AsyncStorage.setItem(key, value)
   } catch (e) {
     alert(e);
   }
};

export const storeDataJson = async (key, value) => {
   try {
     await AsyncStorage.setItem(key, JSON.stringify(value))
   } catch (e) {
     alert(e);
   }
};

// export const getData = async (key) => {
//    try {
//       const value = await AsyncStorage.getItem(key);
//       return value;
//    } catch (e) {
//      return e;
//    }
//  };