import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ResumeForm from './src/screens/ResumeForm'
import ResumeDetail from './src/screens/ResumeDetail'
import ResumeList from './src/screens/ResumeList'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeList" options={{ title: 'Resume list' }} component={ResumeList} />
        <Stack.Screen name="ResumeForm" options={{ title: 'Resume form' }} component={ResumeForm} />
        <Stack.Screen name="ResumeDetail" options={{ title: 'Resume Detail' }} component={ResumeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;