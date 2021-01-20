/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';

import { StyleSheet, Image, View, Text } from 'react-native';
const CardNews = () => {
   return (
      <View style={styles.card}>
         <Image source={require('../../asset/timnas.png')} style={{width:'100%', height:115, borderTopLeftRadius:20, borderTopRightRadius:20}}/>
         <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Food & Beverages</Text>
            <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
         </View>
         <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, paddingHorizontal:10, paddingBottom:10, marginTop:10, width:100}}>Lapangan Syntetic C</Text>
      </View>
   )
}

export default CardNews;

const styles = StyleSheet.create({
   card : {
      marginBottom:15,
      width: 335,
      height:167,
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
