import { View, Text, StyleSheet} from 'react-native'

export default function TextResult({result, currency}){
    return(
        <View style={{height:200, width:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}>
            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{justifyContent:'center', alignItems:'center', fontWeight: 'bold', fontSize: 80}}>
                {result}{currency}
            </Text>
        </View>
    )     
}