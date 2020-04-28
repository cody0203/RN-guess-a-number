import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import theme from '../constants/color';

const MainButton = ({ title, onPress }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: Dimensions.get('window').height > 600 ? 14 : 8,
    paddingHorizontal: Dimensions.get('window').height > 600 ? 30 : 15,
    borderRadius: 4,
    backgroundColor: theme.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});

export default MainButton;
