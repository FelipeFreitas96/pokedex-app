import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PokemonCard from '#/components/PokemonCard';
import { IPokemon } from '#/domain/entities/pokemon';
import { NavigationProp } from '#/main/protocols/routes';

export const MainPage = ({ pokemonList }: { pokemonList: IPokemon[] }) => {
  const [page, setPage] = React.useState(1);
  const navigation: NavigationProp<'MainPage'> = useNavigation();
  const filteredData = pokemonList.slice(0, page * 10);
  const onPressOnPokemonCard = (pokemon: IPokemon) => navigation.push('PokemonInfoPage', pokemon);
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