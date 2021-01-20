/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button2 = ({text}) => {
   return (
      <View style={{width:'100%', height:32, borderRadius:10, backgroundColor:'#83E255', alignItems:'center'}}>
         <Text style={styles.textStyle}>{text}</Text>
      </View>
   )
}

export default Button2;

const styles = StyleSheet.create({
   textStyle : {
      fontFamily:'Poppins', fontWeight:'normal', fontSize:14, paddingVertical:7, color:'#ffffff', paddingHorizontal:10,
   },
})
