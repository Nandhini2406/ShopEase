import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../../constants/images';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Auth from '../../services/firebaseAuth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState('');

  // const validateemail = () => {
  //   // email regex pattern
  //   const emailPattern = /^[a-zA-Z0-9._%+-]/;
  //   if (!emailPattern.test(email)) {
  //     setemailError('Invalid email address*');
  //   } else {
  //     setemailError(null);
  //   }
  // };

  // const validatePassword = () => {
  //   // Password regex pattern
  //   const passwordPattern = /.{6,}/;
  //   if (!passwordPattern.test(password)) {
  //     setError('Password must contain at least 6 characters');
  //   } else {
  //     setPasswordError(null);
  //   }
  // };

  // const handleLogin = () => {
  //   if (!email || !password) {
  //     setError('Please fill in all fields.');
  //     return;
  //   } else {
  //     navigation.navigate('Home');
  //     console.log('LoginPressed...');
  //   }
  // };
  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image source={Images.appLogo} style={styles.img} />
        <Text style={styles.imgText}>SHOPEASE</Text>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME BACK!</Text>
          <CustomInput
            placeholder="Email Id"
            setvalue={text => setEmail(text)}
            value={email}
            // onBlur={validateemail}
          />
          {emailError && (
            <Text style={styles.errorMsg}>{emailError}</Text>
          )}
          <CustomInput
            placeholder="Password"
            setvalue={text => setPassword(text)}
            value={password}
            // onBlur={validatePassword}
            //secureTextEntry
          />
          {passwordError && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          <CustomButton text="LOGIN" onPress={() => Auth.lognIn(email,password)} />
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
          <View style={styles.signupContainer}>
            <Text style={styles.signup}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
