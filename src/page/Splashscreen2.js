/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../atom';

const Splashscreen2 = ({navigation}) => {

   const goTo = (page) => {navigation.replace(page);}

   return (
      <View style={{flex:1}}>

         {/* IMAGE */}
         <View style={{height:383.45}}>
            <Image source={require('../asset/blob_splash2.png')} style={{height:383.45, marginTop:60}}/>
         </View>

         {/* Description */}
         <View style={{flex:1, marginTop:55, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>Book Now, Play Later</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15, marginTop:10}}>Cara Mudah</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15}}>Booking Lapangan Futsal Favarite Kalian</Text>
         </View>

         {/* BUTTON */}
         <View style={{height:53, flexDirection:'row', paddingHorizontal:20, marginBottom:20}}>
            <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'flex-start'}} onPress={()=>goTo('Beranda')}>
               <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:24, color:'#AFAC99'}}>Skip</Text>
            </TouchableOpacity>
            <View style={{flex:1, alignItems:'flex-end'}}>
               <TouchableOpacity onPress={()=>goTo('Splashscreen3')}>
                  <Button width={129} height={53} text={'Next'}/>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default Splashscreen2;

const styles = StyleSheet.create({})
