import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

const signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        Alert.alert('Enter data')
    } else {
        return auth().createUserWithEmailAndPassword(email.trim(), password)
        .then(credentials => {
            const {uid} = credentials.user;
            auth().currentUser.updateProfile({
                displayName: fullName
            })
            return uid
        })
        .catch(
            err => alert(err.code, err.message)
        )
    }
}

const lognIn = (email, password) => {
    if(!email || !password){
        return auth().signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
            console.log(auth().currentUser.uid)
        })
        .catch(err => alert(err.code, err.message)) 
    }
}

const signOut = () => auth().signOut();

const Auth ={signUp,lognIn,signOut};

export default Auth;

