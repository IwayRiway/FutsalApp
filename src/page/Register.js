/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */

import axios from 'axios';
import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Button } from '../atom';
import { base_url } from '../util';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const Register = ({navigation}) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState({
      'srcImg' : require('../asset/logo.png'),
      'uri': '',
      'fileName': '',
   });
   const [border, setBorder] = useState({
      'email' : '#AFAC99',
      'name' : '#AFAC99',
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
         'name' : '#AFAC99',
         'password' : '#AFAC99',
      });
    };

   const goTo = (page) => {navigation.replace(page);};

   const showAlert = (type,text1,text2) => {
      Toast.show({
         text1: text1,
         text2: text2,
         topOffset: 0,
         type : type,
         visibilityTime: 1800,
       });
   };

   const submit = () => {
      // const data = {
      //    name,
      //    email,
      //    password,
      //    file : {uri: image.uri, type: 'image/jpeg', name:image.fileName}
      // };

      setLoading(true);
      // setLoading(false);
      // showAlert('success', 'Sukses', 'Data Berhasil Disimpan');
      // setTimeout(() => {
      //    goTo('Login');
      // }, 2000);

      const data = new FormData();
      data.append('file', {
         uri: image.uri, type: 'image/jpeg', name:image.fileName
       });
      data.append('name', name);
      data.append('email', email);
      data.append('password', password);

      axios.post(base_url + `register`, data)
      .then(result => {
         setLoading(false);
         showAlert('success', 'Sukses', 'Data Berhasil Disimpan');
         setTimeout(() => {
            goTo('Login');
         }, 2000);
         console.log(result);
      })
      .catch(error => {
         setLoading(false);
         showAlert('error', 'Gagal', 'Registrasi Gagal. Silahkan coba lagi');
         console.log(error);
      });
   };

   const choosePicture = () => {
      var ImagePicker = require('react-native-image-picker');
      var options = {
          title: 'Pilih Gambar',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
      };
         ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
               console.log('User cancelled image picker');
            }
            else if (response.error) {
               console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
               console.log('User tapped custom button: ', response.customButton);
            }
            else {
               setImage({
               'srcImg': { uri: response.uri },
               'uri': response.uri,
               'fileName': response.fileName,
               });
            }
         });
      };

   return (
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground style={{flex:1, padding: 24, justifyContent: "space-around"}} source={require('../asset/bg.png')} width="100%" height="100%">
         <ScrollView style={{flex:1, paddingVertical:40, paddingHorizontal:20}} showsVerticalScrollIndicator={false} >
            {/* MODAL */}
            <Modal isVisible={loading} style={{justifyContent:'center', alignItems:'center'}}>
               <View style={{ width: '80%', padding : 20, backgroundColor:'#ffffff', borderRadius:20, justifyContent:'center', alignItems:'center' }}>
                  <ActivityIndicator size="large" color="#83E255" />
                  <Text style={{marginTop:20}}>Please wait..</Text>
               </View>
            </Modal>

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
                  <Image source={image.srcImg} style={{width:90, height:90, borderRadius:100}}/>
               </View>
               <TouchableOpacity style={{position:'absolute', bottom:-15}} onPress={()=>choosePicture()}>
                  <Image source={require('../asset/icon/add.png')} style={{width:30, height:30}}/>
               </TouchableOpacity>
            </View>

            <View style={{flex:1, marginTop:15, alignItems:'center'}}>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Email..'} style={{borderWidth:1, borderColor: border.email, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('email')} value={email} onChangeText={(value)=> setEmail(value)} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Nama..'} style={{borderWidth:1, borderColor: border.name, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('name')} value={name} onChangeText={(value)=> setName(value)} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TextInput placeholder={'Password..'} style={{borderWidth:1, borderColor: border.password, borderRadius:20, paddingHorizontal:20, paddingVertical:18, height:53}} onBlur={() => onBlur()} onFocus={() => onFocus('password')} value={password} onChangeText={(value)=> setPassword(value)} secureTextEntry={true} />
               </View>
               <View style={{marginTop:20, width:219}}>
                  <TouchableOpacity onPress={()=>submit()}>
                     <Button width={'100%'} height={53} text={'Sign Up'}/>
                  </TouchableOpacity>
               </View>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
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