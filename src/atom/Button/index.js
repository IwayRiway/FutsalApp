/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = ({text,width,height}) => {
   return (
      <View style={{flex:1}}>
         <View style={{width:width, height:height, borderRadius:20, backgroundColor:'#83E255', alignItems:'center'}}>
            <Text style={styles.textStyle}>{text}</Text>
         </View>
      </View>
   )
}

export default Button

const styles = StyleSheet.create({
   textStyle : {
      fontFamily:'Poppins', fontWeight:'bold', fontSize:24, paddingVertical:13, color:'#ffffff'
   },
})
