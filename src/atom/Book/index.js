/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Book = ({text}) => {
   return (
      <View style={{height:27, borderRadius:10, alignItems:'center', borderColor:'#AFAC99', borderWidth:1, marginRight:10}}>
         <Text style={styles.textStyle}>{text}</Text>
      </View>
   )
}

export default Book;

const styles = StyleSheet.create({
   textStyle : {
      fontFamily:'Poppins', fontWeight:'normal', fontSize:14, paddingVertical:5, paddingHorizontal:12,
   },
})
