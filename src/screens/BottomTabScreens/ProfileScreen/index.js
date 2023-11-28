import {Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../../constants/images';
import SettingsCard from '../../../components/Settings';
import Auth from '../../../services/authService';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import MainContainer from '../../../components/Common/MainContainer';
import StyledText from '../../../components/Common/StyledText';

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
    <MainContainer
      title="Profile"
      onPress={() => navigation.goBack()}
      style={{padding: '3%'}}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileImage')}>
        {profileImage === null ? (
          <Image source={Images.profile} style={styles.profileImage} />
        ) : (
          <Image source={{uri: profileImage}} style={styles.profileImage} />
        )}
      </TouchableOpacity>
      <StyledText style={styles.nameText}>{userName}</StyledText>
      <StyledText style={styles.emailText}>{userEmail}</StyledText>
      <StyledText style={styles.subHead}>Account Settings</StyledText>
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
      <StyledText style={styles.subHead}>Orders</StyledText>
      <SettingsCard
        iconName="package-variant-closed"
        settings="Orders"
        onPress={() => navigation.navigate('Orders')}
      />
      <StyledText style={styles.subHead}>General</StyledText>
      <SettingsCard
        iconName="card-bulleted"
        settings="Offers"
        onPress={() => navigation.navigate('Search')}
      />
    </MainContainer>
  );
};

export default ProfileScreen;
