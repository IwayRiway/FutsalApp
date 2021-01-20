/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Backdrop} from '../component';
import {Book, Button2} from '../atom';

const BookNow = () => {
   return (
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
         <View style={{height:243, width:'100%', position:'relative'}}>
            <Backdrop />
            <Image source={require('../asset/icon/back.png')} style={{width:30, height:30, position:'absolute', top:40, left:20}}/>
         </View>
         <View style={{flex:1, paddingHorizontal:20, paddingVertical:20}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>Lapangan Syntetic C</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'400', fontSize:14, color:'#009555'}}>IDR 75.000 / hour</Text>

            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20}}>Select Date</Text>
            <ScrollView style={{ flexDirection:'row', marginTop:10}} horizontal showsHorizontalScrollIndicator={false}>
               <Book text={'14 / 01'}/>
               <Book text={'15 / 01'}/>
               <Book text={'16 / 01'}/>
               <Book text={'17 / 01'}/>
               <Book text={'18 / 01'}/>
               <Book text={'19 / 01'}/>
               <Book text={'20 / 01'}/>
            </ScrollView>

            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20}}>Select Hour</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
               <View style={{flex:1, justifyContent:'space-between'}}>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                     <Book text={'09 - 10'}/>
                     <Book text={'10 - 11'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'13 - 14'}/>
                     <Book text={'14 - 15'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'17 - 18'}/>
                     <Book text={'18 - 19'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'21 - 22'}/>
                     <Book text={'22 - 23'}/>
                  </View>
               </View>
               <View style={{borderWidth:1, borderColor:'#AFAC99', marginLeft:5, marginRight:10}}/>
               <View style={{flex:1, justifyContent:'space-between'}}>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                     <Book text={'11 - 12'}/>
                     <Book text={'12 - 13'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'15 - 16'}/>
                     <Book text={'16 - 17'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'19 - 20'}/>
                     <Book text={'20 - 21'}/>
                  </View>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                     <Book text={'23 - 24'}/>
                  </View>
               </View>
            </View>

            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20}}>Total Transaction</Text>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:10, height:32}}>
               <View style={{justifyContent:'center', flex:1}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18, color:'#009555'}}>IDR 150.000 / 2 hour</Text>
               </View>
               <View>
                  <Button2 text={'Book Now'}/>
               </View>
            </View>

         </View>
      </ScrollView>
   )
}

export default BookNow;

const styles = StyleSheet.create({})
