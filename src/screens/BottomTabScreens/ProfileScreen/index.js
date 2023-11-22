import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Common/Header';
import SettingsCard from '../../../components/Settings';
import Auth from '../../../services/authService';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const profileImage = useSelector(state => state.profileData.profileImage);

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
        <TouchableOpacity onPress={() => navigation.navigate('ProfileImage')}>
          {profileImage === null ? (
            <Icon name="account" size={110} style={styles.profileImage} />
          ) : (
            <Image source={{uri: profileImage}} style={styles.profileImage} />
          )}
        </TouchableOpacity>
        <Text style={styles.nameText}>{userName}</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
        <Text style={styles.subHead}>Account Settings</Text>
        <SettingsCard
          iconName="logout"
          settings="Logout"
          onPress={() => {
            Auth.logOut();
            navigation.navigate('Login');
          }}
        />
        <SettingsCard
          iconName="account"
          settings="Save Profile Details"
          onPress={() => navigation.navigate('ProfileDetails')}
        />
        <SettingsCard
          iconName="account-edit"
          settings="Edit Profile"
          onPress={() => navigation.navigate('ViewProfile')}
        />
        <Text style={styles.subHead}>Orders</Text>
        <SettingsCard
          iconName="package-variant-closed"
          settings="Orders"
          onPress={() => navigation.navigate('Orders')}
        />
        <Text style={styles.subHead}>General</Text>
        <SettingsCard
          iconName="card-bulleted"
          settings="Offers"
          onPress={() => navigation.navigate('Search')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
