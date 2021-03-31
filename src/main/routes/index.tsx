import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { makeMainPage, makePokemonInfoPage } from '#/main/factories/pages';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={makeMainPage} />
        <Stack.Screen name="PokemonInfoPage" component={makePokemonInfoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}