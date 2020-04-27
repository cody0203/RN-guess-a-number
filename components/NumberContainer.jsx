import React from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';

import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.number, ...defaultStyles.title }}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.primary,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Dimensions.get('window').height > 600 ? 16 : 8,
  },
  number: {
    color: theme.primary,
  },
});

export default NumberContainer;
