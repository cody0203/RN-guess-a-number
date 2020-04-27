import React from 'react';

import { View, Text, Button, StyleSheet, Image } from 'react-native';

import MainButton from '../components/MainButton';
import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const gameOverImage = require('../assets/images/game-over.png');

const GameOverScreen = ({ restartGameHandler, numOfRounds, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Game over!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={gameOverImage} resizeMode="cover" />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{ ...defaultStyles.bodyText, ...styles.resultText }}>
          Your phone needed <Text style={styles.highlight}>{numOfRounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <MainButton title="RESTART" onPress={restartGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
  },
  highlight: {
    color: theme.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
