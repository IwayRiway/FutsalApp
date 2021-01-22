/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Account from '../page/Account';
import Beranda from '../page/Beranda';
import BookDetail from '../page/BookDetail';
import BookList from '../page/BookList';
import BookNow from '../page/BookNow';
import EditProfile from '../page/EditProfile';
import Field from '../page/Field';
import Food from '../page/Food';
import Help from '../page/Help';
import History from '../page/History';
import Login from '../page/Login';
import OrderDetail from '../page/OrderDetail';
import OrderList from '../page/OrderList';
import PromoAndNews from '../page/PromoAndNews';
import Register from '../page/Register';
import Splashscreen1 from '../page/Splashscreen1';
import Splashscreen2 from '../page/Splashscreen2';
import Splashscreen3 from '../page/Splashscreen3';
import Success from '../page/Success';


const Stack = createStackNavigator();

const Router = () => {
   return (
      <Stack.Navigator>
      <Stack.Screen name="Splashscreen1" component={Splashscreen1} options={{headerShown:false}} />
      <Stack.Screen name="Splashscreen2" component={Splashscreen2} options={{headerShown:false}} />
      <Stack.Screen name="Splashscreen3" component={Splashscreen3} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Beranda" component={Beranda} options={{headerShown:false}} />
      <Stack.Screen name="PromoAndNews" component={PromoAndNews} options={{headerShown:false}} />
      <Stack.Screen name="Field" component={Field} options={{headerShown:false}} />
      <Stack.Screen name="BookNow" component={BookNow} options={{headerShown:false}} />
      <Stack.Screen name="BookList" component={BookList} options={{headerShown:false}} />
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />
      <Stack.Screen name="Food" component={Food} options={{headerShown:false}} />
      <Stack.Screen name="OrderList" component={OrderList} options={{headerShown:false}} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown:false}} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={{headerShown:false}} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}} />
      <Stack.Screen name="Account" component={Account} options={{headerShown:false}} />
      <Stack.Screen name="Help" component={Help} options={{headerShown:false}} />
      <Stack.Screen name="History" component={History} options={{headerShown:false}} />
    </Stack.Navigator>
   )
}

export default Router;
