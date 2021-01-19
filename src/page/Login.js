/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, InputText } from '../atom';

const Splashscreen2 = () => {
   return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
      <ImageBackground style={{flex:1}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:31}}>Login</Text>
            <View style={{height:90, alignItems:'center', marginTop:20}}>
               <Image source={require('../asset/logo.png')} style={{width:90, height:90}}/>
            </View>
            <View style={{flex:1, marginTop:56, alignItems:'center'}}>
               <View style={{marginTop:20, width:219}}>
                  <InputText placeholder={'Email..'}/>
               </View>
               <View style={{marginTop:20, width:219}}>
                  <InputText placeholder={'Password..'}/>
               </View>
               <View style={{marginTop:20, width:219}}>
                  <Button width={'100%'} height={53} text={'Sign In'}/>
               </View>
            </View>
         </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default Splashscreen2;

const styles = StyleSheet.create({});
