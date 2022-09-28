import { StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react'
import FlatButton from '../components/button';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';


export default function Currency() {

  
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState(0)

  const swapCurrency = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
}

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>{result}{fromCurrency == 'EUR'? '$':'€'}</Text>
      </View>
      <View style={styles.currencyLevel}>
        <View>
            <CurrencyBox text={fromCurrency}/>
        </View>
        <View>
          <FlatButton text='SWAP' onPress = {swapCurrency}/>
        </View>
        <View>
            <CurrencyBox text={toCurrency}/>
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
  currencyLevel: {
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  }
});
