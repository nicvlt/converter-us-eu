import { Text } from 'react-native'

export default function TextResult({result, currency}){
    return(
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{fontWeight: 'bold', fontSize: 80, height:200, marginTop: '10%'}}>
            {result}{currency}
        </Text>
    )
}