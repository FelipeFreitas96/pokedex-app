import React from 'react';
import PokemonPortrait from '#/components/PokemonPortrait';
import PokemonInfo from './style';

export const PokemonInfoPage = ({ route }) => {
  const { params } = route;
  return (
    <PokemonInfo {...params}>
      <PokemonInfo.Header>
        <PokemonPortrait
          pokemonId={params.id}
          style={{ position: 'absolute', width: '90%', height: '90%', bottom: -30, zIndex: 1 }}
        />
      </PokemonInfo.Header>
      <PokemonInfo.Body>

      </PokemonInfo.Body>
    </PokemonInfo>
  );
};
