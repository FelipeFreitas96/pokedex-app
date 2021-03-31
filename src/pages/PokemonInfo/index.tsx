import React from 'react';
import { Dimensions } from 'react-native';
import { PokemonInfoProps } from '#/domain/entities';
import PokemonPortrait from '#/components/PokemonPortrait';
import PokemonInfo from './style';

export const PokemonInfoPage = (props: PokemonInfoProps) => {
  const { route } = props;
  const { params } = route;
  const windowWidth = Dimensions.get('window').width;
  const pokemonSize = windowWidth * 0.8;
  
  return (
    <PokemonInfo {...params}>
      <PokemonInfo.Header>
        <PokemonPortrait
          pokemonId={params.id}
          style={{ width: pokemonSize, height: pokemonSize, marginBottom: -40, zIndex: 1 }}
        />
      </PokemonInfo.Header>
      <PokemonInfo.Body>
      </PokemonInfo.Body>
    </PokemonInfo>
  );
};
