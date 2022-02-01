/**
 * @format
 * @flow strict-local
 */
import {Appearance} from 'react-native';
import type {Layout, Button} from 'react-native-navigation';

export const IDS = {
  ROOT: 'Root',
  SIDE_MENU: 'SideMenu',
  SIDE_MENU_BUTTON: 'SideMenuButton',
  MAIN_STACK: 'MainStack',
  OVERLAY: 'Overlay',
  APP: 'App',
  SCREEN: 'Screen',
};

export const getLeftSideMenuButtons = (): Button[] => [
  {
    id: IDS.SIDE_MENU_BUTTON,
    icon:
      Appearance.getColorScheme() === 'light'
        ? require('./assets/menu_black.png')
        : require('./assets/menu_white.png'),
    enabled: true,
  },
];

export const wrapChildrenWithRootAndStack = (
  ...children: Layout[]
): Layout => ({
  root: {
    id: IDS.ROOT,
    sideMenu: {
      left: {
        component: {
          id: IDS.SIDE_MENU,
          name: IDS.SIDE_MENU,
        },
      },
      center: {
        stack: {
          id: IDS.MAIN_STACK,
          children: children ?? [],
        },
      },
    },
  },
});

export const appRootLayout: Layout = wrapChildrenWithRootAndStack({
  component: {
    name: IDS.APP,
  },
});
