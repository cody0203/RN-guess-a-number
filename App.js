import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Start from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        gameOverHandler(0);
    };

    const gameOverHandler = (numOfRounds) => {
        setGuessRounds(numOfRounds);
    };

    const restartGame = () => {
        setUserNumber();
        setGuessRounds(0);
    };

    let content = <Start startGameHandler={startGameHandler} />;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChosen={userNumber} gameOverHandler={gameOverHandler} />;
    } else if (guessRounds > 0) {
        content = <GameOverScreen />;
    }

    return (
        <View style={styles.screen}>
            <Header title={'Guess A Number'} />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
