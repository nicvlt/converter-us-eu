import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';


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
    <View style={styles.container}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>{fromWeight=='LB'? (result/2.20462).toFixed(2) : (result*2.20462).toFixed(2)}{fromWeight=='KG'? 'lb' : 'kg'}</Text>
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
            <TextField setResult={setResult}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',

    backgroundColor: 'white',
    alignItems: 'center',
  },
  weightLevel: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  }
});
