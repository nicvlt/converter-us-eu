import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';


export default function Temperature(){

    const [fromTemperature, setFromTemperature] = useState('F')
    const [toTemperature, setToTemperature] = useState('C')
    const [result, setResult] = useState(0)

    const swapTemperature = () => {
        const tempTemperature = fromTemperature;
        setFromTemperature(toTemperature);
        setToTemperature(tempTemperature);
    }

    return(
    <View style={styles.container}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>{fromTemperature=='F'? ((result-32)*0.5556).toFixed(2) : (result*1.8 + 32).toFixed(2)}{fromTemperature=='C'? '°F' : '°C'}</Text>
        </View>
        <View style={styles.weightLevel}>
            <View>
                <CurrencyBox text={fromTemperature}/>
            </View>
            <View>
            <FlatButton text='SWAP' onPress={swapTemperature}/>
            </View>
            <View>
                <CurrencyBox text={toTemperature}/>
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
