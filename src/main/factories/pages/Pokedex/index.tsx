import React from 'react';
import { IPokemon } from '#/domain/entities';
import { makeGetPokemonList } from '#/main/factories/usecases';
import { PokedexPage } from '#/pages';

export const makePokedexPage = (props: any) => {
  const [pokemonList, setPokemonList] = React.useState<IPokemon[]>([]);

  React.useEffect(() => {
    (async () => {
      if (pokemonList.length === 0) {
        const GetPokemonList = makeGetPokemonList();
        setPokemonList(await GetPokemonList.execute());
      }
    })();
  }, []);

  if (pokemonList.length === 0) {
    return <></>;
  }

  return (
    <PokedexPage
      {...props}
      navigation={props.navigation}
      pokemonList={pokemonList}
    />
  );
}