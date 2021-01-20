/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';

import { StyleSheet, Image, View } from 'react-native';
const Navigation = () => {
   return (
      <View style={styles.card}>
         <Image source={require('../../asset/icon/home_active.png')} style={{width:20, height:20}}/>
         <Image source={require('../../asset/icon/field.png')} style={{width:20, height:20}}/>
         <Image source={require('../../asset/icon/food.png')} style={{width:20, height:20}}/>
         <Image source={require('../../asset/icon/history.png')} style={{width:20, height:20}}/>
         <Image source={require('../../asset/icon/account.png')} style={{width:20, height:20}}/>
      </View>
   )
}

export default Navigation;

const styles = StyleSheet.create({
   card : {
      width:"100%",
      height:50,
      flexDirection : 'row',
      paddingHorizontal:40,
      paddingVertical:16,
      justifyContent:'space-between',
      borderRadius:20,
      backgroundColor: '#FFFFFF',
      shadowColor: "#000",
      shadowOffset: {
         width: 8,
         height: 24,
      },
      shadowOpacity: 0.14,
      shadowRadius: 20,
      elevation: 8,
   },
})
