/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {appRootLayout, IDS} from './navigationLayout';
import App from './App';
import Screen from './Screen';
import SideMenu from './SideMenu';

Navigation.setDefaultOptions({});

Navigation.registerComponent(IDS.SIDE_MENU, () => SideMenu);
Navigation.registerComponent(IDS.APP, () => App);
Navigation.registerComponent(IDS.SCREEN, () => Screen);

Navigation.events().registerNavigationButtonPressedListener(({buttonId}) => {
  if (buttonId === IDS.SIDE_MENU_BUTTON) {
    Navigation.mergeOptions(IDS.SIDE_MENU, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(appRootLayout);
});
