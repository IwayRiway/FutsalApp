/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Button } from '../atom';

const Splashscreen3 = () => {
   return (
      <View style={{flex:1}}>

         {/* IMAGE */}
         <View style={{height:374.95}}>
            <Image source={require('../asset/blob_splash3.png')} style={{height:374.95, marginTop:60}}></Image>
         </View>

         {/* Description */}
         <View style={{flex:1, marginTop:85, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>All in One</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15, marginTop:10}}>Semua Ada Disini.</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15}}>Dari Lapangan sampai Makanan</Text>
         </View>

         {/* BUTTON */}
         <View style={{height:53, flexDirection:'row', paddingHorizontal:20, marginBottom:20}}>
            <View style={{flex:1, alignItems:'flex-end'}}>
               <Button width={129} height={53} text={'Next'}/>
            </View>
         </View>
      </View>
   )
}

export default Splashscreen3;

const styles = StyleSheet.create({})
