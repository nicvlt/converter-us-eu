import React from 'react';
import { TextInput, StyleSheet, View} from 'react-native';

export default function TextField({ setResult, autoFocus}){
    return(
        <View style = {styles.shadow}>
            <TextInput maxLength={10} style={styles.textField} keyboardType = 'numeric' autoFocus = {autoFocus} onChangeText = {(value) => setResult(value)} placeholder='Enter a value'/>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        borderWidth: 2,
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