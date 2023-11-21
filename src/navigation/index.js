import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import NetInfo from '@react-native-community/netinfo';
import PushNotification from 'react-native-push-notification';
//Screens
import SignUpScreen from '../screens/OnboardingScreens/SignUpScreen';
import LoginScreen from '../screens/OnboardingScreens/LoginScreen';
import BottomTabs from './bottomTabs';
import ProductDetailsScreen from '../screens/ProductDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileDetailsScreen from '../screens/OnboardingScreens/ProfileDetailsScreen';
import ViewProfileDetails from '../screens/ViewProfileDetails';
import EditProfileDetails from '../screens/EditProfileDetails';

import InternetModal from '../components/InternetModal';
import {
  requestUserPermission,
  notificationListener,
} from '../services/pushNotification';

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

  // PushNotification.configure({
  //   onNotification: function (notification) {
  //     console.log('NOTIFICATION:', notification);
  //   },
  //   popInitialNotification: false,
  //   requestPermissions: Platform.OS === 'ios',
  // });
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'default',
      channelName: 'Default',
      playSound: false,
    });
  };

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    checkAuth();
    requestUserPermission();
    notificationListener();
    createChannel();
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!authenticated && !state.isConnected) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [authenticated]);

  const handleNavigationStateChange = state => {
    // Display the modal when not authenticated and on the Login or Signup screen
    if (
      !authenticated &&
      ['Login', 'Signup'].includes(state.routes[state.index].name)
    ) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="skyblue" />
      </View>
    );
  }

  return (
    <NavigationContainer onNavigationStateChange={handleNavigationStateChange}>
      <Stack.Navigator
        initialRouteName={authenticated ? 'Home' : 'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="ViewProfile" component={ViewProfileDetails} />
        <Stack.Screen name="EditProfile" component={EditProfileDetails} />
      </Stack.Navigator>
      {isModalVisible && (
        <InternetModal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
      {!isConnected && authenticated && (
        // Toast message for no internet connection after authentication
        <ToastAndroid message="You are offline" />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
