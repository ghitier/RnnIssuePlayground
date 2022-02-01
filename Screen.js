/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Button, useColorScheme} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {appRootLayout} from './navigationLayout';

import type {Node} from 'react';
import type {ColorValue} from 'react-native';

interface ScreenProps {
  componentId: string;
  backgroundColor?: ColorValue;
}

const setAppRoot = () => Navigation.setRoot(appRootLayout);

const Screen = (props: ScreenProps): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const defaultColor: ColorValue = isDarkMode ? Colors.darker : Colors.lighter;

  const {backgroundColor = defaultColor} = props;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.buttonContainer}>
        <Button title="setRoot (App)" onPress={setAppRoot} />
      </View>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 12,
  },
});
