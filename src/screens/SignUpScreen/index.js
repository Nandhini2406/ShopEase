import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../../constants/images';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Auth from '../../services/firebaseAuth';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const [error, setError] = useState('');

  // const validatefullName = () => {
  //   // fullName regex pattern
  //   const fullNamePattern = /^[a-zA-Z0-9._%+-]/;
  //   if (!fullNamePattern.test(fullName)) {
  //     setfullNameError('Invalid fullName address*');
  //   } else {
  //     setfullNameError(null);
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

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image source={Images.appLogo} style={styles.img} />
        <Text style={styles.imgText}>SHOPEASE</Text>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME!</Text>
          <CustomInput
            placeholder="Full Name"
            setvalue={text => setFullName(text)}
            value={fullName}
            // onBlur={validatefullName}
          />
          <CustomInput
            placeholder="Enter Email Id"
            setvalue={text => setEmail(text)}
            value={fullName}
            // onBlur={validatefullName}
          />
          {fullNameError && (
            <Text style={styles.errorMsg}>{fullNameError}</Text>
          )}
          <CustomInput
            placeholder="Create Password"
            setvalue={text => setPassword(text)}
            value={password}
            // onBlur={validatePassword}
            //secureTextEntry
          />
          <CustomInput
            placeholder="Confirm Password"
            setvalue={text => setPassword(text)}
            value={password}
            // onBlur={validatePassword}
            //secureTextEntry
          />
          {passwordError && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          <CustomButton text="SIGNUP" onPress={() => Auth.signUp(fullName,email,password)} />
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
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
