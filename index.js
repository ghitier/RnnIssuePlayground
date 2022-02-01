/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {appRootLayout, IDS} from './navigationLayout';
import App from './App';
import Screen from './Screen';

Navigation.registerComponent(IDS.APP, () => App);
Navigation.registerComponent(IDS.SCREEN, () => Screen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(appRootLayout);
});
