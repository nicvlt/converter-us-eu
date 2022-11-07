import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';
import { colorTheme } from '../shared/theme';
import TextResult from '../components/TextResult';

export default function Weight(){

    const [fromWeight, setFromWeight] = useState('LB')
    const [toWeight, setToWeight] = useState('KG')
    const [result, setResult] = useState(0)

    const swapWeight = () => {  
        const tempWeight = fromWeight;
        setFromWeight(toWeight);
        setToWeight(tempWeight);
    }

    return(
    <View style={{backgroundColor: colorTheme}}>
      <View style={styles.container}>
        <View>
            <TextResult result={fromWeight=='LB'? (result/2.20462).toFixed(2) : (result*2.20462).toFixed(2)} currency={fromWeight=='KG'? 'lb' : 'kg'}/>
        </View>
        <View style={styles.weightLevel}>
            <View>
                <CurrencyBox text={fromWeight}/>
            </View>
            <View>
            <FlatButton text='SWAP' onPress={swapWeight}/>
            </View>
            <View>
                <CurrencyBox text={toWeight}/>
            </View>
        </View>
        <View>
            <TextField setResult={setResult} focusState={true}/>
        </View>
     </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopEndRadius:50, 
    borderTopStartRadius:50, 
    marginTop:10,
    paddingTop:20,
  },
  weightLevel: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  
});
