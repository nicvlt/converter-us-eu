import React, {useState} from 'react';
import { TextInput, StyleSheet, View} from 'react-native';
import { colorTheme } from '../shared/theme';

export default function TextField({ setResult, autoFocus}){

    const [isFocused, setIsFocused] = useState(false);


    const handleOnFocus= () => {
        setIsFocused(true)
    }

    const handleOnBlur= () => {
        setIsFocused(false)
    }

    return(
        <View style = {styles.shadow}>
            <TextInput
                style={[styles.textField, {
                    borderColor: isFocused ? colorTheme : 'black',
                    borderWidth: isFocused ? 2: 1.5,
                }]}
                onFocus={handleOnFocus} onBlur={handleOnBlur} onChangeText = {(value) => setResult(value)}
                blurOnSubmit={true} clearTextOnFocus={true} caretHidden={true} maxLength={10} keyboardType = 'numeric' autoFocus = {autoFocus} placeholder='Enter a value'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        paddingVertical: 5,
        borderRadius: 8,
        margin: 30,
        paddingHorizontal: 40,
        textAlign:'center',
        backgroundColor:'white',
        elevation:5,
    },
    shadow:{
        shadowColor: 'black',
        elevation: 5,
    }
})