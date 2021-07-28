import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AddExpenseScreen, ExpensesScreen, SetupScreen } from './src/screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen options={{ headerShown: false }} name="SetupScreen" component={SetupScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddExpenseScreen"
          component={AddExpenseScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ExpensesScreen"
          component={ExpensesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
