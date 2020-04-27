import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../constants/color';

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: theme.primary,
        height: 90,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
    },
});

export default Header;
