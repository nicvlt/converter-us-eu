import { StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react'
import FlatButton from '../components/button';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import { colorTheme } from '../shared/theme';
import TextResult from '../components/TextResult';


export default function Currency() {
  
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [result, setResult] = useState(0)
  const [ratio, setRatio] = useState(1.0)
  const [alreadyFetched, setAlreadyFetched] = useState(false)
  const ID_SEARCH_ENGINE = '45036a1acd19f4a11'
  const ID_CUSTOM_SEARCH = 'AIzaSyDKp5yS9hoHGnltpuYukXahht6KUYSWXDA'

  useEffect(() => {
    if(!alreadyFetched)
    {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${ID_CUSTOM_SEARCH}&cx=${ID_SEARCH_ENGINE}&q=1+eur+to+usd`)
      .then(res=>res.json())
      .then(res=> {
        var index = JSON.stringify(res).indexOf(`<b>1 USD</b>`)
        index=='-1' ?  setRatio(1) : setRatio(JSON.stringify(res).substring(index+14, index+21))
      })
      setAlreadyFetched(true)
      {ratio==1 ? console.log("It didn't fetch") : console.log('It did fetch')}
    }

  })
  
  const swapCurrency = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
  }

  return (
    <>
    <View style={{backgroundColor: colorTheme, zIndex:4}}>
      <View style={[styles.container, styles.shadow]}>
        <View>
        <TextResult result={fromCurrency=='USD' ? (result*ratio).toFixed(2) : (result/ratio).toFixed(2)} currency={fromCurrency == 'EUR'? '$':'€'}/>
          
        </View>
        <View style={styles.currencyLevel}>
          <View>
              <CurrencyBox  text={fromCurrency} focusState={false}/>
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
    </View>
    </>
    
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
  currencyLevel: {
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  shadow:{
    shadowColor: '#0d0d0c',
    shadowRadius: 2,
    elevation: 25,
  }
});
