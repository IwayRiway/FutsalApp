/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Button } from '../atom';

const Success = () => {
   return (
      <View style={{flex:1, paddingHorizontal:20}}>

         {/* IMAGE */}
         <View style={{flex:1, alignItems:'center', marginTop:100,}}>
            <Image source={require('../asset/success.png')} style={{height:244, width:273}}></Image>
         </View>

         {/* Description */}
         <View style={{flex:1, marginTop:100, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>Booking Successfully</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15, marginTop:10}}>Yeah, awesome!!</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15}}>Lapangan futsal favoritme sukses dibooking.</Text>
         </View>

         {/* BUTTON */}
            <View style={{flex:1, marginTop:-50}}>
               <Button width={'100%'} height={53} text={'Back To Home'}/>
            </View>
      </View>
   )
}

export default Success;

const styles = StyleSheet.create({})
