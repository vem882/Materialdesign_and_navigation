import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import CustomAppBar from '../components/CustomAppBar';

import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomAppBar {...props} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'Second Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
