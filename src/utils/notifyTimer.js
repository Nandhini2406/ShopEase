import PushNotification from 'react-native-push-notification';
import {AppState} from 'react-native';

let loginTimer = 0;
let intervalId;
let notificationId = null;

export const startLoginTimer = async () => {
  if (!notificationId) {
    intervalId = setInterval(() => {
      loginTimer++;
      loginNotification(formattedTime(loginTimer));
    }, 1000);

    notificationId = 'default';
    AppState.addEventListener('change', handleAppStateChange);
  }
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
    id: 0,
  });
};

const logoutNotification = () => {};

const handleAppStateChange = () => {
  const appState = AppState.currentState;

  if (
    appState === 'active' ||
    appState === 'inactive' ||
    appState === 'background'
  ) {
    startLoginTimer();
  }
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
