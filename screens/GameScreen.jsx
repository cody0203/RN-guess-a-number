import React, { useState, useRef, useEffect } from 'react';

import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

import defaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNumber;
};

const GameScreen = ({ userChosen, gameOverHandler }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChosen)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChosen) {
      gameOverHandler(rounds);
    }
  }, [currentGuess, rounds, userChosen]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChosen) ||
      (direction === 'greater' && currentGuess > userChosen)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRound) => currentRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />

      <Card style={styles.buttons}>
        <Button
          style={{ ...styles.button, ...defaultStyles.bodyText }}
          title="LOWER"
          onPress={nextGuessHandler.bind(this, 'lower')}
        />
        <Button
          style={{ ...styles.button, ...defaultStyles.bodyText }}
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
});

export default GameScreen;
