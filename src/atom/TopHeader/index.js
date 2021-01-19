import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native'

const TopHeader = () => {
   return (
      <View style={{height: 113}}>
        <ImageBackground source={require('../../asset/header_splash1.png')} style={{height: 113}}></ImageBackground>
      </View>
   )
}

export default TopHeader

const styles = StyleSheet.create({})
