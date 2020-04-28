import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={{ ...styles.headerTitle, ...defaultStyles.title }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: theme.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.OS === 'android' ? 'white' : theme.primary,
  },
});

export default Header;
