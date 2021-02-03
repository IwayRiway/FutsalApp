/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import axios from 'axios';
import React, { useState} from 'react';
import { ActivityIndicator, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import { Button } from '../atom';
import { base_url, storeDataJson} from '../util';

const Login = ({navigation}) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [border, setBorder] = useState({
      'email' : '#AFAC99',
      'password' : '#AFAC99',
   });

   const onFocus = (type) => {
      setBorder({
         ...border,
         [type] : 'black',
      });
    // eslint-disable-next-line semi
    };

    const onBlur = ()  => {
      setBorder({
         'email' : '#AFAC99',
         'password' : '#AFAC99',
      });
    };

    const showAlert = (type,text1,text2) => {
      Toast.show({
         text1: text1,
         text2: text2,
         topOffset: 0,
         type : type,
         visibilityTime: 1800,
       });
   };

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

   const submit = () => {
      const data = {
         email,
         password,
      };

      setLoading(true);
      axios.post(base_url + `login`, data)
      .then(result => {
         setLoading(false);
         if (result.data.code == 200){
            showAlert('success', 'Sukses', 'Behasil Login');
            const storeData = storeDataJson('@user', result.data.result);
            if (storeData){
               setTimeout(() => {
                  goTo('Beranda');
               }, 3000);
            }
         } else {
            showAlert('error', 'Gagal', result.data.status);
         }
         // console.log(result.data);
      })
      .catch(error => {
         setLoading(false);
         showAlert('error', 'Gagal', 'Email atau password anda salah..');
         console.log(error);
      });
   };

   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, padding: 24, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}} showsVerticalScrollIndicator={false}>
            {/* MODAL */}
            <Modal isVisible={loading} style={{justifyContent:'center', alignItems:'center'}}>
               <View style={{ width: '80%', padding : 20, backgroundColor:'#ffffff', borderRadius:20, justifyContent:'center', alignItems:'center' }}>
                  <ActivityIndicator size="large" color="#83E255" />
                  <Text style={{marginTop:20}}>Checking..</Text>
               </View>
            </Modal>

            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:31}}>Login</Text>
            <View style={{height:90, alignItems:'center', marginTop:20}}>
               <Image source={require('../asset/logo.png')} style={{width:90, height:90}}/>
            </View>
            <View style={{flex:1, marginTop:56, alignItems:'center'}}>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Email..'} style={{borderWidth:1, borderColor: border.email, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('email')} value={email} onChangeText={(value)=> setEmail(value)} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Password..'} style={{borderWidth:1, borderColor: border.password, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('password')} value={password} onChangeText={(value)=> setPassword(value)} secureTextEntry={true} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TouchableOpacity onPress={()=>submit()}>
                     <Button width={'100%'} height={53} text={'Sign In'}/>
                  </TouchableOpacity>
               </View>
            </View>
            <View style={{flex:1, marginTop:20, alignItems:'center'}}>
               <TouchableOpacity onPress={()=>goTo2('Register')}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Dont have account? <Text style={{color:"#62BAAC"}}>Create here..</Text></Text>
               </TouchableOpacity>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
         </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
   );
};

export default Login;

const styles = StyleSheet.create({
});
