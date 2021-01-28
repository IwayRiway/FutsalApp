/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { StyleSheet, TextInput} from 'react-native';

const InputText = ({placeholder}) => {
  const [border, setBorder] = useState("#AFAC99");

   const onFocus = () => {
      setBorder('black');
    // eslint-disable-next-line semi
    }

    const onBlur = ()  => {
      setBorder('#AFAC99');
    }

   return (
      <TextInput placeholder={placeholder} style={{borderWidth:1, borderColor: border, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus()}/>
   )
}

export default InputText;

const styles = StyleSheet.create({
})
