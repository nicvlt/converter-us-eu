import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';


export default function Distance(){

    const [fromDistance, setFromDistance] = useState('MI')
    const [toDistance, setToDistance] = useState('KM')
    const [result, setResult] = useState(0)

    const swapDistance = () => {
        const tempDistance = fromDistance;
        setFromDistance(toDistance);
        setToDistance(tempDistance);
    }

    return(
    <View style={styles.container}>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>{fromDistance=='MI'? (result*1.609344).toFixed(2) : (result/1.609344).toFixed(2)}{fromDistance=='KM'? 'mi' : 'km'}</Text>
        </View>
        <View style={styles.weightLevel}>
            <View>
                <CurrencyBox text={fromDistance}/>
            </View>
            <View>
            <FlatButton text='SWAP' onPress={swapDistance}/>
            </View>
            <View>
                <CurrencyBox text={toDistance}/>
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
