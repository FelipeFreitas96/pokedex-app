import React from 'react';
import { IPokemon } from '#/domain/entities/pokemon';
import { makeGetPokemonList } from '#/main/factories/usecases';
import { MainPage } from '#/pages';

export const makeMainPage = () => {
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
    <MainPage
      pokemonList={pokemonList}
    />
  );
}