import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import theme from '../constants/color';

const NumberContainer = ({ number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: theme.primary,
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    number: {
        fontSize: 20,
        color: theme.primary,
        fontWeight: 'bold',
    },
});

export default NumberContainer;
