import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from './bottomTabs';
import ProductDetailsScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={BottomTabs}/>
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
