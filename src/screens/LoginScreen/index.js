import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../assets/Images';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
    console.log('LoginPressed...');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.Login} style={styles.img}></Image>
        <Text style={styles.title}>Enter your Credentials</Text>
        <CustomInput placeholder="Email ID" />
        <CustomInput placeholder="Password" />
        <View style={styles.ButtonContainer}>
          <CustomButton text="Login" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
