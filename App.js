import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import {View, Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import Currency from './screen/Currency';
import Weight from './screen/Weight'
import Temperature from './screen/Temperature';
import Distance from './screen/Distance';
import Length from './screen/Length'

const CustomDrawer = (props) => {
  return <DrawerContentScrollView {...props}>
    <View style={{marginBottom:'75%'}}></View>
    <DrawerItemList {...props}/>
  </DrawerContentScrollView>
}

const Drawer = createDrawerNavigator();
    const DrawerNavigator = () => {
        return <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen component = {Currency} name ='CURRENCY'/>
            <Drawer.Screen component = {Weight} name ='WEIGHT'/>
            <Drawer.Screen component = {Length} name ='LENGTH'/>
            <Drawer.Screen component = {Distance} name ='DISTANCE'/>
            <Drawer.Screen component = {Temperature} name ='TEMPERATURE'/>

        </Drawer.Navigator>
    }


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>  
  );
}