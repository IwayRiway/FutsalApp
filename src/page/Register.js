/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, InputText } from '../atom';

const Register = () => {
   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, padding: 24, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}}>
            <View style={{flexDirection:'row', height:30}}>
               <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               <View style={{flex:1, justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:31}}>Sign Up</Text>
               </View>
            </View>

            {/* PROFILE POTO */}
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
               <View style={styles.borderDash}>
                  <Image source={require('../asset/logo.png')} style={{width:90, height:90}}/>
               </View>
               <Image source={require('../asset/icon/add.png')} style={{width:30, height:30, position:'absolute', bottom:-15}}/>
            </View>

            <View style={{flex:1, marginTop:15, alignItems:'center'}}>
               <View style={{marginTop:20, width:219}}>
                  <InputText placeholder={'Email..'}/>
               </View>
               <View style={{marginTop:20, width:219}}>
                  <InputText placeholder={'Nama..'}/>
               </View>
               <View style={{marginTop:20, width:219}}>
                  <InputText placeholder={'Password..'}/>
               </View>
               <View style={{marginTop:20, width:219}}>
                  <Button width={'100%'} height={53} text={'Sign Up'}/>
               </View>
            </View>
         </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default Register;

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
