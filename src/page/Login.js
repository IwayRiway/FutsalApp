/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, InputText } from '../atom';

const Login = () => {
   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, padding: 24, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
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
            <View style={{flex:1, marginTop:20, alignItems:'center'}}>
               <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Dont have account? <Text style={{color:"#62BAAC"}}>Create here..</Text></Text>
            </View>
         </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default Login;

const styles = StyleSheet.create({
});
