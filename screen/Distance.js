import {React, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';
import { colorTheme } from '../shared/theme';
import TextResult from '../components/TextResult';


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
      <View style={{backgroundColor: colorTheme}}>
        <View style={styles.container}>
            <View>
                <TextResult result={fromDistance=='MI'? (result*1.609344).toFixed(2) : (result/1.609344).toFixed(2)} currency={fromDistance=='KM'? 'mi' : 'km'}/>
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
