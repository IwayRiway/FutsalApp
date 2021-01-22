/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   ImageBackground, ScrollView, StyleSheet,
   Text, View, Image,
} from 'react-native';
import Dash from 'react-native-dash';
import { Navigation } from '../component';

const Account = () => {
   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24, marginLeft:20, marginTop:40}}>My Account</Text>
            </ImageBackground>

            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
               <View style={styles.borderDash}>
                  <Image source={require('../asset/logo.png')} style={{width:90, height:90}}/>
               </View>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18, marginTop:10}}>IwayRiway</Text>
               <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, marginTop:0}}>riway.restu@gmail.com</Text>
            </View>

            <View style={{paddingHorizontal:20, marginTop:20}}>
               <View style={styles.card}>
                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:2, flexDirection:'row'}}>
                        <Image source={require('../asset/icon/edit.png')} style={{width:16, height:16, marginRight:10}}/>
                        <View style={{justifyContent:'center'}}>
                           <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Edit Profile</Text>
                        </View>
                     </View>
                     <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
                     <Image source={require('../asset/icon/right.png')} style={{width:16, height:16}}/>
                     </View>
                  </View>
                  <Dash style={{width:'100%', marginVertical:10}} dashGap={5} dashColor={'#000000'} />

                  <View style={{flexDirection:'row', flex:1}}>
                     <View style={{flex:2, flexDirection:'row'}}>
                        <Image source={require('../asset/icon/help.png')} style={{width:16, height:16, marginRight:10}}/>
                        <View style={{justifyContent:'center'}}>
                           <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Help</Text>
                        </View>
                     </View>
                     <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
                     <Image source={require('../asset/icon/right.png')} style={{width:16, height:16}}/>
                     </View>
                  </View>
                  <Dash style={{width:'100%', marginVertical:10}} dashGap={5} dashColor={'#000000'} />

                  <View style={{flexDirection:'row', flex:1}}>
                     <View style={{flex:2, flexDirection:'row'}}>
                        <Image source={require('../asset/icon/rate.png')} style={{width:16, height:16, marginRight:10}}/>
                        <View style={{justifyContent:'center'}}>
                           <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Rate this app</Text>
                        </View>
                     </View>
                     <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
                     <Image source={require('../asset/icon/right.png')} style={{width:16, height:16}}/>
                     </View>
                  </View>
                  <Dash style={{width:'100%', marginVertical:10}} dashGap={5} dashColor={'#000000'} />

                  <View style={{flex:1, marginVertical:10}}>
                     <View style={{width:'100%', height:53, borderRadius:20, backgroundColor:'#F98F71', alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
                     <Image source={require('../asset/icon/signout.png')} style={{width:27, height:27, marginRight:5}}/>
                        <Text style={styles.textStyle}>Sign Out</Text>
                     </View>
                  </View>

               </View>
            </View>
         </ScrollView>

         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
    </View>
   )
}

export default Account;

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
      marginTop:-50,
    },
    card : {
      marginBottom:15,
      // height:98,
      padding:20,
      width: '100%',
      borderRadius:20,
      backgroundColor: '#FFFFFF',
      shadowColor: "#000",
      shadowOffset: {
         width: 8,
         height: 24,
      },
      shadowOpacity: 0.14,
      shadowRadius: 20,
      elevation: 8,
   },
   textStyle : {
      fontFamily:'Poppins',
      fontWeight:'bold',
      fontSize:24,
      paddingVertical:13,
      color:'#ffffff',
   },
})
