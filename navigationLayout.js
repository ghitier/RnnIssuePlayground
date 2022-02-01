/**
 * @format
 * @flow strict-local
 */

import type {Layout} from 'react-native-navigation';

export const IDS = {
    ROOT: 'Root',
    MAIN_STACK: 'MainStack',
    APP: 'App',
    SCREEN: 'Screen',
}

export const wrapChildrenWithRootAndStack = (...children: Layout[]): Layout => ({
    root: {
        id: IDS.ROOT,
        stack: {
            id: IDS.MAIN_STACK,
            children: children ?? [],
        },
    },
});

export const appRootLayout: Layout = wrapChildrenWithRootAndStack({
    component: {
        name: IDS.APP,
    },
});
