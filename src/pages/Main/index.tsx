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

  const renderItem = (props: any) => {
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
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        scrollEventThrottle={1900}
        data={filteredData}
        initialNumToRender={6}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};