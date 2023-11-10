import auth from '@react-native-firebase/auth';
import analytics, { FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';
import {Alert} from 'react-native';
import {startLoginTimer, stopLoginTimer, showLoginNotification} from '../services/notifee';

const signUp = (navigation, fullName, email, password) => {
  if (fullName || email || password) {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(credentials => {
        const {uid} = credentials.user;
        auth().currentUser.updateProfile({
          displayName: fullName,
        });
        console.log('User uid: ', credentials);
        Alert.alert('User Registered');
        navigation.navigate('Home');
        console.log('signupPressed...');
        startLoginTimer();
        return uid;
      })
      .catch(err => {
        console.log('Signup Failed:', err);
      });
  }
};

const lognIn = (navigation, email, password) => {
  if (email || password) {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then((user) => {
        console.log('User logged in: ', user.user.displayName);
        console.log('User uid: ', auth().currentUser.uid);
        // const loginTime = analytics.logEvent('login', {timestamp: Date.now()});
        // console.log(`Login ${loginTime}`);
        navigation.navigate('Home');
        startLoginTimer();
      })
      .catch(err => {
        console.log('Login failed:', err);
        Alert.alert(
          'Login Failed',
          'Invalid Credentials \nEnter Valid Credentials',
        );
      });
  }
};

const logOut = () => {
  auth().signOut()
  stopLoginTimer();
};

const getCurrentUser = () => {
  return auth().currentUser;
};

const Auth = {getCurrentUser, signUp, lognIn, logOut};

export default Auth;
