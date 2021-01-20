/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   StyleSheet,
   View, ImageBackground, Image, Text, ScrollView,
} from 'react-native';
import { CardHome, Navigation } from '../component';
import { Banner } from '../atom';

const Beranda = () => {
   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:20,}}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
               <View style={{flexDirection:'row', marginTop:28}}>
                  <View style={{flex:1, marginLeft:20}}>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Good Morning,</Text>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>IwayRiway</Text>
                  </View>
                  <View style={styles.borderDash}>
                     <Image source={require('../asset/logo.png')} style={{height: 60, width:60}}/>
                  </View>
               </View>
            </ImageBackground>
            <View style={{ paddingHorizontal:20}}>
               <View style={{ marginTop:-30}}>
                  <Banner />
               </View>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Futsal Field</Text>
                  <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:20}} horizontal showsHorizontalScrollIndicator={false}>
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
               </ScrollView>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Food & Beverages</Text>
                  <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:20}} horizontal showsHorizontalScrollIndicator={false}>
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
                  <CardHome />
               </ScrollView>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20}}>What happen..?</Text>
            </View>
         </ScrollView>

         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
    </View>
   )
}

export default Beranda;

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
