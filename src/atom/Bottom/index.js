import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'

const Bottom = () => {
   return (
      <View style={{height: 173}}>
        <ImageBackground source={require('../../asset/footer_splash1.png')} style={{height: 173}}></ImageBackground>
      </View>
   )
}

export default Bottom

const styles = StyleSheet.create({})
