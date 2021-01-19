/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   Image, StyleSheet,
   Text, View
} from 'react-native';
import { Bottom, TopHeader } from '../atom';

const Splashscreen1 = () => {
   return (
      <View style={{flex:1}}>
      {/* TOP */}
      <TopHeader/>

      {/* MAIN */}
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <View style={styles.borderDash}>
          <Image source={require('../asset/logo.png')} style={{height: 90, width:90}}/>
        </View>
          <Text style={{marginTop:15, fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Futsal-e</Text>
      </View>

      {/* BOTTOM */}
      <Bottom/>
    </View>
   )
}

export default Splashscreen1

const styles = StyleSheet.create({
   borderDash : {
      width : 100,
      height : 100,
      borderWidth : 2,
      borderRadius : 100,
      borderColor : '#000000',
      borderStyle: 'dashed',
      justifyContent: 'center',
    },
})
