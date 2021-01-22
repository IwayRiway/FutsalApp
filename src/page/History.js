/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView,ImageBackground, Text} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Navigation, CardHistory } from '../component';

const FirstRoute = () => (
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
         <View style={{paddingHorizontal:20, marginTop:5}}>
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
        </View>
   </ScrollView>
);

const SecondRoute = () => (
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
   <View style={{paddingHorizontal:20, marginTop:5}}>
      <CardHistory />
  </View>
</ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function History() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'On Process' },
    { key: 'second', title: 'Complete' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
   <View style={{flex:1}} >
         <ImageBackground style={{height:155, width:"100%"}} source={require('../asset/top.png')}>
            <Text style={{fontFamily:'Poppins', fontWeight:'bold', fontSize:24, marginLeft:20, marginTop:40}}>History Transaction</Text>
         </ImageBackground>
         <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{marginTop:-70}}
         />
         {/* NAVIGATION */}
         <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Navigation />
         </View>
   </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});