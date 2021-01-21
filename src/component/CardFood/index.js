/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PlusMinus from '../PlusMinus';
import {Button2} from '../../atom';

const CardFood = () => {
   return (
      <View style={styles.card}>
         <View style={{width:98}}>
            <Image source={require('../../asset/food.png')} style={{borderRadius:20, width:'100%', height:95}} resizeMode="cover"/>
         </View>
         <View style={{flex:1, paddingHorizontal:20, paddingVertical:10}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Beef Burger</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, color:'#009555'}}>IDR 25.000</Text>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'flex-end'}}>
               <View style={{flex:1}}/>
               <PlusMinus />
               {/* <View style={{width:78, height:32}}>
                  <Button2 text={'Book Now'}/>
               </View> */}
            </View>
         </View>
      </View>
   )
}

export default CardFood;

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
