/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, InputText } from '../atom';

const EditProfile = ({navigation}) => {

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}}>
            <View style={{flexDirection:'row', height:30}}>
               <TouchableOpacity onPress={()=>goTo('Account')}>
                  <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               </TouchableOpacity>
               <View style={{flex:1, justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Edit Profile</Text>
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
                  <TouchableOpacity onPress={()=>goTo('Account')}>
                     <Button width={'100%'} height={53} text={'Update'}/>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default EditProfile;

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
