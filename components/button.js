import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function FlatButton( {text, onPress}){
    return(
        <Button
            title={text}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#31AAD5',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: 'center',
            },
    shadow: {
        shadowColor: 'black',
        elevation: 5,
    },
})