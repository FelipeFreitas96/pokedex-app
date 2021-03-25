import React from 'react';
import PokemonCard from '../../components/PokemonCard';
import {View} from 'react-native';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
      <PokemonCard
        name="Bulbasaur"
        types={{primary: 'Grass', secondary: 'Poison'}}
      />
      <PokemonCard
        name="Ivysaur"
        types={{primary: 'Grass', secondary: 'Poison'}}
      />
      <PokemonCard
        name="Venusaur"
        types={{primary: 'Grass', secondary: 'Poison'}}
      />
      <PokemonCard name="Charmander" types={{primary: 'Fire'}} />
    </View>
  );
};
