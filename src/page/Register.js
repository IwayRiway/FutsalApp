/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../atom';

const Register = ({navigation}) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [borderEmail, setBorderEmail] = useState("#AFAC99");
   const [borderName, setBorderName] = useState("#AFAC99");
   const [borderPassword, setBorderPassword] = useState("#AFAC99");

   const onFocus = (type) => {
      [type] = 'black';
    // eslint-disable-next-line semi
    };

    const onBlur = ()  => {
      setBorderEmail('#AFAC99');
      setBorderName('#AFAC99');
      setBorderPassword('#AFAC99');
    };

   const goTo = (page) => {navigation.replace(page);};

   const submit = () => {
      console.log("MASK");
      console.log(email);
   };

   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, padding: 24, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}}>
            <View style={{flexDirection:'row', height:30}}>
               <TouchableOpacity onPress={()=>goTo('Login')}>
                  <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               </TouchableOpacity>
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
                  <TextInput placeholder={'Email..'} style={{borderWidth:1, borderColor: borderEmail, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('setBorderEmail')} value={email} onChangeText={(value)=> setEmail(value)} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Nama..'} style={{borderWidth:1, borderColor: borderName, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('setBorderName')} value={name} onChangeText={(value)=> setName(value)} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Password..'} style={{borderWidth:1, borderColor: borderPassword, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('setBorderPassword')} value={password} onChangeText={(value)=> setPassword(value)} secureTextEntry={true} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TouchableOpacity onPress={()=>submit()}>
                     <Button width={'100%'} height={53} text={'Sign Up'}/>
                  </TouchableOpacity>
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