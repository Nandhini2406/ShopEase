import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import Header from '../../components/Common/Header';

const ViewProfileDetails = ({navigation}) => {
  const profileData = useSelector(state => state.profileData);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile Details"
        onPress={() => navigation.goBack()}
        rightButtonIcon="pencil"
        onRightButtonPress={() => navigation.navigate('EditProfile')}
      />
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text style={styles.heading}>
            Full Name: {profileData.fullName} {profileData.lastName}
          </Text>
          <Text style={styles.heading}>
            Mobile Number: {profileData.mobileNumber}
          </Text>
          <Text style={styles.heading}>Address: {profileData.address}</Text>
          <Text style={styles.heading}>Gender: {profileData.gender}</Text>
          <Text style={styles.heading}>
            Date of Birth: {profileData.dateOfBirth}
          </Text>
          {profileData.pdfDocument && (
            <Text style={styles.heading}>
              PDF Document: {profileData.pdfDocument[0]?.name}
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewProfileDetails;
