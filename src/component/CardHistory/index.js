/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CardHistory = () => {
   return (
      <View style={styles.card}>
         <View style={{width:100, justifyContent:'center'}}>
            <Image source={require('../../asset/icon/futsal.png')} style={{width:100, height:100}} resizeMode="center"/>
         </View>
         <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Book ID :</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>FT-2097768</Text>

            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, marginTop:10}}>Book Date :</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>14 January 2021</Text>
         </View>
      </View>
   )
}

export default CardHistory;

const styles = StyleSheet.create({
   card : {
      marginBottom:15,
      width: '100%',
      borderRadius:20,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOffset: {
         width: 8,
         height: 24,
      },
      shadowOpacity: 0.14,
      shadowRadius: 20,
      elevation: 8,
      flexDirection:'row',
   },
})
