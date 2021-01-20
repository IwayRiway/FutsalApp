/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React from 'react';

import { StyleSheet, Image, View, Text } from 'react-native';
import {Button2} from '../../atom'
const CardNews = () => {
   return (
      <View style={styles.card}>
         <Image source={require('../../asset/timnas.png')} style={{width:'100%', height:115, borderTopLeftRadius:20, borderTopRightRadius:20}}/>
         <View style={{ flexDirection:'row', height:32, marginTop:10, paddingHorizontal:10,}}>
            <View style={{flex:1, justifyContent:'center'}}>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, justifyContent:'center'}}>Indonesia vs Uni Emirate Arab</Text>
            </View>
            <View style={{ width: 78}}>
               <Button2 text={'Read More'} />
            </View>
         </View>
      </View>
   )
}

export default CardNews;

const styles = StyleSheet.create({
   card : {
      marginBottom:15,
      width: '100%',
      height:167,
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
})
