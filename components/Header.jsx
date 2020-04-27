import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{ ...styles.headerTitle, ...defaultStyles.title }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: theme.primary,
    height: 90,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
  },
});

export default Header;
