/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './auth/Login';
import Test from './auth/Test';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
