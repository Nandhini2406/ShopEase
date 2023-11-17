import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/Common/Header';

const ViewProfileDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile Details" onPress={() => navigation.goBack()} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default ViewProfileDetails;
