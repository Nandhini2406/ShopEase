import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      await getFCMToken();
    }
  } catch (error) {
    console.log(error);
  }
};
export const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM TOKEN', token);
  } catch (error) {
    console.log(error);
  }
};

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });