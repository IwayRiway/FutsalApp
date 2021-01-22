/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CardHelp = () => {
   return (
      <View style={styles.card}>
         <View style={{flex:2}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Apakah pembayaran tunai masih dapat dilakukan?</Text>
         </View>
         <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
            <Image source={require('../../asset/icon/top.png')} style={{width:20, height:20}}/>
         </View>
      </View>
   )
}

export default CardHelp;

const styles = StyleSheet.create({
   card : {
      marginBottom:15,
      padding:20,
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
