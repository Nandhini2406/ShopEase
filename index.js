import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';
import {startLoginTimer} from './src/utils/notifee';

notifee.onBackgroundEvent(startLoginTimer);

AppRegistry.registerComponent(appName, () => App);
