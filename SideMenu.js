/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import type {Node} from 'react';

interface SideMenuProps {}

const SideMenu = (props: SideMenuProps): Node => {
    return <View style={styles.container} />
};

export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'slateblue',
    },
});
