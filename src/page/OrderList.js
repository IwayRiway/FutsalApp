/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
   Image, ImageBackground, ScrollView, StyleSheet,
   Text, View, TouchableOpacity,
} from 'react-native';
import Dash from 'react-native-dash';
import { Button } from '../atom';
import { PlusMinus } from '../component';

const OrderList = ({navigation}) => {

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
            <View style={{flexDirection:'row', marginTop:40, paddingHorizontal:20}}>
               <TouchableOpacity onPress={()=>goTo('History')}>
                  <Image source={require('../asset/icon/back.png')} style={{width:30, height:30}}/>
               </TouchableOpacity>
               <View style={{flex:1, justifyContent:'center', marginLeft:15}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Order List</Text>
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
                     <View style={{width:79}}>
                        <Image source={require('../asset/food.png')} style={{borderRadius:20, width:'100%', height:68}} resizeMode="cover"/>
                     </View>
                     <View style={{flex:2, alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Beef Burger</Text>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14,color:'#009555'}}>IDR 25.000</Text>
                        <View style={{flexDirection:'row', marginTop:10, justifyContent:'flex-end', marginRight:-15}}>
                           <View style={{flex:1}}/>
                           <PlusMinus />
                        </View>
                     </View>
                  </View>
                  <View style={{borderTopWidth:1, marginVertical:10}} />

                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
                     <View style={{width:79}}>
                        <Image source={require('../asset/food.png')} style={{borderRadius:20, width:'100%', height:68}} resizeMode="cover"/>
                     </View>
                     <View style={{flex:2, alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Beef Burger</Text>
                        <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14,color:'#009555'}}>IDR 25.000</Text>
                        <View style={{flexDirection:'row', marginTop:10, justifyContent:'flex-end', marginRight:-15}}>
                           <View style={{flex:1}}/>
                           <PlusMinus />
                        </View>
                     </View>
                  </View>
                  <View style={{borderTopWidth:1, marginVertical:10}} />

                  <View style={{flexDirection:'row', flex:1, marginTop:10}}>
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

                  <Dash style={{width:'100%', marginTop:20}} dashGap={5} dashColor={'#AFAC99'} />

                  <Text style={{fontFamily:'Poppins', fontWeight:'normal', fontSize:14, color:'#BC5A40', marginTop:20}}>Please check the Ordering data again. Tickets that have been purchased cannot be refund.</Text>

               </View>

               <View style={{marginVertical:20}}>
                  <TouchableOpacity onPress={()=>goTo('History')}>
                     <Button text={'Pay Now'}/>
                  </TouchableOpacity>
               </View>

            </View>
         </ScrollView>
    </View>
   )
}

export default OrderList;

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
