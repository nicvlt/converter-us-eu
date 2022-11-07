import {React, useState} from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import TextField from '../components/TextField';
import CurrencyBox from '../components/currencyBox';
import FlatButton from '../components/button';
import { colorTheme, colorCardTheme } from '../shared/theme';
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'>
        <View style={{backgroundColor: colorTheme, zIndex:4}}>
          <View style={[styles.container, styles.shadow]}>
            <View style={{width:'90%', marginBottom:50, marginTop:50}}>
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
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: colorCardTheme,
    alignItems: 'center',
    borderTopEndRadius:50, 
    borderTopStartRadius:50, 
    marginTop:10,
    paddingTop:20,
  },
  weightLevel: {
    justifyContent:'center',
    borderRadius:10,
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'white',
    elevation:5
  },
  shadow:{
    shadowColor: '#0d0d0c',
    shadowRadius: 2,
    elevation: 25,
  }
  
});
