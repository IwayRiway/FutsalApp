/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

const PlusMinus = () => {
   return (
      <View style={{flex:1, justifyContent:'space-between', flexDirection:'row'}}>
         <View style={{flex:1, justifyContent:'center'}}>
            <Image source={require('../../asset/icon/minus.png')} style={{width:20, height:20}} />
         </View>
         <View style={{flex:1, justifyContent:'center'}}>
            <TextInput editable={false} style={{ height: 30, borderColor: 'black', borderBottomWidth: 1, paddingBottom:0, paddingLeft:10, marginTop:-10 }} />
         </View>
         <View style={{flex:1, justifyContent:'center', marginLeft:7}}>
            <Image source={require('../../asset/icon/add.png')} style={{width:20, height:20}} />
         </View>
      </View>
   )
}

export default PlusMinus;

const styles = StyleSheet.create({})
