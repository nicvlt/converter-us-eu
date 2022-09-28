import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';


export default function Length(){

    const [fromLength, setFromLength] = useState('IN')
    const [toLength, setToLength] = useState('CM')
    const [result, setResult] = useState(0)

    const swapLength = () => {
        const tempLength = fromLength;
        setFromLength(toLength);
        setToLength(tempLength);
    }

    return(
    <View style={styles.container}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>{fromLength=='IN'? (result/0.393701).toFixed(2) : (result*0.393701).toFixed(2)}{fromLength=='CM'? 'in' : 'cm'}</Text>
        </View>
        <View style={styles.weightLevel}>
            <View>
                <CurrencyBox text={fromLength}/>
            </View>
            <View>
            <FlatButton text='SWAP' onPress={swapLength}/>
            </View>
            <View>
                <CurrencyBox text={toLength}/>
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
