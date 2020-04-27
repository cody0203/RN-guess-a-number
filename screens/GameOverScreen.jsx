import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import theme from '../constants/color';

const GameOverScreen = ({}) => {
    return (
        <View style={styles.screen}>
            <Text>Game over!</Text>

            <Button color={theme.primary} title='RESTART' />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;
