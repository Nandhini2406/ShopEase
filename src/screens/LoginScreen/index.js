import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../../constants/images';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState('');

  const validateUserName = () => {
    // userName regex pattern
    const userNamePattern = /^[a-zA-Z0-9._%+-]/;
    if (!userNamePattern.test(userName)) {
      setUserNameError('Invalid userName address*');
    } else {
      setUserNameError(null);
    }
  };

  const validatePassword = () => {
    // Password regex pattern
    const passwordPattern = /.{6,}/;
    if (!passwordPattern.test(password)) {
      setError('Password must contain at least 6 characters');
    } else {
      setPasswordError(null);
    }
  };

  const handleLogin = () => {
    if (!userName || !password) {
      setError('Please fill in all fields.');
      return;
    } else {
      navigation.navigate('Home');
      console.log('LoginPressed...');
    }
  };

  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image source={Images.appLogo} style={styles.img}/>
        <Text style={styles.imgText}>SHOPEASE</Text>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME BACK!</Text>
          <CustomInput
            placeholder="User Name"
            setvalue={text => setUserName(text)}
            value={userName}
            onBlur={validateUserName}
          />
          {userNameError && <Text style={styles.errorMsg}>{userNameError}</Text>}
          <CustomInput
            placeholder="Password"
            setvalue={text => setPassword(text)}
            value={password}
            onBlur={validatePassword}
            //secureTextEntry
          />
          {passwordError && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          <CustomButton text="LOGIN" onPress={handleLogin} />
          {error && <Text style={styles.errorMsg}>{error}</Text>}
          <Text style={styles.orText}>or</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="logo-facebook" size={35} color="#006D5B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="logo-google" size={35} color="#006D5B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
