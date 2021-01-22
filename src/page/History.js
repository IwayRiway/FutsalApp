/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */

import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView,ImageBackground, Text, TouchableOpacity} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Navigation, CardHistory } from '../component';

const FirstRoute = ({goTo}) => (
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
         <View style={{paddingHorizontal:20, marginTop:5}}>
          <TouchableOpacity onPress={()=>goTo('BookDetail')}>
              <CardHistory />
          </TouchableOpacity>
        </View>
   </ScrollView>
);

const SecondRoute = (goTo) => (
   <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
   <View style={{paddingHorizontal:20, marginTop:5}}>
    <TouchableOpacity onPress={()=>goTo('BookDetail')}>
        <CardHistory />
      </TouchableOpacity>
  </View>
</ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function History({navigation}) {
  const goTo = (page) => {navigation.replace(page);}
   const goTo2 = (page) => {navigation.navigate(page);}

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'On Process' },
    { key: 'second', title: 'Complete' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute(goTo),
    second: SecondRoute(goTo),
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