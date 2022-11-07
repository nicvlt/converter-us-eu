import React, {useState, useEffect} from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import {View} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import Currency from './screen/Currency';
import Weight from './screen/Weight'
import Temperature from './screen/Temperature';
import Distance from './screen/Distance';
import Length from './screen/Length'
import { colorTheme, colorLightTheme } from './shared/theme';
import AppLoader from './components/AppLoader';



const CustomDrawer = (props) => {
  return <DrawerContentScrollView {...props}>
    <View style={{marginBottom:'75%'}}></View>
    <DrawerItemList {...props}/>
  </DrawerContentScrollView>
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator nav drawerContent={(props) => <CustomDrawer {...props} />}>
              <Drawer.Screen component = {Currency} name ='CURRENCY' options={{headerStyle: { backgroundColor: colorTheme, elevation:0}, headerTintColor: '#fff', drawerActiveBackgroundColor:colorLightTheme}} />
              <Drawer.Screen component = {Weight} name ='WEIGHT' options={{headerStyle: { backgroundColor: colorTheme, elevation:0}, headerTintColor: '#fff', drawerActiveBackgroundColor:colorLightTheme}}/>
              <Drawer.Screen component = {Length} name ='LENGTH' options={{headerStyle: { backgroundColor: colorTheme, elevation:0}, headerTintColor: '#fff', drawerActiveBackgroundColor:colorLightTheme}}/>
              <Drawer.Screen component = {Distance} name ='DISTANCE' options={{headerStyle: { backgroundColor: colorTheme, elevation:0}, headerTintColor: '#fff', drawerActiveBackgroundColor:colorLightTheme}}/>
              <Drawer.Screen component = {Temperature} name ='TEMPERATURE' options={{headerStyle: { backgroundColor: colorTheme, elevation:0}, headerTintColor: '#fff', drawerActiveBackgroundColor:colorLightTheme}}/>
          </Drawer.Navigator>
};

export default function App() {

  const [loading, setLoading] = useState(true)

  const loadingTimeout = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    loadingTimeout();
    clearTimeout(loadingTimeout);
  }, [])

  return (
    <>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
      {loading ? <AppLoader />: null}
    </>
      
  );
}