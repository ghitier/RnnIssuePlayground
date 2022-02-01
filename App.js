/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {
  IDS,
  getLeftSideMenuButtons,
  wrapChildrenWithRootAndStack,
} from './navigationLayout';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const layout = [
  {
    component: {
      name: 'Screen',
      passProps: {
        backgroundColor: 'crimson',
      },
      options: {
        topBar: {
          title: {
            text: 'Bottom Stacked',
          },
          leftButtons: getLeftSideMenuButtons(),
        },
      },
    },
  },
  {
    component: {
      name: 'Screen',
      passProps: {
        backgroundColor: 'salmon',
      },
      options: {
        topBar: {
          title: {
            text: 'Top Stacked',
          },
        },
      },
    },
  },
];

const setOneComponentRoot = () => Navigation.setRoot(wrapChildrenWithRootAndStack(layout[0]));
const setTwoComponentRoot = () => Navigation.setRoot(wrapChildrenWithRootAndStack(...layout));
const setOneComponentStackRoot = () => Navigation.setStackRoot(IDS.MAIN_STACK, layout[0]);
const setTwoComponentStackRoot = () => Navigation.setStackRoot(IDS.MAIN_STACK, layout);

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button title="setRoot (1 screen stack)" onPress={setOneComponentRoot} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="setRoot (2 screens stack)" onPress={setTwoComponentRoot} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="setStackRoot (1 screen)" onPress={setOneComponentStackRoot} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="setStackRoot (2 screens)" onPress={setTwoComponentStackRoot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

App.options = () => ({
  topBar: {
    title: {
      text: 'App',
    },
    leftButtons: getLeftSideMenuButtons(),
  },
})

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 12,
  }
});

export default App;
