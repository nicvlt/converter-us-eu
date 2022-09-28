import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function FlatButton( {text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, styles.shadow]}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
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