/**
 * @format
 */

import {Appearance} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {appRootLayout, IDS} from './navigationLayout';
import App from './App';
import Overlay from './Overlay';
import Screen from './Screen';
import SideMenu from './SideMenu';

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color:
        Appearance.getColorScheme() === 'light' ? 'linen' : 'rebeccapurple',
    },
    title: {
      color: Appearance.getColorScheme() === 'light' ? 'darkred' : 'azure',
    },
    backButton: {
      color: Appearance.getColorScheme() === 'light' ? 'darkred' : 'azure',
      showTitle: false,
    },
  },
  statusBar: {
    style: Appearance.getColorScheme(),
    backgroundColor:
      Appearance.getColorScheme() === 'light' ? '#faf0e6' : '#663399',
  },
  sideMenu: {
    left: {
      shouldStretchDrawer: false,
      animationVelocity: 1400,
    },
    animationType: 'parallax',
    openGestureMode: 'bezel',
  },
});

Navigation.registerComponent(IDS.OVERLAY, () => Overlay);
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

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(appRootLayout);
  await Navigation.showOverlay({
    component: {
      name: IDS.OVERLAY,
    },
  });
});
