import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { AppState } from 'react-native';

let loginTimer = 0;
let intervalId;
let notificationId = null;
let backgroundNotificationId = null

// const  backgroundChannel = await notifee.createChannel({
//   id: 'default',
//   name: 'Default',
// });


export const startLoginTimer = async () => {
  if (!notificationId) {
    intervalId = setInterval(() => {
      loginTimer++;
      stopwatchNotification(formatStopwatchTime(loginTimer));
    }, 1000);
    
    notificationId = await notifee.createChannel({
      id: 'default',
      name: 'Default',
    });
  }
};

export const startLogOutTimer = async () => {
  if (!backgroundNotificationId) {
    console.log('background Notification Id',backgroundNotificationId )
    intervalId = setInterval(() => {
      loginTimer++;
      console.log('start logout timer', loginTimer)
      backgroundNotification(formatStopwatchTime(loginTimer));
    }, 1000);
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      
      console.log('background Notification')
      
      await notifee.displayNotification({
        id: backgroundNotificationId,
        title: 'Background',
        body: `Time Inactive: ${formattedTime}`,
        android: {
          channelId: 'background',
          smallIcon: 'ic_stat',
          color: '#006D5B',
          pressAction: {
            id: 'default',
          },
        },
      });
      
    })
    
  }
  backgroundNotificationId = await notifee.createChannel({
    id: 'background',
    name: 'Background',
  });
}

export const stopLoginTimer = () => {
  clearInterval(intervalId);
  loginTimer = 0;
  notificationId = null;
  // notifee.cancelNotification('default');
};

const stopwatchNotification = async (formattedTime) => {
  // Update the existing notification with the formatted stopwatch time
  // await notifee.onBackgroundEvent

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
const backgroundNotification = async (formattedTime) => {
  // await notifee.onBackgroundEvent
  console.log('background Notification')

  await notifee.displayNotification({
    id: backgroundNotificationId,
    title: 'Background',
    body: `Time Inactive: ${formattedTime}`,
    android: {
      channelId: 'background',
      smallIcon: 'ic_stat',
      color: '#006D5B',
      pressAction: {
        id: 'default',
      },
    },
  });
};

const formatStopwatchTime = milliseconds => {
  let seconds = milliseconds % 60;
  const hours = Math.floor(milliseconds / 3600);
  const minutes = Math.floor((milliseconds % 3600) / 60);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};


AppState.addEventListener('change', async (nextAppState) => {
  if (nextAppState === 'active') {
    // App is in the foreground, stop the background notification timer
    // stopLoginTimer();
    if (backgroundNotificationId) {
      // console.log('app background activity', backgroundNotificationId)
      notifee.cancelNotification(backgroundNotificationId);
      // backgroundNotificationId = null;
    }
  } else if (nextAppState === 'background') {
    // App is in the background, start the background notification timer
    if(notificationId){
      notifee.cancelNotification(notificationId);
      console.log('app background activity', notificationId)
      notificationId = null;
      startLogOutTimer();
    }
  }
});

// import notifee from '@notifee/react-native';
// import messaging from '@react-native-firebase/messaging';

// const backgroundChannel = await notifee.Channel({
//   id: 'background',
//   name: 'Background Notifications',
//   // importance: notifee.AndroidImportance.LOW,
// });

// notifee.createChannel(backgroundChannel);

// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   const formattedTime = formatStopwatchTime(loginTimer);

//   await notifee.displayNotification({
//     id: 'background',
//     title: 'Background state',
//     body: `App Inactive: ${formattedTime}`,
//     android: {
//       channelId: 'background',
//       smallIcon: 'ic_stat',
//       color: '#006D5B',
//     },
//   });
// });

// let loginTimer = 0;
// let intervalId;
// let notificationId = null;

// export const startLoginTimer = async () => {
//   if (!notificationId) {
//     intervalId = setInterval(() => {
//       loginTimer++;
//       stopwatchNotification(formatStopwatchTime(loginTimer));

//       // Send a Firebase Cloud Messaging message every second
//       messaging().send({
//         notification: {
//           title: 'App Inactive',
//           body: formatStopwatchTime(loginTimer),
//           channel: 'background',
//         },
//       });
//     }, 1000);

//     notificationId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default',
//     });
//   }
// };

// export const stopLoginTimer = () => {
//   clearInterval(intervalId);
//   loginTimer = 0;
//   notificationId = null;

//   // Remove the background notification
//   notifee.cancelNotification('background');
// };

// const stopwatchNotification = async (formattedTime) => {
//   const isAppForeground = await notifee.isForeground();

//   if (!isAppForeground) {
//     await notifee.displayNotification({
//       id: 'background',
//       title: 'App Inactive',
//       body: `${formattedTime}`,
//       android: {
//         channelId: 'background',
//         smallIcon: 'ic_stat',
//         color: '#006D5B',
//       },
//     });
//   } else {
//     await notifee.updateNotification({
//       id: notificationId,
//       title: 'Running',
//       body: `Time Active: ${formattedTime}`,
//     });
//   }
// };

// const formatStopwatchTime = milliseconds => {
//   let seconds = milliseconds % 60;
//   const hours = Math.floor(milliseconds / 3600);
//   const minutes = Math.floor((milliseconds % 3600) / 60);

//   const formattedHours = hours < 10 ? `0${hours}` : hours;
//   const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// };
