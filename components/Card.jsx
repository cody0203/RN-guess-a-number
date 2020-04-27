import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginVertical: Dimensions.get('window').height > 600 ? 20 : 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: Dimensions.get('window').height > 600 ? 24 : 16,
    borderRadius: 10,
  },
});

export default Card;
