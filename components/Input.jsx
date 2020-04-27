import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

const Input = ({
    placeholder,
    style,
    value,
    blurOnSubmit,
    autoCapitalize,
    autoCorrect,
    keyboardType,
    maxLength,
    onChangeText,
}) => {
    return (
        <TextInput
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            blurOnSubmit={blurOnSubmit}
            autoCapitalize={autoCapitalize}
            placeholder={placeholder}
            style={{ ...styles.input, ...style }}
            value={value}
            maxLength={maxLength}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});

export default Input;
