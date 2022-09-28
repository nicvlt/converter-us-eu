import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({title, navigation}){

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name = 'menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        elevation: 0,
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
        justifyContent:'center',
    },
    icon:{
        position:'absolute',
        left: 16
    }
})