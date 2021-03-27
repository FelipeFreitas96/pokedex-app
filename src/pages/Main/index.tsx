import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import { AxiosAdapter } from '../../infra/axios-adapter';
import { GetPokemonListService } from '../../data/services/get-pokemon-list';

export default () => {
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setPokemonList(await renderPokemons());
    })();
  }, []);
  
  const renderPokemons = React.useCallback(async () => {
    const instance = new AxiosAdapter();
    const service = new GetPokemonListService(instance);
    const pokemonList = await service.execute();
    return pokemonList.map((pokemon, index) => {
  return (
        <PokemonCard
          key={`pokemon_${index}`}
          name={pokemon.name}
          types={{ primary: pokemon.type.primary, secondary: pokemon.type.secondary }}
        />
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        {pokemonList}
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};
