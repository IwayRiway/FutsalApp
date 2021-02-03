/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';

import { StyleSheet, Image, View, Text } from 'react-native';
const CardHome = ({img, name, type, price}) => {
   return (
      <View style={styles.card}>
         <Image source={{uri : img}} style={{width:120, height:120, borderTopLeftRadius:20, borderTopRightRadius:20}}/>
         <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, paddingHorizontal:10, paddingBottom:0, marginTop:10, width:100}}>{name}</Text>
         {type == 1 ? <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, paddingHorizontal:10, paddingBottom:10, width:100, color:'#009555'}}>IDR {price}</Text> : null}
      </View>
   )
}

export default CardHome;

const styles = StyleSheet.create({
   card : {
      marginRight:15,
      marginBottom:15,
      width: 120,
      height:176,
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
   },
})
