import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {startLoginTimer, stopLoginTimer} from '../utils/notifee';

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
        startLoginTimer();
        return uid;
      })
      .catch(error => {
        console.log('Firebase Error Code:', error.code);
        console.log('Firebase Error Message:', error.message);

        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Signup Error', 'Email already in use.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Signup Error', 'Invalid email address.');
            break;
          case 'auth/weak-password':
            Alert.alert(
              'Signup Error',
              'Weak password. Password should be at least 6 characters.',
            );
            break;
          default:
            Alert.alert('Signup Error', 'An internal error has occurred.');
        }
        console.log('Signup Error', error);
      });
  }
};

const lognIn = (navigation, email, password) => {
  if (email || password) {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(user => {
        console.log('User logged in: ', user.user.displayName);
        console.log('User uid: ', auth().currentUser.uid);
        navigation.navigate('Home');
        startLoginTimer();
      })
      .catch(error => {
        console.log('Firebase Error Code:', error.code);
        console.log('Firebase Error Message:', error.message);

        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert('Signup Error', 'Email already in use.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Signup Error', 'Invalid email address.');
            break;
          case 'auth/weak-password':
            Alert.alert(
              'Signup Error',
              'Weak password. Password should be at least 6 characters.',
            );
            break;
          default:
            Alert.alert('Signup Error', 'An internal error has occurred.');
        }
        console.log('Signup Error', error);
      });
  }
};

const logOut = () => {
  auth().signOut();
  stopLoginTimer();
};

const getCurrentUser = () => {
  return auth().currentUser;
};

const Auth = {getCurrentUser, signUp, lognIn, logOut};

export default Auth;
