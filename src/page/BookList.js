/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   ImageBackground, ScrollView, StyleSheet,
   Text, View, Image
} from 'react-native';
import Dash from 'react-native-dash';
import { Button } from '../atom';
import { CardField, Navigation } from '../component';

const BookList = () => {
   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
            <View style={{flexDirection:'row', marginTop:40, paddingHorizontal:20}}>
               <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               <View style={{flex:1, justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Book List</Text>
               </View>
            </View>
            </ImageBackground>
            <View style={{paddingHorizontal:20, marginTop:-40}}>
               <View style={styles.card}>
                  <View style={{flexDirection:'row', flex:1}}>
                     <View style={{flex:1, justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>Lapangan Syntetic C</Text>
                        <Text style={{fontFamily:'Poppins', fontWeight:'400', fontSize:14, color:'#009555'}}>IDR 75.000 / hour</Text>
                     </View>
                     <View style={{width:120}}>
                        <Image source={require('../asset/field.png')} style={{borderRadius:20, width:'100%', height:98}} resizeMode="cover"/>
                     </View>
                  </View>

                  <Dash style={{width:'100%', marginTop:20}} dashGap={5} dashColor={'#AFAC99'} />

                  <View style={{flexDirection:'row', flex:1, marginTop:20}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Book ID</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: FT-2097768</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Book Date</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: 14 January 2021</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Book Hour</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: 15 - 16 || 16 - 17</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Total Hour</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: 2 hours</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Total Price</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: <Text style={{color:'#009555'}}>IDR 150.000</Text></Text>
                     </View>
                  </View>

                  <Dash style={{width:'100%', marginTop:20}} dashGap={5} dashColor={'#AFAC99'} />

                  <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, color:'#BC5A40', marginTop:20}}>Please check the booking data again. Tickets that have been purchased cannot be refund.</Text>

               </View>

               <View style={{marginTop:20}}>
                  <Button text={'Pay Now'}/>
               </View>

            </View>
         </ScrollView>
    </View>
   )
}

export default BookList;

const styles = StyleSheet.create({
    card : {
      marginBottom:15,
      // height:98,
      padding:20,
      width: '100%',
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
