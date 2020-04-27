import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import MainButton from '../components/MainButton';
import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const gameOverImage = require('../assets/images/game-over.png');

const GameOverScreen = ({ restartGameHandler, numOfRounds, userNumber }) => {
  const [gameOverImageSize, setGameOverImageSize] = useState(
    Dimensions.get('window').width * 0.7
  );

  useEffect(() => {
    const updateImageSize = () =>
      setGameOverImageSize(Dimensions.get('window').width * 0.7);

    Dimensions.addEventListener('change', updateImageSize);

    return () => {
      Dimensions.removeEventListener('change', updateImageSize);
    };
  });

  console.log(gameOverImageSize / 2);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={defaultStyles.title}>Game over!</Text>
        <View
          style={{
            ...styles.imageContainer,
            width: gameOverImageSize,
            height: gameOverImageSize,
            borderRadius: gameOverImageSize / 2,
          }}
        >
          <Image
            style={styles.image}
            source={gameOverImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={{ ...defaultStyles.bodyText, ...styles.resultText }}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{numOfRounds}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <MainButton title="RESTART" onPress={restartGameHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Dimensions.get('window').height / 60,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 16,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    textAlign: 'center',
  },
  highlight: {
    color: theme.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
