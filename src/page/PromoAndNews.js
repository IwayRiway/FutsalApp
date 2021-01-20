/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Backdrop} from '../component';

const PromoAndNews = () => {
   return (
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
         <View style={{height:243, width:'100%', position:'relative'}}>
            <Backdrop />
            <Image source={require('../asset/icon/back.png')} style={{width:30, height:30, position:'absolute', top:40, left:20}}/>
         </View>
         <View style={{flex:1, paddingHorizontal:20, paddingVertical:20}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>FC Barcelona vs Real Madrid CF</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'400', fontSize:14, color:'#AFAC99'}}>14 Januari 2021</Text>

            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, marginTop:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat porttitor pretium. Sed convallis magna in ante cursus placerat. Quisque mauris ligula, rutrum a placerat quis, pulvinar id arcu. Aenean feugiat sit amet urna at efficitur. Ut id tortor tempor, vulputate neque sit amet, ornare lorem. Duis commodo sem placerat, gravida arcu ut, venenatis dolor. Etiam posuere commodo odio, nec porttitor nunc pharetra nec. Mauris nec dolor ut felis commodo tincidunt. Quisque sollicitudin, arcu vitae ornare mattis, orci risus dictum sapien, non fermentum velit arcu eget leo. Nullam sollicitudin fermentum augue, vel ornare libero faucibus a. Suspendisse potenti. Integer a congue dui, vitae ultrices dui.tempor, vulputate neque sit amet, ornare lorem. Duis commodo sem placerat, gravida arcu ut, venenatis dolor. Etiam posuere commodo odio, nec porttitor nunc pharetra nec. Mauris nec dolor ut felis commodo tincidunt. Quisque sollicitudin, arcu vitae ornare mattis, orci risus dictum sapien, non fermentum velit arcu eget leo. Nullam sollicitudin fermentum augue, vel ornare libero faucibus a. Suspendisse potenti. Integer a congue dui, vitae ultrices dui.
            </Text>
         </View>
      </ScrollView>
   )
}

export default PromoAndNews;

const styles = StyleSheet.create({})
