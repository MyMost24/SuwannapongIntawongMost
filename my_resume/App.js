import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import resumeFormScreen from './screen/resumeForm'
import resumeDetailScreen from './screen/resumeDetail'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="resumeForm" options={{title: 'Resume Form'}} component={resumeFormScreen}/>
        <Stack.Screen  name="resumeDetail" options={{title: 'Resume Detail'}} component={resumeDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;