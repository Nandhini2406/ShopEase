import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';

let loginTimer = 0;
let logOutTimer = 0;
let loginIntervalId;
let logOutIntervalId;
let notificationId = null;

export const startLoginTimer = async () => {
  stopTimers();
  console.log('User Logged in timer notification');
  if (!notificationId) {
    loginIntervalId = BackgroundTimer.runBackgroundTimer(() => {
      loginTimer++;
      loginNotification(formattedTime(loginTimer));
    }, 1000);
    notificationId = 'default';
  }
};

export const startLogOutTimer = async () => {
  stopTimers();
  console.log('User Logged out timer notification');
  if (!notificationId) {
    logOutIntervalId = BackgroundTimer.runBackgroundTimer(() => {
      logOutTimer++;
      logOutNotification(formattedTime(logOutTimer));
    }, 1000);
    notificationId = 'default';
  }
};

export const stopTimers = () => {
  BackgroundTimer.stopBackgroundTimer();
  loginTimer = 0;
  logOutTimer = 0;
  notificationId = null;
};

const loginNotification = async timer => {
  PushNotification.localNotification({
    channelId: notificationId,
    largeIcon: '',
    smallIcon: 'ic_stat',
    color: '#006D5B',
    priority: 'high',
    title: 'User Logged in',
    message: `Time Active: ${timer}`,
    playSound: false,
    id: 0,
  });
};

const logOutNotification = timer => {
  PushNotification.localNotification({
    channelId: notificationId,
    largeIcon: '',
    smallIcon: 'ic_stat',
    color: '#006D5B',
    priority: 'high',
    title: 'User Logged out',
    message: `Time Inactive: ${timer}`,
    playSound: false,
    id: 1,
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
