/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CardHelp } from '../component';

const Help = ({navigation}) => {

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}
   
   return (
      <ImageBackground style={{flex:1, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row', height:30, paddingHorizontal:20}}>
               <TouchableOpacity onPress={()=>goTo('Account')}>
                  <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               </TouchableOpacity>
               <View style={{flex:1, justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Help</Text>
               </View>
            </View>
            <View style={{flex:1, marginVertical:40, paddingHorizontal:20}}>
               <TouchableOpacity onPress={()=>goTo('Account')}>
                  <CardHelp />
               </TouchableOpacity>
            </View>
         </ScrollView>
      </ImageBackground>
   );
};

export default Help;

const styles = StyleSheet.create({
   borderDash : {
      width : 100,
      height : 100,
      borderWidth : 2,
      borderRadius : 100,
      borderColor : '#000000',
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      marginTop:25,
      position:'relative',
    },
});
