import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import Car from './components/Car';
import styles from './styles/commonStyles';
import CarsList from './components/CarsList/CarsList';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/CarDetails/Details';
export default function App() {
  const{Screen,Navigator}= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Header />
      <Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName="CarsList"
      >
        <Screen name="CarsList" component={CarsList} />
        <Screen name="Details" component={Details} />
      </Navigator>
      {/* <View style={styles.container}>
        <CarsList />
      </View> */}
    </NavigationContainer>
  );
}
