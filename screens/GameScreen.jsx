import React, { useState, useRef, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

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
  const initialGuess = generateRandomBetween(1, 100, userChosen);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPassGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChosen) {
      gameOverHandler(pastGuesses.length);
    }
  }, [currentGuess, pastGuesses, userChosen]);

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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPassGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />

      <Card style={styles.buttons}>
        <MainButton
          title={<Ionicons name="ios-arrow-down" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, 'lower')}
        />
        <MainButton
          title={<Ionicons name="ios-arrow-up" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>

      <View style={styles.listContainer}>
        {/* <ScrollView >
          {pastGuesses.map((pastGuess, index) => (
            <View style={styles.listItem} key={index}>
              <Text style={defaultStyles.bodyText}>
                #{pastGuesses.length - index + 1}
              </Text>
              <Text style={defaultStyles.bodyText}>{pastGuess}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text style={defaultStyles.bodyText}>
                #{pastGuesses.length - itemData.index}
              </Text>
              <Text style={defaultStyles.bodyText}>{itemData.item}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: 400,
    maxWidth: '90%',
    padding: 10,
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: { flex: 1, width: '60%' },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.65)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    width: '100%',
  },
});

export default GameScreen;
