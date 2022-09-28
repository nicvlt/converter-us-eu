import React from 'react';
import { TextInput, StyleSheet, View} from 'react-native';

export default function TextField({ setResult}){
    return(
        <View style = {styles.shadow}>
            <TextInput style={styles.textField} keyboardType = 'numeric' autoFocus = {true} onChangeText = {(value) => setResult(value)} defaultValue = '0'/>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        borderWidth: 2,
        borderColor: '#31AAD5',
        paddingVertical: 5,
        borderRadius: 8,
        margin: 30,
        paddingHorizontal: 40,
        textAlign:'center',
    },
    shadow:{
        shadowColor: 'black',
        elevation: 5,
    }
})