/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
   Image, ImageBackground, ScrollView, StyleSheet,
   Text, TouchableOpacity, View
} from 'react-native';
import { Banner } from '../atom';
import { CardHome, CardNews, Navigation } from '../component';
import { img_url, base_url } from '../util';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const Beranda = ({navigation}) => {
   const [user, setUser] = useState({
      'email' : '',
      'name' : '',
      'image' : img_url + 'Group 3rri.png',
   });
   const [index, setIndex] = useState(0)
   const [carouselItems, setCarouselItems] = useState([{
      title:"Item 1",
      text: "Text 1",
  },
  {
      title:"Item 2",
      text: "Text 2",
  },
  {
      title:"Item 3",
      text: "Text 3",
  },
  {
      title:"Item 4",
      text: "Text 4",
  },
  {
      title:"Item 5",
      text: "Text 5",
  },])

//   const [activeIndex, setActivateIndex] = useState(0);
//   const [carouselState, setCarouselState] = useState([
//         {
//           title: 'Item 1',
//           text: 'Text 1',
//         },
//         {
//           title: 'Item 2',
//           text: 'Text 2',
//         },
//         {
//           title: 'Item 3',
//           text: 'Text 3',
//         },
//         {
//           title: 'Item 4',
//           text: 'Text 4',
//         },
//         {
//           title: 'Item 5',
//           text: 'Text 5',
//         },
//       ],
//     );

   //  const _onPressCarousel = (index) => {
   //    // here handle carousel press
   //    this.carouselRef.current.snapToItem(index);
   //  };

   //  const _renderItem = ({ item, index }) => {
   //    return (
   //      <TouchableOpacity
   //        onPress={() => {
   //          this._onPressCarousel(index);
   //        }}
   //        style={{
   //          backgroundColor: 'white',
   //          borderRadius: 20,
   //          height: 300,
   //          padding: 50,
   //        }}>
   //        <Text style={{ fontSize: 30 }}>{item.title}</Text>
   //        <Text>{item.text}</Text>
   //      </TouchableOpacity>
   //    );
   //  };

   useEffect(() => {
     getData('@user');
   //   promo();
   });

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

   // const promo = () => {
   //    axios.get(base_url + 'promo')
   //    .then(result =>
   //       // setCarouselItems(result.result)
   //       console.log(result.result)
   //    )
   // }

   const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

   const _renderItem = ({item,index}) => {
      return (
         <Banner />
      )
  };

   return (
    <View style={{flex:1}} >
         <ScrollView style={{flex:1, marginBottom:0}} showsVerticalScrollIndicator={false}>
            <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
               <View style={{flexDirection:'row', marginTop:28}}>
                  <View style={{flex:1, marginLeft:20}}>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24}}>Good Morning,</Text>
                     <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:18}}>{user.name}</Text>
                  </View>
                  <View style={styles.borderDash}>
                     {/* <Image source={require('../asset/logo.png')} style={{height: 60, width:60}}/> */}
                     <Image source={{uri : user.image}} style={{height: 60, width:60, borderRadius:100}}/>
                  </View>
               </View>
            </ImageBackground>
            <View style={{ paddingHorizontal:0}}>
               <View style={{ marginTop:-30}}>
                  {/* <Carousel
                     layout={'default'}
                     ref={this.carouselRef}
                     data={carouselState}
                     sliderWidth={300}
                     itemWidth={300}
                     renderItem={_renderItem}
                     useScrollView
                     onSnapToItem={(index) => setActivateIndex(index)}
                     activeSlideAlignment="center"
                  /> */}
                  <Carousel
                     autoplay={true}
                     loop={true}
                     layout={'default'}
                     ref={ref => carousel = ref}
                     data={carouselItems}
                     sliderWidth={350}
                     itemWidth={250}
                     renderItem={_renderItem}
                     onSnapToItem = { index => setIndex(index) } />
                  {/* <TouchableOpacity onPress={()=>goTo2('PromoAndNews')}>
                     <Banner />
                  </TouchableOpacity> */}
               </View>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Futsal Field</Text>
                  <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
                  </TouchableOpacity>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:10}} horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={()=>goTo2('Field')}>
                     <CardHome />
                  </TouchableOpacity>
               </ScrollView>
               <View style={{ flexDirection:'row', justifyContent:'space-between', height:24, marginTop:20}}>
                  <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14}}>Food & Beverages</Text>
                  <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <Image source={require('../asset/icon/show_all.png')} style={{width:24, height:24}}/>
                  </TouchableOpacity>
               </View>
               <ScrollView style={{ flexDirection:'row', marginTop:10}} horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={()=>goTo2('Food')}>
                     <CardHome />
                  </TouchableOpacity>
               </ScrollView>
               <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:14, marginTop:20, marginBottom:10}}>What happen..?</Text>
               <TouchableOpacity onPress={()=>goTo2('PromoAndNews')}>
                  <CardNews/>
               </TouchableOpacity>
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
      marginRight:20
    },
})
