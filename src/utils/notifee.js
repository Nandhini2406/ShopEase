import notifee, {EventType} from '@notifee/react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';

let loginTimer = 0;
let intervalId;
let notificationId = null;
let backgroundNotificationId = null;

// export const startLoginTimer = async () => {
//   if (!notificationId) {
//     intervalId = setInterval(() => {
//       loginTimer++;
//       foregroundNotification(formattedTime(loginTimer));
//     }, 1000);

//     notificationId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default',
//     });
//   }

// };
// export const startLoginTimer = async () => {
//   if (!notificationId) {
//     notificationId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default',
//     });

//     // Add an event listener for the background event
//     notifee.onBackgroundEvent(async ({event, detail}) => {
//       if (event.type === EventType.BACKGROUND_STATE) {
//         // Handle the background event, e.g., update the timer
//         loginTimer++;
//         foregroundNotification(formattedTime(loginTimer));
//       }
//     });

//     // Start the timer
//     intervalId = setInterval(() => {
//       loginTimer++;
//       foregroundNotification(formattedTime(loginTimer));
//     }, 1000);

//     // intervalId = setInterval(() => {
//     //   loginTimer++;
//     //   foregroundNotification(formattedTime(loginTimer));
//     // }, 1000);

//     // notificationId = await notifee.createChannel({
//     //   id: 'default',
//     //   name: 'Default',
//     // });

//     // // Start the background task handler
//     // notifee.onBackgroundEvent(async ({ type, detail }) => {
//     //   // Check if the app is in the background state
//     //   if (type === EventType.BACKGROUND_STATE) {
//     //     // Update your login timer notification
//     //     await notifee.updateNotification({
//     //       id: notificationId,
//     //       body: `Time Active: ${formattedTime(loginTimer)}`,
//     //     });
//     //   }
//     // });
//   }
// };

export const startLoginTimer = async () => {
  // Check if the notification channel is not created
  if (!notificationId) {
    // Create a notification channel
    notificationId = await notifee.createChannel({
      id: 'default',
      name: 'Default',
    });

    // Add an event listener for the background event
    notifee.onBackgroundEvent(async ({ event, detail }) => {
      if (event.type === EventType.BACKGROUND_STATE) {
        // Handle the background event, e.g., update the timer
        loginTimer++;
        backgroundNotification(formattedTime(loginTimer));
      }
    });

    // Start the timer
    intervalId = setInterval(() => {
      loginTimer++;
      foregroundNotification(formattedTime(loginTimer));
    }, 1000);
  }
};

const backgroundNotification = formattedTime => {
  // Display the background notification
  PushNotification.localNotification({
    channelId: 'background',
    title: 'Background',
    message: 'Time InActive: ${formattedTime}',
    largeIcon: '',
    smallIcon: 'ic_stat',
  });
};

export const formattedTime = milliseconds => {
  let seconds = milliseconds % 60;
  const hours = Math.floor(milliseconds / 3600);
  const minutes = Math.floor((milliseconds % 3600) / 60);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const foregroundNotification = async formattedTime => {
  await notifee.displayNotification({
    id: notificationId,
    title: 'Running',
    body: `Time Active: ${formattedTime}`,
    android: {
      channelId: 'default',
      smallIcon: 'ic_stat',
      color: '#006D5B',
      pressAction: {
        id: 'default',
      },
    },
  });
};

// if (!notificationId) {
//   intervalId = setInterval(() => {
//     loginTimer++;
//     // PushNotification.localNotification({
//       channelId: notificationId,
//       title: 'User Logged in ',
//       message: `Time Active: ${formattedTime(loginTimer)}`,
//       largeIcon: '',
//       smallIcon: 'ic_stat',
//     });
//     // foregroundNotification(formattedTime(loginTimer));
//   }, 1000);
//   notificationId = 'background'
// }

// export const startLogOutTimer = () => {
//   console.log('background Notification with timer');
//   intervalId = BackgroundTimer.setInterval(() => {
//     console.log('background Notification with formattedTime');
//     loginTimer++;
//     backgroundNotification(formattedTime(loginTimer));
//     console.log('Interval callback at:', new Date());
//   }, 1000);
//   console.log('Interval started:', intervalId);
// };

export const stopLoginTimer = () => {
  clearInterval(intervalId);
  loginTimer = 0;
  notificationId = null;
  PushNotification.cancelAllLocalNotifications();
};
export const stopLogOutTimer = () => {
  BackgroundTimer.clearInterval(intervalId);
  loginTimer = 0;
};

// const backgroundNotification = formattedTime => {
//   console.log('background Notification');
//   PushNotification.localNotification({
//     channelId: 'background',
//     title: 'Background',
//     message: `Time InActive: ${formattedTime}`,
//     largeIcon: '',
//     smallIcon: 'ic_stat',
//   });
// };
