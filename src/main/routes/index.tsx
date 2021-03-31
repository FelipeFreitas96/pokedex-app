import 'react-native-gesture-handler';
import React from 'react';
import { makePokedexPage, makePokemonInfoPage } from '#/main/factories/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Pokedex" 
        headerMode="float"
        mode="modal"
        screenOptions={{
          cardOverlayEnabled: false,
          cardStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="Pokedex" component={makePokedexPage} />
        <Stack.Screen
          name="PokemonInfo"
          component={makePokemonInfoPage}
          options={()=>({
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
            transitionSpec: {
              open: {animation:'timing', config: {delay: 200, duration: 400}},
              close: {animation:'timing', config: {duration: 200}}
            }
          })}
          sharedElementsConfig={({ params }: any) => {
            return [{
              id: params.id.toString(),
              animation: 'fade',
              align: 'auto',
              resize: 'auto'
            }];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}