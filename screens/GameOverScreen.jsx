import React from 'react';

import { View, Text, Button, StyleSheet, Image } from 'react-native';

import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const gameOverImage = require('../assets/images/game-over.png');

const GameOverScreen = ({ restartGameHandler, numbOfRounds, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Game over!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={gameOverImage} resizeMode="cover" />
      </View>

      <Text style={defaultStyles.bodyText}>
        Number of rounds: {numbOfRounds}
      </Text>
      <Text style={defaultStyles.bodyText}>Number was: {userNumber}</Text>

      <Button
        color={theme.primary}
        title="RESTART"
        onPress={restartGameHandler}
      />
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
});

export default GameOverScreen;
