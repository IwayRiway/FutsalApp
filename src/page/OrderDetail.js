/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   Image, ImageBackground, ScrollView, StyleSheet,
   Text, View
} from 'react-native';
import Dash from 'react-native-dash';

const OrderDetail = () => {
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
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Order ID</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: FB-2097768</Text>
                     </View>
                  </View>

                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Order Date</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: 14 January 2021</Text>
                     </View>
                  </View>

                  <Dash style={{width:'100%', marginVertical:20}} dashGap={5} dashColor={'#AFAC99'} />
                  <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Items :</Text>

                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>- Burger Beef (IDR 25.000)</Text>
                     </View>
                     <View style={{flex:1, alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>1</Text>
                     </View>
                  </View>

                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>- Coca - Cola (IDR 10.000)</Text>
                     </View>
                     <View style={{flex:1, alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>1</Text>
                     </View>
                  </View>

                  <Dash style={{width:'100%', marginVertical:20}} dashGap={5} dashColor={'#AFAC99'} />

                  <View style={{flexDirection:'row', flex:1, marginTop:0}}>
                     <View style={{flex:1}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14}}>Total Items</Text>
                     </View>
                     <View style={{flex:2}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>: 2 items</Text>
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

                  <Dash style={{width:'100%', marginVertical:20}} dashGap={5} dashColor={'#AFAC99'} />

                  <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
                     <View style={{flex:1, justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, color:'#BC5A40', paddingRight:10}}>Please check the booking data again. Tickets that have been purchased cannot be refund.</Text>
                     </View>
                     <View style={{width:50}}>
                        <Image source={require('../asset/icon/qr_code.png')} style={{width:50, height:50}} />
                     </View>
                  </View>

               </View>
            </View>
         </ScrollView>
    </View>
   )
}

export default OrderDetail;

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
