import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const signUp = (navigation, fullName, email, password) => {
  if (fullName || email || password) {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(credentials => {
        const {uid} = credentials.user;
        auth().currentUser.updateProfile({
          displayName: fullName,
        });
        console.log('User uid: ',uid);
        Alert.alert('User Registered')
        navigation.navigate('Home')
        console.log('signupPressed...');
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
      .then(() => {
        console.log('User uid: ', auth().currentUser.uid);
        Alert.alert('Login successful');
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log('Login failed:', err);
        Alert.alert('Login Failed','Invalid Credentials \nEnter Valid Credentials');
      });
  }
};

const logOut = () => auth().signOut();

const getCurrentUser = () => {
  return auth().currentUser;
};

const Auth = {getCurrentUser, signUp, lognIn, logOut};

export default Auth;
