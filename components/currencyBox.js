import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function CurrencyBox({text}){
    return(
        <View style={styles.card}>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color:'black',
        textAlign: 'center',
        fontWeight:'500',
        fontSize: 17,
        padding: 15,
    },
    card:{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#31AAD5',
        borderRadius:8,
        marginHorizontal: 25,
    }
})