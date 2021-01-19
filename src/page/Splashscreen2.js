import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { Button } from '../atom'

const Splashscreen2 = () => {
   return (
      <View style={{flex:1}}>

         {/* IMAGE */}
         <View style={{height:383.45}}>
            <Image source={require('../asset/blob_splash2.png')} style={{height:383.45, marginTop:60}}></Image>
         </View>

         {/* Description */}
         <View style={{flex:1, marginTop:55, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>Book Now, Play Later</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15, marginTop:10}}>Cara Mudah</Text>
            <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:15}}>Booking Lapangan Futsal Favarite Kalian</Text>
         </View>

         {/* BUTTON */}
         <View style={{height:53, flexDirection:'row', paddingHorizontal:20, marginBottom:20}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
               <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:24, color:'#AFAC99'}}>Skip</Text>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
               <Button width={129} height={53} text={'Next'}/>
            </View>
         </View>
      </View>
   )
}

export default Splashscreen2

const styles = StyleSheet.create({})
