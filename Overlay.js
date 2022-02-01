import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';

const Overlay = props => {
  const isDarkTheme = useColorScheme() === 'dark';

  const backgroundColor = isDarkTheme ? '#333' : '#eee';

  return <View style={[styles.content, {backgroundColor}]} />;
};

Overlay.options = () => ({
  overlay: {
    interceptTouchOutside: false,
  },
});

export default Overlay;

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    elevation: 4,
    borderRadius: 8,
    minHeight: 100,
  },
});
