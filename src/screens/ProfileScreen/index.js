import {View, Text, SafeAreaView, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import SettingsCard from '../../components/Settings';
import Auth from '../../services/firebaseAuth';
import {Images} from '../../constants/images';
import {styles} from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(()=>{
    const currentUser = Auth.getCurrentUser();
    if (currentUser) {
      setUserName(currentUser.displayName);
      setUserEmail(currentUser.email);
    }
  },[]);

  const handleLogOut = () => {
    Auth.logOut();
    navigation.navigate('Login');
  };
  const handleOrders = () => {
    navigation.navigate('Orders');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Profile" />
        <Image source={Images.profile} style={styles.profileImage}></Image>
        <Text style={styles.nameText}>{userName}</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
        <Text style={styles.subHead}>Account Settings</Text>
        <SettingsCard
          iconName="log-out"
          settings="Logout"
          onPress={handleLogOut}
        />
        <Text style={styles.subHead}>Orders</Text>
        <SettingsCard
          iconName="location-sharp"
          settings="Orders"
          onPress={handleOrders}
        />
        <Text style={styles.subHead}>General</Text>
        <SettingsCard iconName="card" settings="Offers" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
