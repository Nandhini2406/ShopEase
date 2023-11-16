import {AppState} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {startLoginTimer} from './notifyTimer';

export const handleAppStateChange = () => {
  const appState = AppState.currentState;

  if (
    appState === 'active' ||
    appState === 'inactive' ||
    appState === 'background'
  ) {
    startLoginTimer();
  }
};

// const handleAppStateChange = () => {
//   const appState = AppState.currentState;

//   if (
//     appState === 'active' ||
//     appState === 'inactive' ||
//     appState === 'background'
//   ) {
//     startLoginTimer();
//   }
// };

// import {NativeEventEmitter, NativeModules, AppState} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import {startLogOutTimer, stopLoginTimer} from './notificationTimer';
// import BackgroundTimer from 'react-native-background-timer';

// export const cancelNotification = () => {
//   console.log('Cancelling Background Notification');
//   BackgroundTimer.clearInterval(intervalId);
//   PushNotification.cancelAllLocalNotifications();
// };

// export const sendLoginNotification = () => {
//   const appState = AppState.currentState;
//   let loginTimer = 0;

//   if (appState === 'background' || appState === 'inactive') {
//     console.log('before Sending  Notification');

//     PushNotification.localNotification({
//       channelId: 'background',
//       title: 'Background',
//       message: `Time InActive: 00:00:00`,
//       largeIcon: '',
//       smallIcon: 'ic_stat',
//     });
//     console.log('after Sending  Notification');
//   }
// };
//   // Event listener to cancel the background notification when the app is opened
//   // const eventEmitter = new NativeEventEmitter(NativeModules.RNEventEmitter);
//   // const cancelNotificationListener = eventEmitter.addListener(
//   //   'notificationOpened',
//   //   cancelNotification,
//   // );

//   // const sendNotificationListener = eventEmitter.addListener(
//   //   'notificationSend',
//   //   sendLoginNotification,
//   // );

//   // Event listener to send a background notification when in the background or inactive state
//   const handleAppStateChange = () => {
//     sendLoginNotification();
//   };

//   // Add event listeners
//   AppState.addEventListener('change', handleAppStateChange);

//   return () => {
//     // Remove event listeners on component unmount
//     // cancelNotificationListener.remove();
//     // sendNotificationListener.listener();
//     AppState.addEventListener('change', handleAppStateChange);
//     // AppState.removeEventListener('change', handleAppStateChange);
//   };
// };
