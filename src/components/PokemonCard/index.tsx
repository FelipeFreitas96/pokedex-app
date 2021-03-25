import React from 'react';
import PokemonCard from './style';

export default () => {
  return (
    <PokemonCard>
      <PokemonCard.Name>Bulbasaur</PokemonCard.Name>
      <PokemonCard.Tags>
        <PokemonCard.Tag>
          <PokemonCard.Tag.Text>Grass</PokemonCard.Tag.Text>
        </PokemonCard.Tag>
        <PokemonCard.Tag>
          <PokemonCard.Tag.Text>Poison</PokemonCard.Tag.Text>
        </PokemonCard.Tag>
      </PokemonCard.Tags>
    </PokemonCard>
  );
};
