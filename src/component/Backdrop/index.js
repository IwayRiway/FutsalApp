/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Backdrop = () => {
   return (
      <View>
         <Image source={require('../../asset/fcb.png')} style={{width:'100%', height:'100%', position:'relative', borderBottomLeftRadius:20, borderBottomRightRadius:20}} resizeMode="cover"/>
         <Image source={require('../../asset/linear_bg.png')} style={{width:'100%', height:'100%', position:'absolute', top:0, borderBottomLeftRadius:20, borderBottomRightRadius:20}} resizeMode="cover"/>
      </View>
   )
}

export default Backdrop;

const styles = StyleSheet.create({})
