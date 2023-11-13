import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Common/Header';
import SettingsCard from '../../components/Settings';
import Auth from '../../firebase/authService';
import {Images} from '../../constants/images';
import {styles} from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const currentUser = Auth.getCurrentUser();
    if (currentUser) {
      setUserName(currentUser.displayName);
      setUserEmail(currentUser.email);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Image source={Images.profile} style={styles.profileImage}></Image>
        <Text style={styles.nameText}>{userName}</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
        <Text style={styles.subHead}>Account Settings</Text>
        <SettingsCard
          iconName="log-out"
          settings="Logout"
          onPress={() => {
            Auth.logOut();
            navigation.navigate('Login');
          }}
        />
        <SettingsCard
          iconName="list"
          settings="Additional Details"
          onPress={() => navigation.navigate('ProfileDetails')}
        />
        <Text style={styles.subHead}>Orders</Text>
        <SettingsCard
          iconName="location-sharp"
          settings="Orders"
          onPress={() => navigation.navigate('Orders')}
        />
        <Text style={styles.subHead}>General</Text>
        <SettingsCard
          iconName="card"
          settings="Offers"
          onPress={() => navigation.navigate('ProductDetails')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
