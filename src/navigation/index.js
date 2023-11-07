import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from './bottomTabs';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Signup' component={SignUpScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={BottomTabs}/>
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
