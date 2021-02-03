/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Banner = ({img}) => {

   return (
      <Image source={{uri: img}} style={{width:'100%', height:194, borderRadius:20, borderColor:'white', borderWidth:2}} resizeMode="cover"/>
   )
}

export default Banner;

const styles = StyleSheet.create({})
