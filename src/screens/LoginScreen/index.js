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
import {Images} from '../../constants/images';
import {styles} from './styles';
import CustomButton from '../../components/Common/CustomButton';
import CustomInput from '../../components/Common/CustomInput';
import IconButton from '../../components/Common/IconButton';
import Auth from '../../firebase/authService';
import {validateEmail, validatePassword} from '../../utils/validation';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState('');
  const validation = () => {
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
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    } else {
      Auth.lognIn(navigation, email, password);
      console.log('LoginPressed...');
      setEmail('');
      setPassword('');
    }
  };
  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView>
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
              onBlur={validation}
            />
            {emailError && <Text style={styles.errorMsg}>{emailError}</Text>}
            <CustomInput
              placeholder="Password"
              setvalue={text => setPassword(text)}
              value={password}
              onBlur={validation}
              //secureTextEntry
            />
            {passwordError && (
              <Text style={styles.errorMsg}>{passwordError}</Text>
            )}
            <CustomButton text="LOGIN" onPress={handleLogin} />
            {error && <Text style={styles.errorMsg}>{error}</Text>}
            <Text style={styles.orText}>or</Text>
            <View style={styles.iconContainer}>
              <IconButton
                iconName="logo-facebook"
                iconSize={35}
                onPress={() => navigation.navigate('Home')}
              />
              <IconButton iconName="logo-google" iconSize={35} />
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
    </SafeAreaView>
  );
};

export default LoginScreen;
