/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

const InputText = ({placeholder}) => {
   return (
      <TextInput placeholder={placeholder} style={{borderWidth:1, borderColor:'#AFAC99', borderRadius:20, paddingHorizontal:20, paddingVertical:18}}/>
   )
}

export default InputText;

const styles = StyleSheet.create({
})
