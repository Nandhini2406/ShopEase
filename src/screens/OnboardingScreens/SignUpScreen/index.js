import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../../constants/images';
import {styles} from './styles';
import CustomButton from '../../../components/Common/CustomButton';
import CustomInput from '../../../components/Common/CustomInput';
import IconButton from '../../../components/Common/IconButton';
import Auth from '../../../services/authService';
import {
  validateFullName,
  validateEmail,
  validatePassword,
} from '../../../utils/validation';

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

  const validation = () => {
    if (!validateFullName(fullName)) {
      setFullNameError('Invalid fullName*');
    } else {
      setFullNameError(null);
    }
    if (!validateEmail(email)) {
      setEmailError('Invalid email address. Use @gmail.com domain.');
    } else {
      setEmailError(null);
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least 6 characters.');
    } else {
      setPasswordError(null);
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Password is not matching');
    } else {
      setConfirmPasswordError(null);
    }
  };

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    } else {
      Auth.signUp(navigation, fullName, email, password);
    }
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.logoContainer}>
      <ScrollView>
        <Image source={Images.appLogo} style={styles.img} />
        <Text style={styles.imgText}>SHOPEASE</Text>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME!</Text>
          <CustomInput
            placeholder="Full Name"
            setvalue={text => setFullName(text)}
            value={fullName}
            onBlur={validation}
          />
          {fullNameError && (
            <Text style={styles.errorMsg}>{fullNameError}</Text>
          )}
          <CustomInput
            placeholder="Enter Email Id"
            setvalue={text => setEmail(text)}
            value={email}
            onBlur={validation}
          />
          {emailError && <Text style={styles.errorMsg}>{emailError}</Text>}
          <CustomInput
            placeholder="Create Password"
            setvalue={text => setPassword(text)}
            value={password}
            onBlur={validation}
            //secureTextEntry
          />
          {passwordError && (
            <Text style={styles.errorMsg}>{passwordError}</Text>
          )}
          <CustomInput
            placeholder="Confirm Password"
            setvalue={text => setConfirmPassword(text)}
            value={confirmPassword}
            onBlur={validation}
            //secureTextEntry
          />
          {confirmPasswordError && (
            <Text style={styles.errorMsg}>{confirmPasswordError}</Text>
          )}
          <CustomButton text="SIGN UP" onPress={handleSignUp} />
          {error && <Text style={styles.errorMsg}>{error}</Text>}
          <Text style={styles.orText}>or</Text>
          <View style={styles.iconContainer}>
            <IconButton
              iconName="logo-facebook"
              iconSize={35}
              iconColor="#006D5B"
              buttonStyle={{marginHorizontal: '10%'}}
            />
            <IconButton
              iconName="logo-google"
              iconSize={35}
              iconColor="#006D5B"
              buttonStyle={{marginHorizontal: '10%'}}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
