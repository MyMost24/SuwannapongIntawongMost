import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import MovieDetailScreen from './screen/movieDetail';
import MovieListScreen from './screen/moviesList';


const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
        headerStyle: {
          backgroundColor : 'black'
        },
        headerTintColor : 'white'       
    }}
    >
      <Stack.Screen
        name="MoviesList"
        component={MovieListScreen}
        options={{
          title : 'Movie show time',
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{
          title : null,
          headerTruncatedBackTitle: null,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
  },
});
