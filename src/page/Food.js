/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   ImageBackground, ScrollView, StyleSheet,
   Text, View, Image,
} from 'react-native';
import { CardFood, Navigation } from '../component';

const Food = () => {
   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24, marginLeft:20, marginTop:40}}>Food And Beverages</Text>
            </ImageBackground>
            
            <View style={{flex:1, paddingHorizontal:20}}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:-50, marginBottom:10}}>Foods</Text>
               <CardFood />
            </View>

            <View style={{flex:1, paddingHorizontal:20, marginBottom:60}}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20, marginBottom:10}}>Beverages</Text>
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
               <CardFood />
            </View>
         </ScrollView>

         <View style={styles.btnNext}>
            <Image source={require('../asset/icon/buy.png')} style={{width:40, height:40}}/>
         </View>

         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
    </View>
   )
}

export default Food;

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
    btnNext : {
       width:53,
       height:53,
       position:'absolute',
       bottom:80,
       right:20,
       borderRadius:100,
       backgroundColor:'#FAF800',
       shadowColor: "#000",
      shadowOffset: {
         width: 8,
         height: 24,
      },
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 8,
      alignItems:'center',
      justifyContent:'center',
    },
})
