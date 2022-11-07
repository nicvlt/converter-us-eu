import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';
import { colorTheme } from '../shared/theme';
import TextResult from '../components/TextResult';


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
    <View style={{backgroundColor: colorTheme}}>
      <View style={styles.container}>
        <View>
          <TextResult result={fromLength=='IN'? (result/0.393701).toFixed(2) : (result*0.393701).toFixed(2)} currency={fromLength=='CM'? 'in' : 'cm'}/>
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
  }
});
