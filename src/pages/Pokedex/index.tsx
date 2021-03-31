import React from 'react';
import PokemonCard from '#/components/PokemonCard';
import { IPokemon, PokedexPageProps } from '#/domain/entities';
import { SafeAreaView, FlatList } from 'react-native';

export const PokedexPage = (props: PokedexPageProps) => {
  const [page, setPage] = React.useState(1);
  const { navigation, pokemonList } = props;
  const filteredData = pokemonList.slice(0, page * 10);
  const onPressOnPokemonCard = (pokemon: IPokemon) => navigation.push('PokemonInfo', pokemon);
  const onEndReached = () => setPage(prevPage => prevPage + 1);

  const renderItem = React.useCallback((props: any) => {
    const pokemon = props.item;
    return (
      <PokemonCard
        key={`pokemon_${pokemon.id}`}
        name={pokemon.name}
        types={pokemon.types}
        id={pokemon.id}
        onPress={() => onPressOnPokemonCard(pokemon)}
      />
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        scrollEventThrottle={2000}
        data={filteredData}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        renderItem={renderItem}
        keyExtractor={(pokemon: IPokemon) => pokemon.name}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        windowSize={70}
      />
    </SafeAreaView>
  );
};
