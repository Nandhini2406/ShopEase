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

export const notificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    console.log('app opened');
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      // setLoading(false);
    });
  messaging().onMessage(async remoteMessage => {
    console.log('Notification on foreground state', remoteMessage);
    // You can choose to display the notification here if needed
    // const {title, body} = remoteMessage.notification;
    // try {
    //   await notifee.displayNotification({
    //     title,
    //     body,
    //   });
    // } catch (error) {
    //   console.error('Error displaying notification:', error);
    // }
  });
};

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
