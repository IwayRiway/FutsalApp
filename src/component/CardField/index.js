/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button2} from '../../atom';

const CardField = () => {
   return (
      <View style={styles.card}>
         <View style={{width:120}}>
            <Image source={require('../../asset/field.png')} style={{borderRadius:20, width:'100%', height:98}} resizeMode="cover"/>
         </View>
         <View style={{flex:1, paddingHorizontal:20, paddingVertical:10}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Lapangan Syntetic C</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, color:'#009555'}}>IDR 75.000 / hour</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
               <View style={{flex:1, justifyContent:'center', paddingRight:5}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, color:'#AFAC99'}}>See Schedule</Text>
               </View>
               <View style={{width:78, height:32}}>
                  <Button2 text={'Book Now'}/>
               </View>
            </View>
         </View>
      </View>
   )
}

export default CardField;

const styles = StyleSheet.create({
   card : {
      marginBottom:15,
      // height:98,
      width: '100%',
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
      flexDirection:'row',
   },
})
