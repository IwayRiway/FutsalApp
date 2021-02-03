/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
   Image, ImageBackground, ScrollView, StyleSheet,
   Text, TouchableOpacity, View,
} from 'react-native';
import { Banner } from '../atom';
import { CardHome, CardNews, Navigation } from '../component';
import { img_url, base_url, news_url, news_apikey } from '../util';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const Beranda = ({navigation}) => {
   const [user, setUser] = useState({
      'email' : '',
      'name' : '',
      'image' : img_url + 'Group 3rri.png',
   });
   const [activeIndex, setActivateIndex] = useState(0)
   const [carouselItems, setCarouselItems] = useState([])
   const [fields, setFields] = useState([])
   const [foods, setFoods] = useState([])
   const [newses, setNewses] = useState([])

   useEffect(() => {
     getData('@user');
     promo();
     field();
     food();
     news();
   }, []);

   const getData = async (key) => {
      try {
         const value = await AsyncStorage.getItem(key);
         const jsonValue = JSON.parse(value);
         setUser({
            'email' : jsonValue.email,
            'name' : jsonValue.name,
            'image' : img_url + jsonValue.photo,
         });
      } catch (e) {
        alert(e);
      }
    };

   const promo = () => {
      axios.get(base_url + 'promo')
      .then(res => {
         setCarouselItems(res.data.result);
      });
   }

   const field = () => {
      axios.get(base_url + 'field')
      .then(res => {
         setFields(res.data.result);
      });
   }

   const food = () => {
      axios.get(base_url + 'food')
      .then(res => {
         setFoods(res.data.result);
      });
   }

   const news = () => {
      axios.get(news_url, {
         params:{
            country : 'id',
            category : 'sports',
            pageSize : 5,
            apiKey : news_apikey,
         },
      })
      .then(res => {
         setNewses(res.data.articles);
      });
   }

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

   const _renderItem = ({item,index}) => {
      return (
         <Banner img={img_url + item.photo} />
      )
  };

   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:'100%'}} source={require('../asset/top.png')}>
               <View style={{flexDirection:'row', marginTop:28}}>
                  <View style={{flex:1, marginLeft:20}}>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Good Morning,</Text>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>{user.name}</Text>
                  </View>
                  <View style={styles.borderDash}>
                     <Image source={{uri : user.image}} style={{height: 60, width:60, borderRadius:100}}/>
                  </View>
               </View>
            </ImageBackground>
            <View style={{ paddingHorizontal:0}}>
               <View style={{ marginTop:-30}}>
                  <Carousel
                     autoplay={true}
                     loop={true}
                     layout={'default'}
                     ref={ref => carousel = ref}
                     data={carouselItems}
                     sliderWidth={350}
                     itemWidth={250}
                     renderItem={_renderItem}
                     onSnapToItem = { index => setActivateIndex(index) } />
                  {/* <TouchableOpacity onPress={()=>goTo2('PromoAndNews')}>
                     <Banner />
                  </TouchableOpacity> */}
               </View>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20, paddingHorizontal:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Futsal Field</Text>
                  <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
                  </TouchableOpacity>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:10, paddingHorizontal:20, marginRight:20}} horizontal showsHorizontalScrollIndicator={false}>
                  {/* <TouchableOpacity onPress={()=>goTo2('Field')}>
                     <CardHome />
                  </TouchableOpacity> */}
                  {fields.map(item => {
                     return <CardHome key={item.id} img={img_url + item.photo} name={item.name} type={0} price={'0'}/>
                  })}
               </ScrollView>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20, paddingHorizontal:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Food & Beverages</Text>
                  <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
                  </TouchableOpacity>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:10, paddingHorizontal:20, marginRight:20}} horizontal showsHorizontalScrollIndicator={false}>
                  {/* <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <CardHome />
                  </TouchableOpacity> */}
                  {foods.map(item => {
                     return <CardHome key={item.id} img={img_url + item.photo} name={item.name} type={1} price={item.price}/>
                  })}
               </ScrollView>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20, marginBottom:10, paddingHorizontal:20}}>What happen..?</Text>
               {/* <TouchableOpacity onPress={()=>goTo2('PromoAndNews')}>
                  <CardNews/>
               </TouchableOpacity> */}
               {newses.map((item, i) => {
                     return <View style={{paddingHorizontal:20}}>
                        <CardNews key={i} img={item.urlToImage} name={item.title} />
                     </View>
                  })}
            </View>
         </ScrollView>

         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
    </View>
   )
}

export default Beranda;

const styles = StyleSheet.create({
   borderDash : {
      width : 70,
      height : 70,
      borderWidth : 2,
      borderRadius : 100,
      borderColor : '#000000',
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems:'center',
      marginRight:20,
    },
})
