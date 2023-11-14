// import {NativeEventEmitter, NativeModules, AppState} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import {startLogOutTimer, stopLoginTimer} from './notifee';
// import BackgroundTimer from 'react-native-background-timer';

// export const cancelNotification = () => {
//   console.log('Cancelling Background Notification');
//   BackgroundTimer.clearInterval(intervalId);
//   PushNotification.cancelAllLocalNotifications();
// };

// export const sendBackgroundNotification = () => {
//   const appState = AppState.currentState;
//   let loginTimer = 0;

//   if (appState === 'background' || appState === 'inactive') {
//     console.log('before Sending Background Notification');
//     // Send your background notification here
//     // startLogOutTimer();
//     // console.log('after Sending Background Notification');
//     // stopLoginTimer();
//     // console.log('clearing login timer Notification');
//     // const intervalId = BackgroundTimer.setInterval(() => {
//     // console.log('background Notification with formattedTime');
//     loginTimer++;
//     PushNotification.localNotification({
//       channelId: 'background',
//       title: 'Background',
//       message: `Time InActive: 00:00:00`,
//       largeIcon: '',
//       smallIcon: 'ic_stat',
//     });
//     // backgroundNotification(formattedTime(loginTimer));
//     console.log('Interval callback at:', new Date());
//     // }, 1000);
//     // console.log('Interval started:', intervalId);
//   }
// };

// export const backgroundNotification = () => {
//   PushNotification.configure({
//     onNotification: function (notification) {
//       console.log('NOTIFICATION:', notification);
//     },
//   });
//   // Event listener to cancel the background notification when the app is opened
//   // const eventEmitter = new NativeEventEmitter(NativeModules.RNEventEmitter);
//   // const cancelNotificationListener = eventEmitter.addListener(
//   //   'notificationOpened',
//   //   cancelNotification,
//   // );

//   // const sendNotificationListener = eventEmitter.addListener(
//   //   'notificationSend',
//   //   sendBackgroundNotification,
//   // );

//   // Event listener to send a background notification when in the background or inactive state
//   const handleAppStateChange = () => {
//     sendBackgroundNotification();
//   };

//   // Add event listeners
//   AppState.addEventListener('change', handleAppStateChange);

//   return () => {
//     // Remove event listeners on component unmount
//     // cancelNotificationListener.remove();
//     // sendNotificationListener.listener();
//     AppState.removeEventListener('change', handleAppStateChange);
//   };
// };
