import React from 'react';

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import theme from '../constants/color';

const SecondaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    backgroundColor: theme.secondary,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});

export default SecondaryButton;
