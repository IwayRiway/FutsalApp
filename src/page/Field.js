/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   ImageBackground, ScrollView, StyleSheet,
   Text, View
} from 'react-native';
import { CardField, Navigation } from '../component';

const Field = () => {
   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24, marginLeft:20, marginTop:40}}>Futsal Field</Text>
            </ImageBackground>
            <View style={{flex:1,marginTop:-60, paddingHorizontal:20}}>
               <CardField />
               <CardField />
               <CardField />
               <CardField />
               <CardField />
               <CardField />
               <CardField />
            </View>
         </ScrollView>

         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
    </View>
   )
}

export default Field;

const styles = StyleSheet.create({
   borderDash : {
      width : 70,
      height : 70,
      borderWidth : 2,
      borderRadius : 100,
      borderColor : '#000000',
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems:'center',
      marginRight:20
    },
})
