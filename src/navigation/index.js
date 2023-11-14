import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import NetInfo from '@react-native-community/netinfo';
//Screens
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from './bottomTabs';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileDetails from '../screens/ProfileDetails';
import InternetModal from '../components/InternetModal';
import {
  requestUserPermission,
  notificationListener,
} from '../services/pushNotification';
import {backgroundNotification} from '../utils/bgNotification';

const Stack = createStackNavigator();

const Navigator = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const checkAuth = async () => {
    try {
      const user = auth().currentUser;
      setAuthenticated(user !== null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    checkAuth();
    requestUserPermission();
    notificationListener();
    // backgroundNotification();
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        setModalVisible(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="skyblue" />
      </View>
    );
  }
  if (!isConnected) {
    return (
      <InternetModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // initialRouteName={authenticated ? 'Home' : 'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
