import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';

import theme from '../constants/color';
import defaultStyles from '../constants/default-styles';

const Start = ({ startGameHandler }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(undefined);

  const numberInputHandler = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g, ''));
  };

  const dismissKeyboardHandler = () => {
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    dismissKeyboardHandler();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedOutputContainer}>
        <Text style={defaultStyles.title}>Selected number:</Text>

        <NumberContainer number={selectedNumber} />
        <MainButton
          title="START GAME"
          onPress={() => startGameHandler(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboardHandler}>
      <View style={styles.screen}>
        <Text style={defaultStyles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={defaultStyles.bodyText}>Select a Number</Text>
          <Input
            style={styles.input}
            autoCorrect={false}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />

          <View style={styles.buttons}>
            <View style={styles.button}>
              <SecondaryButton title="Reset" onPress={resetInputHandler} />
            </View>
            <View style={styles.button}>
              <MainButton title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 80,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  confirmedOutputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Start;
